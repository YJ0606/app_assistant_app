import { PrismaService } from "../../database/prisma.service";
export declare class CustomersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(tenantId: string): Promise<{
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
    update(id: string, tenantId: string, data: any): Promise<{
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
