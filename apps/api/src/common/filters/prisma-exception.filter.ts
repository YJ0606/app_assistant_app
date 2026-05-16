import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Response } from "express";
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaExceptionFilter.name);
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Database error";
    if (exception.code === "P2002") { status = HttpStatus.CONFLICT; message = "A record with this value already exists"; }
    else if (exception.code === "P2025") { status = HttpStatus.NOT_FOUND; message = "Record not found"; }
    this.logger.warn(`Prisma ${exception.code}: ${exception.message}`);
    response.status(status).json({ success: false, statusCode: status, message, timestamp: new Date().toISOString() });
  }
}
