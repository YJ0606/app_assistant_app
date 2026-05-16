import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import type { Tenant } from "@/types/tenant";

export function useTenantData() {
  return useQuery({
    queryKey: ["tenant"],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: Tenant }>("/tenants/me");
      return data.data;
    },
  });
}

export function useUpdateTenant() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: Partial<Tenant>) => {
      const { data } = await apiClient.patch<{ data: Tenant }>("/tenants/me", payload);
      return data.data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tenant"] }),
  });
}
