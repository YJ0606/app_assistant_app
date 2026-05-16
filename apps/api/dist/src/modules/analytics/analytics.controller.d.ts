import { AnalyticsService } from "./analytics.service";
export declare class AnalyticsController {
    private s;
    constructor(s: AnalyticsService);
    report(u: any): Promise<{
        messages: number;
        conversations: number;
        bookings: number;
        orders: number;
    }>;
}
