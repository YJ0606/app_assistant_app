import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { AnalyticsService } from "./analytics.service";
@ApiTags("Analytics") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("analytics")
export class AnalyticsController {
  constructor(private s: AnalyticsService) {}
  @Get() report(@CurrentUser() u: any) { return this.s.getReport(u.tenantId); }
}
