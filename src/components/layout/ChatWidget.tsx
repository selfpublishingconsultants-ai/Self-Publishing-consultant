"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ChatWidget() {
  useEffect(() => {
    // Observer to enhance the chatbot container header once injected by widget.js
    const observer = new MutationObserver(() => {
      const container = document.getElementById("spc-chat-container");
      if (container && !document.getElementById("spc-header-overlay")) {
        // Create header overlay bar
        const header = document.createElement("div");
        header.id = "spc-header-overlay";
        header.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="position: relative; width: 8px; height: 8px; border-radius: 50%; background-color: #10b981; shrink: 0;">
              <span style="position: absolute; inset: 0; border-radius: 50%; background-color: #10b981; animation: spcPulse 1.8s cubic-bezier(0, 0, 0.2, 1) infinite; opacity: 0.75;"></span>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-family: system-ui, -apple-system, sans-serif; font-weight: 700; font-size: 14px; color: #064e3b; line-height: 1.2; letter-spacing: -0.01em;">
                Publishing Consultant
              </span>
              <span style="font-family: system-ui, -apple-system, sans-serif; font-weight: 500; font-size: 11px; color: #0d9488; line-height: 1.1;">
                Online • Instant Answers
              </span>
            </div>
          </div>
          <button id="spc-header-close-btn" aria-label="Close Chat" style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background: #f1f5f9; border: 1px solid #e2e8f0; cursor: pointer; color: #064e3b; transition: all 0.2s ease;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        `;

        // Style the header overlay
        header.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 52px;
          padding: 0 16px;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 99;
          box-shadow: 0 1px 4px rgba(6, 78, 59, 0.05);
        `;

        // Insert header into container
        container.style.position = "fixed";
        container.insertBefore(header, container.firstChild);

        // Adjust iframe top margin so it sits right under our header
        const iframe = document.getElementById("spc-chat-iframe");
        if (iframe) {
          iframe.style.marginTop = "52px";
          iframe.style.height = "calc(100% - 52px)";
        }

        // Attach event listener to Close button
        const closeBtn = document.getElementById("spc-header-close-btn");
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            const bubble = document.getElementById("spc-chat-bubble");
            if (bubble) {
              bubble.click();
            } else {
              container.classList.remove("active");
              container.style.display = "none";
            }
          });

          closeBtn.addEventListener("mouseenter", () => {
            closeBtn.style.background = "#064e3b";
            closeBtn.style.color = "#ffffff";
            closeBtn.style.borderColor = "#064e3b";
            closeBtn.style.transform = "scale(1.05)";
          });
          closeBtn.addEventListener("mouseleave", () => {
            closeBtn.style.background = "#f1f5f9";
            closeBtn.style.color = "#064e3b";
            closeBtn.style.borderColor = "#e2e8f0";
            closeBtn.style.transform = "scale(1)";
          });
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* Hide bottom floating bubble when chat is active */
        #spc-chat-bubble.active {
          display: none !important;
        }

        #spc-chat-bubble {
          background: linear-gradient(135deg, #064e3b 0%, #0d9488 50%, #14b8a6 100%) !important;
          box-shadow: 0 8px 24px -4px rgba(6, 78, 59, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.2) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        #spc-chat-bubble:hover {
          transform: scale(1.08) translateY(-2px) !important;
          box-shadow: 0 12px 32px -4px rgba(6, 78, 59, 0.65), 0 0 0 1.5px rgba(20, 184, 166, 0.5) !important;
        }

        #spc-chat-bubble:active {
          transform: scale(0.95) !important;
        }

        #spc-chat-container {
          position: fixed !important;
          bottom: 24px !important;
          right: 24px !important;
          top: auto !important;
          width: 380px !important;
          max-width: calc(100vw - 32px) !important;
          height: min(580px, calc(100vh - 48px)) !important;
          max-height: calc(100vh - 48px) !important;
          border-radius: 20px !important;
          box-shadow: 0 25px 60px -15px rgba(6, 78, 59, 0.3), 0 0 0 1px rgba(13, 148, 136, 0.25) !important;
          border: none !important;
          overflow: hidden !important;
          z-index: 999999 !important;
        }

        @keyframes spcPulse {
          75%, 100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
      <Script
        src="https://multi-tenant-chatbot-production-55f0.up.railway.app/frontend/widget.js?bot_id=self_publishing&api_key=sk_self_publishing_live&api_base=https://multi-tenant-chatbot-production-55f0.up.railway.app"
        data-bot-id="self_publishing"
        data-api-key="sk_self_publishing_live"
        data-api-base="https://multi-tenant-chatbot-production-55f0.up.railway.app"
        strategy="afterInteractive"
      />
    </>
  );
}
