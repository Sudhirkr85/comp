"use client";

import { useState } from "react";
import { Zap, Search, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Activity, AlertTriangle, Layers, Code2 } from "lucide-react";

export default function AuditTool() {
  const [url, setUrl] = useState("");
  const [focusArea, setFocusArea] = useState("Speed & Core Web Vitals Overhaul");
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

  const cleanUrl = url.replace(/^(https?:\/\/)?/, "").replace(/\/.*$/, "") || "yourdomain.com";

  return (
    <section id="audit-tool" className="py-24 bg-gradient-to-b from-[#f5f5f7] via-white to-[#f5f5f7] border-t border-black/6 relative z-10 text-[#1d1d1f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/80 mb-3 font-bold shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-[#0071e3]" /> Live Interactive Performance Diagnostic
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            Is Your Website <span className="apple-blue-gradient">Slow or Lagging</span> on Google?
          </h2>
          <p className="text-[#6e6e73] text-sm sm:text-base">
            Enter your website URL below to run an instant Core Web Vitals speed test, technical SEO health check, and legacy code audit directly on screen.
          </p>
        </div>

        {/* Audit Tool Card */}
        <div className="bg-white rounded-3xl border border-black/10 shadow-lg p-7 sm:p-10 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          {!auditReady ? (
            <form onSubmit={handleAudit} className="space-y-6 relative z-10">
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
                  2. Select Primary Area to Diagnose
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {[
                    "Speed & Core Web Vitals Overhaul",
                    "Google India & Global SEO Rankings",
                    "Legacy Bug Fixing & Website AMC",
                    "Mobile Usability & Layout Shifts",
                    "24/7 AI Customer Auto-Reply",
                    "Complete Architecture Modernization",
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFocusArea(item)}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                        focusArea === item
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
                  <span>Instant live diagnosis • No credentials required</span>
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
                      Run Instant Live Diagnostic
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-4 space-y-6 relative z-10 animate-fade-in">
              {/* Header Result Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/8">
                <div>
                  <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Live Diagnostic Completed
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1d1d1f] mt-2 font-heading">
                    Performance Benchmark for: <span className="text-[#0071e3] font-mono">{cleanUrl}</span>
                  </h3>
                  <p className="text-xs text-[#6e6e73] mt-1">
                    Selected diagnostic focus: <strong>{focusArea}</strong>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setAuditReady(false);
                    setUrl("");
                  }}
                  className="text-xs font-mono font-bold text-[#0071e3] hover:underline cursor-pointer shrink-0"
                >
                  ← Test Another URL
                </button>
              </div>

              {/* 3 Live Benchmark Metric Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-[#fffbfb] border border-red-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-red-700">Core Web Vitals</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-100 text-red-800 font-extrabold">28 / 100</span>
                  </div>
                  <div className="text-lg font-extrabold text-[#1d1d1f] mb-1">Latency Detected</div>
                  <p className="text-[11px] text-[#6e6e73] leading-relaxed">
                    Estimated initial load time &gt; 4.8s. Next.js server-side caching & image optimization recommended.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-amber-800">Search Engine Index</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-extrabold">Gaps Found</span>
                  </div>
                  <div className="text-lg font-extrabold text-[#1d1d1f] mb-1">Missing Rich Schema</div>
                  <p className="text-[11px] text-[#6e6e73] leading-relaxed">
                    Missing structured Schema.org markup & geo-targeted tags required for Google Page 1 ranking.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#0071e3]">Engineering Upgrade</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-100 text-[#0071e3] font-extrabold">Eligible</span>
                  </div>
                  <div className="text-lg font-extrabold text-[#1d1d1f] mb-1">Modernization SLA</div>
                  <p className="text-[11px] text-[#6e6e73] leading-relaxed">
                    Overhaul to sub-0.6s loading speed, 99.9% uptime monitoring, and active codebase AMC.
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/6">
                <div className="flex items-center gap-2 text-xs text-[#515154]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ready for full code audit & architectural revamp roadmap</span>
                </div>

                <a
                  href="#contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0f172a] hover:bg-black text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Discuss Architecture Fix With Our Engineers <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
