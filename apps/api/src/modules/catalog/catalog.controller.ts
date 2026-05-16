import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CatalogService } from "./catalog.service";

@ApiTags("Catalog") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("catalog")
export class CatalogController {
  constructor(private readonly service: CatalogService) {}
  @Get() list(@CurrentUser() u: any, @Query() q: any) { return this.service.findAll(u.tenantId, q); }
  @Post() create(@CurrentUser() u: any, @Body() body: any) { return this.service.create(u.tenantId, body); }
  @Patch(":id") update(@CurrentUser() u: any, @Param("id") id: string, @Body() body: any) { return this.service.update(id, u.tenantId, body); }
  @Delete(":id") remove(@CurrentUser() u: any, @Param("id") id: string) { return this.service.remove(id, u.tenantId); }
}
