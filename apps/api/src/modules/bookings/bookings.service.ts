import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}
  async findAll(tenantId: string, params?: { status?: string }) {
    return this.prisma.booking.findMany({
      where: { tenantId, ...(params?.status ? { status: params.status as any } : {}) },
      include: { customer: true },
      orderBy: { scheduledAt: "asc" },
    });
  }
  async findOne(id: string, tenantId: string) {
    const b = await this.prisma.booking.findFirst({ where: { id, tenantId }, include: { customer: true } });
    if (!b) throw new NotFoundException("Booking not found");
    return b;
  }
  async update(id: string, tenantId: string, data: any) {
    await this.findOne(id, tenantId);
    return this.prisma.booking.update({ where: { id }, data });
  }
}
