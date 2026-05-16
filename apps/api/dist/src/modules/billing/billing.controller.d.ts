import { BillingService } from "./billing.service";
export declare class BillingController {
    private s;
    constructor(s: BillingService);
    getSub(u: any): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.SubscriptionStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        planId: string;
        trialEndsAt: Date | null;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        cancelAtPeriodEnd: boolean;
        razorpaySubId: string | null;
        razorpayPlanId: string | null;
        monthlyMessages: number;
        extraMessagesRate: import("@prisma/client/runtime/library").Decimal;
    }>;
    getInvoices(u: any): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.InvoiceStatus;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        paidAt: Date | null;
        invoiceNumber: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        tax: import("@prisma/client/runtime/library").Decimal;
        total: import("@prisma/client/runtime/library").Decimal;
        periodStart: Date;
        periodEnd: Date;
        dueDate: Date;
        razorpayPaymentId: string | null;
        lineItems: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    getUsage(u: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customers: number;
        bookings: number;
        orders: number;
        tenantId: string;
        messages: number;
        period: string;
        aiReplies: number;
        cost: import("@prisma/client/runtime/library").Decimal;
    }>;
}
