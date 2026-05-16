"use client";
import Link from "next/link";
import { useState } from "react";
import { OrderStatusBadge } from "./order-status-badge";
import { Search, Eye } from "lucide-react";

const orders = [
  { id: "1", orderNumber: "#1042", customer: "Anita Patel", phone: "+91 76543 21098", items: 3, total: 1249, status: "CONFIRMED" as const, createdAt: "2024-12-20 10:15" },
  { id: "2", orderNumber: "#1041", customer: "Deepak Shah", phone: "+91 65432 10987", items: 1, total: 599, status: "DELIVERED" as const, createdAt: "2024-12-19 14:30" },
  { id: "3", orderNumber: "#1040", customer: "Sunita Rao", phone: "+91 54321 09876", items: 5, total: 2899, status: "PROCESSING" as const, createdAt: "2024-12-19 11:00" },
  { id: "4", orderNumber: "#1039", customer: "Priya Sharma", phone: "+91 98765 43210", items: 2, total: 749, status: "PENDING_PAYMENT" as const, createdAt: "2024-12-18 16:45" },
  { id: "5", orderNumber: "#1038", customer: "Rahul Kumar", phone: "+91 87654 32109", items: 1, total: 299, status: "CANCELLED" as const, createdAt: "2024-12-18 09:20" },
];

export function OrdersTable() {
  const [search, setSearch] = useState("");

  const filtered = orders.filter(o =>
    o.customer.toLowerCase().includes(search.toLowerCase()) ||
    o.orderNumber.includes(search)
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 max-w-sm">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search orders..."
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Order</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Customer</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Items</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Total</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Status</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Date</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-semibold text-gray-900">{order.orderNumber}</td>
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{order.customer}</div>
                  <div className="text-xs text-gray-400">{order.phone}</div>
                </td>
                <td className="px-4 py-3 text-gray-600">{order.items} item{order.items > 1 ? "s" : ""}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">₹{order.total.toLocaleString("en-IN")}</td>
                <td className="px-4 py-3">
                  <OrderStatusBadge status={order.status} />
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">{order.createdAt}</td>
                <td className="px-4 py-3">
                  <Link
                    href={`/dashboard/orders/${order.id}`}
                    className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors inline-flex"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
