"use client";
import { useState } from "react";
import { Upload, Download, CheckCircle } from "lucide-react";
export function CatalogImport() {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-3">Download Template</h3>
        <p className="text-sm text-gray-500 mb-4">Download the CSV template and fill it with your catalog data.</p>
        <button className="flex items-center gap-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"><Download className="w-4 h-4" />Download CSV Template</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-3">Upload File</h3>
        {uploaded ? (
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-500" /><div><div className="text-sm font-medium text-green-800">catalog_items.csv uploaded</div><div className="text-xs text-green-600">48 items ready to import</div></div></div>
        ) : (
          <div onClick={() => setUploaded(true)} className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center cursor-pointer hover:border-brand-300 transition-colors">
            <Upload className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-600">Click to upload CSV or Excel</p>
            <p className="text-xs text-gray-400 mt-1">Max 5MB · CSV, XLSX</p>
          </div>
        )}
        {uploaded && (
          <div className="mt-4"><div className="bg-gray-50 rounded-lg p-4 text-sm font-mono text-gray-600 mb-4 text-xs leading-5">name,description,price,category,sku,stock<br/>Classic Haircut,Professional cut,299,Services,SVC-001,<br/>Beard Trim,Shape and trim,149,Services,SVC-002,</div>
            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg text-sm">Import 48 Items</button>
          </div>
        )}
      </div>
    </div>
  );
}
