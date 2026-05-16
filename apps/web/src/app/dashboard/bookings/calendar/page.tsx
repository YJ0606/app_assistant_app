import { BookingCalendar } from "@/components/bookings/booking-calendar";
export const metadata = { title: "Booking Calendar" };
export default function BookingCalendarPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Booking Calendar</h1><p className="text-gray-500 text-sm mt-1">Visual calendar view of all appointments.</p></div>
      <BookingCalendar />
    </div>
  );
}
