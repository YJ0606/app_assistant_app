import { registerAs } from "@nestjs/config";
export default registerAs("billing", () => ({
  razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET,
  razorpayWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET,
  plans: {
    starter: { id: "starter", price: 149900, messages: 500, seats: 2 },
    growth:  { id: "growth",  price: 399900, messages: 2500, seats: 5 },
    pro:     { id: "pro",     price: 999900, messages: 10000, seats: -1 },
  },
}));
