"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let ConversationsService = class ConversationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(tenantId, params) {
        return this.prisma.conversation.findMany({
            where: {
                tenantId,
                ...(params?.status ? { status: params.status } : {}),
            },
            include: { customer: true, messages: { orderBy: { createdAt: "desc" }, take: 1 } },
            orderBy: { lastMessageAt: "desc" },
        });
    }
    async findOne(id, tenantId) {
        const c = await this.prisma.conversation.findFirst({
            where: { id, tenantId },
            include: { customer: true, messages: { orderBy: { createdAt: "asc" } } },
        });
        if (!c)
            throw new common_1.NotFoundException("Conversation not found");
        return c;
    }
    async sendMessage(conversationId, tenantId, content, userId) {
        await this.findOne(conversationId, tenantId);
        const msg = await this.prisma.message.create({
            data: { conversationId, tenantId, direction: "OUTBOUND", type: "TEXT", status: "SENT", content, sentByUserId: userId, isAiGenerated: false },
        });
        await this.prisma.conversation.update({ where: { id: conversationId }, data: { lastMessageAt: new Date() } });
        return msg;
    }
    async assign(id, tenantId, userId) {
        await this.findOne(id, tenantId);
        return this.prisma.conversation.update({ where: { id }, data: { assignedUserId: userId, status: "ASSIGNED" } });
    }
    async toggleAI(id, tenantId, isAiActive) {
        await this.findOne(id, tenantId);
        return this.prisma.conversation.update({ where: { id }, data: { isAiActive, status: isAiActive ? "OPEN" : "HUMAN_HANDOFF" } });
    }
    async resolve(id, tenantId) {
        await this.findOne(id, tenantId);
        return this.prisma.conversation.update({ where: { id }, data: { status: "RESOLVED", resolvedAt: new Date() } });
    }
};
exports.ConversationsService = ConversationsService;
exports.ConversationsService = ConversationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConversationsService);
//# sourceMappingURL=conversations.service.js.map