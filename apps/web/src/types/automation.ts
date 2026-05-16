export interface AutomationFlow {
  id: string;
  tenantId: string;
  name: string;
  description?: string;
  trigger: AutomationTrigger;
  isActive: boolean;
  conditions?: Record<string, unknown>;
  actions: AutomationAction[];
  priority: number;
  runCount: number;
  lastRunAt?: string;
  createdAt: string;
  updatedAt: string;
}

export type AutomationTrigger =
  | "KEYWORD" | "INTENT" | "FIRST_MESSAGE" | "AFTER_HOURS"
  | "ORDER_PLACED" | "BOOKING_CREATED" | "BOOKING_REMINDER"
  | "PAYMENT_RECEIVED" | "SCHEDULE" | "WEBHOOK";

export interface AutomationAction {
  type: "send_message" | "send_template" | "assign_agent" | "add_tag" | "webhook";
  payload: Record<string, unknown>;
}
