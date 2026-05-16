"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../database/prisma.service");
const hash_password_1 = require("./helpers/hash-password");
const generate_token_1 = require("./helpers/generate-token");
const slug_util_1 = require("../../common/utils/slug.util");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async register(dto) {
        const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (existing)
            throw new common_1.ConflictException("Email already registered");
        const slug = (0, slug_util_1.uniqueSlug)(dto.businessName);
        const tenant = await this.prisma.tenant.create({
            data: { name: dto.businessName, slug, status: "TRIAL" },
        });
        const hash = await (0, hash_password_1.hashPassword)(dto.password, this.config.get("auth.bcryptRounds") ?? 12);
        const user = await this.prisma.user.create({
            data: {
                tenantId: tenant.id, email: dto.email,
                firstName: dto.firstName, lastName: dto.lastName,
                passwordHash: hash, role: "OWNER",
            },
        });
        return this.signTokens(user.id, tenant.id);
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (!user || !user.passwordHash)
            throw new common_1.UnauthorizedException("Invalid credentials");
        const valid = await (0, hash_password_1.comparePassword)(dto.password, user.passwordHash);
        if (!valid)
            throw new common_1.UnauthorizedException("Invalid credentials");
        if (!user.isActive)
            throw new common_1.UnauthorizedException("Account disabled");
        await this.prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
        return this.signTokens(user.id, user.tenantId);
    }
    async refreshToken(token) {
        try {
            const payload = this.jwt.verify(token, { secret: this.config.get("auth.refreshSecret") });
            return this.signTokens(payload.sub, payload.tenantId);
        }
        catch {
            throw new common_1.UnauthorizedException("Invalid refresh token");
        }
    }
    async forgotPassword(email) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user)
            return { message: "If that email exists, a reset link has been sent." };
        const token = (0, generate_token_1.generateToken)();
        const expiry = new Date(Date.now() + 3600_000);
        await this.prisma.user.update({ where: { id: user.id }, data: { passwordResetToken: token, passwordResetExpiry: expiry } });
        return { message: "Reset link sent", token };
    }
    async resetPassword(token, password) {
        const user = await this.prisma.user.findFirst({
            where: { passwordResetToken: token, passwordResetExpiry: { gt: new Date() } },
        });
        if (!user)
            throw new common_1.NotFoundException("Invalid or expired reset token");
        const hash = await (0, hash_password_1.hashPassword)(password);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { passwordHash: hash, passwordResetToken: null, passwordResetExpiry: null },
        });
        return { message: "Password updated successfully" };
    }
    signTokens(userId, tenantId) {
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map