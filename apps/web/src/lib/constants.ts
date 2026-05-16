export const PLANS = {
  starter: {
    id: "starter",
    name: "Starter",
    price: 1499,
    messages: 500,
    seats: 2,
    catalogItems: 100,
  },
  growth: {
    id: "growth",
    name: "Growth",
    price: 3999,
    messages: 2500,
    seats: 5,
    catalogItems: 500,
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: 9999,
    messages: 10000,
    seats: -1, // unlimited
    catalogItems: -1,
  },
} as const;

export const ROLES = {
  OWNER: "Owner",
  ADMIN: "Admin",
  AGENT: "Agent",
  VIEWER: "Viewer",
} as const;

export const CONVERSATION_STATUS_LABELS = {
  OPEN: "Open",
  ASSIGNED: "Assigned",
  HUMAN_HANDOFF: "Human Handoff",
  RESOLVED: "Resolved",
  CLOSED: "Closed",
} as const;

export const BOOKING_STATUS_LABELS = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  NO_SHOW: "No Show",
  RESCHEDULED: "Rescheduled",
} as const;
