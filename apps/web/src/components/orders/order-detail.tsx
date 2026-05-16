import { OrderStatusBadge } from "./order-status-badge";
import { OrderItemList } from "./order-item-list";
export function OrderDetail({ orderId }: { orderId: string }) {
  const order = { customer: "Anita Patel", phone: "+91 76543 21098", status: "CONFIRMED" as const, total: 1249, items: [{ name: "Shampoo + Conditioner Set", qty: 2, price: 599, total: 1198 }, { name: "Hair Serum", qty: 1, price: 51, total: 51 }], address: "123, MG Road, Bangalore – 560001", paymentRef: "PAY_abc123" };
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="font-semibold text-gray-900 text-lg">{order.customer}</div>
            <div className="text-sm text-gray-500">{order.phone}</div>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="text-gray-500">Delivery Address:</span><div className="text-gray-900 mt-0.5">{order.address}</div></div>
          <div><span className="text-gray-500">Payment Ref:</span><div className="text-gray-900 font-mono mt-0.5">{order.paymentRef}</div></div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
        <OrderItemList items={order.items} />
        <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-bold text-gray-900"><span>Total</span><span>₹{order.total.toLocaleString("en-IN")}</span></div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-semibold text-gray-900 mb-3">Update Status</h3>
        <div className="flex gap-3">
          <select defaultValue="CONFIRMED" className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400">
            {["CONFIRMED","PROCESSING","SHIPPED","DELIVERED","CANCELLED","REFUNDED"].map(s => <option key={s}>{s}</option>)}
          </select>
          <button className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-sm font-medium">Update</button>
        </div>
      </div>
    </div>
  );
}
