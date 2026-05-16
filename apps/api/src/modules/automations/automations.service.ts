import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class AutomationsService {
  constructor(private prisma: PrismaService) {}
  async findAll(tenantId: string) { return this.prisma.automationFlow.findMany({ where: { tenantId }, orderBy: { priority: "desc" } }); }
  async create(tenantId: string, data: any) { return this.prisma.automationFlow.create({ data: { tenantId, ...data } }); }
  async update(id: string, tenantId: string, data: any) {
    await this.findOne(id, tenantId);
    return this.prisma.automationFlow.update({ where: { id }, data });
  }
  async toggle(id: string, tenantId: string, isActive: boolean) {
    await this.findOne(id, tenantId);
    return this.prisma.automationFlow.update({ where: { id }, data: { isActive } });
  }
  async remove(id: string, tenantId: string) {
    await this.findOne(id, tenantId);
    return this.prisma.automationFlow.delete({ where: { id } });
  }
  async findOne(id: string, tenantId: string) {
    const a = await this.prisma.automationFlow.findFirst({ where: { id, tenantId } });
    if (!a) throw new NotFoundException("Automation not found");
    return a;
  }
}
