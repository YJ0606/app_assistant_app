import { ConversationList } from "@/components/conversations/conversation-list";

export const metadata = { title: "Conversations" };

export default function ConversationsPage() {
  return (
    <div className="h-[calc(100vh-7rem)] flex rounded-xl overflow-hidden border border-gray-200 bg-white">
      <ConversationList />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💬</span>
          </div>
          <h3 className="text-gray-700 font-medium">Select a conversation</h3>
          <p className="text-gray-400 text-sm mt-1">Choose a conversation from the left to start chatting</p>
        </div>
      </div>
    </div>
  );
}
