import { WhatsAppService } from "./whatsapp.service";
export declare class WhatsAppController {
    private s;
    constructor(s: WhatsAppService);
    get(u: any): Promise<{
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
    save(u: any, body: any): Promise<{
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
