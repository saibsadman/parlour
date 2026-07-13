import React, { useEffect } from "react";
import { Info, X } from "lucide-react";

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="bg-glass-dark border border-sage-200/50 backdrop-blur-md rounded-2xl shadow-xl p-4 max-w-md flex items-start gap-3 transition-all duration-300 transform translate-y-0 opacity-100">
        <div className="p-2 bg-sage-100 rounded-lg text-sage-700">
          <Info size={20} />
        </div>
        <div className="flex-1 pt-0.5">
          <h4 className="font-medium text-sage-900 text-sm">Booking Notice</h4>
          <p className="text-xs text-sage-700 mt-0.5 leading-relaxed">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-sage-400 hover:text-sage-600 transition-colors p-1 rounded-md hover:bg-sage-100/50"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
