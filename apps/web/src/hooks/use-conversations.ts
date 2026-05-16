import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import type { Conversation } from "@/types/conversation";

export function useConversations(params?: { status?: string; search?: string }) {
  return useQuery({
    queryKey: ["conversations", params],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: Conversation[]; total: number }>(
        "/conversations",
        { params }
      );
      return data;
    },
  });
}

export function useConversation(id: string) {
  return useQuery({
    queryKey: ["conversations", id],
    queryFn: async () => {
      const { data } = await apiClient.get<Conversation>(`/conversations/${id}`);
      return data;
    },
    enabled: !!id,
  });
}

export function useAssignConversation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, userId }: { id: string; userId: string }) => {
      const { data } = await apiClient.patch(`/conversations/${id}/assign`, { userId });
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["conversations"] }),
  });
}

export function useToggleAI() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, isAiActive }: { id: string; isAiActive: boolean }) => {
      const { data } = await apiClient.patch(`/conversations/${id}/ai`, { isAiActive });
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["conversations"] }),
  });
}

export function useSendMessage() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ conversationId, content }: { conversationId: string; content: string }) => {
      const { data } = await apiClient.post(`/conversations/${conversationId}/messages`, { content });
      return data;
    },
    onSuccess: (_, { conversationId }) => {
      qc.invalidateQueries({ queryKey: ["conversations", conversationId] });
    },
  });
}
