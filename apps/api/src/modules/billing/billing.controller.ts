import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { BillingService } from "./billing.service";
@ApiTags("Billing") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("billing")
export class BillingController {
  constructor(private s: BillingService) {}
  @Get("subscription") getSub(@CurrentUser() u: any) { return this.s.getSubscription(u.tenantId); }
  @Get("invoices") getInvoices(@CurrentUser() u: any) { return this.s.getInvoices(u.tenantId); }
  @Get("usage") getUsage(@CurrentUser() u: any) { return this.s.getUsage(u.tenantId); }
}
