"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle, Zap, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-emerald-50 pt-20 pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Zap className="w-4 h-4" />
            <span>Now with GPT-4o powered responses</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Business on{" "}
            <span className="text-brand-500">WhatsApp</span>,{" "}
            <br className="hidden md:block" />
            Supercharged with AI
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Automate FAQs, bookings, and orders on WhatsApp. Let AI handle
            routine conversations while you focus on growing your business.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-xl text-lg border border-gray-200 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-brand-500" />
              See Live Demo
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-500" />
              <span>WhatsApp Business API official partner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span>14-day free trial, no credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span>Setup in under 30 minutes</span>
            </div>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-20 relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 text-gray-400 text-sm">WaAI Dashboard</span>
            </div>
            {/* Mock dashboard preview */}
            <div className="grid grid-cols-12 h-[480px]">
              {/* Sidebar */}
              <div className="col-span-2 bg-gray-900 p-4">
                <div className="space-y-3">
                  {["Dashboard", "Conversations", "Automations", "FAQ", "Catalog", "Bookings", "Orders", "Analytics"].map((item) => (
                    <div key={item} className={`text-xs px-3 py-2 rounded-lg ${item === "Dashboard" ? "bg-brand-500 text-white" : "text-gray-400"}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Main content */}
              <div className="col-span-10 p-6 bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-800 mb-4">Overview</h3>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Messages Today", value: "1,284", color: "text-brand-500" },
                    { label: "Active Conversations", value: "47", color: "text-blue-500" },
                    { label: "Bookings", value: "23", color: "text-purple-500" },
                    { label: "Orders", value: "18", color: "text-orange-500" },
                  ].map((m) => (
                    <div key={m.label} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className={`text-2xl font-bold ${m.color}`}>{m.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
                {/* Conversation list mock */}
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <div className="space-y-3">
                    {[
                      { name: "Priya Sharma", msg: "I'd like to book a appointment for next week", time: "2m ago", status: "AI" },
                      { name: "Rahul Kumar", msg: "What are your delivery charges?", time: "5m ago", status: "AI" },
                      { name: "Anita Patel", msg: "My order hasn't arrived yet", time: "12m ago", status: "Human" },
                    ].map((c) => (
                      <div key={c.name} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
                            {c.name[0]}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">{c.name}</div>
                            <div className="text-xs text-gray-500 truncate max-w-48">{c.msg}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${c.status === "AI" ? "bg-brand-50 text-brand-600" : "bg-orange-50 text-orange-600"}`}>
                            {c.status}
                          </span>
                          <span className="text-xs text-gray-400">{c.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
