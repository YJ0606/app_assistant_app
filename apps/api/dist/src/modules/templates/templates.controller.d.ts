import { TemplatesService } from "./templates.service";
export declare class TemplatesController {
    private s;
    constructor(s: TemplatesService);
    list(u: any): Promise<{
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
    create(u: any, body: any): Promise<{
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
    update(id: string, body: any): Promise<{
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
