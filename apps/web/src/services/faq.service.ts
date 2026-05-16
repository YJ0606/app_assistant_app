import apiClient from "@/lib/api-client";
export const faqService = {
  async list(params?: Record<string, string>) { const { data } = await apiClient.get("/faq", { params }); return data.data; },
  async create(payload: unknown) { const { data } = await apiClient.post("/faq", payload); return data.data; },
  async update(id: string, payload: unknown) { const { data } = await apiClient.patch(`/faq/${id}`, payload); return data.data; },
  async delete(id: string) { await apiClient.delete(`/faq/${id}`); },
  async importCSV(file: File) { const form = new FormData(); form.append("file", file); const { data } = await apiClient.post("/faq/import", form, { headers: { "Content-Type": "multipart/form-data" } }); return data.data; },
};
