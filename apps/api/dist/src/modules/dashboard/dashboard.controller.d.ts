import { DashboardService } from "./dashboard.service";
export declare class DashboardController {
    private readonly service;
    constructor(service: DashboardService);
    getMetrics(user: any): Promise<{
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
