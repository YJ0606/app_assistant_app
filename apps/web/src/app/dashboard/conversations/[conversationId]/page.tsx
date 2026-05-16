import { ConversationList } from "@/components/conversations/conversation-list";
import { ConversationDetail } from "@/components/conversations/conversation-detail";

export default function ConversationDetailPage({
  params,
}: {
  params: { conversationId: string };
}) {
  return (
    <div className="h-[calc(100vh-7rem)] flex rounded-xl overflow-hidden border border-gray-200 bg-white">
      <ConversationList />
      <div className="flex-1 min-w-0">
        <ConversationDetail conversationId={params.conversationId} />
      </div>
    </div>
  );
}
