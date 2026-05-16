"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Owner, Mehta Dental Clinic",
    avatar: "AM",
    rating: 5,
    text: "WaAI cut our appointment scheduling calls by 80%. Patients now book directly on WhatsApp and we get reminders automatically. Game changer!",
  },
  {
    name: "Sunita Rao",
    title: "CEO, FreshFoods Delivery",
    avatar: "SR",
    rating: 5,
    text: "We receive 200+ orders a day through WhatsApp now. The catalog and ordering flow is seamless. Our customers love it.",
  },
  {
    name: "Kiran Joshi",
    title: "Manager, Luxe Salon Chain",
    avatar: "KJ",
    rating: 5,
    text: "Managing 5 salon branches with one WhatsApp AI is incredible. Booking, FAQ, promotions – all automated. ROI in 2 weeks!",
  },
  {
    name: "Deepak Shah",
    title: "Founder, TechFix Services",
    avatar: "DS",
    rating: 5,
    text: "The human handoff feature is brilliant. AI handles 90% of queries, and I step in only when needed. Saves 4+ hours daily.",
  },
  {
    name: "Priya Nair",
    title: "Director, LearnSmart Academy",
    avatar: "PN",
    rating: 5,
    text: "Student inquiries are now handled instantly. Enrollment conversions improved 35% since switching to WaAI.",
  },
  {
    name: "Ravi Gupta",
    title: "CTO, Shopify Agency",
    avatar: "RG",
    rating: 5,
    text: "We resell WaAI to 30+ clients. The multi-tenant system and white-labeling make it perfect for our agency model.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">Customer Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Loved by Businesses Across India
          </h2>
          <p className="text-xl text-gray-600">
            Join 500+ businesses automating their WhatsApp operations with WaAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
