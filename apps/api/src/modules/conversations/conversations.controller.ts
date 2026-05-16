import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { ConversationsService } from "./conversations.service";

@ApiTags("Conversations") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("conversations")
export class ConversationsController {
  constructor(private readonly service: ConversationsService) {}
  @Get() list(@CurrentUser() u: any, @Query() q: any) { return this.service.findAll(u.tenantId, q); }
  @Get(":id") get(@CurrentUser() u: any, @Param("id") id: string) { return this.service.findOne(id, u.tenantId); }
  @Post(":id/messages") sendMessage(@CurrentUser() u: any, @Param("id") id: string, @Body() body: { content: string }) { return this.service.sendMessage(id, u.tenantId, body.content, u.id); }
  @Patch(":id/assign") assign(@CurrentUser() u: any, @Param("id") id: string, @Body() body: { userId: string }) { return this.service.assign(id, u.tenantId, body.userId); }
  @Patch(":id/ai") toggleAI(@CurrentUser() u: any, @Param("id") id: string, @Body() body: { isAiActive: boolean }) { return this.service.toggleAI(id, u.tenantId, body.isAiActive); }
  @Patch(":id/resolve") resolve(@CurrentUser() u: any, @Param("id") id: string) { return this.service.resolve(id, u.tenantId); }
}
