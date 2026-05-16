import { PrismaService } from "../../database/prisma.service";
export declare class WebhooksService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    handleWebhook(tenantId: string, payload: any): Promise<{
        received: boolean;
    }>;
    verifyToken(token: string, expected: string): boolean;
}
