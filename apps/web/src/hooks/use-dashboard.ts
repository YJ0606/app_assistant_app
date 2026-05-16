import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";

interface DashboardMetrics {
  messagesHandled: number;
  activeConversations: number;
  bookings: number;
  orders: number;
  aiResolutionRate: number;
  humanHandoffs: number;
  avgResponseTimeMs: number;
  topFAQs: Array<{ question: string; hits: number }>;
  weeklyVolume: Array<{ date: string; messages: number; resolved: number }>;
}

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const { data } = await apiClient.get<DashboardMetrics>("/dashboard");
      return data;
    },
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
}
