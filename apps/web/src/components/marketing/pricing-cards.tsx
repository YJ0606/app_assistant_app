"use client";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 1499,
    period: "month",
    description: "Perfect for small businesses just getting started.",
    messages: 500,
    features: [
      "500 AI messages / month",
      "1 WhatsApp number",
      "FAQ bot",
      "Basic analytics",
      "Email support",
      "2 team members",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: 3999,
    period: "month",
    description: "For growing businesses with higher volumes.",
    messages: 2500,
    features: [
      "2,500 AI messages / month",
      "1 WhatsApp number",
      "FAQ + Booking + Catalog",
      "Orders & payments",
      "Advanced analytics",
      "Human handoff",
      "5 team members",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: 9999,
    period: "month",
    description: "For power users and agencies managing multiple clients.",
    messages: 10000,
    features: [
      "10,000 AI messages / month",
      "3 WhatsApp numbers",
      "All Growth features",
      "Multi-tenant management",
      "Custom automation flows",
      "Webhook integrations",
      "Unlimited team members",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingCards() {
  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start with a 14-day free trial. No credit card required.
            Scale as your business grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-brand-500 shadow-2xl shadow-brand-500/10 scale-105"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-500 text-lg">₹</span>
                  <span className="text-5xl font-extrabold text-gray-900">
                    {plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.id === "pro" ? "/contact" : "/register"}
                className={`w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-brand-500/30"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          All plans include: SSL encryption · GDPR compliant · 99.9% uptime SLA
        </p>
      </div>
    </section>
  );
}
