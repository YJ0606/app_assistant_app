import { Controller, Get, Patch, Body, Param, Query, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { OrdersService } from "./orders.service";

@ApiTags("Orders") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("orders")
export class OrdersController {
  constructor(private readonly service: OrdersService) {}
  @Get() list(@CurrentUser() u: any, @Query() q: any) { return this.service.findAll(u.tenantId, q); }
  @Get(":id") get(@CurrentUser() u: any, @Param("id") id: string) { return this.service.findOne(id, u.tenantId); }
  @Patch(":id/status") updateStatus(@CurrentUser() u: any, @Param("id") id: string, @Body() body: { status: string }) { return this.service.updateStatus(id, u.tenantId, body.status); }
}
