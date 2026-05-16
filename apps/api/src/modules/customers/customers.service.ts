import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";
@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}
  async findAll(tenantId: string) { return this.prisma.customer.findMany({ where: { tenantId }, orderBy: { createdAt: "desc" } }); }
  async update(id: string, tenantId: string, data: any) { return this.prisma.customer.update({ where: { id }, data }); }
}
