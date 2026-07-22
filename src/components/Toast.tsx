import React, { useEffect } from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-900 to-orange-950 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
      <span className="text-xs sm:text-sm font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="p-1 hover:bg-white/20 rounded-full text-white/80 transition-colors ml-2"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
