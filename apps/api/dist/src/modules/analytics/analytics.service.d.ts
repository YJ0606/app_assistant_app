import { PrismaService } from "../../database/prisma.service";
export declare class AnalyticsService {
    private prisma;
    constructor(prisma: PrismaService);
    getReport(tenantId: string): Promise<{
        messages: number;
        conversations: number;
        bookings: number;
        orders: number;
    }>;
}
