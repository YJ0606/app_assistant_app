import { FAQForm } from "@/components/faq/faq-form";

export const metadata = { title: "Add FAQ" };

export default function NewFAQPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Add New FAQ</h1>
        <p className="text-gray-500 text-sm mt-1">Teach your AI how to answer this question.</p>
      </div>
      <FAQForm />
    </div>
  );
}
