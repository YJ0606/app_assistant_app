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
exports.FAQService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let FAQService = class FAQService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(tenantId, search) {
        return this.prisma.fAQ.findMany({
            where: { tenantId, ...(search ? { OR: [{ question: { contains: search, mode: "insensitive" } }, { category: { contains: search, mode: "insensitive" } }] } : {}) },
            orderBy: [{ priority: "desc" }, { hitCount: "desc" }],
        });
    }
    async create(tenantId, data) {
        return this.prisma.fAQ.create({ data: { tenantId, ...data } });
    }
    async update(id, tenantId, data) {
        await this.findOne(id, tenantId);
        return this.prisma.fAQ.update({ where: { id }, data });
    }
    async remove(id, tenantId) {
        await this.findOne(id, tenantId);
        return this.prisma.fAQ.delete({ where: { id } });
    }
    async findOne(id, tenantId) {
        const faq = await this.prisma.fAQ.findFirst({ where: { id, tenantId } });
        if (!faq)
            throw new common_1.NotFoundException("FAQ not found");
        return faq;
    }
};
exports.FAQService = FAQService;
exports.FAQService = FAQService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FAQService);
//# sourceMappingURL=faq.service.js.map