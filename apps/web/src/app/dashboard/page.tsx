import { MetricCard } from "@/components/dashboard/metric-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { PipelineChart } from "@/components/dashboard/pipeline-chart";
import { UsageWidget } from "@/components/dashboard/usage-widget";
import { MessageSquare, Calendar, ShoppingCart, Users, Zap, TrendingUp } from "lucide-react";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back! Here's what's happening.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-2">
          <span>Last 30 days</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Messages Handled"
          value="12,847"
          change="+18%"
          changeType="positive"
          icon={MessageSquare}
          iconColor="text-brand-500"
          iconBg="bg-brand-50"
        />
        <MetricCard
          title="Active Conversations"
          value="234"
          change="+5%"
          changeType="positive"
          icon={Users}
          iconColor="text-blue-500"
          iconBg="bg-blue-50"
        />
        <MetricCard
          title="Bookings"
          value="189"
          change="+24%"
          changeType="positive"
          icon={Calendar}
          iconColor="text-purple-500"
          iconBg="bg-purple-50"
        />
        <MetricCard
          title="Orders"
          value="94"
          change="+12%"
          changeType="positive"
          icon={ShoppingCart}
          iconColor="text-orange-500"
          iconBg="bg-orange-50"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PipelineChart />
        </div>
        <div>
          <UsageWidget />
        </div>
      </div>

      {/* Activity & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        <div className="space-y-4">
          {/* AI Performance */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-yellow-500" />
              <h3 className="font-semibold text-gray-900">AI Performance</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Auto-resolved</span>
                <span className="font-semibold text-gray-900">87%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-brand-500 h-2 rounded-full" style={{ width: "87%" }} />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Avg response time</span>
                <span className="font-semibold text-gray-900">&lt; 2s</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Human handoffs</span>
                <span className="font-semibold text-gray-900">34</span>
              </div>
            </div>
          </div>

          {/* Top FAQs */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-gray-900">Top FAQ Hits</h3>
            </div>
            <div className="space-y-2">
              {[
                { q: "What are your timings?", hits: 234 },
                { q: "How to book an appointment?", hits: 189 },
                { q: "What's the delivery charge?", hits: 145 },
                { q: "Do you offer EMI?", hits: 98 },
              ].map((faq) => (
                <div key={faq.q} className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 truncate max-w-36">{faq.q}</span>
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                    {faq.hits}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
