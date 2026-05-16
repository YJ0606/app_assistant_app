import { FeaturesGrid } from "@/components/marketing/features-grid";
export const metadata = { title: "Features – WaAI" };
export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Everything Your Business Needs</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">One platform to automate WhatsApp conversations, bookings, orders, and more.</p>
      </div>
      <FeaturesGrid />
    </main>
  );
}
