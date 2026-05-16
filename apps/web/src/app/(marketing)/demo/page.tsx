import Link from "next/link";
export const metadata = { title: "Live Demo – WaAI" };
export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">See WaAI in Action</h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">Watch how WaAI handles real customer conversations, bookings, and orders automatically on WhatsApp.</p>
        <div className="bg-gray-900 rounded-2xl p-8 text-left mb-10 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-gray-400 text-sm ml-2">WaAI – Live Conversation</span>
          </div>
          <div className="space-y-4 text-sm">
            {[
              { from: "Customer", msg: "Hi! I want to book an appointment", side: "left" },
              { from: "WaAI Bot", msg: "Hello! 👋 I'd be happy to help you book an appointment. What service are you interested in?\n\n1️⃣ Haircut – ₹299\n2️⃣ Beard Trim – ₹149\n3️⃣ Hair Color – ₹1,499\n\nReply with a number to select.", side: "right" },
              { from: "Customer", msg: "1", side: "left" },
              { from: "WaAI Bot", msg: "Great choice! 💇 Available slots for today:\n\n🕐 11:00 AM\n🕑 2:00 PM\n🕓 4:30 PM\n\nWhich time works for you?", side: "right" },
              { from: "Customer", msg: "4:30 PM", side: "left" },
              { from: "WaAI Bot", msg: "✅ Booking Confirmed!\n\nService: Haircut\nDate: Today\nTime: 4:30 PM\nAmount: ₹299\n\nYou'll receive a reminder 1 hour before. See you soon! 😊", side: "right" },
            ].map((m, i) => (
              <div key={i} className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs px-4 py-2 rounded-xl text-sm whitespace-pre-line ${m.side === "right" ? "bg-brand-500 text-white" : "bg-gray-700 text-gray-100"}`}>
                  <div className={`text-xs font-semibold mb-1 ${m.side === "right" ? "text-brand-100" : "text-gray-400"}`}>{m.from}</div>
                  {m.msg}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="/register" className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">Start Free Trial</Link>
          <Link href="/contact" className="border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-xl text-lg transition-colors">Talk to Sales</Link>
        </div>
      </div>
    </main>
  );
}
