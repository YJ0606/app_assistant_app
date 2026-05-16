export interface Booking {
  id: string;
  tenantId: string;
  customerId: string;
  slotId?: string;
  status: BookingStatus;
  serviceName: string;
  notes?: string;
  scheduledAt: string;
  duration: number;
  reminderSent: boolean;
  customer?: { name?: string; phone: string };
  createdAt: string;
  updatedAt: string;
}

export type BookingStatus =
  | "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW" | "RESCHEDULED";

export interface BookingSlot {
  id: string;
  tenantId: string;
  startTime: string;
  endTime: string;
  capacity: number;
  bookedCount: number;
  isAvailable: boolean;
  label?: string;
}
