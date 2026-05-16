import { FAQForm } from "@/components/faq/faq-form";
export default function EditFAQPage({ params }: { params: { faqId: string } }) {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Edit FAQ</h1><p className="text-gray-500 text-sm mt-1">Update this FAQ entry.</p></div>
      <FAQForm initialData={{ question: "What are your business hours?", answer: "We are open Monday to Saturday, 9 AM to 7 PM.", category: "General", keywords: ["hours","timings","open"], isActive: true }} />
    </div>
  );
}
