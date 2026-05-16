"use client";
import { useState } from "react";
import { Calendar, Clock, User, CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react";

const bookings = [
  { id: "1", customer: "Priya Sharma", phone: "+91 98765 43210", service: "Haircut + Beard Trim", scheduledAt: "2024-12-20 15:30", duration: 45, status: "CONFIRMED" as const, reminderSent: true },
  { id: "2", customer: "Rahul Kumar", phone: "+91 87654 32109", service: "Hair Color", scheduledAt: "2024-12-20 16:30", duration: 90, status: "PENDING" as const, reminderSent: false },
  { id: "3", customer: "Anita Patel", phone: "+91 76543 21098", service: "Keratin Treatment", scheduledAt: "2024-12-21 10:00", duration: 120, status: "CONFIRMED" as const, reminderSent: false },
  { id: "4", customer: "Deepak Shah", phone: "+91 65432 10987", service: "Classic Haircut", scheduledAt: "2024-12-19 11:00", duration: 30, status: "COMPLETED" as const, reminderSent: true },
  { id: "5", customer: "Sunita Rao", phone: "+91 54321 09876", service: "Hair Color", scheduledAt: "2024-12-18 14:00", duration: 90, status: "CANCELLED" as const, reminderSent: false },
];

const statusConfig: Record<string, { label: string; color: string; icon: unknown }> = {
  PENDING: { label: "Pending", color: "bg-yellow-50 text-yellow-700", icon: AlertCircle },
  CONFIRMED: { label: "Confirmed", color: "bg-green-50 text-green-700", icon: CheckCircle },
  COMPLETED: { label: "Completed", color: "bg-blue-50 text-blue-700", icon: CheckCircle },
  CANCELLED: { label: "Cancelled", color: "bg-red-50 text-red-700", icon: XCircle },
  RESCHEDULED: { label: "Rescheduled", color: "bg-purple-50 text-purple-700", icon: RefreshCw },
  NO_SHOW: { label: "No Show", color: "bg-gray-50 text-gray-600", icon: AlertCircle },
};

export function BookingList() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Pending", "Confirmed", "Completed", "Cancelled"];

  const filtered = bookings.filter(b =>
    filter === "All" || b.status === filter.toUpperCase()
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex gap-2">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
              filter === f ? "bg-brand-500 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="divide-y divide-gray-50">
        {filtered.map((booking) => {
          const cfg = statusConfig[booking.status];
          const Icon = cfg.icon as React.ElementType;

          return (
            <div key={booking.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-600 flex-shrink-0">
                    {booking.customer.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{booking.customer}</span>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${cfg.color}`}>
                        <Icon className="w-3 h-3" />
                        {cfg.label}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">{booking.service}</div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {booking.scheduledAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {booking.duration} min
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {booking.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {booking.reminderSent && (
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                      Reminder sent ✓
                    </span>
                  )}
                  {booking.status === "PENDING" && (
                    <button className="text-xs font-medium bg-brand-500 text-white px-3 py-1.5 rounded-lg hover:bg-brand-600 transition-colors">
                      Confirm
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
