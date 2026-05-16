"use client";
import { MessageSquare, Calendar, ShoppingCart, Zap, BarChart3, Shield, Users, Bell } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI-Powered FAQ Bot",
    description: "Train your AI on your business FAQs. It answers customer questions instantly, 24/7, without human intervention.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Calendar,
    title: "Smart Booking System",
    description: "Customers can book appointments directly through WhatsApp. Automatic reminders reduce no-shows by 60%.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: ShoppingCart,
    title: "WhatsApp Commerce",
    description: "Showcase your catalog and take orders right inside WhatsApp. Complete checkout flow without leaving the app.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Zap,
    title: "Automation Flows",
    description: "Build powerful automation rules – keyword triggers, intent detection, after-hours replies, follow-ups and more.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track conversation volumes, response times, booking rates, and revenue generated through WhatsApp.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Users,
    title: "Human Handoff",
    description: "Seamlessly transfer complex conversations from AI to human agents. Full conversation history preserved.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Bell,
    title: "Broadcast Templates",
    description: "Send approved WhatsApp message templates for promotions, reminders, and transactional updates.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Shield,
    title: "Multi-Tenant & Secure",
    description: "Built for agencies and enterprises. Isolated tenant data, role-based access, and full audit logs.",
    color: "bg-teal-50 text-teal-600",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">Everything you need</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            One Platform, Infinite Possibilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From AI chat to bookings, orders, and analytics – WaAI is the complete
            WhatsApp business platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
