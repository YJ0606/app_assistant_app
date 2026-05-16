import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";
@Injectable()
export class WhatsAppService {
  constructor(private prisma: PrismaService) {}
  async getConfig(tenantId: string) { return this.prisma.whatsAppConfig.findUnique({ where: { tenantId } }); }
  async saveConfig(tenantId: string, data: any) {
    return this.prisma.whatsAppConfig.upsert({ where: { tenantId }, create: { tenantId, ...data }, update: data });
  }
}
