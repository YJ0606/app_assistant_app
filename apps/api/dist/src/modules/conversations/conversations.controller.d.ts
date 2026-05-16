import { ConversationsService } from "./conversations.service";
export declare class ConversationsController {
    private readonly service;
    constructor(service: ConversationsService);
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
        messages: {
            id: string;
            status: import(".prisma/client").$Enums.MessageStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            conversationId: string;
            direction: import(".prisma/client").$Enums.MessageDirection;
            type: import(".prisma/client").$Enums.MessageType;
            content: string | null;
            mediaUrl: string | null;
            mediaType: string | null;
            templateName: string | null;
            interactiveData: import("@prisma/client/runtime/library").JsonValue | null;
            waMessageId: string | null;
            sentByUserId: string | null;
            isAiGenerated: boolean;
            errorMessage: string | null;
            deliveredAt: Date | null;
            readAt: Date | null;
        }[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.ConversationStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        isAiActive: boolean;
        channel: string;
        lastMessageAt: Date | null;
        resolvedAt: Date | null;
        customerId: string;
        assignedUserId: string | null;
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
        messages: {
            id: string;
            status: import(".prisma/client").$Enums.MessageStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            conversationId: string;
            direction: import(".prisma/client").$Enums.MessageDirection;
            type: import(".prisma/client").$Enums.MessageType;
            content: string | null;
            mediaUrl: string | null;
            mediaType: string | null;
            templateName: string | null;
            interactiveData: import("@prisma/client/runtime/library").JsonValue | null;
            waMessageId: string | null;
            sentByUserId: string | null;
            isAiGenerated: boolean;
            errorMessage: string | null;
            deliveredAt: Date | null;
            readAt: Date | null;
        }[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.ConversationStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        isAiActive: boolean;
        channel: string;
        lastMessageAt: Date | null;
        resolvedAt: Date | null;
        customerId: string;
        assignedUserId: string | null;
    }>;
    sendMessage(u: any, id: string, body: {
        content: string;
    }): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.MessageStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        conversationId: string;
        direction: import(".prisma/client").$Enums.MessageDirection;
        type: import(".prisma/client").$Enums.MessageType;
        content: string | null;
        mediaUrl: string | null;
        mediaType: string | null;
        templateName: string | null;
        interactiveData: import("@prisma/client/runtime/library").JsonValue | null;
        waMessageId: string | null;
        sentByUserId: string | null;
        isAiGenerated: boolean;
        errorMessage: string | null;
        deliveredAt: Date | null;
        readAt: Date | null;
    }>;
    assign(u: any, id: string, body: {
        userId: string;
    }): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ConversationStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        isAiActive: boolean;
        channel: string;
        lastMessageAt: Date | null;
        resolvedAt: Date | null;
        customerId: string;
        assignedUserId: string | null;
    }>;
    toggleAI(u: any, id: string, body: {
        isAiActive: boolean;
    }): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ConversationStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        isAiActive: boolean;
        channel: string;
        lastMessageAt: Date | null;
        resolvedAt: Date | null;
        customerId: string;
        assignedUserId: string | null;
    }>;
    resolve(u: any, id: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.ConversationStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        isAiActive: boolean;
        channel: string;
        lastMessageAt: Date | null;
        resolvedAt: Date | null;
        customerId: string;
        assignedUserId: string | null;
    }>;
}
