import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";
@Injectable()
export class BillingService {
  constructor(private prisma: PrismaService) {}
  async getSubscription(tenantId: string) { return this.prisma.subscription.findUnique({ where: { tenantId } }); }
  async getInvoices(tenantId: string) { return this.prisma.invoice.findMany({ where: { tenantId }, orderBy: { createdAt: "desc" } }); }
  async getUsage(tenantId: string) { const now = new Date(); const period = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`; return this.prisma.usageRecord.findUnique({ where: { tenantId_period: { tenantId, period } } }); }
}
