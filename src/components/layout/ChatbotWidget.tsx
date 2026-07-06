"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Avoid Hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock background scrolling completely when chat is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <>
      {/* ── Backdrop Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[9998] bg-slate-900/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* ── Chat Window Side Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[9999] w-full md:w-[50vw] h-[100dvh] bg-white shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-signature-gradient text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                {/* Pulsating status dot */}
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm tracking-tight leading-none text-white">
                    Consultation Assistant
                  </h3>
                  <span className="text-[10px] text-teal-100 font-medium tracking-wide">
                    Online • Answers instantly
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 transition-colors text-white/90 hover:text-white"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* IFrame Area */}
            <div className="flex-1 bg-slate-50 relative">
              <iframe
                src="https://chatbot-iota-six-35.vercel.app/widget"
                className="absolute inset-0 w-full h-full border-none"
                title="Self Publishing Consultant Chatbot"
                allow="clipboard-read; clipboard-write"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Launcher Button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-signature-gradient text-white flex items-center justify-center shadow-[0_4px_20px_rgba(6,78,59,0.35)] hover:shadow-[0_8px_30px_rgba(6,78,59,0.5)] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
            aria-label="Open chatbot"
          >
            <div className="relative">
              <MessageSquare size={24} />
              {/* Pulsating notification dot */}
              <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
