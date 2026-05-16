import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import type { CatalogItem } from "@/types/catalog";

export function useCatalog(params?: { search?: string; category?: string; status?: string }) {
  return useQuery({
    queryKey: ["catalog", params],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: CatalogItem[]; total: number }>("/catalog", { params });
      return data;
    },
  });
}

export function useCreateCatalogItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: Omit<CatalogItem, "id" | "tenantId" | "createdAt" | "updatedAt">) => {
      const { data } = await apiClient.post("/catalog", payload);
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["catalog"] }),
  });
}

export function useUpdateCatalogItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...payload }: Partial<CatalogItem> & { id: string }) => {
      const { data } = await apiClient.patch(`/catalog/${id}`, payload);
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["catalog"] }),
  });
}

export function useDeleteCatalogItem() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => { await apiClient.delete(`/catalog/${id}`); },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["catalog"] }),
  });
}
