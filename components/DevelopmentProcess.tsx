"use client";

import { CheckCircle2, ShieldCheck, Sparkles, Cpu, Layers, GitBranch, ArrowRight, PhoneCall, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "We analyze your business objectives, target audience, and feature requirements to engineer a scalable technical roadmap.",
    metrics: "Technical Blueprints",
  },
  {
    step: "02",
    title: "Apple-Grade UI/UX Prototyping",
    description: "Designing pixel-perfect, modern responsive interfaces focused on conversion psychology, intuitive navigation, and high brand credibility.",
    metrics: "Figma & Interactive Prototype",
  },
  {
    step: "03",
    title: "High-Performance Engineering",
    description: "Built using modern stacks (Next.js, TypeScript, Flutter, PostgreSQL) with 99/100 Core Web Vitals speed and robust security.",
    metrics: "Clean Production Code",
  },
  {
    step: "04",
    title: "Deployment & 100% Code Handover",
    description: "Zero lock-in. We deploy to high-availability cloud infrastructure and hand over full intellectual property, source code, and database access.",
    metrics: "Complete IP Ownership",
  },
];

export default function DevelopmentProcess() {
  return (
    <section id="process" className="py-28 relative z-10 bg-white border-t border-black/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-4 font-bold shadow-2xs">
            <Cpu className="w-3.5 h-3.5" /> Engineering Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            How We Build <span className="apple-blue-gradient">World-Class Software</span>
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            A disciplined, transparent delivery framework designed to take your project from concept to live production seamlessly.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="apple-bento-card p-8 bg-[#fbfbfd] border border-black/8 flex flex-col justify-between group hover:border-[#0071e3]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-[#0071e3] font-mono">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white text-[#64748b] border border-black/6 font-bold shadow-2xs">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#1d1d1f] mb-3 tracking-tight font-heading group-hover:text-[#0071e3] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/6 flex items-center gap-2 text-xs font-bold text-emerald-700 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Consultation Banner */}
        <div className="rounded-3xl bg-[#f5f5f7] p-8 sm:p-12 border border-black/8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Non-Disclosure Agreement (NDA) Protected • Confidential Discussion
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight font-heading">
              Have an upcoming website, mobile app, or software requirement?
            </h4>
            <p className="text-sm text-[#64748b] max-w-2xl">
              Connect directly with our engineering leadership to discuss technical architecture, timelines, and tailored implementation strategies.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-black transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#38bdf8]" />
              Call: {COMPANY_INFO.rawPhone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20want%20to%20discuss%20a%20project%20requirement.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-md active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white" />
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
