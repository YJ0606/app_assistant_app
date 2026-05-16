import { OrdersService } from "./orders.service";
export declare class OrdersController {
    private readonly service;
    constructor(service: OrdersService);
    list(u: any, q: any): Promise<({
        orderItems: ({
            catalogItem: {
                id: string;
                name: string;
                status: import(".prisma/client").$Enums.CatalogItemStatus;
                currency: string;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                category: string | null;
                stock: number | null;
                description: string | null;
                price: import("@prisma/client/runtime/library").Decimal;
                imageUrl: string | null;
                sku: string | null;
                tags: string[];
                waProductId: string | null;
                metadata: import("@prisma/client/runtime/library").JsonValue | null;
            };
        } & {
            id: string;
            createdAt: Date;
            notes: string | null;
            orderId: string;
            catalogItemId: string;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal;
            totalPrice: import("@prisma/client/runtime/library").Decimal;
        })[];
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
        status: import(".prisma/client").$Enums.OrderStatus;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        notes: string | null;
        customerId: string;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        deliveryAddress: import("@prisma/client/runtime/library").JsonValue | null;
        paymentRef: string | null;
        paidAt: Date | null;
    })[]>;
    get(u: any, id: string): Promise<{
        orderItems: ({
            catalogItem: {
                id: string;
                name: string;
                status: import(".prisma/client").$Enums.CatalogItemStatus;
                currency: string;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                category: string | null;
                stock: number | null;
                description: string | null;
                price: import("@prisma/client/runtime/library").Decimal;
                imageUrl: string | null;
                sku: string | null;
                tags: string[];
                waProductId: string | null;
                metadata: import("@prisma/client/runtime/library").JsonValue | null;
            };
        } & {
            id: string;
            createdAt: Date;
            notes: string | null;
            orderId: string;
            catalogItemId: string;
            quantity: number;
            unitPrice: import("@prisma/client/runtime/library").Decimal;
            totalPrice: import("@prisma/client/runtime/library").Decimal;
        })[];
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
        status: import(".prisma/client").$Enums.OrderStatus;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        notes: string | null;
        customerId: string;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        deliveryAddress: import("@prisma/client/runtime/library").JsonValue | null;
        paymentRef: string | null;
        paidAt: Date | null;
    }>;
    updateStatus(u: any, id: string, body: {
        status: string;
    }): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        notes: string | null;
        customerId: string;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        deliveryAddress: import("@prisma/client/runtime/library").JsonValue | null;
        paymentRef: string | null;
        paidAt: Date | null;
    }>;
}
