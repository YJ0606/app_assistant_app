import { FAQService } from "./faq.service";
export declare class FAQController {
    private readonly service;
    constructor(service: FAQService);
    list(u: any, search?: string): Promise<{
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
    create(u: any, body: any): Promise<{
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
    update(u: any, id: string, body: any): Promise<{
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
    remove(u: any, id: string): Promise<{
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
