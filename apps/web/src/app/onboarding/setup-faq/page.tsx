"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, Trash2, ArrowRight } from "lucide-react";
const defaults = [
  { q: "What are your business hours?", a: "We are open Monday to Saturday, 9 AM to 7 PM." },
  { q: "How do I book an appointment?", a: "Type 'book' or reply '1' and I'll guide you through booking." },
];
export default function SetupFAQPage() {
  const [faqs, setFaqs] = useState(defaults);
  const add = () => setFaqs([...faqs, { q: "", a: "" }]);
  const remove = (i: number) => setFaqs(faqs.filter((_, idx) => idx !== i));
  const update = (i: number, field: "q"|"a", v: string) => setFaqs(faqs.map((f, idx) => idx === i ? {...f, [field]: v} : f));
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-6"><div className="text-sm text-gray-400 mb-1">Step 3 of 7</div><div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-brand-500 h-1.5 rounded-full" style={{ width: "43%" }} /></div></div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Setup FAQ</h1>
          <p className="text-gray-500 text-sm mb-6">Add your most common questions. You can always add more later.</p>
          <div className="space-y-4 mb-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-semibold text-gray-400">FAQ {i + 1}</span>
                  <button onClick={() => remove(i)} className="text-gray-300 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                </div>
                <input value={faq.q} onChange={e => update(i, "q", e.target.value)} placeholder="Question..." className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand-400" />
                <textarea value={faq.a} onChange={e => update(i, "a", e.target.value)} placeholder="Answer..." rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand-400 resize-none" />
              </div>
            ))}
          </div>
          <button onClick={add} className="flex items-center gap-2 text-sm text-brand-600 font-medium hover:text-brand-700 mb-6"><Plus className="w-4 h-4" />Add Another FAQ</button>
          <div className="flex gap-3">
            <Link href="/onboarding/connect-whatsapp" className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Back</Link>
            <Link href="/onboarding/upload-catalog" className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">Save & Continue <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
