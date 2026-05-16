import { BookingsService } from "./bookings.service";
export declare class BookingsController {
    private readonly service;
    constructor(service: BookingsService);
    list(u: any, q: any): Promise<({
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
    get(u: any, id: string): Promise<{
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
    update(u: any, id: string, body: any): Promise<{
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
