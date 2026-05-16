import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";
@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}
  async getReport(tenantId: string) {
    const [messages, conversations, bookings, orders] = await Promise.all([
      this.prisma.message.count({ where: { tenantId } }),
      this.prisma.conversation.count({ where: { tenantId } }),
      this.prisma.booking.count({ where: { tenantId } }),
      this.prisma.order.count({ where: { tenantId } }),
    ]);
    return { messages, conversations, bookings, orders };
  }
}
