"use client";
export function BusinessProfileForm() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-16 h-16 bg-brand-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">M</div>
        <div><button className="text-sm font-medium text-brand-600 hover:text-brand-700">Upload Logo</button><div className="text-xs text-gray-400 mt-0.5">PNG, JPG, SVG · Max 2MB</div></div>
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name *</label><input type="text" defaultValue="My Business" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Business Email</label><input type="email" defaultValue="hello@mybusiness.com" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Business Phone</label><input type="tel" defaultValue="+91 98765 43210" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
      </div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Website</label><input type="url" placeholder="https://yourbusiness.com" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Address</label><textarea rows={2} placeholder="Your business address" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 resize-none" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Welcome Message</label><textarea rows={3} defaultValue="Hi! 👋 Welcome to My Business. How can I help you today?" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 resize-none" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">After-Hours Message</label><textarea rows={2} defaultValue="We're currently closed. Our business hours are Mon-Sat, 9AM–7PM. We'll respond shortly!" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 resize-none" /></div>
      <div className="flex gap-3 pt-2"><button className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Discard</button><button className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 rounded-lg text-sm font-medium text-white">Save Changes</button></div>
    </div>
  );
}
