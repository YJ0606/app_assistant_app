import { Injectable, CanActivate, ExecutionContext, NotFoundException } from "@nestjs/common";
@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const request = ctx.switchToHttp().getRequest();
    if (!request.tenant) throw new NotFoundException("Tenant not found");
    return true;
  }
}
