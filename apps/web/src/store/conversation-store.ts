import { create } from "zustand";
import type { Conversation } from "@/types/conversation";

interface ConversationState {
  activeConversationId: string | null;
  conversations: Conversation[];
  unreadCount: number;
  setActiveConversation: (id: string | null) => void;
  setConversations: (conversations: Conversation[]) => void;
  setUnreadCount: (count: number) => void;
}

export const useConversationStore = create<ConversationState>((set) => ({
  activeConversationId: null,
  conversations: [],
  unreadCount: 0,
  setActiveConversation: (id) => set({ activeConversationId: id }),
  setConversations: (conversations) => set({ conversations }),
  setUnreadCount: (count) => set({ unreadCount: count }),
}));
