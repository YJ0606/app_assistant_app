import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { PrismaService } from "../../database/prisma.service";
@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}
  async use(req: Request & { tenant?: unknown }, res: Response, next: NextFunction) {
    const slug = req.headers["x-tenant-slug"] as string | undefined;
    if (slug) {
      const tenant = await this.prisma.tenant.findUnique({ where: { slug } });
      if (tenant) req.tenant = tenant;
    }
    next();
  }
}
