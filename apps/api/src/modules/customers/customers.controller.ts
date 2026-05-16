import { Controller, Get, Patch, Body, Param, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CustomersService } from "./customers.service";
@ApiTags("Customers") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("customers")
export class CustomersController {
  constructor(private s: CustomersService) {}
  @Get() list(@CurrentUser() u: any) { return this.s.findAll(u.tenantId); }
  @Patch(":id") update(@CurrentUser() u: any, @Param("id") id: string, @Body() body: any) { return this.s.update(id, u.tenantId, body); }
}
