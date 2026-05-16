import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { ApiTags, ApiBearerAuth, ApiOperation } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { BillingService } from "./billing.service";
import { RazorpayService } from "./razorpay.service";
import { PrismaService } from "../../database/prisma.service";
import { ConfigService } from "@nestjs/config";

@ApiTags("Billing")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("billing")
export class BillingController {
  constructor(
    private billingService: BillingService,
    private razorpayService: RazorpayService,
    private prisma: PrismaService,
    private configService: ConfigService
  ) {}

  @Get("subscription")
  @ApiOperation({ summary: "Get current subscription" })
  async getSubscription(@CurrentUser() user: any) {
    return this.billingService.getSubscription(user.tenantId);
  }

  @Get("invoices")
  @ApiOperation({ summary: "Get billing invoices" })
  async getInvoices(@CurrentUser() user: any) {
    return this.billingService.getInvoices(user.tenantId);
  }

  @Get("usage")
  @ApiOperation({ summary: "Get current period usage" })
  async getUsage(@CurrentUser() user: any) {
    return this.billingService.getUsage(user.tenantId);
  }

  @Post("checkout")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Create Razorpay checkout order" })
  async createCheckout(
    @CurrentUser() user: any,
    @Body() dto: { planId: string }
  ) {
    const plans = this.configService.get("billing").plans;
    const plan = plans[dto.planId];

    if (!plan) {
      throw new BadRequestException("Invalid plan ID");
    }

    const order = await this.razorpayService.createOrder(
      plan.price / 100,
      dto.planId,
      user.tenantId,
      user.email
    );

    return { data: order };
  }

  @Post("verify-payment")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Verify and process Razorpay payment" })
  async verifyPayment(
    @CurrentUser() user: any,
    @Body()
    dto: {
      paymentId: string;
      orderId: string;
      signature: string;
      planId: string;
    }
  ) {
    // Verify signature
    const isValid = await this.razorpayService.verifyPaymentSignature(
      dto.orderId,
      dto.paymentId,
      dto.signature
    );

    if (!isValid) {
      throw new BadRequestException("Invalid payment signature");
    }

    // Get payment details
    const payment = await this.razorpayService.getPaymentDetails(
      dto.paymentId
    );

    if (payment.status !== "captured" && payment.status !== "authorized") {
      throw new BadRequestException("Payment not completed");
    }

    // Get plan details
    const plans = this.configService.get("billing").plans;
    const plan = plans[dto.planId];

    if (!plan) {
      throw new BadRequestException("Invalid plan");
    }

    // Create or update subscription
    const subscription = await this.prisma.subscription.upsert({
      where: { tenantId: user.tenantId },
      update: {
        planId: dto.planId,
        status: "ACTIVE",
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        monthlyMessages: plan.messages,
      },
      create: {
        tenantId: user.tenantId,
        planId: dto.planId,
        status: "ACTIVE",
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        monthlyMessages: plan.messages,
      },
    });

    // Create invoice record
    await this.prisma.invoice.create({
      data: {
        tenantId: user.tenantId,
        invoiceNumber: `INV-${user.tenantId}-${Date.now()}`,
        status: "PAID",
        amount: payment.amount / 100,
        total: payment.amount / 100,
        currency: payment.currency,
        periodStart: new Date(),
        periodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        paidAt: new Date(),
        razorpayPaymentId: dto.paymentId,
        lineItems: JSON.stringify([
          {
            description: `${dto.planId.toUpperCase()} Plan`,
            amount: payment.amount / 100,
          },
        ]),
      },
    });

    return { data: subscription };
  }

  @Post("refund")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Refund a payment" })
  async refundPayment(
    @CurrentUser() user: any,
    @Body() dto: { paymentId: string; amount?: number }
  ) {
    const refund = await this.razorpayService.refundPayment(
      dto.paymentId,
      dto.amount
    );

    // Update subscription status
    await this.prisma.subscription.updateMany({
      where: { tenantId: user.tenantId },
      data: { status: "CANCELLED" },
    });

    return { data: refund };
  }

  @Post("cancel-subscription")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Cancel current subscription" })
  async cancelSubscription(@CurrentUser() user: any) {
    const subscription = await this.prisma.subscription.update({
      where: { tenantId: user.tenantId },
      data: {
        status: "CANCELLED",
        cancelAtPeriodEnd: true,
      },
    });

    return { data: subscription };
  }
}
