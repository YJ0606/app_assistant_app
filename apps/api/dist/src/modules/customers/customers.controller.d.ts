import { CustomersService } from "./customers.service";
export declare class CustomersController {
    private s;
    constructor(s: CustomersService);
    list(u: any): Promise<{
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
    }[]>;
    update(u: any, id: string, body: any): Promise<{
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
    }>;
}
