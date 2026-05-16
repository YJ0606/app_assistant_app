import { BusinessProfileForm } from "@/components/settings/business-profile-form";
export const metadata = { title: "Business Profile" };
export default function BusinessSettingsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Business Profile</h1><p className="text-gray-500 text-sm mt-1">Update your business information.</p></div>
      <BusinessProfileForm />
    </div>
  );
}
