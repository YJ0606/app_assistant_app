export interface Conversation {
  id: string;
  tenantId: string;
  customerId: string;
  assignedUserId?: string;
  status: ConversationStatus;
  isAiActive: boolean;
  channel: "WHATSAPP" | "SMS" | "EMAIL" | "PHONE";
  whatsappPhone?: string;
  lastMessageAt?: string;
  resolvedAt?: string;
  customer?: Customer;
  messages?: Message[];
  createdAt: string;
  updatedAt: string;
}

export type ConversationStatus =
  | "OPEN"
  | "ASSIGNED"
  | "HUMAN_HANDOFF"
  | "RESOLVED"
  | "CLOSED";

export interface Message {
  id: string;
  conversationId: string;
  channel: "WHATSAPP" | "SMS" | "EMAIL" | "PHONE";
  direction: "INBOUND" | "OUTBOUND";
  type: MessageType;
  status: MessageStatus;
  content?: string;
  mediaUrl?: string;
  mediaType?: string;
  isAiGenerated: boolean;
  sentByUserId?: string;
  createdAt: string;
}

export type MessageType =
  | "TEXT" | "IMAGE" | "VIDEO" | "AUDIO" | "DOCUMENT"
  | "LOCATION" | "CONTACT" | "TEMPLATE" | "INTERACTIVE" | "STICKER"
  | "REACTION" | "SYSTEM";

export type MessageStatus =
  | "QUEUED" | "SENT" | "DELIVERED" | "READ" | "FAILED";

export interface Customer {
  id: string;
  phone: string;
  name?: string;
  email?: string;
  tags: string[];
}
