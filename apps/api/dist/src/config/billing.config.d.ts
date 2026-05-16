declare const _default: (() => {
    razorpayKeyId: string;
    razorpayKeySecret: string;
    razorpayWebhookSecret: string;
    plans: {
        starter: {
            id: string;
            price: number;
            messages: number;
            seats: number;
        };
        growth: {
            id: string;
            price: number;
            messages: number;
            seats: number;
        };
        pro: {
            id: string;
            price: number;
            messages: number;
            seats: number;
        };
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    razorpayKeyId: string;
    razorpayKeySecret: string;
    razorpayWebhookSecret: string;
    plans: {
        starter: {
            id: string;
            price: number;
            messages: number;
            seats: number;
        };
        growth: {
            id: string;
            price: number;
            messages: number;
            seats: number;
        };
        pro: {
            id: string;
            price: number;
            messages: number;
            seats: number;
        };
    };
}>;
export default _default;
