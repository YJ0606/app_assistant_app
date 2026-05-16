export const metadata = { title: "Analytics" };

const weekData = [
  { day: "Mon", messages: 320, resolved: 280, bookings: 12, orders: 8 },
  { day: "Tue", messages: 412, resolved: 380, bookings: 18, orders: 14 },
  { day: "Wed", messages: 290, resolved: 260, bookings: 9, orders: 6 },
  { day: "Thu", messages: 487, resolved: 440, bookings: 22, orders: 17 },
  { day: "Fri", messages: 560, resolved: 510, bookings: 31, orders: 24 },
  { day: "Sat", messages: 398, resolved: 360, bookings: 25, orders: 19 },
  { day: "Sun", messages: 180, resolved: 160, bookings: 8, orders: 4 },
];

const maxVal = Math.max(...weekData.map(d => d.messages));

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 text-sm mt-1">Insights into your WhatsApp AI assistant performance.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Messages", value: "12,847", sub: "This month", change: "+18%" },
          { label: "AI Resolution Rate", value: "87.3%", sub: "Avg this month", change: "+3%" },
          { label: "Avg Response Time", value: "< 2s", sub: "AI responses", change: "stable" },
          { label: "Customer Satisfaction", value: "4.8/5", sub: "Based on 234 ratings", change: "+0.2" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="text-3xl font-bold text-gray-900">{kpi.value}</div>
            <div className="text-sm font-medium text-gray-700 mt-1">{kpi.label}</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-gray-400">{kpi.sub}</span>
              <span className="text-xs text-green-600 font-medium">{kpi.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-6">Weekly Message Volume</h3>
        <div className="flex items-end gap-4 h-48">
          {weekData.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end gap-0.5 h-40">
                <div
                  className="flex-1 bg-brand-500 rounded-t opacity-80"
                  style={{ height: `${(d.messages / maxVal) * 100}%` }}
                  title={`Messages: ${d.messages}`}
                />
                <div
                  className="flex-1 bg-brand-200 rounded-t opacity-80"
                  style={{ height: `${(d.resolved / maxVal) * 100}%` }}
                  title={`Resolved: ${d.resolved}`}
                />
              </div>
              <span className="text-xs text-gray-400">{d.day}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-4 text-xs text-gray-500">
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-brand-500" /> Messages</div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-brand-200" /> Resolved</div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Message Breakdown</h3>
          <div className="space-y-3">
            {[
              { label: "FAQ Auto-resolved", count: 8420, pct: 65, color: "bg-brand-500" },
              { label: "Booking flows", count: 1847, pct: 14, color: "bg-purple-500" },
              { label: "Order flows", count: 1293, pct: 10, color: "bg-orange-500" },
              { label: "Human handoff", count: 1287, pct: 11, color: "bg-yellow-500" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-medium text-gray-900">{item.count.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Top Performing Hours</h3>
          <div className="space-y-2">
            {[
              { hour: "10 AM – 12 PM", msgs: 2847 },
              { hour: "2 PM – 4 PM", msgs: 2341 },
              { hour: "6 PM – 8 PM", msgs: 1987 },
              { hour: "8 AM – 10 AM", msgs: 1654 },
              { hour: "4 PM – 6 PM", msgs: 1432 },
            ].map((h) => (
              <div key={h.hour} className="flex items-center justify-between text-sm py-1.5 border-b border-gray-50 last:border-0">
                <span className="text-gray-600">{h.hour}</span>
                <span className="font-medium text-gray-900">{h.msgs.toLocaleString()} msgs</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
