import { Controller, Get, Post, Patch, Body, Param, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { TemplatesService } from "./templates.service";
@ApiTags("Templates") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("templates")
export class TemplatesController {
  constructor(private s: TemplatesService) {}
  @Get() list(@CurrentUser() u: any) { return this.s.findAll(u.tenantId); }
  @Post() create(@CurrentUser() u: any, @Body() body: any) { return this.s.create(u.tenantId, body); }
  @Patch(":id") update(@Param("id") id: string, @Body() body: any) { return this.s.update(id, body); }
}
