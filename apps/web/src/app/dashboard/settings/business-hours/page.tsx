import { BusinessHoursForm } from "@/components/settings/business-hours-form";
export const metadata = { title: "Business Hours" };
export default function BusinessHoursPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Business Hours</h1><p className="text-gray-500 text-sm mt-1">Set when your AI responds vs. sends after-hours replies.</p></div>
      <BusinessHoursForm />
    </div>
  );
}
