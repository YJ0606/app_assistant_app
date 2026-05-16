import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { AutomationsService } from "./automations.service";

@ApiTags("Automations") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("automations")
export class AutomationsController {
  constructor(private readonly service: AutomationsService) {}
  @Get() list(@CurrentUser() u: any) { return this.service.findAll(u.tenantId); }
  @Post() create(@CurrentUser() u: any, @Body() body: any) { return this.service.create(u.tenantId, body); }
  @Patch(":id") update(@CurrentUser() u: any, @Param("id") id: string, @Body() body: any) { return this.service.update(id, u.tenantId, body); }
  @Patch(":id/toggle") toggle(@CurrentUser() u: any, @Param("id") id: string, @Body() body: { isActive: boolean }) { return this.service.toggle(id, u.tenantId, body.isActive); }
  @Delete(":id") remove(@CurrentUser() u: any, @Param("id") id: string) { return this.service.remove(id, u.tenantId); }
}
