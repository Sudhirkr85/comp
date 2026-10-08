"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Globe,
  Smartphone,
  MessageSquare,
  CheckCircle2,
  PhoneCall,
  Lock,
  Star,
  Activity,
  Layers,
  Store,
  Stethoscope,
  ShoppingBag,
  Rocket,
  TrendingUp,
  RefreshCw,
  Cpu
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const INDUSTRY_PREVIEWS = [
  {
    id: "modernization",
    name: "New Build & Modernization",
    icon: Globe,
    badge: "New Websites + Legacy Speed Overhaul",
    headline: "Brand-New Websites & Complete Modernization of Old, Slow Platforms",
    leadsStat: "99/100 PageSpeed",
    speedStat: "Sub-Second Load",
    features: ["Brand-New Modern Website Architecture", "Legacy Code Modernization & Speed Fixes", "Mobile-First Apple Ceramic UI", "100% Full Source Code Ownership"],
    previewUrl: "brandglobal.com",
    recentLead: "Legacy Site Upgraded: Speed boosted from 24 to 99/100 (Delhi NCR)",
    sampleCta: "Modernize Your Website"
  },
  {
    id: "seo",
    name: "Cross-Border & Global SEO",
    icon: TrendingUp,
    badge: "#1 Google Search Rankings",
    headline: "Dominate Search Results Across India, North America, UK & Middle East",
    leadsStat: "+480% Organic Leads",
    speedStat: "Top Google Ranking",
    features: ["Cross-Border Technical SEO (USA, UK, UAE, Canada)", "Enterprise Multi-Region Schema.org", "Targeted High-Intent Keyword Funnels", "Core Web Vitals Ranking Compliance"],
    previewUrl: "marketleader.global",
    recentLead: "Ranked #1 on Google for high-intent buyer queries (US, UK & India)",
    sampleCta: "Get Free SEO Audit"
  },
  {
    id: "ai-automation",
    name: "AI & WhatsApp Automation",
    icon: Cpu,
    badge: "24/7 Smart Customer Response",
    headline: "Automate Business Queries & Lead Generation with Custom AI Workflows",
    leadsStat: "24/7 Instant Reply",
    speedStat: "Zero Hallucination",
    features: ["24/7 WhatsApp Auto-Reply Chatbots", "Internal Document & Knowledge Search AI", "Automated Lead Qualification Pipeline", "Custom CRM & Workflow Synchronization"],
    previewUrl: "smartassist.ai",
    recentLead: "Automated 1,200+ qualified inquiries with zero delay (Dubai, London & India)",
    sampleCta: "Deploy AI Automation"
  },
  {
    id: "management-amc",
    name: "Website Management & AMC",
    icon: RefreshCw,
    badge: "Hands-Off Maintenance & Uptime SLA",
    headline: "Complete Ongoing Website Management, Security Audits & Code Upgrades",
    leadsStat: "99.9% Uptime SLA",
    speedStat: "24/7 Monitoring",
    features: ["Ongoing Monthly Website Maintenance & AMC", "Legacy Bug Fixing & Feature Upgrades", "Automated Daily Cloud Backups & SSL", "Dedicated Technical Engineering Support"],
    previewUrl: "enterpriseportal.io",
    recentLead: "Active Monthly Management: Zero downtime & 4 new feature releases",
    sampleCta: "Start Website AMC"
  }
];

export default function Hero() {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRY_PREVIEWS[0]);

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-[#fbfbfd] text-[#0f172a]">
      {/* High-Tech Ambient Mesh Glow & Light Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-100/70 via-indigo-50/40 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-emerald-100/35 blur-[120px] pointer-events-none" />

      {/* Subtle Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Apple Style Pro Top Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/8 text-xs font-semibold text-[#0f172a] shadow-xs mb-5 hover:shadow-sm transition-all cursor-default">
          <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
            <Image src="/logo.svg" alt="SA Logo" width={16} height={16} className="w-full h-full object-cover" />
          </div>
          <span className="font-bold tracking-tight text-[#0f172a]">{COMPANY_INFO.name}</span>
          <span className="text-[#cbd5e1]">•</span>
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Build New • Manage Old • Global SEO
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.2 rounded-full border border-amber-200">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> 5.0 Star Rated
          </span>
        </div>

        {/* Refined Headline: Enterprise Authority */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4 text-[#0f172a] max-w-4xl mx-auto font-heading">
          High-Impact <span className="apple-blue-gradient">Websites</span>. <br />
          <span className="text-[#0f172a]">Engineered to Rank & Scale</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl text-[#64748b] max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          We engineer brand-new websites, modernize slow legacy systems, and provide 24/7 website management with #1 Google SEO dominance across India and global markets. Powered by custom AI automation.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {/* Direct Instant Call */}
          <a
            href={`tel:${COMPANY_INFO.rawPhone}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-md shadow-slate-900/15"
          >
            <PhoneCall className="w-4 h-4 text-[#38bdf8]" />
            Call: {COMPANY_INFO.rawPhone}
          </a>

          {/* Direct WhatsApp Instant Chat */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20want%20to%20discuss%20a%20website%20(new/existing)%20or%20SEO/AI%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all shadow-md shadow-emerald-600/20"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            WhatsApp Consultation
          </a>

          {/* Free Audit Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white text-[#0f172a] border border-black/10 font-bold text-xs sm:text-sm hover:border-[#0071e3] hover:text-[#0071e3] hover:scale-105 active:scale-95 transition-all shadow-2xs group"
          >
            Free SEO & Code Audit
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Core Competency Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-[#475569] mb-12">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Build New & Modernize Old Sites</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Top Google SEO (India & Global)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>24/7 AI Automation & WhatsApp Bots</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Website AMC & Ongoing Management</span>
          </div>
        </div>

        {/* Interactive Apple Studio Live Preview Generator */}
        <div className="max-w-5xl mx-auto text-left">
          {/* Capability Switcher Buttons */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
            {INDUSTRY_PREVIEWS.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                    isActive
                      ? "bg-white text-[#0071e3] border-[#0071e3]/40 shadow-sm scale-102"
                      : "bg-white/60 text-[#64748b] border-black/6 hover:bg-white hover:text-[#0f172a]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#0071e3]" : "text-gray-400"}`} />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Apple Studio Browser Frame */}
          <div className="rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white via-white to-[#f0f0f4] border border-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]">
            <div className="rounded-2xl bg-white border border-black/8 overflow-hidden shadow-xs">
              {/* Browser Window Chrome */}
              <div className="px-4 py-2.5 bg-[#f8fafc] border-b border-black/6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                </div>

                {/* Simulated URL Bar */}
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-lg bg-white border border-black/8 text-[11px] text-[#475569] font-mono shadow-2xs max-w-sm w-full mx-auto justify-center">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span className="text-[#94a3b8]">https://</span>
                  <span className="font-bold text-[#0f172a]">{activeIndustry.previewUrl}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-mono text-[9px] font-bold border border-emerald-200">
                    ⚡ 99 Speed
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="hidden sm:inline">Active Production</span>
                </div>
              </div>

              {/* Inside Live Preview Canvas */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-[#fbfbfd]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left Column: Solution Presentation */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-xs font-bold text-[#0071e3] border border-blue-200/60">
                      <Sparkles className="w-3 h-3" />
                      <span>{activeIndustry.badge}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-snug font-heading">
                      {activeIndustry.headline}
                    </h2>

                    {/* Features checklist */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      {activeIndustry.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#475569] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Instant Lead Trigger inside Mockup */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20want%20to%20discuss%20${encodeURIComponent(activeIndustry.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-white" />
                        Inquire for {activeIndustry.name}
                      </a>
                      <a
                        href={`tel:${COMPANY_INFO.rawPhone}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-[#0f172a] border border-black/10 hover:border-[#0071e3] font-bold text-xs transition-all shadow-2xs"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-[#0071e3]" />
                        Call {COMPANY_INFO.rawPhone}
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Live Performance Pod + Simulated Activity */}
                  <div className="md:col-span-5 space-y-3">
                    {/* Metrics Box */}
                    <div className="bg-[#f8fafc] border border-black/8 rounded-2xl p-5 shadow-2xs">
                      <div className="flex items-center justify-between pb-3 border-b border-black/6 mb-4">
                        <div className="text-[11px] font-mono text-[#64748b] uppercase font-bold">Verified Outcome</div>
                        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {activeIndustry.speedStat}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-xl font-black text-[#0f172a] font-heading">{activeIndustry.leadsStat}</div>
                          <div className="text-[11px] text-[#64748b]">Measured Performance Benchmark</div>
                        </div>

                        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full w-[96%]" />
                        </div>
                      </div>
                    </div>

                    {/* Simulated Live Activity Notification */}
                    <div className="p-3.5 rounded-xl bg-emerald-50/90 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5 shadow-2xs animate-pulse">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
                      <div className="text-[11px] leading-tight">
                        <span className="font-bold">Real-Time Client Win:</span>
                        <div className="text-emerald-800 font-medium mt-0.5">{activeIndustry.recentLead}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
