"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
export default function BusinessDetailsPage() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    setTimeout(() => { setLoading(false); window.location.href = "/onboarding/connect-whatsapp"; }, 1000);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="mb-6"><div className="text-sm text-gray-400 mb-1">Step 1 of 7</div><div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-brand-500 h-1.5 rounded-full" style={{ width: "14%" }} /></div></div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Business Details</h1>
          <p className="text-gray-500 text-sm mb-6">Tell us about your business so we can personalise your setup.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name *</label><input type="text" required defaultValue="My Business" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Industry *</label>
              <select required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400">
                {["Healthcare","Salon & Spa","Restaurant","Education","Retail","Real Estate","Fitness","Finance","Other"].map(i => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Business Phone</label><input type="tel" placeholder="+91 98765 43210" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Website</label><input type="url" placeholder="https://yourbusiness.com" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
            </div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Address</label><textarea rows={2} placeholder="123, MG Road, Bangalore" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 resize-none" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Timezone</label><select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400"><option>Asia/Kolkata</option><option>UTC</option></select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Currency</label><select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400"><option>INR</option><option>USD</option><option>GBP</option></select></div>
            </div>
            <div className="flex gap-3 pt-2">
              <Link href="/onboarding" className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Back</Link>
              <button type="submit" disabled={loading} className="flex-1 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">{loading && <Loader2 className="w-4 h-4 animate-spin" />}Continue <ArrowRight className="w-4 h-4" /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
