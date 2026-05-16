import { CatalogForm } from "@/components/catalog/catalog-form";
export const metadata = { title: "New Catalog Item" };
export default function NewCatalogItemPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Add Catalog Item</h1><p className="text-gray-500 text-sm mt-1">Add a new product or service to your catalog.</p></div>
      <CatalogForm />
    </div>
  );
}
