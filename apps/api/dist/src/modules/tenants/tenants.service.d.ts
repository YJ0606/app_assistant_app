import { PrismaService } from "../../database/prisma.service";
export declare class TenantsService {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
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
    update(id: string, data: Record<string, unknown>): Promise<{
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
