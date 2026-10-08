"use client";

import { ArrowUpRight, CheckCircle2, MessageSquare, ExternalLink, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, COMPANY_INFO } from "@/data/companyData";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 relative z-10 border-t border-black/6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-xs font-mono text-[#0071e3] border border-black/8 mb-4 font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            Recent Client <span className="apple-blue-gradient">Case Studies</span>
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            High-converting websites and software applications built for speed, scalable architecture, and measurable revenue growth.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((item) => (
            <div
              key={item.id}
              className="apple-bento-card flex flex-col justify-between group bg-white border border-black/8 shadow-sm"
            >
              <div>
                {/* Top Banner Gradient Visual */}
                <div className="h-44 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-slate-100 p-6 flex flex-col justify-between border-b border-black/6 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono px-3 py-1 rounded-full bg-white text-[#1d1d1f] shadow-2xs font-bold border border-black/6">
                      {item.clientCategory}
                    </span>
                    <span className="text-[10px] font-mono text-[#0071e3] font-bold bg-white/90 px-2.5 py-1 rounded-full border border-blue-200 shadow-2xs">
                      Delivered
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#0f172a] font-bold flex items-center gap-1.5 bg-white/95 px-3.5 py-2 rounded-xl w-fit border border-black/8 shadow-sm backdrop-blur-md">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {item.impactMetrics}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <h3 className="text-xl font-extrabold text-[#1d1d1f] mb-3 group-hover:text-[#0071e3] transition-colors flex items-center justify-between font-heading">
                    {item.title}
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#0071e3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-[#6e6e73] text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.techStack.map((tech, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#f5f5f7] text-[#515154] border border-black/4 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: 1-Click WhatsApp Trigger */}
              <div className="p-7 pt-0 border-t border-black/6 mt-4">
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs text-[#86868b] font-medium">Interested in similar results?</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20saw%20your%20${encodeURIComponent(item.title)}%20case%20study.%20I%20want%20to%20discuss%20a%20similar%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    Discuss Scope
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
