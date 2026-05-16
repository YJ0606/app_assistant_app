import { Package, ShoppingCart } from "lucide-react";
interface ProductCardProps { name: string; description?: string; price: number; category?: string; imageUrl?: string; status: string; onAddToOrder?: () => void; }
const statusColor: Record<string, string> = { ACTIVE: "bg-green-50 text-green-700", INACTIVE: "bg-gray-50 text-gray-500", OUT_OF_STOCK: "bg-red-50 text-red-600" };
export function ProductCard({ name, description, price, category, imageUrl, status, onAddToOrder }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-36 bg-gray-100 flex items-center justify-center">
        {imageUrl ? <img src={imageUrl} alt={name} className="w-full h-full object-cover" /> : <Package className="w-10 h-10 text-gray-300" />}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">{name}</h3>
          <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full flex-shrink-0 ${statusColor[status]}`}>{status === "OUT_OF_STOCK" ? "Out" : status.toLowerCase()}</span>
        </div>
        {description && <p className="text-xs text-gray-500 line-clamp-2 mb-3">{description}</p>}
        {category && <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">{category}</span>}
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-gray-900">₹{price.toLocaleString("en-IN")}</span>
          {onAddToOrder && status === "ACTIVE" && (
            <button onClick={onAddToOrder} className="flex items-center gap-1 text-xs bg-brand-500 hover:bg-brand-600 text-white px-2.5 py-1.5 rounded-lg transition-colors"><ShoppingCart className="w-3 h-3" />Add</button>
          )}
        </div>
      </div>
    </div>
  );
}
