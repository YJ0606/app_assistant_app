import { PrismaService } from "../../database/prisma.service";
export declare class DashboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getMetrics(tenantId: string): Promise<{
        messagesHandled: number;
        activeConversations: number;
        bookings: number;
        orders: number;
        aiResolutionRate: number;
        humanHandoffs: number;
        avgResponseTimeMs: number;
        topFAQs: {
            question: string;
            hits: number;
        }[];
    }>;
}
