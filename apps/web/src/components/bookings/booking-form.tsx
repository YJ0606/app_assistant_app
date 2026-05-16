"use client";
export function BookingForm({ bookingId }: { bookingId?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1.5">Customer</label><input type="text" defaultValue="Priya Sharma" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Service</label><input type="text" defaultValue="Haircut + Beard Trim" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Duration (mins)</label><input type="number" defaultValue="45" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Date & Time</label><input type="datetime-local" defaultValue="2024-12-20T15:30" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
          <select defaultValue="CONFIRMED" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400">
            {["PENDING","CONFIRMED","COMPLETED","CANCELLED","NO_SHOW","RESCHEDULED"].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Notes</label><textarea rows={3} placeholder="Internal notes about this booking..." className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 resize-none" /></div>
      <div className="flex gap-3 pt-2">
        <button className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel Booking</button>
        <button className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 rounded-lg text-sm font-medium text-white">Save Changes</button>
      </div>
    </div>
  );
}
