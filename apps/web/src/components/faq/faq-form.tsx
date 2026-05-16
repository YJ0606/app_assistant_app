"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQFormProps {
  initialData?: {
    question?: string;
    answer?: string;
    category?: string;
    keywords?: string[];
    isActive?: boolean;
  };
  onSubmit?: (data: unknown) => void;
}

export function FAQForm({ initialData, onSubmit }: FAQFormProps) {
  const [question, setQuestion] = useState(initialData?.question ?? "");
  const [answer, setAnswer] = useState(initialData?.answer ?? "");
  const [category, setCategory] = useState(initialData?.category ?? "");
  const [keywords, setKeywords] = useState<string[]>(initialData?.keywords ?? []);
  const [keywordInput, setKeywordInput] = useState("");
  const [isActive, setIsActive] = useState(initialData?.isActive ?? true);

  const addKeyword = () => {
    const kw = keywordInput.trim().toLowerCase();
    if (kw && !keywords.includes(kw)) {
      setKeywords([...keywords, kw]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (kw: string) => {
    setKeywords(keywords.filter((k) => k !== kw));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ question, answer, category, keywords, isActive });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      {/* Question */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Question <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. What are your business hours?"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
          required
        />
      </div>

      {/* Answer */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Answer <span className="text-red-500">*</span>
        </label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Provide a clear, helpful answer..."
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors resize-none"
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
        >
          <option value="">Select a category</option>
          {["General", "Booking", "Orders", "Delivery", "Payment", "Returns", "Products", "Support"].map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Keywords */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Keywords</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addKeyword())}
            placeholder="Add keyword..."
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
          />
          <button
            type="button"
            onClick={addKeyword}
            className="px-3 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        {keywords.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw) => (
              <span key={kw} className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 text-xs font-medium px-2.5 py-1 rounded-full">
                {kw}
                <button type="button" onClick={() => removeKeyword(kw)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
        <p className="text-xs text-gray-400 mt-1">Keywords help the AI match this FAQ to customer messages.</p>
      </div>

      {/* Active toggle */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <div className="text-sm font-medium text-gray-700">Active</div>
          <div className="text-xs text-gray-400">Inactive FAQs won't be used by the AI</div>
        </div>
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className={`w-11 h-6 rounded-full transition-colors ${isActive ? "bg-brand-500" : "bg-gray-200"}`}
        >
          <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform mx-1 ${isActive ? "translate-x-5" : "translate-x-0"}`} />
        </button>
      </div>

      {/* Submit */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 rounded-lg text-sm font-medium text-white transition-colors"
        >
          Save FAQ
        </button>
      </div>
    </form>
  );
}
