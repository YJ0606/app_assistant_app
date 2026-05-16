import { PrismaService } from "../../database/prisma.service";
export declare class TemplatesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(tenantId: string): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TemplateStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        category: import(".prisma/client").$Enums.TemplateCategory;
        language: string;
        headerText: string | null;
        bodyText: string;
        footerText: string | null;
        buttons: import("@prisma/client/runtime/library").JsonValue | null;
        variables: string[];
        waTemplateId: string | null;
        rejectionReason: string | null;
    }[]>;
    create(tenantId: string, data: any): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TemplateStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        category: import(".prisma/client").$Enums.TemplateCategory;
        language: string;
        headerText: string | null;
        bodyText: string;
        footerText: string | null;
        buttons: import("@prisma/client/runtime/library").JsonValue | null;
        variables: string[];
        waTemplateId: string | null;
        rejectionReason: string | null;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.TemplateStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        category: import(".prisma/client").$Enums.TemplateCategory;
        language: string;
        headerText: string | null;
        bodyText: string;
        footerText: string | null;
        buttons: import("@prisma/client/runtime/library").JsonValue | null;
        variables: string[];
        waTemplateId: string | null;
        rejectionReason: string | null;
    }>;
}
