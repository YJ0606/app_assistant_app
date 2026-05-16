import { CatalogImport } from "@/components/catalog/catalog-import";
export const metadata = { title: "Import Catalog" };
export default function ImportCatalogPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Import Catalog</h1><p className="text-gray-500 text-sm mt-1">Bulk import products from a CSV or Excel file.</p></div>
      <CatalogImport />
    </div>
  );
}
