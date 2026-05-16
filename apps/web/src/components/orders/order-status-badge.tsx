type OrderStatus = "DRAFT" | "PENDING_PAYMENT" | "CONFIRMED" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED" | "REFUNDED";

const config: Record<OrderStatus, { label: string; color: string }> = {
  DRAFT:           { label: "Draft",           color: "bg-gray-50 text-gray-500" },
  PENDING_PAYMENT: { label: "Pending Payment", color: "bg-yellow-50 text-yellow-700" },
  CONFIRMED:       { label: "Confirmed",       color: "bg-blue-50 text-blue-700" },
  PROCESSING:      { label: "Processing",      color: "bg-indigo-50 text-indigo-700" },
  SHIPPED:         { label: "Shipped",         color: "bg-purple-50 text-purple-700" },
  DELIVERED:       { label: "Delivered",       color: "bg-green-50 text-green-700" },
  CANCELLED:       { label: "Cancelled",       color: "bg-red-50 text-red-700" },
  REFUNDED:        { label: "Refunded",        color: "bg-orange-50 text-orange-700" },
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const { label, color } = config[status];
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${color}`}>
      {label}
    </span>
  );
}
