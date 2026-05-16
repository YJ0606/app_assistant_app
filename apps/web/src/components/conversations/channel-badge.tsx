"use client";
import { MessageCircle, MessageSquare, Mail, Phone } from "lucide-react";

interface ChannelBadgeProps {
  channel: "WHATSAPP" | "SMS" | "EMAIL" | "PHONE";
  size?: "sm" | "md";
}

export function ChannelBadge({ channel, size = "md" }: ChannelBadgeProps) {
  const channels = {
    WHATSAPP: {
      icon: MessageCircle,
      color: "bg-green-50 text-green-700 border-green-200",
      bgColor: "bg-green-100",
      label: "WhatsApp",
    },
    SMS: {
      icon: MessageSquare,
      color: "bg-blue-50 text-blue-700 border-blue-200",
      bgColor: "bg-blue-100",
      label: "SMS",
    },
    EMAIL: {
      icon: Mail,
      color: "bg-purple-50 text-purple-700 border-purple-200",
      bgColor: "bg-purple-100",
      label: "Email",
    },
    PHONE: {
      icon: Phone,
      color: "bg-orange-50 text-orange-700 border-orange-200",
      bgColor: "bg-orange-100",
      label: "Phone",
    },
  };

  const config = channels[channel] || channels.WHATSAPP;
  const Icon = config.icon;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-medium transition-colors ${
        size === "sm" ? "text-xs" : "text-sm"
      } ${config.color}`}
    >
      <Icon className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />
      {config.label}
    </div>
  );
}

// Variant: Badge without border for inline use
export function ChannelBadgeCompact({ channel }: { channel: string }) {
  const icons: Record<string, React.ReactNode> = {
    WHATSAPP: <MessageCircle className="w-4 h-4 text-green-600" />,
    SMS: <MessageSquare className="w-4 h-4 text-blue-600" />,
    EMAIL: <Mail className="w-4 h-4 text-purple-600" />,
    PHONE: <Phone className="w-4 h-4 text-orange-600" />,
  };

  return <div className="inline-flex">{icons[channel] || icons.WHATSAPP}</div>;
}
