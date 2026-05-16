import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category?: string;
  isActive: boolean;
  priority: number;
  hitCount: number;
}

export function useFAQs(params?: { search?: string; category?: string }) {
  return useQuery({
    queryKey: ["faqs", params],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: FAQ[]; total: number }>("/faq", { params });
      return data;
    },
  });
}

export function useCreateFAQ() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: Omit<FAQ, "id" | "hitCount">) => {
      const { data } = await apiClient.post("/faq", payload);
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["faqs"] }),
  });
}

export function useUpdateFAQ() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...payload }: Partial<FAQ> & { id: string }) => {
      const { data } = await apiClient.patch(`/faq/${id}`, payload);
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["faqs"] }),
  });
}

export function useDeleteFAQ() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/faq/${id}`);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["faqs"] }),
  });
}
