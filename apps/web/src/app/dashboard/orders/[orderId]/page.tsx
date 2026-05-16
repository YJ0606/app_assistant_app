import { OrderDetail } from "@/components/orders/order-detail";
export default function OrderDetailPage({ params }: { params: { orderId: string } }) {
  return (
    <div className="max-w-3xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Order #1042</h1><p className="text-gray-500 text-sm mt-1">Placed on Dec 20, 2024 at 10:15 AM</p></div>
      <OrderDetail orderId={params.orderId} />
    </div>
  );
}
