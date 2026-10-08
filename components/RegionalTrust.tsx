"use client";

import { Globe, ShieldCheck, TrendingUp, Clock, Zap, MapPin } from "lucide-react";

export default function RegionalTrust() {
  const globalDeliveryHubs = [
    {
      region: "North America",
      countries: "United States & Canada",
      cities: "New York • San Francisco • Toronto",
      focus: "Enterprise SaaS, Scalable Web Apps & Cloud Systems",
      timezone: "EST / PST Active Support",
      badge: "USA & CAN",
    },
    {
      region: "United Kingdom & Europe",
      countries: "UK & Western Europe",
      cities: "London • Manchester • Berlin",
      focus: "Corporate Portals, High-Conversion UX & Global SEO",
      timezone: "GMT / CET Active Support",
      badge: "UK & EU",
    },
    {
      region: "Middle East & GCC",
      countries: "United Arab Emirates & Saudi Arabia",
      cities: "Dubai • Abu Dhabi • Riyadh",
      focus: "E-Commerce, Real Estate & 24/7 AI Automation",
      timezone: "GST Active Support",
      badge: "UAE / GCC",
    },
    {
      region: "Pan-India & Asia-Pacific",
      countries: "India & APAC Tech Centers",
      cities: "Delhi NCR • Mumbai • Bengaluru & Nationwide",
      focus: "Full-Cycle Engineering, Legacy Modernization & AMC",
      timezone: "IST Primary Delivery Hub",
      badge: "INDIA / APAC",
    },
  ];

  return (
    <section className="py-24 bg-[#fbfbfd] border-t border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-3 font-semibold shadow-2xs">
            <Globe className="w-3.5 h-3.5" /> Cross-Border Delivery Network
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            Global Infrastructure. <span className="apple-blue-gradient">Multi-Region Delivery.</span>
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            Engineering high-impact web platforms, legacy modernization, and search dominance for ambitious founders and enterprises across North America, Europe, the Middle East, and India.
          </p>
        </div>

        {/* 4 Global Delivery Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {globalDeliveryHubs.map((hub, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-black/8 shadow-2xs flex flex-col justify-between hover:border-[#0071e3]/40 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0071e3] flex items-center justify-center font-bold text-xs border border-blue-200/60 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#f5f5f7] text-[#0071e3] border border-black/5 shadow-2xs">
                    {hub.badge}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#1d1d1f] mb-1 font-heading group-hover:text-[#0071e3] transition-colors">
                  {hub.region}
                </h3>
                <div className="text-xs font-semibold text-[#0f172a] mb-2">{hub.countries}</div>
                <div className="text-[11px] font-mono text-[#86868b] mb-4">{hub.cities}</div>

                <p className="text-xs text-[#515154] leading-relaxed mb-6">
                  {hub.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-black/6 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-bold">
                <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{hub.timezone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Enterprise Cross-Border Standards */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0071e3] flex items-center justify-center shrink-0 border border-blue-200/60">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#1d1d1f] mb-1.5 font-heading">
                24/7 Overlapping Time-Zone Sync
              </h4>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Seamless sprint coordination with daily progress syncs across <strong>EST, GMT, GST, and IST</strong> for zero operational lag.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#1d1d1f] mb-1.5 font-heading">
                International & Cross-Border SEO
              </h4>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Engineered with multi-region Hreflang tags, dynamic geo-DNS, and Schema.org structured data to rank at the top of Google searches across target markets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200/60">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#1d1d1f] mb-1.5 font-heading">
                Global Edge Latency (&lt;30ms) & IP Handover
              </h4>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Deployed across Cloudflare Global Edge networks with 100% intellectual property ownership and standard international NDA protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
