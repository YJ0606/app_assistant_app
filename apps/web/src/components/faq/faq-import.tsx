"use client";
import { useState } from "react";
import { Upload, Download, CheckCircle } from "lucide-react";
export function FAQImport() {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-semibold text-gray-900 mb-2">Download Template</h3>
        <p className="text-sm text-gray-500 mb-3">Use our CSV template to format your FAQs correctly.</p>
        <button className="flex items-center gap-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"><Download className="w-4 h-4" />Download FAQ Template</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-semibold text-gray-900 mb-3">Upload CSV</h3>
        {uploaded ? (
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><div><div className="text-sm font-medium text-green-800">faqs.csv uploaded successfully</div><div className="text-xs text-green-600">24 FAQs ready to import</div></div></div>
        ) : (
          <div onClick={() => setUploaded(true)} className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-brand-300 transition-colors">
            <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Click to upload CSV</p>
            <p className="text-xs text-gray-400 mt-1">Columns: question, answer, category, keywords</p>
          </div>
        )}
        {uploaded && <button className="mt-4 w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg text-sm">Import 24 FAQs</button>}
      </div>
    </div>
  );
}
