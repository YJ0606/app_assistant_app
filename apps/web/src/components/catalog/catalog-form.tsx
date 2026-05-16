"use client";
export function CatalogForm({ itemId }: { itemId?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Item Name *</label><input type="text" placeholder="e.g. Classic Haircut" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label><textarea rows={3} placeholder="Brief description..." className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 resize-none" /></div>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Price (₹) *</label><input type="number" placeholder="299" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">SKU</label><input type="text" placeholder="SVC-001" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label><input type="text" placeholder="Services" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Stock</label><input type="number" placeholder="Leave blank if unlimited" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
        <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400"><option value="ACTIVE">Active</option><option value="INACTIVE">Inactive</option><option value="OUT_OF_STOCK">Out of Stock</option></select>
      </div>
      <div className="flex gap-3 pt-2">
        <button type="button" className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
        <button type="submit" className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 rounded-lg text-sm font-medium text-white">Save Item</button>
      </div>
    </div>
  );
}
