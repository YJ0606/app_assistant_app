import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import type { Order } from "@/types/order";

export function useOrders(params?: { status?: string; search?: string }) {
  return useQuery({
    queryKey: ["orders", params],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: Order[]; total: number }>("/orders", { params });
      return data;
    },
  });
}

export function useOrder(id: string) {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: Order }>(`/orders/${id}`);
      return data.data;
    },
    enabled: !!id,
  });
}

export function useUpdateOrderStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { data } = await apiClient.patch(`/orders/${id}/status`, { status });
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["orders"] }),
  });
}
