import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import type { Booking } from "@/types/booking";

export function useBookings(params?: { status?: string; date?: string }) {
  return useQuery({
    queryKey: ["bookings", params],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: Booking[]; total: number }>("/bookings", { params });
      return data;
    },
  });
}

export function useBooking(id: string) {
  return useQuery({
    queryKey: ["bookings", id],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: Booking }>(`/bookings/${id}`);
      return data.data;
    },
    enabled: !!id,
  });
}

export function useUpdateBookingStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { data } = await apiClient.patch(`/bookings/${id}`, { status });
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["bookings"] }),
  });
}
