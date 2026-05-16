const usageItems = [
  { label: "AI Messages", used: 1847, total: 2500, unit: "messages", cost: "₹0" },
  { label: "Template Sends", used: 412, total: -1, unit: "sends", cost: "₹206" },
  { label: "Team Members", used: 3, total: 5, unit: "seats", cost: "₹0" },
  { label: "Catalog Items", used: 47, total: 500, unit: "items", cost: "₹0" },
  { label: "Bookings", used: 189, total: -1, unit: "bookings", cost: "₹0" },
  { label: "Orders", used: 94, total: -1, unit: "orders", cost: "₹0" },
];
export function UsageMeter() {
  return (
    <div className="space-y-4">
      {usageItems.map(item => (
        <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-start justify-between mb-3">
            <div><div className="font-semibold text-gray-900">{item.label}</div><div className="text-sm text-gray-500">{item.used.toLocaleString()} {item.total > 0 ? `/ ${item.total.toLocaleString()} ${item.unit}` : item.unit + " (unlimited)"}</div></div>
            <div className="text-right"><div className="text-sm font-medium text-gray-700">Extra cost</div><div className="text-sm text-gray-500">{item.cost}</div></div>
          </div>
          {item.total > 0 && (
            <div className="w-full bg-gray-100 rounded-full h-2.5"><div className={`h-2.5 rounded-full ${item.used / item.total > 0.8 ? "bg-red-500" : item.used / item.total > 0.6 ? "bg-yellow-500" : "bg-brand-500"}`} style={{ width: `${Math.min((item.used / item.total) * 100, 100)}%` }} /></div>
          )}
        </div>
      ))}
    </div>
  );
}
