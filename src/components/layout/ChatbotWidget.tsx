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

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* ── Chat Window Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="mb-4 w-[380px] h-[580px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] rounded-2xl border border-slate-200/60 bg-white/95 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-md overflow-hidden flex flex-col"
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
                className="w-full h-full border-none"
                title="Self Publishing Consultant Chatbot"
                allow="clipboard-read; clipboard-write"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Launcher Button ── */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-signature-gradient text-white flex items-center justify-center shadow-[0_4px_20px_rgba(6,78,59,0.35)] hover:shadow-[0_8px_30px_rgba(6,78,59,0.5)] transition-all cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare size={24} />
              {/* Pulsating notification dot */}
              <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
