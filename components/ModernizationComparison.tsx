"use client";

import { useState } from "react";
import { Check, X, ArrowRight, Zap, TrendingUp, ShieldAlert, ShieldCheck, Sparkles, PhoneCall, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function ModernizationComparison() {
  const [viewMode, setViewMode] = useState<"side-by-side" | "legacy" | "modern">("side-by-side");

  return (
    <section className="py-24 bg-white border-t border-black/6 relative z-10 text-[#1d1d1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-3 font-semibold shadow-2xs">
            <Zap className="w-3.5 h-3.5" /> High-Impact Performance Overhaul
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            Legacy Website vs. <span className="apple-blue-gradient">SA Modernized Architecture</span>
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            See the transformative difference when an outdated, slow website is overhauled into a high-performance Apple-grade digital platform.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Outdated Legacy Website (Before) */}
          <div className="rounded-3xl p-8 sm:p-9 bg-[#fffbfb] border border-red-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold border border-red-200 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" /> BEFORE MODERNIZATION
                </span>
                <span className="text-xs font-mono text-red-600 font-bold">24/100 Core Web Vitals</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#1d1d1f] mb-3 tracking-tight font-heading">
                Typical Old / Slow Website
              </h3>
              <p className="text-xs text-[#6e6e73] mb-8 leading-relaxed">
                Suffers from code bloat, unpatched vulnerabilities, slow hosting, and zero search visibility.
              </p>

              {/* Checklist */}
              <ul className="space-y-4 mb-8">
                {[
                  { label: "18.4s Page Load Latency", detail: "Over 68% of visitors abandon the site before it finishes loading." },
                  { label: "Buried on Google Page 5+", detail: "No local or global Schema.org tags; Google penalizes slow load speeds." },
                  { label: "Broken Mobile UI & Spacing", detail: "Navigation is clunky on smartphones; high bounce rates." },
                  { label: "Zero Lead Automation", detail: "Customers wait 8–24 hours for manual replies; lost revenue." },
                  { label: "Unpatched Security & Frequent Crashes", detail: "Outdated plugins, no automatic backups, and zero technical support." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                      <X className="w-3 h-3 text-red-600" />
                    </div>
                    <div>
                      <span className="font-extrabold text-red-950 block">{item.label}</span>
                      <span className="text-[#6e6e73] text-[11px] leading-relaxed">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-red-200/60 text-center">
              <span className="text-xs font-mono text-red-700 font-bold">
                Result: Lost Customers & Declining Search Visibility
              </span>
            </div>
          </div>

          {/* Card 2: SA Software Innovation Build (After) */}
          <div className="rounded-3xl p-8 sm:p-9 bg-gradient-to-b from-blue-50/40 via-white to-emerald-50/20 border-2 border-[#0071e3]/40 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-100 text-[#0071e3] font-bold border border-blue-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> AFTER SA INNOVATION OVERHAUL
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> 99/100 Core Web Vitals
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#1d1d1f] mb-3 tracking-tight font-heading">
                Re-Engineered Next-Gen Platform
              </h3>
              <p className="text-xs text-[#6e6e73] mb-8 leading-relaxed">
                Built on Next.js 16 with sub-second page loads, automated SEO dominance, and 24/7 AI lead capture.
              </p>

              {/* Checklist */}
              <ul className="space-y-4 mb-8">
                {[
                  { label: "0.5s Sub-Second Page Speed", detail: "Near-instantaneous rendering; zero bounce rate on 4G/5G mobile networks." },
                  { label: "Top #1 Google Ranking Architecture", detail: "Pre-configured Schema.org, local city citations, and global hreflang." },
                  { label: "Apple Pure White Ceramic Design", detail: "Pixel-perfect typography, fluid 60fps animations, and intuitive UI." },
                  { label: "24/7 AI & WhatsApp Lead Automation", detail: "Instant auto-reply within 2 seconds qualifies leads and alerts the owner." },
                  { label: "Dedicated Website AMC & 99.9% Uptime", detail: "Continuous bug fixing, daily automated cloud backups, and proactive fixes." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <Check className="w-3 h-3 text-emerald-700" />
                    </div>
                    <div>
                      <span className="font-extrabold text-[#0f172a] block">{item.label}</span>
                      <span className="text-[#475569] text-[11px] leading-relaxed">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-xs font-mono text-emerald-800 font-extrabold">
                Result: 3.8x More Inquiries • Measurable Organic Revenue Growth
              </span>
            </div>
          </div>
        </div>

        {/* Action Prompt */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#f5f5f7] border border-black/8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-extrabold text-[#1d1d1f] font-heading">
              Have an old, slow website you want modernized?
            </h4>
            <p className="text-xs sm:text-sm text-[#6e6e73]">
              Send us your website URL for a free 60-second Core Web Vitals speed test and modernization roadmap.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#audit-tool"
              className="px-5 py-2.5 rounded-full bg-[#0071e3] text-white font-bold text-xs hover:bg-[#0077ed] transition-all shadow-xs"
            >
              Test Your Website Now
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20want%20to%20modernize%20my%20existing%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-xs inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
