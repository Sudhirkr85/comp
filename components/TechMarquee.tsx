import { Sparkles, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export default function TechMarquee() {
  const items = [
    { name: "Next.js 16 Turbopack", tag: "App Architecture" },
    { name: "Google Search Console", tag: "#1 Rankings" },
    { name: "Core Web Vitals 99/100", tag: "Speed SLA" },
    { name: "OpenAI & Custom Agents", tag: "24/7 AI" },
    { name: "WhatsApp Cloud API", tag: "Instant Leads" },
    { name: "Cloudflare Global Edge", tag: "<30ms Latency" },
    { name: "AWS Cloud Infrastructure", tag: "99.9% Uptime" },
    { name: "Flutter Cross-Platform", tag: "iOS & Android" },
    { name: "TypeScript & React 19", tag: "Type-Safe Code" },
    { name: "Website AMC & Maintenance", tag: "Proactive Fixes" },
    { name: "Schema.org Rich Snippets", tag: "Pan-India & Global" },
    { name: "PostgreSQL & Supabase", tag: "Enterprise DB" },
  ];

  return (
    <section className="py-7 bg-white/70 backdrop-blur-md border-y border-black/6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between text-xs font-mono text-[#86868b]">
        <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#1d1d1f]">
          <span className="w-2 h-2 rounded-full bg-[#0071e3]"></span>
          Enterprise Tech Stack & Global Engineering Standards
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#0071e3] font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" /> 100% Production Ready
        </div>
      </div>

      {/* Marquee Wrapper with Gradient Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-4 py-1">
          {/* Repeat list twice for seamless loop */}
          {[...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f5f5f7] border border-black/6 shadow-2xs hover:border-[#0071e3]/40 hover:bg-white transition-all cursor-default select-none shrink-0"
            >
              <span className="text-xs font-extrabold text-[#1d1d1f]">{item.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-[#0071e3] font-bold border border-black/5 shadow-2xs">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
