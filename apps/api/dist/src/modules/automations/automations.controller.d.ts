import { AutomationsService } from "./automations.service";
export declare class AutomationsController {
    private readonly service;
    constructor(service: AutomationsService);
    list(u: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        priority: number;
        description: string | null;
        trigger: import(".prisma/client").$Enums.AutomationTrigger;
        conditions: import("@prisma/client/runtime/library").JsonValue | null;
        actions: import("@prisma/client/runtime/library").JsonValue;
        runCount: number;
        lastRunAt: Date | null;
    }[]>;
    create(u: any, body: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        priority: number;
        description: string | null;
        trigger: import(".prisma/client").$Enums.AutomationTrigger;
        conditions: import("@prisma/client/runtime/library").JsonValue | null;
        actions: import("@prisma/client/runtime/library").JsonValue;
        runCount: number;
        lastRunAt: Date | null;
    }>;
    update(u: any, id: string, body: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        priority: number;
        description: string | null;
        trigger: import(".prisma/client").$Enums.AutomationTrigger;
        conditions: import("@prisma/client/runtime/library").JsonValue | null;
        actions: import("@prisma/client/runtime/library").JsonValue;
        runCount: number;
        lastRunAt: Date | null;
    }>;
    toggle(u: any, id: string, body: {
        isActive: boolean;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        priority: number;
        description: string | null;
        trigger: import(".prisma/client").$Enums.AutomationTrigger;
        conditions: import("@prisma/client/runtime/library").JsonValue | null;
        actions: import("@prisma/client/runtime/library").JsonValue;
        runCount: number;
        lastRunAt: Date | null;
    }>;
    remove(u: any, id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        priority: number;
        description: string | null;
        trigger: import(".prisma/client").$Enums.AutomationTrigger;
        conditions: import("@prisma/client/runtime/library").JsonValue | null;
        actions: import("@prisma/client/runtime/library").JsonValue;
        runCount: number;
        lastRunAt: Date | null;
    }>;
}
