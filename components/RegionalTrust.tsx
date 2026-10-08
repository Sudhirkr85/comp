"use client";

import { MapPin, Globe, CheckCircle2, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function RegionalTrust() {
  const indianRegions = [
    { city: "Delhi NCR", state: "Delhi, Noida, Gurgaon, Faridabad", flag: "📍" },
    { city: "Uttar Pradesh", state: "Lucknow, Kanpur, Varanasi, Agra, Meerut", flag: "📍" },
    { city: "Bihar", state: "Patna, Gaya, Muzaffarpur, Bhagalpur", flag: "📍" },
    { city: "Madhya Pradesh", state: "Bhopal, Indore, Gwalior, Jabalpur", flag: "📍" },
    { city: "Rajasthan", state: "Jaipur, Jodhpur, Udaipur, Kota", flag: "📍" },
    { city: "Maharashtra", state: "Mumbai, Pune, Nagpur, Nashik", flag: "📍" },
  ];

  const globalRegions = [
    { country: "United States", focus: "Tech Startups & B2B Portals", code: "USA" },
    { country: "United Kingdom", focus: "Fintech & Corporate Platforms", code: "GBR" },
    { country: "UAE & Middle East", focus: "Dubai / Abu Dhabi Real Estate & Commerce", code: "UAE" },
    { country: "Canada & Australia", focus: "SaaS Products & Global Brands", code: "GLOBAL" },
  ];

  return (
    <section className="py-24 bg-[#fbfbfd] border-t border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-3 font-semibold">
            <Globe className="w-3.5 h-3.5" /> High-Trust Footprint • India & Overseas
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            Engineered for <span className="apple-blue-gradient">Pan-India & Global</span> Reach
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            We help regional enterprises dominate Google searches in their home markets while equipping high-growth companies to rank and convert clients across the US, UK, and Middle East.
          </p>
        </div>

        {/* Tab-Style Grid: Pan-India Dominance */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1d1d1f] font-mono">
              Pan-India Dominance Hubs (Local & Regional Google Rank #1)
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {indianRegions.map((reg, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-black/6 shadow-2xs text-center flex flex-col justify-center items-center hover:border-[#0071e3]/40 hover:shadow-xs transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0071e3] mb-2 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-extrabold text-[#1d1d1f] mb-0.5">{reg.city}</span>
                <span className="text-[10px] text-[#86868b] leading-tight line-clamp-2">{reg.state}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Markets Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0071e3]"></span>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1d1d1f] font-mono">
              International & Global Architecture (USA, UK, UAE & Beyond)
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalRegions.map((g, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-black/6 shadow-2xs flex items-center justify-between hover:border-black/20 transition-all"
              >
                <div>
                  <div className="text-xs font-extrabold text-[#1d1d1f] mb-1">{g.country}</div>
                  <div className="text-[11px] text-[#6e6e73]">{g.focus}</div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-[#f5f5f7] text-[#0071e3] border border-black/5">
                  {g.code}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Clients Choose Us Guarantee */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#1d1d1f] mb-1.5 font-heading">
                Top Google Search Dominance
              </h4>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Pre-configured with Schema.org local business markup, high-intent buyer keywords, and fast sub-second loading speeds to outrank competitors on Google.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0071e3] flex items-center justify-center shrink-0 border border-blue-200/60">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#1d1d1f] mb-1.5 font-heading">
                100% IP & Source Code Ownership
              </h4>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Zero proprietary lock-in. Complete GitHub source code handover, direct cloud access, and signed Non-Disclosure Agreement (NDA) for total security.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200/60">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#1d1d1f] mb-1.5 font-heading">
                Fast Global Edge Routing (&lt;30ms)
              </h4>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Deployed across Cloudflare Global Edge with multi-region CDN caching, guaranteeing high speed and 99.9% uptime whether your visitor is in Patna or New York.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
