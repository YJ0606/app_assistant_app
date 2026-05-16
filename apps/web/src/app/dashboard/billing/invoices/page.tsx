import { InvoiceList } from "@/components/billing/invoice-list";
export const metadata = { title: "Invoices" };
export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Invoices</h1><p className="text-gray-500 text-sm mt-1">Your complete billing history.</p></div>
      <InvoiceList />
    </div>
  );
}
