import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class ConversationsService {
  constructor(private prisma: PrismaService) {}

  async findAll(tenantId: string, params?: { status?: string; search?: string }) {
    return this.prisma.conversation.findMany({
      where: {
        tenantId,
        ...(params?.status ? { status: params.status as any } : {}),
      },
      include: { customer: true, messages: { orderBy: { createdAt: "desc" }, take: 1 } },
      orderBy: { lastMessageAt: "desc" },
    });
  }

  async findOne(id: string, tenantId: string) {
    const c = await this.prisma.conversation.findFirst({
      where: { id, tenantId },
      include: { customer: true, messages: { orderBy: { createdAt: "asc" } } },
    });
    if (!c) throw new NotFoundException("Conversation not found");
    return c;
  }

  async sendMessage(conversationId: string, tenantId: string, content: string, userId: string) {
    await this.findOne(conversationId, tenantId);
    const msg = await this.prisma.message.create({
      data: { conversationId, tenantId, direction: "OUTBOUND", type: "TEXT", status: "SENT", content, sentByUserId: userId, isAiGenerated: false },
    });
    await this.prisma.conversation.update({ where: { id: conversationId }, data: { lastMessageAt: new Date() } });
    return msg;
  }

  async assign(id: string, tenantId: string, userId: string) {
    await this.findOne(id, tenantId);
    return this.prisma.conversation.update({ where: { id }, data: { assignedUserId: userId, status: "ASSIGNED" } });
  }

  async toggleAI(id: string, tenantId: string, isAiActive: boolean) {
    await this.findOne(id, tenantId);
    return this.prisma.conversation.update({ where: { id }, data: { isAiActive, status: isAiActive ? "OPEN" : "HUMAN_HANDOFF" } });
  }

  async resolve(id: string, tenantId: string) {
    await this.findOne(id, tenantId);
    return this.prisma.conversation.update({ where: { id }, data: { status: "RESOLVED", resolvedAt: new Date() } });
  }
}
