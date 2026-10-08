"use client";

import { useState } from "react";
import { Zap, Search, ShieldCheck, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Activity, Globe, Server, FileText, Check, RefreshCw } from "lucide-react";

interface AuditResult {
  url: string;
  normalizedUrl: string;
  statusCode: number;
  serverLatencyMs: number;
  isHttps: boolean;
  serverSoftware: string;
  contentEncoding: string;
  pageSizeKb: number;
  title: string | null;
  titleLength: number;
  metaDescription: string | null;
  metaDescLength: number;
  h1: string | null;
  h1Count: number;
  hasSchemaOrg: boolean;
  schemaTypes: string[];
  isMobileResponsive: boolean;
  hasOpenGraph: boolean;
  hasCanonical: boolean;
  imageCount: number;
  imagesMissingAlt: number;
  scriptCount: number;
  stylesheetCount: number;
  performanceScore: number;
  seoScore: number;
  bestPracticesScore: number;
  overallScore: number;
  diagnostics: Array<{
    type: "success" | "warning" | "error";
    category: "Performance" | "SEO" | "Architecture";
    message: string;
  }>;
}

export default function AuditTool() {
  const [url, setUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [loadingStep, setLoadingStep] = useState("Connecting to server...");
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setAnalyzing(true);
    setErrorMsg(null);
    setAuditResult(null);

    // Dynamic loading messages
    setLoadingStep(`Connecting to ${url.trim()}...`);
    const t1 = setTimeout(() => setLoadingStep("Analyzing server latency & HTTP response..."), 600);
    const t2 = setTimeout(() => setLoadingStep("Parsing DOM, Title & Meta descriptions..."), 1200);
    const t3 = setTimeout(() => setLoadingStep("Inspecting Schema.org, Mobile Viewport & Images..."), 1800);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);

      if (!res.ok) {
        throw new Error(data.error || "Failed to analyze website. Please check if the URL is accessible.");
      }

      setAuditResult(data);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred while analyzing the website.");
    } finally {
      setAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return { text: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-800" };
    if (score >= 60) return { text: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-800" };
    return { text: "text-red-700", bg: "bg-red-50", border: "border-red-200", badge: "bg-red-100 text-red-800" };
  };

  return (
    <section id="audit-tool" className="py-24 bg-gradient-to-b from-[#f5f5f7] via-white to-[#f5f5f7] border-t border-black/6 relative z-10 text-[#1d1d1f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/80 mb-3 font-bold shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-[#0071e3]" /> Real-Time Live Technical Audit Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            Live Speed, SEO & <span className="apple-blue-gradient">Code Health Audit</span>
          </h2>
          <p className="text-[#6e6e73] text-sm sm:text-base">
            Enter any website URL below. Our server connects directly to the domain in real-time, measures response latency, inspects Schema.org tags, and evaluates production architecture.
          </p>
        </div>

        {/* Audit Tool Card */}
        <div className="bg-white rounded-3xl border border-black/10 shadow-lg p-7 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          {!auditResult ? (
            <form onSubmit={handleAudit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-xs font-mono font-bold text-[#1d1d1f] uppercase tracking-wider mb-2">
                  Enter Website URL to Analyze (Live Crawl) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#86868b]">https://</span>
                  <input
                    type="text"
                    required
                    placeholder="e.g. sssamacademy.com or yourcompany.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full pl-20 pr-4 py-4 rounded-2xl bg-[#f5f5f7] border border-black/10 text-sm font-semibold text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all shadow-2xs font-mono"
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-3">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/6">
                <div className="flex items-center gap-2 text-xs text-[#6e6e73]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct live server crawl • 100% Real-time technical extraction</span>
                </div>

                <button
                  type="submit"
                  disabled={analyzing}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-60"
                >
                  {analyzing ? (
                    <>
                      <Activity className="w-4 h-4 animate-spin" />
                      <span>{loadingStep}</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Run Live Real-Time Audit
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-2 space-y-7 relative z-10 animate-fade-in">
              {/* Header: Verified Domain Information */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                      Live Server Crawl Succeeded • HTTP {auditResult.statusCode}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1d1d1f] mt-2 font-heading flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#0071e3]" />
                    <span className="font-mono">{auditResult.normalizedUrl}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#6e6e73] mt-1.5">
                    <span>⚡ TTFB Latency: <strong className="text-[#0f172a]">{auditResult.serverLatencyMs}ms</strong></span>
                    <span>•</span>
                    <span>Server: <strong className="text-[#0f172a]">{auditResult.serverSoftware}</strong></span>
                    <span>•</span>
                    <span>Compression: <strong className="text-[#0f172a]">{auditResult.contentEncoding}</strong></span>
                    <span>•</span>
                    <span>HTML Size: <strong className="text-[#0f172a]">{auditResult.pageSizeKb} KB</strong></span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setAuditResult(null);
                    setUrl("");
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f5f5f7] hover:bg-black hover:text-white text-xs font-mono font-bold text-[#1d1d1f] transition-all cursor-pointer border border-black/6"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Test Another URL
                </button>
              </div>

              {/* 3 Real Computed Score Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Performance Card */}
                {(() => {
                  const perfStyle = getScoreColor(auditResult.performanceScore);
                  return (
                    <div className={`p-6 rounded-2xl ${perfStyle.bg} border ${perfStyle.border} flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1d1d1f]">
                            Server Performance
                          </span>
                          <span className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-full ${perfStyle.badge}`}>
                            {auditResult.performanceScore} / 100
                          </span>
                        </div>
                        <div className="text-xl font-extrabold text-[#1d1d1f] mb-1">
                          {auditResult.serverLatencyMs < 600 ? "Optimal Response Speed" : auditResult.serverLatencyMs < 1500 ? "Moderate Server Delay" : "High Latency Warning"}
                        </div>
                        <p className="text-xs text-[#515154] leading-relaxed">
                          Initial response time: <strong>{auditResult.serverLatencyMs}ms</strong>. Page payload: <strong>{auditResult.pageSizeKb} KB</strong> with <strong>{auditResult.contentEncoding}</strong> compression.
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* SEO Health Card */}
                {(() => {
                  const seoStyle = getScoreColor(auditResult.seoScore);
                  return (
                    <div className={`p-6 rounded-2xl ${seoStyle.bg} border ${seoStyle.border} flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1d1d1f]">
                            Google SEO Structure
                          </span>
                          <span className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-full ${seoStyle.badge}`}>
                            {auditResult.seoScore} / 100
                          </span>
                        </div>
                        <div className="text-xl font-extrabold text-[#1d1d1f] mb-1">
                          {auditResult.hasSchemaOrg ? "Schema.org Active" : "Missing Rich Schema"}
                        </div>
                        <p className="text-xs text-[#515154] leading-relaxed">
                          Title: <strong>{auditResult.titleLength} chars</strong>. Meta Description: <strong>{auditResult.metaDescLength > 0 ? "Present" : "Missing"}</strong>. Schema types: <strong>{auditResult.schemaTypes.length > 0 ? auditResult.schemaTypes.join(", ") : "None detected"}</strong>.
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* Architecture & Mobile Card */}
                {(() => {
                  const bpStyle = getScoreColor(auditResult.bestPracticesScore);
                  return (
                    <div className={`p-6 rounded-2xl ${bpStyle.bg} border ${bpStyle.border} flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1d1d1f]">
                            Architecture & Mobile
                          </span>
                          <span className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-full ${bpStyle.badge}`}>
                            {auditResult.bestPracticesScore} / 100
                          </span>
                        </div>
                        <div className="text-xl font-extrabold text-[#1d1d1f] mb-1">
                          {auditResult.isMobileResponsive ? "Mobile Ready" : "Viewport Needs Fix"}
                        </div>
                        <p className="text-xs text-[#515154] leading-relaxed">
                          SSL: <strong>{auditResult.isHttps ? "Active (HTTPS)" : "Insecure (HTTP)"}</strong>. Viewport: <strong>{auditResult.isMobileResponsive ? "Configured" : "Missing"}</strong>. Images missing alt: <strong>{auditResult.imagesMissingAlt}</strong> of {auditResult.imageCount}.
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Real Extracted Elements Details Box */}
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-black/8 space-y-3.5 text-xs">
                <div className="font-mono font-extrabold text-[#0f172a] uppercase tracking-wider text-xs border-b border-black/6 pb-2 flex items-center justify-between">
                  <span>Real Extracted Page Metadata</span>
                  <span className="text-[10px] text-[#64748b]">Live DOM Scan</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[#64748b] font-mono block mb-1">Extracted Page Title ({auditResult.titleLength} chars):</span>
                    <div className="font-semibold text-[#0f172a] bg-white p-2.5 rounded-xl border border-black/6">
                      {auditResult.title || "No <title> tag found"}
                    </div>
                  </div>

                  <div>
                    <span className="text-[#64748b] font-mono block mb-1">Extracted Meta Description ({auditResult.metaDescLength} chars):</span>
                    <div className="font-semibold text-[#0f172a] bg-white p-2.5 rounded-xl border border-black/6 line-clamp-2">
                      {auditResult.metaDescription || "No <meta name='description'> found"}
                    </div>
                  </div>
                </div>

                {auditResult.h1 && (
                  <div>
                    <span className="text-[#64748b] font-mono block mb-1">Primary &lt;h1&gt; Heading ({auditResult.h1Count} tag found):</span>
                    <div className="font-semibold text-[#0f172a] bg-white p-2.5 rounded-xl border border-black/6">
                      {auditResult.h1}
                    </div>
                  </div>
                )}
              </div>

              {/* Real Diagnostic Action Checklist */}
              <div>
                <div className="font-mono font-bold text-xs uppercase tracking-wider text-[#1d1d1f] mb-3">
                  Technical Diagnostic Findings ({auditResult.diagnostics.length} Items Analyzed):
                </div>
                <div className="space-y-2.5">
                  {auditResult.diagnostics.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-xs flex items-start gap-3 ${
                        item.type === "success"
                          ? "bg-emerald-50/50 border-emerald-200 text-emerald-900"
                          : item.type === "warning"
                          ? "bg-amber-50/50 border-amber-200 text-amber-900"
                          : "bg-red-50/50 border-red-200 text-red-900"
                      }`}
                    >
                      {item.type === "success" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : item.type === "warning" ? (
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase mr-2 px-1.5 py-0.5 rounded bg-white/70 border border-black/5">
                          {item.category}
                        </span>
                        <span className="font-medium">{item.message}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/6">
                <div className="flex items-center gap-2 text-xs text-[#515154]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Senior engineering team available for code modernization & speed overhaul</span>
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
