import apiClient from "@/lib/api-client";
export const conversationService = {
  async list(params?: Record<string, string>) { const { data } = await apiClient.get("/conversations", { params }); return data.data; },
  async get(id: string) { const { data } = await apiClient.get(`/conversations/${id}`); return data.data; },
  async sendMessage(conversationId: string, content: string) { const { data } = await apiClient.post(`/conversations/${conversationId}/messages`, { content }); return data.data; },
  async assign(id: string, userId: string) { const { data } = await apiClient.patch(`/conversations/${id}/assign`, { userId }); return data.data; },
  async toggleAI(id: string, isAiActive: boolean) { const { data } = await apiClient.patch(`/conversations/${id}/ai`, { isAiActive }); return data.data; },
  async resolve(id: string) { const { data } = await apiClient.patch(`/conversations/${id}/resolve`, {}); return data.data; },
};
