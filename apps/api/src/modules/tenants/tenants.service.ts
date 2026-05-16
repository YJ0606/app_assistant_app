import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class TenantsService {
  constructor(private prisma: PrismaService) {}
  async findById(id: string) {
    const t = await this.prisma.tenant.findUnique({ where: { id } });
    if (!t) throw new NotFoundException("Tenant not found");
    return t;
  }
  async update(id: string, data: Record<string, unknown>) {
    return this.prisma.tenant.update({ where: { id }, data });
  }
}
