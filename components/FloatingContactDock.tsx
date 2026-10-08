"use client";

import { useState, useEffect } from "react";
import { PhoneCall, MessageSquare, Calculator, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function FloatingContactDock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling past the hero (280px)
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Quick contact actions"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="apple-glass-dock px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full flex items-center justify-between gap-2 sm:gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-black/10 bg-white/95 backdrop-blur-2xl">
        {/* Status Indicator (Desktop only) */}
        <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-black/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="text-[11px] leading-tight">
            <div className="font-bold text-[#0f172a]">Live Support</div>
            <div className="text-[9px] text-[#64748b]">15-Min Reply</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-1 justify-center sm:justify-end">
          {/* Direct Phone Call */}
          <a
            href={`tel:${COMPANY_INFO.rawPhone}`}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm group"
            title="Call 9102130956"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#38bdf8] group-hover:rotate-12 transition-transform" />
            <span className="whitespace-nowrap">Call: {COMPANY_INFO.rawPhone}</span>
          </a>

          {/* Direct WhatsApp */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20want%20to%20discuss%20a%20website/app%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all shadow-sm group"
            title="WhatsApp 9102130956"
          >
            <MessageSquare className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>


          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 sm:p-2.5 rounded-full bg-white text-[#64748b] hover:text-[#0f172a] border border-black/10 hover:border-black/20 hover:scale-105 active:scale-95 transition-all shadow-2xs cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
