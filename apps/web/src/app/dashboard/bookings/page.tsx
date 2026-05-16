import Link from "next/link";
import { BookingList } from "@/components/bookings/booking-list";
import { Calendar } from "lucide-react";

export const metadata = { title: "Bookings" };

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
          <p className="text-gray-500 text-sm mt-1">Manage all customer appointments and bookings.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/bookings/calendar" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4" />
            Calendar View
          </Link>
        </div>
      </div>
      <BookingList />
    </div>
  );
}
