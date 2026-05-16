import { MessageSquare, Calendar, ShoppingCart, UserCheck, Zap } from "lucide-react";

const activities = [
  {
    type: "message",
    icon: MessageSquare,
    color: "bg-brand-50 text-brand-500",
    text: "AI resolved query from Priya Sharma",
    time: "2 min ago",
  },
  {
    type: "booking",
    icon: Calendar,
    color: "bg-purple-50 text-purple-500",
    text: "New booking: Rahul Kumar – Haircut @ 3 PM",
    time: "8 min ago",
  },
  {
    type: "order",
    icon: ShoppingCart,
    color: "bg-orange-50 text-orange-500",
    text: "Order #1042 placed by Anita Patel – ₹1,249",
    time: "15 min ago",
  },
  {
    type: "handoff",
    icon: UserCheck,
    color: "bg-yellow-50 text-yellow-500",
    text: "Conversation transferred to Ravi (Agent)",
    time: "22 min ago",
  },
  {
    type: "automation",
    icon: Zap,
    color: "bg-blue-50 text-blue-500",
    text: "After-hours automation triggered for 5 conversations",
    time: "1 hr ago",
  },
  {
    type: "message",
    icon: MessageSquare,
    color: "bg-brand-50 text-brand-500",
    text: "AI resolved query from Deepak Shah",
    time: "1 hr ago",
  },
  {
    type: "booking",
    icon: Calendar,
    color: "bg-purple-50 text-purple-500",
    text: "Booking reminder sent to 12 customers",
    time: "2 hr ago",
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-8 h-8 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">{activity.text}</p>
                <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
