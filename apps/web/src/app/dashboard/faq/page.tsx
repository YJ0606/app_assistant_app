import Link from "next/link";
import { FAQTable } from "@/components/faq/faq-table";
import { Plus, Upload } from "lucide-react";

export const metadata = { title: "FAQ Management" };

export default function FAQPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">FAQ Management</h1>
          <p className="text-gray-500 text-sm mt-1">Train your AI with frequently asked questions.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/faq/import"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-4 h-4" />
            Import CSV
          </Link>
          <Link
            href="/dashboard/faq/new"
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add FAQ
          </Link>
        </div>
      </div>
      <FAQTable />
    </div>
  );
}
