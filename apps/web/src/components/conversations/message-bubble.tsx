import { Check, CheckCheck } from "lucide-react";

interface MessageBubbleProps {
  message: {
    content: string;
    direction: "INBOUND" | "OUTBOUND";
    status?: "QUEUED" | "SENT" | "DELIVERED" | "READ" | "FAILED";
    isAiGenerated?: boolean;
    time: string;
    type?: string;
  };
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isInbound = message.direction === "INBOUND";

  return (
    <div className={`flex ${isInbound ? "justify-start" : "justify-end"} mb-3`}>
      <div className={`max-w-[70%] ${isInbound ? "order-2" : "order-1"}`}>
        <div
          className={`rounded-2xl px-4 py-2.5 ${
            isInbound
              ? "bg-white border border-gray-200 text-gray-900 rounded-tl-sm"
              : "bg-brand-500 text-white rounded-tr-sm"
          }`}
        >
          {message.isAiGenerated && !isInbound && (
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs text-brand-100 font-medium">⚡ AI</span>
            </div>
          )}
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>

        <div className={`flex items-center gap-1 mt-1 ${isInbound ? "justify-start" : "justify-end"}`}>
          <span className="text-xs text-gray-400">{message.time}</span>
          {!isInbound && (
            <span>
              {message.status === "READ" ? (
                <CheckCheck className="w-3.5 h-3.5 text-blue-400" />
              ) : message.status === "DELIVERED" ? (
                <CheckCheck className="w-3.5 h-3.5 text-gray-400" />
              ) : (
                <Check className="w-3.5 h-3.5 text-gray-400" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
