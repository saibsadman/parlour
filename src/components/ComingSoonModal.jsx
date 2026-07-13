import React, { useState } from "react";
import { X, Sparkles, Bell, Calendar } from "lucide-react";

export default function ComingSoonModal({ isOpen, onClose, onNotifySuccess }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
        onClose();
        onNotifySuccess("Thank you! We will notify you as soon as our Male Services are available.");
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-sage-950/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-cream-50 max-w-md w-full rounded-3xl p-8 border border-cream-300/50 shadow-2xl overflow-hidden transition-all transform scale-100 duration-300">
        
        {/* Soft background glows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blush-200/30 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-sage-500 hover:text-sage-800 transition-colors p-2 rounded-full hover:bg-cream-200/50"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center justify-center p-3 bg-gold-100 text-gold-600 rounded-full mb-4">
            <Sparkles size={24} />
          </div>
          <h3 className="font-serif text-3xl text-sage-800 font-semibold tracking-wide">
            Coming Soon
          </h3>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto my-3" />
          <p className="text-sage-700 text-sm mt-3 leading-relaxed">
            Our exclusive range of Male Services is currently being crafted with love and care. We are training our specialists to bring you the highest standard of relaxation and therapeutic treatments.
          </p>
        </div>

        {/* Subscription Form */}
        <div className="mt-8 bg-cream-100/60 border border-cream-200 p-5 rounded-2xl">
          <h4 className="font-sans font-medium text-sage-800 text-xs tracking-wider uppercase flex items-center gap-2 mb-3">
            <Bell size={14} className="text-gold-500" />
            Get Notified First
          </h4>
          <p className="text-xs text-sage-600 mb-4">
            Enter your email below to receive an exclusive opening discount and be the first to book.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input 
              type="email"
              placeholder="your.email@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-sage-900 text-sm focus:outline-none focus:border-sage-500 transition-colors"
            />
            <button 
              type="submit"
              disabled={subscribed}
              className="w-full mt-1 bg-sage-500 hover:bg-sage-600 active:bg-sage-700 text-cream-50 font-sans font-medium text-xs tracking-wider uppercase py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {subscribed ? "Subscribing..." : "Notify Me"}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="text-center mt-6 text-[10px] text-sage-500 flex items-center justify-center gap-1">
          <Calendar size={12} /> Expected Launch: Autumn 2026
        </div>

      </div>
    </div>
  );
}
