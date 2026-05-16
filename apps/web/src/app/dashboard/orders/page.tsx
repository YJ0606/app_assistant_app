import { OrdersTable } from "@/components/orders/orders-table";

export const metadata = { title: "Orders" };

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500 text-sm mt-1">Track and manage all WhatsApp orders.</p>
        </div>
      </div>
      <OrdersTable />
    </div>
  );
}
