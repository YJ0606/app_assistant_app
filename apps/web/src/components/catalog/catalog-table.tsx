"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Edit, Trash2, Package } from "lucide-react";

const items = [
  { id: "1", name: "Classic Haircut", description: "Professional haircut by expert stylists", price: 299, category: "Services", status: "ACTIVE" as const, stock: null, sku: "SVC-001" },
  { id: "2", name: "Beard Trim", description: "Shape and trim beard with precision", price: 149, category: "Services", status: "ACTIVE" as const, stock: null, sku: "SVC-002" },
  { id: "3", name: "Hair Color (Full)", description: "Full head coloring with premium products", price: 1499, category: "Services", status: "ACTIVE" as const, stock: null, sku: "SVC-003" },
  { id: "4", name: "Keratin Treatment", description: "Professional keratin smoothing treatment", price: 2999, category: "Services", status: "OUT_OF_STOCK" as const, stock: 0, sku: "SVC-004" },
  { id: "5", name: "Shampoo + Conditioner Set", description: "Premium hair care combo", price: 599, category: "Products", status: "ACTIVE" as const, stock: 24, sku: "PRD-001" },
];

const statusBadge: Record<string, string> = {
  ACTIVE: "bg-green-50 text-green-700",
  INACTIVE: "bg-gray-50 text-gray-500",
  OUT_OF_STOCK: "bg-red-50 text-red-600",
};

export function CatalogTable() {
  const [search, setSearch] = useState("");

  const filtered = items.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 max-w-sm">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search catalog..."
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Item</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">SKU</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Category</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Price</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Stock</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Status</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Package className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-xs text-gray-500 line-clamp-1">{item.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-500">{item.sku}</td>
                <td className="px-4 py-3">
                  <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-900">₹{item.price.toLocaleString("en-IN")}</td>
                <td className="px-4 py-3 text-gray-500">
                  {item.stock === null ? "—" : item.stock}
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusBadge[item.status]}`}>
                    {item.status.replace("_", " ")}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <Link
                      href={`/dashboard/catalog/${item.id}`}
                      className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
