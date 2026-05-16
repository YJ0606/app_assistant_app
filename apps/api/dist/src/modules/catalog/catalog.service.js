"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let CatalogService = class CatalogService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(tenantId, params) {
        return this.prisma.catalogItem.findMany({
            where: {
                tenantId,
                ...(params?.search ? { name: { contains: params.search, mode: "insensitive" } } : {}),
                ...(params?.category ? { category: params.category } : {}),
                ...(params?.status ? { status: params.status } : {}),
            },
            orderBy: { createdAt: "desc" },
        });
    }
    async create(tenantId, data) {
        return this.prisma.catalogItem.create({ data: { tenantId, ...data } });
    }
    async update(id, tenantId, data) {
        const item = await this.prisma.catalogItem.findFirst({ where: { id, tenantId } });
        if (!item)
            throw new common_1.NotFoundException("Item not found");
        return this.prisma.catalogItem.update({ where: { id }, data });
    }
    async remove(id, tenantId) {
        const item = await this.prisma.catalogItem.findFirst({ where: { id, tenantId } });
        if (!item)
            throw new common_1.NotFoundException("Item not found");
        return this.prisma.catalogItem.delete({ where: { id } });
    }
};
exports.CatalogService = CatalogService;
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CatalogService);
//# sourceMappingURL=catalog.service.js.map