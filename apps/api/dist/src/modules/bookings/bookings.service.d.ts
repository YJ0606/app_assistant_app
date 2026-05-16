import { PrismaService } from "../../database/prisma.service";
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(tenantId: string, params?: {
        status?: string;
    }): Promise<({
        customer: {
            id: string;
            name: string | null;
            createdAt: Date;
            updatedAt: Date;
            email: string | null;
            tenantId: string;
            avatarUrl: string | null;
            phone: string;
            tags: string[];
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
            notes: string | null;
            optedOut: boolean;
        };
    } & {
        id: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        notes: string | null;
        customerId: string;
        slotId: string | null;
        serviceName: string;
        scheduledAt: Date;
        duration: number;
        reminderSent: boolean;
    })[]>;
    findOne(id: string, tenantId: string): Promise<{
        customer: {
            id: string;
            name: string | null;
            createdAt: Date;
            updatedAt: Date;
            email: string | null;
            tenantId: string;
            avatarUrl: string | null;
            phone: string;
            tags: string[];
            metadata: import("@prisma/client/runtime/library").JsonValue | null;
            notes: string | null;
            optedOut: boolean;
        };
    } & {
        id: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        notes: string | null;
        customerId: string;
        slotId: string | null;
        serviceName: string;
        scheduledAt: Date;
        duration: number;
        reminderSent: boolean;
    }>;
    update(id: string, tenantId: string, data: any): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        notes: string | null;
        customerId: string;
        slotId: string | null;
        serviceName: string;
        scheduledAt: Date;
        duration: number;
        reminderSent: boolean;
    }>;
}
