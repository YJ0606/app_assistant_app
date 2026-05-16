import { Controller, Get, Post, Body, Query, Headers, Param, HttpCode } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { WebhooksService } from "./webhooks.service";
@ApiTags("Webhooks") @Controller("webhooks")
export class WebhooksController {
  constructor(private s: WebhooksService) {}
  @Get("whatsapp/:tenantSlug")
  verify(@Query("hub.verify_token") token: string, @Query("hub.challenge") challenge: string) {
    return challenge;
  }
  @Post("whatsapp/:tenantSlug")
  @HttpCode(200)
  handle(@Param("tenantSlug") slug: string, @Body() body: any) {
    return this.s.handleWebhook(slug, body);
  }
}
