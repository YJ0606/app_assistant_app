import { UsageMeter } from "@/components/billing/usage-meter";
export const metadata = { title: "Usage Details" };
export default function UsageDetailsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Usage Details</h1><p className="text-gray-500 text-sm mt-1">Detailed breakdown of your usage this billing period.</p></div>
      <UsageMeter />
    </div>
  );
}
