import { PrismaService } from "../../database/prisma.service";
export declare class WhatsAppService {
    private prisma;
    constructor(prisma: PrismaService);
    getConfig(tenantId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        businessName: string | null;
        phoneNumberId: string;
        wabaId: string;
        accessToken: string;
        webhookVerifyToken: string;
        catalogId: string | null;
        displayPhone: string | null;
    }>;
    saveConfig(tenantId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        businessName: string | null;
        phoneNumberId: string;
        wabaId: string;
        accessToken: string;
        webhookVerifyToken: string;
        catalogId: string | null;
        displayPhone: string | null;
    }>;
}
