import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import type { AutomationFlow } from "@/types/automation";

export function useAutomations() {
  return useQuery({
    queryKey: ["automations"],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: AutomationFlow[] }>("/automations");
      return data.data;
    },
  });
}

export function useCreateAutomation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: Partial<AutomationFlow>) => {
      const { data } = await apiClient.post("/automations", payload);
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["automations"] }),
  });
}

export function useToggleAutomation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, isActive }: { id: string; isActive: boolean }) => {
      const { data } = await apiClient.patch(`/automations/${id}/toggle`, { isActive });
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["automations"] }),
  });
}

export function useDeleteAutomation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/automations/${id}`);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["automations"] }),
  });
}
