import { WebhooksService } from "./webhooks.service";
export declare class WebhooksController {
    private s;
    constructor(s: WebhooksService);
    verify(token: string, challenge: string): string;
    handle(slug: string, body: any): Promise<{
        received: boolean;
    }>;
}
