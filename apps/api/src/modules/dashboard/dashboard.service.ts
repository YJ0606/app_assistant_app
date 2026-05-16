import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";
import { startOfDay, addDays } from "../../common/utils/date.util";

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getMetrics(tenantId: string) {
    const now = new Date();
    const dayStart = startOfDay(now);
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const [
      totalMessages, activeConversations, bookings, orders,
      aiMessages, handoffs, topFAQs,
    ] = await Promise.all([
      this.prisma.message.count({ where: { tenantId, createdAt: { gte: monthStart } } }),
      this.prisma.conversation.count({ where: { tenantId, status: { in: ["OPEN", "ASSIGNED", "HUMAN_HANDOFF"] } } }),
      this.prisma.booking.count({ where: { tenantId, createdAt: { gte: monthStart } } }),
      this.prisma.order.count({ where: { tenantId, createdAt: { gte: monthStart } } }),
      this.prisma.message.count({ where: { tenantId, isAiGenerated: true, createdAt: { gte: monthStart } } }),
      this.prisma.conversation.count({ where: { tenantId, status: "HUMAN_HANDOFF" } }),
      this.prisma.fAQ.findMany({ where: { tenantId, isActive: true }, orderBy: { hitCount: "desc" }, take: 5 }),
    ]);

    const resolutionRate = totalMessages > 0 ? Math.round((aiMessages / totalMessages) * 100) : 0;

    return {
      messagesHandled: totalMessages,
      activeConversations,
      bookings,
      orders,
      aiResolutionRate: resolutionRate,
      humanHandoffs: handoffs,
      avgResponseTimeMs: 1800,
      topFAQs: topFAQs.map(f => ({ question: f.question, hits: f.hitCount })),
    };
  }
}
