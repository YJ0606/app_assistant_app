import apiClient from "@/lib/api-client";
export const catalogService = {
  async list(params?: Record<string, string>) { const { data } = await apiClient.get("/catalog", { params }); return data.data; },
  async get(id: string) { const { data } = await apiClient.get(`/catalog/${id}`); return data.data; },
  async create(payload: unknown) { const { data } = await apiClient.post("/catalog", payload); return data.data; },
  async update(id: string, payload: unknown) { const { data } = await apiClient.patch(`/catalog/${id}`, payload); return data.data; },
  async delete(id: string) { await apiClient.delete(`/catalog/${id}`); },
  async importCSV(file: File) { const form = new FormData(); form.append("file", file); const { data } = await apiClient.post("/catalog/import", form, { headers: { "Content-Type": "multipart/form-data" } }); return data.data; },
};
