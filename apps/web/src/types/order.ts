export interface Order {
  id: string;
  tenantId: string;
  customerId: string;
  status: OrderStatus;
  totalAmount: number;
  currency: string;
  deliveryAddress?: Record<string, string>;
  notes?: string;
  paymentRef?: string;
  paidAt?: string;
  orderItems?: OrderItem[];
  customer?: { name?: string; phone: string };
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus =
  | "DRAFT" | "PENDING_PAYMENT" | "CONFIRMED" | "PROCESSING"
  | "SHIPPED" | "DELIVERED" | "CANCELLED" | "REFUNDED";

export interface OrderItem {
  id: string;
  orderId: string;
  catalogItemId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  notes?: string;
  catalogItem?: { name: string };
}
