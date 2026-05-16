"use client";
import Link from "next/link";
import { Upload, ArrowRight } from "lucide-react";
export default function UploadCatalogPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="mb-6"><div className="text-sm text-gray-400 mb-1">Step 4 of 7</div><div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-brand-500 h-1.5 rounded-full" style={{ width: "57%" }} /></div></div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Upload Catalog</h1>
          <p className="text-gray-500 text-sm mb-6">Add your products or services. Customers can browse and order via WhatsApp.</p>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center mb-6 hover:border-brand-300 transition-colors cursor-pointer">
            <Upload className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm font-medium">Drag & drop a CSV file here</p>
            <p className="text-gray-400 text-xs mt-1">or click to browse</p>
            <p className="text-gray-400 text-xs mt-3">Supported: CSV, Excel (.xlsx)</p>
          </div>
          <div className="flex items-center gap-3 mb-6"><div className="flex-1 border-t border-gray-200" /><span className="text-gray-400 text-sm">or add manually</span><div className="flex-1 border-t border-gray-200" /></div>
          <div className="space-y-3 mb-6">
            <input type="text" placeholder="Product/Service Name" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" />
            <div className="grid grid-cols-2 gap-3">
              <input type="number" placeholder="Price (₹)" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" />
              <input type="text" placeholder="Category" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" />
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/onboarding/setup-faq" className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Back</Link>
            <Link href="/onboarding/configure-booking" className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">Continue <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="mt-3"><Link href="/onboarding/configure-booking" className="text-sm text-gray-400 hover:text-gray-600">Skip for now →</Link></div>
        </div>
      </div>
    </div>
  );
}
