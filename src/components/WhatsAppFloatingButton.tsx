"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { getWhatsAppUrl } from "@/data/siteConfig";

export function WhatsAppFloatingButton() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip badge */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-[#12161f] border border-[#273244] shadow-2xl py-2 px-3.5 rounded-xl text-xs text-neutral-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Questions? Chat with our Nairobi team</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-neutral-500 hover:text-neutral-300 ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl("Hello Atandi Motors, I am browsing your showroom website and have a question.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Atandi Motors on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-950/50 hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
}
