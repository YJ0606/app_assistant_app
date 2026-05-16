# Implementation Checklist: Razorpay & WhatsApp Integration

## ✅ Files Created/Updated

### Razorpay Integration
- [x] `apps/api/src/modules/billing/razorpay.service.ts` - Razorpay payment service
- [x] `apps/web/src/components/billing/razorpay-checkout.tsx` - Frontend checkout component
- [ ] `apps/api/src/modules/billing/billing.controller.ts` - Update with checkout endpoints
- [ ] `apps/web/src/app/dashboard/billing/page.tsx` - Use RazorpayCheckout component

### WhatsApp Multi-Channel Support
- [x] `apps/web/src/types/conversation.ts` - Updated with channel support
- [x] `apps/web/src/components/conversations/channel-badge.tsx` - Channel badge component
- [ ] `apps/api/src/modules/conversations/conversations.service.ts` - Add WhatsApp methods
- [ ] `apps/web/src/components/conversations/conversation-list.tsx` - Add channel filters

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Backend
cd apps/api
npm install razorpay

# Frontend - Already included in Next.js
```

### 2. Set Environment Variables

**`.env` (Backend):**
```env
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=xxxxxxxxxxxxxxxx
```

**`.env.local` (Frontend):**
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
```

### 3. Update Billing Controller

Copy the code from `INTEGRATION-GUIDE.md` Part 1, Step 4 into:
`apps/api/src/modules/billing/billing.controller.ts`

### 4. Update Billing Page

Add RazorpayCheckout component to:
`apps/web/src/app/dashboard/billing/page.tsx`

```typescript
import { RazorpayCheckout } from "@/components/billing/razorpay-checkout";

// In your plans section:
<RazorpayCheckout 
  planId="growth" 
  planName="Growth Plan"
  amount={39900}
  description="Upgrade to 2,500 AI messages/month"
/>
```

### 5. Add WhatsApp Channel Filter

Update `apps/web/src/components/conversations/conversation-list.tsx`:

```typescript
import { ChannelBadge } from "./channel-badge";

const channelFilters = ["All", "WhatsApp", "SMS", "Email", "Phone"];

// Add channel state and filter logic
```

### 6. Update Conversation Item

Update `apps/web/src/components/conversations/conversation-item.tsx` to display channel:

```typescript
import { ChannelBadge } from "./channel-badge";

// In your component JSX:
<ChannelBadge channel={conversation.channel} size="sm" />
```

## 📋 Database Migration

Add these fields to Prisma schema:

```prisma
model Conversation {
  // ... existing fields
  channel           String      @default("WHATSAPP")
  whatsappPhone     String?
  
  @@index([channel])
}

model Message {
  // ... existing fields
  channel           String      @default("WHATSAPP")
  mediaType         String?
  
  @@index([channel])
}
```

Run migration:
```bash
cd apps/api
npx prisma migrate dev --name add_channel_support
```

## 🧪 Testing

### Test Razorpay
1. Go to http://localhost:3000/dashboard/billing
2. Click "Upgrade" button
3. Use test card: `4111111111111111`
4. Any future date and any CVV
5. Verify payment completes

### Test WhatsApp
1. Create conversations with different channels
2. Filter by channel in conversations list
3. Verify badge displays correctly

## 🔗 API Endpoints

### Razorpay
- `POST /billing/checkout` - Create payment order
- `POST /billing/verify-payment` - Verify and process payment

### WhatsApp (Future)
- `GET /conversations/filter?channel=WHATSAPP` - Filter conversations by channel
- `POST /conversations/whatsapp/webhook` - Handle incoming WhatsApp messages

## 📚 Resources

- Razorpay Docs: https://razorpay.com/docs/
- WhatsApp Providers:
  - Twilio: https://www.twilio.com/whatsapp
  - Gupshup: https://www.gupshup.io/
  - Meta: https://developers.facebook.com/docs/whatsapp/

## ⚠️ Important Notes

1. **Test Mode**: Always test with Razorpay test keys first
2. **Webhooks**: Set up webhook endpoints for production
3. **Encryption**: Protect sensitive keys in production
4. **Verification**: Always verify payment signatures before processing
5. **Idempotency**: Handle duplicate webhook events gracefully

## 🐛 Troubleshooting

**"Razorpay SDK not loaded"**
- Check that Razorpay script is loading from CDN
- Verify NEXT_PUBLIC_RAZORPAY_KEY_ID is set

**"Payment verification failed"**
- Check signature verification logic
- Verify webhook secret is correct
- Check order ID and payment ID match

**"Conversation channel not showing"**
- Verify database migration ran successfully
- Check conversation data includes channel field
- Clear browser cache

## 📞 Support

Refer to `INTEGRATION-GUIDE.md` for detailed implementation steps and code examples.
