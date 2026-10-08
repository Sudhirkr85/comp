"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck, Sparkles, PhoneCall, MessageSquare, Zap, Clock, Code2, AlertOctagon, CheckCircle2 } from "lucide-react";
import { WHY_US_DATA, FAQ_DATA, COMPANY_INFO } from "@/data/companyData";

const WHY_ICONS = [
  <Zap key="1" className="w-6 h-6 text-[#0071e3]" />,
  <AlertOctagon key="2" className="w-6 h-6 text-red-600" />,
  <Clock key="3" className="w-6 h-6 text-emerald-600" />,
  <ShieldCheck key="4" className="w-6 h-6 text-indigo-600" />,
  <Code2 key="5" className="w-6 h-6 text-purple-600" />
];

export default function WhyUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="why-us" className="py-28 relative z-10 bg-[#f5f5f7] border-t border-black/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Us Highlights Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-xs font-mono text-[#0071e3] border border-black/8 mb-4 font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Zero Agency Bloat • Zero Blind Prompts
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            Why Founders <span className="apple-blue-gradient">Choose Us</span>
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            Disciplined software engineering, transparent agile milestones, and 100% intellectual property ownership.
          </p>
        </div>

        {/* Bento Grid: 5 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_US_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`apple-bento-card p-8 bg-white flex flex-col justify-between ${
                idx === 1 ? "border-red-200/80 ring-1 ring-red-200/50" : ""
              }`}
            >
              <div>
                <div className="apple-icon-pod w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {WHY_ICONS[idx % WHY_ICONS.length]}
                </div>
                <h3 className="text-lg font-extrabold text-[#1d1d1f] mb-3 tracking-tight font-heading">{item.title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Anti-Blind Prompt Manifesto Callout Card */}
        <div className="rounded-3xl bg-white border border-black/8 p-8 sm:p-10 shadow-sm mb-24 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[11px] font-mono text-red-700 font-bold border border-red-200">
                <AlertOctagon className="w-3.5 h-3.5" /> Our Engineering Standard
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] font-heading">
                We Don't Build Blind-Prompt AI Websites. <br />
                <span className="text-[#0071e3]">We Engineer Real, Scalable Software.</span>
              </h3>
              <p className="text-sm text-[#515154] leading-relaxed">
                Anyone can type a prompt into an AI generator and copy-paste brittle spaghetti code that crashes on production, exposes customer data, and fails Google ranking audits. At <strong>SA Software Innovation</strong>, every project is engineered with strict TypeScript typing, relational database integrity, modular components, and 99/100 Core Web Vitals speed. AI accelerates our velocity — but senior human engineering ensures your code can scale for years.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-black/6 space-y-2.5 text-xs font-semibold text-[#1e293b] shrink-0 w-full lg:w-80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strict TypeScript & Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Production Database Indexing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Google Schema.org SEO Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Maintainable Source Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div id="faq" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1d1d1f] mb-3 font-heading">
              Frequently Asked Questions
            </h3>
            <p className="text-[#6e6e73] text-sm sm:text-base">
              Everything you need to know about partnering with SA Software Innovation.
            </p>
          </div>

          <div className="space-y-4 mb-14">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-black/8 shadow-2xs overflow-hidden transition-all hover:border-[#0071e3]/30"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#1d1d1f] hover:text-[#0071e3] transition-colors text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#0071e3]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#515154] leading-relaxed border-t border-black/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support Card */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-black/8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="font-extrabold text-[#0f172a] text-lg font-heading">Still have a question or need an architecture consultation?</div>
              <div className="text-xs sm:text-sm text-[#64748b]">Speak directly with our senior engineering lead right now.</div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.rawPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-black transition-all shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#38bdf8]" />
                Call: {COMPANY_INFO.rawPhone}
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20have%20a%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
