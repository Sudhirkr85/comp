import { Check, X, Minus, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AgencyComparisonTable() {
  const comparisonData = [
    {
      feature: "Project Delivery Speed",
      sa: "5 to 10 Days (Agile Milestone Sprints)",
      freelancer: "3 to 8 Weeks (Ghosting risk)",
      agency: "3 to 6 Months (Bloated bureaucracy)",
      saHighlight: true,
    },
    {
      feature: "Legacy Website Modernization",
      sa: "Full Overhaul: 20s to <1s Speed Boost",
      freelancer: "Refuses old code / Breaks layouts",
      agency: "Demands expensive full rewrite",
      saHighlight: true,
    },
    {
      feature: "Pan-India & Global Google SEO",
      sa: "Pre-Configured Schema & #1 Ranking Stack",
      freelancer: "Zero SEO architecture",
      agency: "Separate expensive monthly add-on",
      saHighlight: true,
    },
    {
      feature: "24/7 AI & WhatsApp Bots",
      sa: "Custom Trained AI Agents & CRM Sync",
      freelancer: "Not supported",
      agency: "Third-party subscription lock-in",
      saHighlight: true,
    },
    {
      feature: "Engineering vs. Blind AI Prompts",
      sa: "Handcrafted Architecture & TypeScript (Zero Blind Prompts)",
      freelancer: "Blind AI copy-paste with unfixable bugs",
      agency: "Outdated templates & heavy code bloat",
      saHighlight: true,
    },
    {
      feature: "100% IP & Source Code Handover",
      sa: "Full GitHub Access + Signed NDA",
      freelancer: "Holds code on personal computer",
      agency: "Proprietary vendor lock-in",
      saHighlight: true,
    },
    {
      feature: "Dedicated Website AMC & SLA",
      sa: "Guaranteed 99.9% Uptime & Priority Fixes",
      freelancer: "Disappears after final invoice",
      agency: "Slow multi-day ticketing delays",
      saHighlight: true,
    },
  ];

  return (
    <section className="py-24 bg-[#fbfbfd] border-t border-black/6 relative z-10 text-[#1d1d1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-3 font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Direct Transparency
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            How We Compare to the <span className="apple-blue-gradient">Market</span>
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            A clear, honest look at why fast-moving founders and enterprises choose SA Software Innovation over unvetted freelancers and bloated legacy agencies.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-black/8 bg-white shadow-sm mb-12">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-black/8 bg-[#f5f5f7]/60">
                <th className="py-5 px-6 text-xs font-mono font-bold text-[#86868b] uppercase tracking-wider w-1/4">
                  Engineering Standard
                </th>
                <th className="py-5 px-6 text-xs font-mono font-extrabold text-[#0071e3] uppercase tracking-wider bg-blue-50/60 border-x border-blue-200/60 w-1/3">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
                    SA Software Innovation
                  </div>
                </th>
                <th className="py-5 px-6 text-xs font-mono font-bold text-[#64748b] uppercase tracking-wider w-1/5">
                  Freelancers
                </th>
                <th className="py-5 px-6 text-xs font-mono font-bold text-[#64748b] uppercase tracking-wider w-1/5">
                  Traditional Agencies
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/6 text-xs">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-6 font-extrabold text-[#1d1d1f] font-heading text-sm">
                    {row.feature}
                  </td>
                  <td className="py-5 px-6 font-bold text-[#0f172a] bg-blue-50/30 border-x border-blue-200/40">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                        <Check className="w-2.5 h-2.5 text-emerald-700" />
                      </div>
                      <span className="text-[#0f172a] font-extrabold leading-snug">{row.sa}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-[#64748b]">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5 text-red-600" />
                      </div>
                      <span>{row.freelancer}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-[#64748b]">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Minus className="w-2.5 h-2.5 text-amber-700" />
                      </div>
                      <span>{row.agency}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Assurance Card */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-black/8 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0071e3] flex items-center justify-center shrink-0 border border-blue-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#1d1d1f] font-heading">
                Zero Lock-In Guarantee with Signed NDA
              </h4>
              <p className="text-xs text-[#6e6e73]">
                Your intellectual property is protected before project kickoff. You own 100% of the code, designs, and credentials.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="apple-btn-black px-6 py-3 text-xs font-bold shrink-0 hover:scale-105 active:scale-95 shadow-xs"
          >
            Start Your Project Scope
          </a>
        </div>
      </div>
    </section>
  );
}
