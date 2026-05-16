import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";
@Injectable()
export class TemplatesService {
  constructor(private prisma: PrismaService) {}
  async findAll(tenantId: string) { return this.prisma.template.findMany({ where: { tenantId } }); }
  async create(tenantId: string, data: any) { return this.prisma.template.create({ data: { tenantId, ...data } }); }
  async update(id: string, data: any) { return this.prisma.template.update({ where: { id }, data }); }
}
