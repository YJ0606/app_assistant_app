import { Injectable, UnauthorizedException, ConflictException, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../database/prisma.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { hashPassword, comparePassword } from "./helpers/hash-password";
import { generateToken } from "./helpers/generate-token";
import { generateSlug, uniqueSlug } from "../../common/utils/slug.util";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) throw new ConflictException("Email already registered");

    const slug = uniqueSlug(dto.businessName);
    const tenant = await this.prisma.tenant.create({
      data: { name: dto.businessName, slug, status: "TRIAL" },
    });

    const hash = await hashPassword(dto.password, this.config.get<number>("auth.bcryptRounds") ?? 12);
    const user = await this.prisma.user.create({
      data: {
        tenantId: tenant.id, email: dto.email,
        firstName: dto.firstName, lastName: dto.lastName,
        passwordHash: hash, role: "OWNER",
      },
    });

    return this.signTokens(user.id, tenant.id);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user || !user.passwordHash) throw new UnauthorizedException("Invalid credentials");
    const valid = await comparePassword(dto.password, user.passwordHash);
    if (!valid) throw new UnauthorizedException("Invalid credentials");
    if (!user.isActive) throw new UnauthorizedException("Account disabled");

    await this.prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
    return this.signTokens(user.id, user.tenantId);
  }

  async refreshToken(token: string) {
    try {
      const payload = this.jwt.verify(token, { secret: this.config.get("auth.refreshSecret") });
      return this.signTokens(payload.sub, payload.tenantId);
    } catch {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }

  async forgotPassword(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return { message: "If that email exists, a reset link has been sent." };
    const token = generateToken();
    const expiry = new Date(Date.now() + 3600_000); // 1hr
    await this.prisma.user.update({ where: { id: user.id }, data: { passwordResetToken: token, passwordResetExpiry: expiry } });
    // In prod: send email via Resend
    return { message: "Reset link sent", token }; // token returned for dev only
  }

  async resetPassword(token: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: { passwordResetToken: token, passwordResetExpiry: { gt: new Date() } },
    });
    if (!user) throw new NotFoundException("Invalid or expired reset token");
    const hash = await hashPassword(password);
    await this.prisma.user.update({
      where: { id: user.id },
      data: { passwordHash: hash, passwordResetToken: null, passwordResetExpiry: null },
    });
    return { message: "Password updated successfully" };
  }

  private signTokens(userId: string, tenantId: string) {
    const payload = { sub: userId, tenantId };
    const accessToken = this.jwt.sign(payload, {
      secret: this.config.get("auth.jwtSecret"),
      expiresIn: this.config.get("auth.jwtExpiresIn") ?? "15m",
    });
    const refreshToken = this.jwt.sign(payload, {
      secret: this.config.get("auth.refreshSecret"),
      expiresIn: this.config.get("auth.refreshExpiresIn") ?? "7d",
    });
    return { accessToken, refreshToken, expiresIn: 900 };
  }
}
