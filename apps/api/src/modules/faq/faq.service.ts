import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class FAQService {
  constructor(private prisma: PrismaService) {}

  async findAll(tenantId: string, search?: string) {
    return this.prisma.fAQ.findMany({
      where: { tenantId, ...(search ? { OR: [{ question: { contains: search, mode: "insensitive" } }, { category: { contains: search, mode: "insensitive" } }] } : {}) },
      orderBy: [{ priority: "desc" }, { hitCount: "desc" }],
    });
  }

  async create(tenantId: string, data: { question: string; answer: string; category?: string; keywords?: string[]; isActive?: boolean }) {
    return this.prisma.fAQ.create({ data: { tenantId, ...data } });
  }

  async update(id: string, tenantId: string, data: Partial<{ question: string; answer: string; category: string; keywords: string[]; isActive: boolean; priority: number }>) {
    await this.findOne(id, tenantId);
    return this.prisma.fAQ.update({ where: { id }, data });
  }

  async remove(id: string, tenantId: string) {
    await this.findOne(id, tenantId);
    return this.prisma.fAQ.delete({ where: { id } });
  }

  async findOne(id: string, tenantId: string) {
    const faq = await this.prisma.fAQ.findFirst({ where: { id, tenantId } });
    if (!faq) throw new NotFoundException("FAQ not found");
    return faq;
  }
}
