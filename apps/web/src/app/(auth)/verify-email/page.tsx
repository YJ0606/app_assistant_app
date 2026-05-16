import Link from "next/link";
export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="flex items-center justify-center gap-2 mb-8"><div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center"><span className="text-white font-bold text-lg">W</span></div><span className="font-bold text-2xl text-gray-900">WaAI</span></div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="text-5xl mb-4">📬</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify your email</h1>
          <p className="text-gray-500 text-sm mb-6">We've sent a verification link to your email address. Please check your inbox and click the link to activate your account.</p>
          <p className="text-gray-400 text-xs mb-4">Didn't receive the email? Check your spam folder or <button className="text-brand-600 underline">resend verification email</button>.</p>
          <Link href="/login" className="text-sm text-brand-600 font-medium hover:text-brand-700">Back to login →</Link>
        </div>
      </div>
    </div>
  );
}
