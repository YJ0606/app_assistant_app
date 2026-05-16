import { Injectable } from "@nestjs/common";
import Razorpay from "razorpay";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class RazorpayService {
  private razorpay: Razorpay;

  constructor(private configService: ConfigService) {
    const keyId = this.configService.get("RAZORPAY_KEY_ID");
    const keySecret = this.configService.get("RAZORPAY_KEY_SECRET");

    if (!keyId || !keySecret) {
      throw new Error("Razorpay credentials not configured");
    }

    this.razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });
  }

  async createOrder(amount: number, planId: string, tenantId: string, email: string) {
    try {
      const options = {
        amount: Math.round(amount * 100), // Convert to paise
        currency: "INR",
        receipt: `${tenantId}_${planId}_${Date.now()}`,
        notes: {
          planId,
          tenantId,
          email,
        },
      };

      const order = await this.razorpay.orders.create(options);
      return order;
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      throw error;
    }
  }

  async verifyPaymentSignature(
    orderId: string,
    paymentId: string,
    signature: string
  ): Promise<boolean> {
    try {
      const crypto = require("crypto");
      const hmac = crypto.createHmac(
        "sha256",
        this.configService.get("RAZORPAY_KEY_SECRET")
      );

      hmac.update(`${orderId}|${paymentId}`);
      const generatedSignature = hmac.digest("hex");

      return generatedSignature === signature;
    } catch (error) {
      console.error("Error verifying signature:", error);
      return false;
    }
  }

  async getPaymentDetails(paymentId: string) {
    try {
      return await this.razorpay.payments.fetch(paymentId);
    } catch (error) {
      console.error("Error fetching payment:", error);
      throw error;
    }
  }

  async refundPayment(paymentId: string, amount?: number) {
    try {
      const options: any = {};
      if (amount) {
        options.amount = Math.round(amount * 100); // Convert to paise
      }

      return await this.razorpay.payments.refund(paymentId, options);
    } catch (error) {
      console.error("Error refunding payment:", error);
      throw error;
    }
  }

  async capturePayment(paymentId: string, amount: number) {
    try {
      return await this.razorpay.payments.capture(paymentId, Math.round(amount * 100));
    } catch (error) {
      console.error("Error capturing payment:", error);
      throw error;
    }
  }
}
