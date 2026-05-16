import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { Response } from "express";
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus?.() ?? HttpStatus.INTERNAL_SERVER_ERROR;
    const exceptionResponse = exception.getResponse();
    const message = typeof exceptionResponse === "string" ? exceptionResponse : (exceptionResponse as any).message ?? "An error occurred";
    this.logger.warn(`HTTP ${status}: ${JSON.stringify(message)}`);
    response.status(status).json({ success: false, statusCode: status, message, timestamp: new Date().toISOString() });
  }
}
