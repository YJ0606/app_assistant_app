export interface Subscription {
  id: string;
  tenantId: string;
  planId: PlanId;
  status: SubscriptionStatus;
  trialEndsAt?: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  monthlyMessages: number;
}

export type PlanId = "starter" | "growth" | "pro";

export type SubscriptionStatus =
  | "ACTIVE" | "PAST_DUE" | "CANCELLED" | "TRIALING" | "PAUSED";

export interface Invoice {
  id: string;
  tenantId: string;
  invoiceNumber: string;
  status: InvoiceStatus;
  amount: number;
  tax: number;
  total: number;
  currency: string;
  periodStart: string;
  periodEnd: string;
  dueDate: string;
  paidAt?: string;
  lineItems: LineItem[];
  createdAt: string;
}

export type InvoiceStatus = "DRAFT" | "SENT" | "PAID" | "VOID" | "OVERDUE";

export interface LineItem {
  description: string;
  amount: number;
}

export interface UsageRecord {
  id: string;
  tenantId: string;
  period: string;
  messages: number;
  aiReplies: number;
  bookings: number;
  orders: number;
  customers: number;
  cost: number;
}
