"use client";

// Simple chart component without external recharts dependency for preview
const data = [
  { name: "Week 1", messages: 2400, bookings: 34, orders: 12 },
  { name: "Week 2", messages: 3200, bookings: 45, orders: 18 },
  { name: "Week 3", messages: 2800, bookings: 38, orders: 22 },
  { name: "Week 4", messages: 4100, bookings: 72, orders: 42 },
];

const maxMessages = Math.max(...data.map(d => d.messages));

export function PipelineChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900">Message Volume</h3>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-brand-500" />
            <span>Messages</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span>Bookings</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span>Orders</span>
          </div>
        </div>
      </div>

      {/* Simple bar chart */}
      <div className="flex items-end gap-4 h-48">
        {data.map((d) => (
          <div key={d.name} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex items-end gap-1 h-40">
              <div
                className="flex-1 bg-brand-500 rounded-t-sm opacity-80"
                style={{ height: `${(d.messages / maxMessages) * 100}%` }}
                title={`Messages: ${d.messages}`}
              />
              <div
                className="flex-1 bg-purple-500 rounded-t-sm opacity-80"
                style={{ height: `${(d.bookings / maxMessages) * 100 * 8}%` }}
                title={`Bookings: ${d.bookings}`}
              />
              <div
                className="flex-1 bg-orange-500 rounded-t-sm opacity-80"
                style={{ height: `${(d.orders / maxMessages) * 100 * 8}%` }}
                title={`Orders: ${d.orders}`}
              />
            </div>
            <span className="text-xs text-gray-400">{d.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
