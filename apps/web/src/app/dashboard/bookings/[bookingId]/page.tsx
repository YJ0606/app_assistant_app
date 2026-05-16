import { BookingForm } from "@/components/bookings/booking-form";
export default function BookingDetailPage({ params }: { params: { bookingId: string } }) {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Booking Details</h1><p className="text-gray-500 text-sm mt-1">View and manage this booking.</p></div>
      <BookingForm bookingId={params.bookingId} />
    </div>
  );
}
