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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const date_util_1 = require("../../common/utils/date.util");
let DashboardService = class DashboardService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMetrics(tenantId) {
        const now = new Date();
        const dayStart = (0, date_util_1.startOfDay)(now);
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const [totalMessages, activeConversations, bookings, orders, aiMessages, handoffs, topFAQs,] = await Promise.all([
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
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map