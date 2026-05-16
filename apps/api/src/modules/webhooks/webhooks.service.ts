import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";
@Injectable()
export class WebhooksService {
  private readonly logger = new Logger(WebhooksService.name);
  constructor(private prisma: PrismaService) {}
  async handleWebhook(tenantId: string, payload: any) {
    await this.prisma.webhookLog.create({ data: { tenantId, payload, status: "RECEIVED" } });
    this.logger.log(`Webhook received for tenant ${tenantId}`);
    return { received: true };
  }
  verifyToken(token: string, expected: string) { return token === expected; }
}
