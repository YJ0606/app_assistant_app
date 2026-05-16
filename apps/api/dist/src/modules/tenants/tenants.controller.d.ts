import { TenantsService } from "./tenants.service";
export declare class TenantsController {
    private readonly service;
    constructor(service: TenantsService);
    getMe(user: any): Promise<{
        id: string;
        slug: string;
        name: string;
        status: import(".prisma/client").$Enums.TenantStatus;
        logoUrl: string | null;
        brandColor: string | null;
        businessEmail: string | null;
        businessPhone: string | null;
        website: string | null;
        address: string | null;
        timezone: string;
        currency: string;
        businessHours: import("@prisma/client/runtime/library").JsonValue | null;
        afterHoursMsg: string | null;
        welcomeMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateMe(user: any, body: Record<string, unknown>): Promise<{
        id: string;
        slug: string;
        name: string;
        status: import(".prisma/client").$Enums.TenantStatus;
        logoUrl: string | null;
        brandColor: string | null;
        businessEmail: string | null;
        businessPhone: string | null;
        website: string | null;
        address: string | null;
        timezone: string;
        currency: string;
        businessHours: import("@prisma/client/runtime/library").JsonValue | null;
        afterHoursMsg: string | null;
        welcomeMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
