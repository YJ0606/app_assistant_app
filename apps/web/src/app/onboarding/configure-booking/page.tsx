"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
export default function ConfigureBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="mb-6"><div className="text-sm text-gray-400 mb-1">Step 5 of 7</div><div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-brand-500 h-1.5 rounded-full" style={{ width: "71%" }} /></div></div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Configure Booking</h1>
          <p className="text-gray-500 text-sm mb-6">Set your available days and times for appointments.</p>
          <div className="space-y-3 mb-6">
            {days.map((day) => (
              <div key={day} className="flex items-center gap-4">
                <input type="checkbox" id={day} defaultChecked={day !== "Sunday"} className="accent-brand-500 w-4 h-4" />
                <label htmlFor={day} className="text-sm font-medium text-gray-700 w-24">{day}</label>
                <input type="time" defaultValue="09:00" className="border border-gray-200 rounded px-2 py-1 text-sm outline-none focus:border-brand-400" />
                <span className="text-gray-400 text-sm">to</span>
                <input type="time" defaultValue="18:00" className="border border-gray-200 rounded px-2 py-1 text-sm outline-none focus:border-brand-400" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Slot Duration (mins)</label><select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400"><option>15</option><option>30</option><option value="45" defaultValue="45">45</option><option>60</option><option>90</option></select></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Buffer Time (mins)</label><select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400"><option>0</option><option>5</option><option>10</option><option>15</option></select></div>
          </div>
          <div className="flex gap-3">
            <Link href="/onboarding/upload-catalog" className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Back</Link>
            <Link href="/onboarding/configure-ordering" className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">Continue <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
