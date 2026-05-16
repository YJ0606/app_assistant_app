"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Edit, Trash2, ToggleLeft, ToggleRight } from "lucide-react";

const faqs = [
  { id: "1", question: "What are your business hours?", answer: "We are open Monday to Saturday, 9 AM to 7 PM.", category: "General", isActive: true, hitCount: 234 },
  { id: "2", question: "How do I book an appointment?", answer: "You can book directly by typing 'book' or replying with '1' in this chat.", category: "Booking", isActive: true, hitCount: 189 },
  { id: "3", question: "What is your return policy?", answer: "We offer 30-day hassle-free returns. Contact us with your order number.", category: "Orders", isActive: true, hitCount: 145 },
  { id: "4", question: "Do you offer home delivery?", answer: "Yes! We deliver within 10 km radius. Delivery charge is ₹49.", category: "Delivery", isActive: true, hitCount: 98 },
  { id: "5", question: "What payment methods do you accept?", answer: "We accept UPI, credit/debit cards, net banking, and cash on delivery.", category: "Payment", isActive: false, hitCount: 76 },
];

export function FAQTable() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(faqs);

  const toggleActive = (id: string) => {
    setItems(items.map(f => f.id === id ? { ...f, isActive: !f.isActive } : f));
  };

  const filtered = items.filter(f =>
    f.question.toLowerCase().includes(search.toLowerCase()) ||
    f.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Search bar */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 max-w-sm">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search FAQs..."
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Question</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Answer Preview</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Category</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Hits</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Status</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((faq) => (
              <tr key={faq.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 max-w-xs">
                  <span className="font-medium text-gray-900 line-clamp-2">{faq.question}</span>
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs">
                  <span className="line-clamp-2">{faq.answer}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    {faq.category}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="font-medium text-gray-700">{faq.hitCount}</span>
                </td>
                <td className="px-4 py-3">
                  <button onClick={() => toggleActive(faq.id)} className="flex items-center gap-1.5">
                    {faq.isActive ? (
                      <>
                        <ToggleRight className="w-5 h-5 text-brand-500" />
                        <span className="text-xs text-brand-600 font-medium">Active</span>
                      </>
                    ) : (
                      <>
                        <ToggleLeft className="w-5 h-5 text-gray-400" />
                        <span className="text-xs text-gray-400 font-medium">Inactive</span>
                      </>
                    )}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <Link
                      href={`/dashboard/faq/${faq.id}`}
                      className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>No FAQs found. Add your first FAQ!</p>
        </div>
      )}
    </div>
  );
}
