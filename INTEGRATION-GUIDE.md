# Integration Guide: Razorpay & WhatsApp Chat

## Part 1: Razorpay Payment Gateway Integration

### Step 1: Setup Razorpay Environment Variables

**File: `.env` (Backend)**
```env
# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=xxxxxxxxxxxxxxxx
```

Get these from: https://dashboard.razorpay.com/settings/api-keys

### Step 2: Install Razorpay Package (Backend)

```bash
cd apps/api
npm install razorpay
```

### Step 3: Create Razorpay Service (Backend)

**File: `apps/api/src/modules/billing/razorpay.service.ts`**

```typescript
import { Injectable } from "@nestjs/common";
import Razorpay from "razorpay";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class RazorpayService {
  private razorpay: Razorpay;

  constructor(private prisma: PrismaService) {
    this.razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
  }

  async createOrder(amount: number, planId: string, tenantId: string) {
    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: "INR",
      receipt: `receipt_${tenantId}_${Date.now()}`,
      notes: { planId, tenantId },
    };

    const order = await this.razorpay.orders.create(options);
    return order;
  }

  async verifyPayment(paymentId: string, orderId: string, signature: string) {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${orderId}|${paymentId}`);
    const generated_signature = hmac.digest("hex");

    return generated_signature === signature;
  }

  async capturePayment(paymentId: string, amount: number) {
    return await this.razorpay.payments.capture(paymentId, amount * 100);
  }

  async getPayment(paymentId: string) {
    return await this.razorpay.payments.fetch(paymentId);
  }

  async refundPayment(paymentId: string, amount?: number) {
    const options = amount ? { amount: amount * 100 } : {};
    return await this.razorpay.payments.refund(paymentId, options);
  }
}
```

### Step 4: Update Billing Controller (Backend)

**File: `apps/api/src/modules/billing/billing.controller.ts`**

Add these endpoints:

```typescript
import { Controller, Post, Get, Body, UseGuards, Headers } from "@nestjs/common";
import { RazorpayService } from "./razorpay.service";
import { BillingService } from "./billing.service";

@Post("checkout")
async createCheckout(@CurrentUser() user: any, @Body() dto: { planId: string }) {
  const plan = this.config.get("billing").plans[dto.planId];
  if (!plan) throw new BadRequestException("Invalid plan");

  const order = await this.razorpayService.createOrder(
    plan.price / 100,
    dto.planId,
    user.tenantId
  );

  return { data: order };
}

@Post("verify-payment")
async verifyPayment(
  @CurrentUser() user: any,
  @Body() dto: { paymentId: string; orderId: string; signature: string; planId: string }
) {
  const isValid = await this.razorpayService.verifyPayment(
    dto.paymentId,
    dto.orderId,
    dto.signature
  );

  if (!isValid) throw new BadRequestException("Invalid signature");

  const payment = await this.razorpayService.getPayment(dto.paymentId);

  // Create subscription in database
  const plan = this.config.get("billing").plans[dto.planId];
  const subscription = await this.prisma.subscription.upsert({
    where: { tenantId: user.tenantId },
    update: {
      planId: dto.planId,
      status: "ACTIVE",
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      razorpayOrderId: dto.orderId,
    },
    create: {
      tenantId: user.tenantId,
      planId: dto.planId,
      status: "ACTIVE",
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      razorpayOrderId: dto.orderId,
      monthlyMessages: plan.messages,
    },
  });

  return { data: subscription };
}

@Post("refund")
async refundPayment(
  @CurrentUser() user: any,
  @Body() dto: { paymentId: string; amount: number }
) {
  const refund = await this.razorpayService.refundPayment(
    dto.paymentId,
    dto.amount
  );
  return { data: refund };
}
```

### Step 5: Create Frontend Checkout Component

**File: `apps/web/src/components/billing/razorpay-checkout.tsx`**

```typescript
"use client";
import { useState } from "react";
import { useCreateCheckout } from "@/hooks/use-billing";
import { Loader2 } from "lucide-react";

interface RazorpayCheckoutProps {
  planId: string;
  planName: string;
  amount: number;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function RazorpayCheckout({ planId, planName, amount }: RazorpayCheckoutProps) {
  const [loading, setLoading] = useState(false);
  const createCheckout = useCreateCheckout();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Create order on backend
      const { data } = await createCheckout.mutateAsync(planId);

      // Load Razorpay script
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.amount,
          currency: "INR",
          order_id: data.id,
          name: "WaAI",
          description: `Upgrade to ${planName}`,
          image: "/logo.png",
          handler: async (response: any) => {
            // Verify payment on backend
            const verifyRes = await fetch("/api/v1/billing/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
                planId,
              }),
            });

            if (verifyRes.ok) {
              alert("Payment successful! Your plan has been upgraded.");
              window.location.href = "/dashboard/billing";
            } else {
              alert("Payment verification failed");
            }
          },
          prefill: {
            email: localStorage.getItem("user_email"),
            contact: localStorage.getItem("user_phone"),
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      };
      document.body.appendChild(script);
    } catch (error) {
      alert("Failed to initiate payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {loading ? "Processing..." : `Upgrade to ${planName}`}
    </button>
  );
}
```

### Step 6: Update Billing Page with Razorpay

**File: `apps/web/src/app/dashboard/billing/page.tsx`** - Update the checkout button section:

```typescript
import { RazorpayCheckout } from "@/components/billing/razorpay-checkout";

// In the plans section:
<RazorpayCheckout 
  planId="growth" 
  planName="Growth Plan" 
  amount={39900} 
/>
```

---

## Part 2: WhatsApp Chat Option for Conversations

### Step 1: Add WhatsApp Channel to Conversation Type

**Update Prisma Schema: `apps/api/prisma/schema.prisma`**

```prisma
model Conversation {
  // ... existing fields
  
  channel           String      @default("WHATSAPP") // WHATSAPP, SMS, EMAIL, PHONE
  whatsappPhone     String?     // Customer WhatsApp number
  whatsappMessageId String?     // Razorpay-style message ID
  
  @@index([channel])
}

model Message {
  // ... existing fields
  
  channel           String      @default("WHATSAPP")
  mediaUrl          String?     // For media messages
  mediaType         String?     // image, video, document, audio
  
  @@index([channel])
}
```

Run: `npx prisma migrate dev --name add_whatsapp_channel`

### Step 2: Update Conversations Service (Backend)

**File: `apps/api/src/modules/conversations/conversations.service.ts`**

Add WhatsApp support:

```typescript
async createFromWhatsApp(tenantId: string, phone: string, message: string) {
  // Normalize phone number
  const normalizedPhone = phone.replace(/\D/g, "");
  
  // Find or create customer
  const customer = await this.prisma.customer.upsert({
    where: { tenantId_phone: { tenantId, phone: normalizedPhone } },
    update: { lastContactedAt: new Date() },
    create: { tenantId, phone: normalizedPhone, name: phone, email: "" },
  });

  // Find or create conversation
  let conversation = await this.prisma.conversation.findFirst({
    where: { tenantId, customerId: customer.id, channel: "WHATSAPP" },
  });

  if (!conversation) {
    conversation = await this.prisma.conversation.create({
      data: {
        tenantId,
        customerId: customer.id,
        channel: "WHATSAPP",
        status: "OPEN",
        isAiActive: true,
        whatsappPhone: normalizedPhone,
      },
    });
  }

  // Add message
  const msg = await this.prisma.message.create({
    data: {
      conversationId: conversation.id,
      tenantId,
      channel: "WHATSAPP",
      direction: "INBOUND",
      type: "TEXT",
      content: message,
      status: "RECEIVED",
    },
  });

  return { conversation, message: msg };
}

async sendWhatsAppMessage(conversationId: string, tenantId: string, content: string, userId: string) {
  const msg = await this.sendMessage(conversationId, tenantId, content, userId);
  
  // TODO: Integrate with WhatsApp API (Twilio/Gupshup/etc) to actually send
  // Example with Twilio:
  // await twilioClient.messages.create({
  //   from: process.env.TWILIO_WHATSAPP_FROM,
  //   to: `whatsapp:+${conversation.whatsappPhone}`,
  //   body: content,
  // });

  return { ...msg, channel: "WHATSAPP" };
}
```

### Step 3: Update Conversations Controller

**File: `apps/api/src/modules/conversations/conversations.controller.ts`**

```typescript
@Get("filter")
async filterByChannel(
  @CurrentUser() u: any,
  @Query("channel") channel?: string
) {
  return this.service.findAll(u.tenantId, { channel });
}

@Post("whatsapp/webhook")
async whatsappWebhook(@Body() body: any) {
  // Handle incoming WhatsApp messages from your provider
  // Example: Twilio, Gupshup, etc.
  
  const { phone, message, messageId } = body;
  
  if (message && phone) {
    const { conversation } = await this.service.createFromWhatsApp(
      body.tenantId,
      phone,
      message
    );
    return { ok: true, conversationId: conversation.id };
  }
  
  return { ok: true };
}
```

### Step 4: Update Frontend Conversation Types

**File: `apps/web/src/types/conversation.ts`**

```typescript
export interface Conversation {
  id: string;
  customerId: string;
  tenantId: string;
  channel: "WHATSAPP" | "SMS" | "EMAIL" | "PHONE";
  whatsappPhone?: string;
  status: ConversationStatus;
  isAiActive: boolean;
  assignedUserId?: string;
  lastMessageAt: string;
  resolvedAt?: string;
  customer: Customer;
  messages?: Message[];
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  channel: "WHATSAPP" | "SMS" | "EMAIL" | "PHONE";
  direction: "INBOUND" | "OUTBOUND";
  type: "TEXT" | "IMAGE" | "VIDEO" | "DOCUMENT" | "AUDIO";
  content: string;
  mediaUrl?: string;
  mediaType?: string;
  status: MessageStatus;
  isAiGenerated: boolean;
  createdAt: string;
}
```

### Step 5: Update Conversation List Component

**File: `apps/web/src/components/conversations/conversation-list.tsx`**

Add channel filter:

```typescript
import { MessageCircle, MessageSquare } from "lucide-react";

const channelFilters = ["All", "WhatsApp", "SMS", "Email"];

export function ConversationList() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [channel, setChannel] = useState<string>();

  // Update filter handler
  const handleChannelFilter = (ch: string) => {
    setActiveFilter(ch);
    setChannel(ch === "All" ? undefined : ch.toUpperCase());
  };

  return (
    <div className="w-80 flex-shrink-0 border-r border-gray-200 flex flex-col">
      {/* ... existing code ... */}
      
      {/* Channel Filters */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {channelFilters.map((ch) => (
            <button
              key={ch}
              onClick={() => handleChannelFilter(ch)}
              className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                activeFilter === ch
                  ? "bg-brand-500 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {ch === "WhatsApp" && <MessageCircle className="w-3 h-3" />}
              {ch}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Step 6: Create WhatsApp Badge Component

**File: `apps/web/src/components/conversations/channel-badge.tsx`**

```typescript
import { MessageCircle, MessageSquare } from "lucide-react";

export function ChannelBadge({ channel }: { channel: string }) {
  const badges: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
    WHATSAPP: {
      icon: <MessageCircle className="w-3 h-3" />,
      color: "bg-green-50 text-green-700",
      label: "WhatsApp",
    },
    SMS: {
      icon: <MessageSquare className="w-3 h-3" />,
      color: "bg-blue-50 text-blue-700",
      label: "SMS",
    },
    EMAIL: {
      icon: "✉️",
      color: "bg-purple-50 text-purple-700",
      label: "Email",
    },
  };

  const badge = badges[channel] || badges.WHATSAPP;

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
      {badge.icon}
      {badge.label}
    </span>
  );
}
```

### Step 7: Update Conversation Item Component

**File: `apps/web/src/components/conversations/conversation-item.tsx`** - Add channel display:

```typescript
import { ChannelBadge } from "./channel-badge";

export function ConversationItem({ conversation }: any) {
  return (
    <div className="flex items-center gap-3 p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-sm font-semibold text-brand-600">
          {conversation.customerName.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="font-medium text-gray-900 truncate">{conversation.customerName}</h4>
          <ChannelBadge channel={conversation.channel} />
        </div>
        <p className="text-xs text-gray-500 truncate">{conversation.lastMessage}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-gray-400">{conversation.time}</span>
          {conversation.unread > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {conversation.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
```

---

## Part 3: WhatsApp Integration Providers

### Option A: Twilio (Recommended for US/UK)

```bash
npm install twilio --save
```

**Setup:**
1. Get WhatsApp Business Account from Twilio
2. Add to `.env`:
```env
TWILIO_ACCOUNT_SID=xxxxx
TWILIO_AUTH_TOKEN=xxxxx
TWILIO_WHATSAPP_FROM=whatsapp:+1234567890
```

### Option B: Gupshup (Recommended for India)

```bash
npm install gupshup-sdk --save
```

**Setup:**
1. Create account at https://www.gupshup.io/
2. Add to `.env`:
```env
GUPSHUP_API_KEY=xxxxx
GUPSHUP_APP_ID=xxxxx
GUPSHUP_PHONE_NUMBER=91xxxxxxxxxx
```

### Option C: Meta WhatsApp Business API

```bash
npm install axios
```

**Setup:**
1. Get access from https://www.meta.com/en/business/apps/
2. Add to `.env`:
```env
WHATSAPP_BUSINESS_ACCOUNT_ID=xxxxx
WHATSAPP_PHONE_NUMBER_ID=xxxxx
WHATSAPP_API_TOKEN=xxxxx
WHATSAPP_WEBHOOK_VERIFY_TOKEN=xxxxx
```

---

## Environment Variables Summary

**Backend `.env`:**
```env
# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

# WhatsApp (Choose one)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_WHATSAPP_FROM=
# OR
GUPSHUP_API_KEY=
GUPSHUP_APP_ID=
# OR
WHATSAPP_BUSINESS_ACCOUNT_ID=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_API_TOKEN=
```

**Frontend `.env.local`:**
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=
```

---

## Testing Checklist

- [ ] Razorpay test mode activated
- [ ] Webhook endpoint tested with Razorpay simulator
- [ ] WhatsApp test messages sent successfully
- [ ] Conversation channel filtering working
- [ ] Badge displays correctly for each channel
- [ ] Messages stored with correct channel in database
- [ ] AI responses work for WhatsApp conversations

---

## Deployment Notes

1. Use production keys for live environment
2. Set up webhook signatures verification
3. Enable HTTPS for all endpoints
4. Test payment refunds thoroughly
5. Set up monitoring for webhook failures
