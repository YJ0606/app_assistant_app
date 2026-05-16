import { Injectable, Logger } from "@nestjs/common";
@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);
  async sendEmail(to: string, subject: string, html: string) {
    this.logger.log(`[Email] To: ${to} | Subject: ${subject}`);
    // In prod: use Resend
  }
}
