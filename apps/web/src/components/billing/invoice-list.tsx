import { Download } from "lucide-react";
const invoices = [
  { id: "INV-2024-12", period: "Dec 2024", amount: 3999, status: "PAID", date: "Dec 1, 2024", paid: "Dec 3, 2024" },
  { id: "INV-2024-11", period: "Nov 2024", amount: 3999, status: "PAID", date: "Nov 1, 2024", paid: "Nov 2, 2024" },
  { id: "INV-2024-10", period: "Oct 2024", amount: 3999, status: "PAID", date: "Oct 1, 2024", paid: "Oct 1, 2024" },
  { id: "INV-2024-09", period: "Sep 2024", amount: 1499, status: "PAID", date: "Sep 1, 2024", paid: "Sep 4, 2024" },
];
const badgeColor: Record<string, string> = { PAID: "bg-green-50 text-green-700", OVERDUE: "bg-red-50 text-red-700", PENDING: "bg-yellow-50 text-yellow-700" };
export function InvoiceList() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead><tr className="bg-gray-50 border-b border-gray-100"><th className="text-left px-4 py-3 text-gray-500 font-medium">Invoice</th><th className="text-left px-4 py-3 text-gray-500 font-medium">Period</th><th className="text-left px-4 py-3 text-gray-500 font-medium">Amount</th><th className="text-left px-4 py-3 text-gray-500 font-medium">Status</th><th className="text-left px-4 py-3 text-gray-500 font-medium">Date</th><th className="text-left px-4 py-3 text-gray-500 font-medium">Actions</th></tr></thead>
        <tbody className="divide-y divide-gray-50">
          {invoices.map(inv => (
            <tr key={inv.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 font-mono text-gray-700 text-xs">{inv.id}</td>
              <td className="px-4 py-3 text-gray-700">{inv.period}</td>
              <td className="px-4 py-3 font-semibold text-gray-900">₹{inv.amount.toLocaleString("en-IN")}</td>
              <td className="px-4 py-3"><span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeColor[inv.status]}`}>{inv.status}</span></td>
              <td className="px-4 py-3 text-gray-500 text-xs">{inv.date}</td>
              <td className="px-4 py-3"><button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><Download className="w-4 h-4" /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
