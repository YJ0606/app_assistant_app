"use client";
import { useState } from "react";
import { CheckCircle, AlertCircle, Eye, EyeOff } from "lucide-react";

export function WhatsAppConfigForm() {
  const [showToken, setShowToken] = useState(false);
  const [connected, setConnected] = useState(true);

  return (
    <div className="space-y-5">
      {/* Connection Status */}
      <div className={`flex items-center gap-3 p-4 rounded-xl border ${connected ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}`}>
        {connected ? (
          <>
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div>
              <div className="font-semibold text-green-800 text-sm">WhatsApp Connected</div>
              <div className="text-green-600 text-xs">Phone: +91 98765 43210 · WABA ID: 1234567890</div>
            </div>
          </>
        ) : (
          <>
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
            <div>
              <div className="font-semibold text-yellow-800 text-sm">Not Connected</div>
              <div className="text-yellow-600 text-xs">Configure your WhatsApp Business API credentials below</div>
            </div>
          </>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number ID</label>
          <input
            type="text"
            defaultValue="1234567890"
            placeholder="WhatsApp Phone Number ID"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
          <p className="text-xs text-gray-400 mt-1">Found in Meta Business Manager → WhatsApp Manager</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">WABA ID (Business Account ID)</label>
          <input
            type="text"
            defaultValue="9876543210"
            placeholder="WhatsApp Business Account ID"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Access Token</label>
          <div className="relative">
            <input
              type={showToken ? "text" : "password"}
              defaultValue="EAABwzLixnjYBAK..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowToken(!showToken)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-1">Permanent access token from Meta Developer Console</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Webhook Verify Token</label>
          <input
            type="text"
            defaultValue="waai_webhook_secret_xyz"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Webhook URL (copy to Meta)</label>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value="https://api.waai.app/v1/webhooks/whatsapp/tenant_abc123"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-gray-50 text-gray-600 outline-none"
            />
            <button className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
              Copy
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">WhatsApp Catalog ID (optional)</label>
          <input
            type="text"
            placeholder="Meta Commerce Catalog ID"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Test Connection
          </button>
          <button className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 rounded-lg text-sm font-medium text-white transition-colors">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
