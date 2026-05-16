import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { WhatsAppService } from "./whatsapp.service";
@ApiTags("WhatsApp") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("settings/whatsapp")
export class WhatsAppController {
  constructor(private s: WhatsAppService) {}
  @Get() get(@CurrentUser() u: any) { return this.s.getConfig(u.tenantId); }
  @Post() save(@CurrentUser() u: any, @Body() body: any) { return this.s.saveConfig(u.tenantId, body); }
}
