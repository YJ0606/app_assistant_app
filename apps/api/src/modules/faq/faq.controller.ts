import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { FAQService } from "./faq.service";

@ApiTags("FAQ") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("faq")
export class FAQController {
  constructor(private readonly service: FAQService) {}
  @Get() list(@CurrentUser() u: any, @Query("search") search?: string) { return this.service.findAll(u.tenantId, search); }
  @Post() create(@CurrentUser() u: any, @Body() body: any) { return this.service.create(u.tenantId, body); }
  @Patch(":id") update(@CurrentUser() u: any, @Param("id") id: string, @Body() body: any) { return this.service.update(id, u.tenantId, body); }
  @Delete(":id") remove(@CurrentUser() u: any, @Param("id") id: string) { return this.service.remove(id, u.tenantId); }
}
