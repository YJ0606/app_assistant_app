import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  async findAll(tenantId: string, params?: { status?: string }) {
    return this.prisma.order.findMany({
      where: { tenantId, ...(params?.status ? { status: params.status as any } : {}) },
      include: { customer: true, orderItems: { include: { catalogItem: true } } },
      orderBy: { createdAt: "desc" },
    });
  }
  async findOne(id: string, tenantId: string) {
    const o = await this.prisma.order.findFirst({ where: { id, tenantId }, include: { customer: true, orderItems: { include: { catalogItem: true } } } });
    if (!o) throw new NotFoundException("Order not found");
    return o;
  }
  async updateStatus(id: string, tenantId: string, status: string) {
    await this.findOne(id, tenantId);
    return this.prisma.order.update({ where: { id }, data: { status: status as any } });
  }
}
