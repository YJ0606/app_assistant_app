import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class CatalogService {
  constructor(private prisma: PrismaService) {}

  async findAll(tenantId: string, params?: { search?: string; category?: string; status?: string }) {
    return this.prisma.catalogItem.findMany({
      where: {
        tenantId,
        ...(params?.search ? { name: { contains: params.search, mode: "insensitive" } } : {}),
        ...(params?.category ? { category: params.category } : {}),
        ...(params?.status ? { status: params.status as any } : {}),
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async create(tenantId: string, data: any) {
    return this.prisma.catalogItem.create({ data: { tenantId, ...data } });
  }

  async update(id: string, tenantId: string, data: any) {
    const item = await this.prisma.catalogItem.findFirst({ where: { id, tenantId } });
    if (!item) throw new NotFoundException("Item not found");
    return this.prisma.catalogItem.update({ where: { id }, data });
  }

  async remove(id: string, tenantId: string) {
    const item = await this.prisma.catalogItem.findFirst({ where: { id, tenantId } });
    if (!item) throw new NotFoundException("Item not found");
    return this.prisma.catalogItem.delete({ where: { id } });
  }
}
