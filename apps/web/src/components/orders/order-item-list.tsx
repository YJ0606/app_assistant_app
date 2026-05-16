interface Item { name: string; qty: number; price: number; total: number; }
export function OrderItemList({ items }: { items: Item[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-center justify-between text-sm">
          <div><div className="font-medium text-gray-900">{item.name}</div><div className="text-gray-400 text-xs">₹{item.price} × {item.qty}</div></div>
          <div className="font-semibold text-gray-900">₹{item.total.toLocaleString("en-IN")}</div>
        </div>
      ))}
    </div>
  );
}
