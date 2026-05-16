import { Controller, Get, Patch, Body, Param, Query, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { BookingsService } from "./bookings.service";

@ApiTags("Bookings") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("bookings")
export class BookingsController {
  constructor(private readonly service: BookingsService) {}
  @Get() list(@CurrentUser() u: any, @Query() q: any) { return this.service.findAll(u.tenantId, q); }
  @Get(":id") get(@CurrentUser() u: any, @Param("id") id: string) { return this.service.findOne(id, u.tenantId); }
  @Patch(":id") update(@CurrentUser() u: any, @Param("id") id: string, @Body() body: any) { return this.service.update(id, u.tenantId, body); }
}
