import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { UsersService } from "./users.service";

@ApiTags("Users") @ApiBearerAuth() @UseGuards(JwtAuthGuard) @Controller("users")
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Get() list(@CurrentUser() user: any) { return this.service.findByTenant(user.tenantId); }
  @Post("invite") invite(@CurrentUser() user: any, @Body() body: { email: string; role: string }) { return this.service.invite(user.tenantId, body.email, body.role, user.id); }
}
