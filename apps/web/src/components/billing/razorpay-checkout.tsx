"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, CreditCard } from "lucide-react";
import apiClient from "@/lib/api-client";

interface RazorpayCheckoutProps {
  planId: string;
  planName: string;
  amount: number;
  description?: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function RazorpayCheckout({
  planId,
  planName,
  amount,
  description,
}: RazorpayCheckoutProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // Load Razorpay script on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      // Step 1: Create order on backend
      const orderResponse = await apiClient.post("/billing/checkout", { planId });

      if (!orderResponse.data?.data?.id) {
        throw new Error("Failed to create payment order");
      }

      const order = orderResponse.data.data;

      // Step 2: Prepare Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: order.amount,
        currency: order.currency || "INR",
        order_id: order.id,
        name: "WaAI",
        description: description || `Upgrade to ${planName} Plan`,
        image: "/logo.svg",
        theme: {
          color: "#3B82F6", // Brand color
        },
        handler: async (response: any) => {
          try {
            // Step 3: Verify payment on backend
            const verifyResponse = await apiClient.post("/billing/verify-payment", {
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
              planId,
            });

            if (verifyResponse.data?.data) {
              // Payment verified successfully
              router.push("/dashboard/billing?status=success");
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (err: any) {
            setError(err.message || "Payment verification failed");
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setError("Payment cancelled by user");
          },
        },
        prefill: {
          email: localStorage.getItem("user_email") || "",
          contact: localStorage.getItem("user_phone") || "",
        },
        notes: {
          planId,
          planName,
        },
      };

      // Step 4: Open Razorpay checkout
      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not loaded");
      }

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err: any) {
      const errorMessage = err.message || "Failed to initiate payment";
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}
      <button
        onClick={handleCheckout}
        disabled={loading || !process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID}
        className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <CreditCard className="w-4 h-4" />
            Upgrade to {planName} - ₹{(amount / 100).toLocaleString("en-IN")}
          </>
        )}
      </button>
      {!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID && (
        <p className="text-xs text-gray-500 text-center">
          Razorpay key not configured
        </p>
      )}
    </div>
  );
}
