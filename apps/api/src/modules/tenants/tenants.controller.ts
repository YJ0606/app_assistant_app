import { Controller, Get, Patch, Body, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { TenantsService } from "./tenants.service";

@ApiTags("Tenants") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("tenants")
export class TenantsController {
  constructor(private readonly service: TenantsService) {}
  @Get("me") getMe(@CurrentUser() user: any) { return this.service.findById(user.tenantId); }
  @Patch("me") updateMe(@CurrentUser() user: any, @Body() body: Record<string, unknown>) { return this.service.update(user.tenantId, body); }
}
