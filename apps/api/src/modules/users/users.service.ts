import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async findByTenant(tenantId: string) { return this.prisma.user.findMany({ where: { tenantId }, select: { id: true, email: true, firstName: true, lastName: true, role: true, isActive: true, lastLoginAt: true } }); }
  async invite(tenantId: string, email: string, role: string, invitedById: string) {
    const token = Math.random().toString(36).slice(2) + Date.now();
    return this.prisma.staffInvite.create({ data: { tenantId, email, role: role as any, token, invitedById, expiresAt: new Date(Date.now() + 7 * 86400_000) } });
  }
  async updateRole(id: string, role: string) { return this.prisma.user.update({ where: { id }, data: { role: role as any } }); }
}
