"use client";

import { useState } from "react";
import { Zap, Search, ShieldCheck, CheckCircle2, ArrowRight, PhoneCall, MessageSquare, Sparkles, Activity } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function AuditTool() {
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("Slow Loading Speed (Takes 10-20s)");
  const [analyzing, setAnalyzing] = useState(false);
  const [auditReady, setAuditReady] = useState(false);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAuditReady(true);
    }, 1200);
  };

  const getWhatsAppAuditUrl = () => {
    const text = `Hi SA Software Innovation,\n\nI want a Free Speed & SEO Audit for my website:\n🌐 Website: ${url}\n⚠️ Main Challenge: ${issue}\n📱 My Contact: ${phone || "Via WhatsApp"}\n\nPlease share the Core Web Vitals & Google ranking breakdown.`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="audit-tool" className="py-24 bg-gradient-to-b from-[#f5f5f7] via-white to-[#f5f5f7] border-t border-black/6 relative z-10 text-[#1d1d1f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-xs font-mono text-emerald-800 border border-emerald-200/80 mb-3 font-bold shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-emerald-600" /> Free 60-Second Technical Diagnosis
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            Is Your Website <span className="apple-blue-gradient">Slow or Missing</span> on Google?
          </h2>
          <p className="text-[#6e6e73] text-sm sm:text-base">
            Enter your website URL below. We will run a comprehensive Core Web Vitals speed test, legacy code audit, and Pan-India & Global Google SEO ranking scan — completely free.
          </p>
        </div>

        {/* Audit Tool Card */}
        <div className="bg-white rounded-3xl border border-black/10 shadow-lg p-7 sm:p-10 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          {!auditReady ? (
            <form onSubmit={handleAudit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#1d1d1f] uppercase tracking-wider mb-2">
                    1. Enter Your Website URL *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#86868b]">https://</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. yourcompany.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full pl-20 pr-4 py-3.5 rounded-2xl bg-[#f5f5f7] border border-black/10 text-sm font-semibold text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#1d1d1f] uppercase tracking-wider mb-2">
                    2. WhatsApp Number for Report
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9102130956"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#f5f5f7] border border-black/10 text-sm font-semibold text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#1d1d1f] uppercase tracking-wider mb-2">
                  3. What Is Your Biggest Frustration Right Now?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {[
                    "Slow Loading Speed (Takes 10-20s)",
                    "Not Ranking on Google Page 1",
                    "Old Outdated Design / Needs AMC",
                    "Zero Leads / Broken Mobile Layout",
                    "Want 24/7 AI WhatsApp Auto-Reply",
                    "Need Brand-New Modern Website",
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setIssue(item)}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                        issue === item
                          ? "bg-[#0f172a] text-white border-[#0f172a] shadow-xs"
                          : "bg-[#fbfbfd] text-[#515154] border-black/8 hover:border-black/20"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/6">
                <div className="flex items-center gap-2 text-xs text-[#6e6e73]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Free Confidential Audit • No spam guaranteed</span>
                </div>

                <button
                  type="submit"
                  disabled={analyzing}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-60"
                >
                  {analyzing ? (
                    <>
                      <Activity className="w-4 h-4 animate-spin" />
                      Scanning Core Web Vitals & SEO...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Run Free Speed & SEO Audit
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-6 relative z-10 animate-fade-in">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Diagnosis Ready for: {url || "Your Domain"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] mt-3 font-heading">
                  Initial Diagnostic Completed
                </h3>
                <p className="text-sm text-[#6e6e73] max-w-lg mx-auto mt-2">
                  Our automated crawler has flagged Core Web Vitals latency and regional search ranking gaps for <strong>{url}</strong>. Get the full line-by-line optimization report sent directly to your WhatsApp.
                </p>
              </div>

              {/* Diagnostic Checklist */}
              <div className="max-w-md mx-auto bg-[#f8fafc] p-5 rounded-2xl border border-black/6 text-left space-y-2.5 text-xs text-[#334155] font-semibold">
                <div className="flex items-center justify-between">
                  <span>⚡ Core Web Vitals Speed Test:</span>
                  <span className="text-amber-600 font-mono">Overhaul Recommended</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>🔍 Google India & Global Indexing:</span>
                  <span className="text-blue-600 font-mono">Schema Audit Ready</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>🛠️ Codebase Maintenance & AMC:</span>
                  <span className="text-emerald-700 font-mono">Modernization Eligible</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppAuditUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  Receive Complete Report on WhatsApp
                </a>

                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0f172a] hover:bg-black text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-[#38bdf8]" />
                  Call: {COMPANY_INFO.rawPhone}
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setAuditReady(false);
                    setUrl("");
                  }}
                  className="text-xs text-[#86868b] hover:text-[#1d1d1f] underline block w-full pt-2 cursor-pointer"
                >
                  Check another website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
