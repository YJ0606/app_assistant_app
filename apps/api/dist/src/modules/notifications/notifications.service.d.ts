export declare class NotificationsService {
    private readonly logger;
    sendEmail(to: string, subject: string, html: string): Promise<void>;
}
