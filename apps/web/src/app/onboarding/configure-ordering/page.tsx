"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function ConfigureOrderingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="mb-6"><div className="text-sm text-gray-400 mb-1">Step 6 of 7</div><div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-brand-500 h-1.5 rounded-full" style={{ width: "86%" }} /></div></div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Configure Ordering</h1>
          <p className="text-gray-500 text-sm mb-6">Enable customers to place orders directly via WhatsApp.</p>
          <div className="space-y-5">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
              <div><div className="font-semibold text-gray-900 text-sm">Enable WhatsApp Ordering</div><div className="text-xs text-gray-500">Allow customers to browse catalog and place orders</div></div>
              <input type="checkbox" defaultChecked className="accent-brand-500 w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
              <div><div className="font-semibold text-gray-900 text-sm">Capture Delivery Address</div><div className="text-xs text-gray-500">Ask customers for their delivery address</div></div>
              <input type="checkbox" defaultChecked className="accent-brand-500 w-5 h-5" />
            </div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Minimum Order Amount (₹)</label><input type="number" defaultValue="199" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Delivery Charge (₹)</label><input type="number" defaultValue="49" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Order Confirmation Message</label><textarea rows={2} defaultValue="✅ Order confirmed! We'll process your order shortly. Track it here: {{link}}" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 resize-none" /></div>
          </div>
          <div className="flex gap-3 mt-6">
            <Link href="/onboarding/configure-booking" className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Back</Link>
            <Link href="/onboarding/select-plan" className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">Continue <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
