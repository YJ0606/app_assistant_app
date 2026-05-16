import { PrismaService } from "../../database/prisma.service";
export declare class FAQService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(tenantId: string, search?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        question: string;
        answer: string;
        keywords: string[];
        category: string | null;
        priority: number;
        hitCount: number;
    }[]>;
    create(tenantId: string, data: {
        question: string;
        answer: string;
        category?: string;
        keywords?: string[];
        isActive?: boolean;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        question: string;
        answer: string;
        keywords: string[];
        category: string | null;
        priority: number;
        hitCount: number;
    }>;
    update(id: string, tenantId: string, data: Partial<{
        question: string;
        answer: string;
        category: string;
        keywords: string[];
        isActive: boolean;
        priority: number;
    }>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        question: string;
        answer: string;
        keywords: string[];
        category: string | null;
        priority: number;
        hitCount: number;
    }>;
    remove(id: string, tenantId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        question: string;
        answer: string;
        keywords: string[];
        category: string | null;
        priority: number;
        hitCount: number;
    }>;
    findOne(id: string, tenantId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        question: string;
        answer: string;
        keywords: string[];
        category: string | null;
        priority: number;
        hitCount: number;
    }>;
}
