import { PricingCards } from "@/components/marketing/pricing-cards";
export const metadata = { title: "Pricing – WaAI" };
export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-500">Start free for 14 days. No credit card required.</p>
      </div>
      <PricingCards />
    </main>
  );
}
