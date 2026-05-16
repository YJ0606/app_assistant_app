export interface CatalogItem {
  id: string;
  tenantId: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  imageUrl?: string;
  sku?: string;
  category?: string;
  tags: string[];
  status: CatalogItemStatus;
  stock?: number;
  waProductId?: string;
  createdAt: string;
  updatedAt: string;
}

export type CatalogItemStatus = "ACTIVE" | "INACTIVE" | "OUT_OF_STOCK";
