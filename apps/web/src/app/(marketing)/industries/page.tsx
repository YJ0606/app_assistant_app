export const metadata = { title: "Industries – WaAI" };
const industries = [
  { name: "Healthcare & Clinics", emoji: "🏥", desc: "Appointment booking, reminders, FAQ about services and timings." },
  { name: "Salons & Spas", emoji: "💇", desc: "Slot booking, service catalog, reminder automation." },
  { name: "Restaurants & Food", emoji: "🍽️", desc: "Menu catalog, online ordering, delivery tracking via WhatsApp." },
  { name: "Education", emoji: "📚", desc: "Enrollment queries, fee reminders, course catalog." },
  { name: "Real Estate", emoji: "🏠", desc: "Property listings, site visit booking, follow-up automation." },
  { name: "Retail & E-commerce", emoji: "🛍️", desc: "Product catalog, order management, customer support." },
  { name: "Fitness & Wellness", emoji: "💪", desc: "Class scheduling, membership queries, trainer booking." },
  { name: "Financial Services", emoji: "💰", desc: "Loan queries, appointment booking, document collection." },
];
export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Built for Every Industry</h1>
          <p className="text-xl text-gray-500">WaAI adapts to your business, whatever your industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((i) => (
            <div key={i.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all">
              <div className="text-4xl mb-4">{i.emoji}</div>
              <h3 className="font-bold text-gray-900 mb-2">{i.name}</h3>
              <p className="text-gray-500 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
