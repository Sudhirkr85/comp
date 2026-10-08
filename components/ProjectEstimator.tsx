"use client";

import { useState } from "react";
import { Calculator, Check, ArrowRight, ShieldCheck, FileText, Smartphone, Globe, ShoppingCart, Sparkles, MessageSquare, PhoneCall } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const FEATURE_LIST = [
  { id: "mobile-responsive", label: "Mobile-First Ultra Fast Layout", tag: "Essential" },
  { id: "whatsapp-lead", label: "Instant WhatsApp & Call Lead Button", tag: "High ROI" },
  { id: "seo-basics", label: "Google Local Search SEO Setup", tag: "Recommended" },
  { id: "contact-form", label: "Lead Inquiry Form with Email Alert", tag: "Popular" },
  { id: "admin-cms", label: "Easy Admin Panel to Edit Text/Images", tag: "Self-Managed" },
  { id: "payment-upi", label: "Online Payment Gateway (UPI / Cards)", tag: "E-Commerce" },
  { id: "domain-hosting", label: "Domain & Free Cloud Hosting Setup", tag: "Zero Maintenance" },
  { id: "ai-bot", label: "24/7 AI Customer Enquiry Auto-Reply", tag: "Advanced" },
  { id: "multi-page", label: "Multiple Pages (Services, About, FAQ)", tag: "Full Scope" },
];

export default function ProjectEstimator() {
  const [projectType, setProjectType] = useState<string>("starter-web");
  const [features, setFeatures] = useState<string[]>([
    "mobile-responsive",
    "whatsapp-lead",
    "seo-basics"
  ]);
  const [timeline, setTimeline] = useState<string>("standard");
  const [clientContact, setClientContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleFeature = (id: string) => {
    if (features.includes(id)) {
      setFeatures(features.filter((f) => f !== id));
    } else {
      setFeatures([...features, id]);
    }
  };

  // Determine Scope Tier Name
  let scopeTier = "Essential Business Website (Minimal Cost)";
  if (projectType === "pro-web") scopeTier = "Growth Business Website (Full Feature)";
  if (projectType === "mobile") scopeTier = "Android & iOS Mobile App Package";
  if (projectType === "custom-software") scopeTier = "Complete Custom Software / Portal Package";

  // WhatsApp prefilled message
  const selectedFeatureLabels = FEATURE_LIST.filter(f => features.includes(f.id)).map(f => f.label).join(", ");
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi SA Software Innovation,\nI configured my project scope on your website:\n\n• Package: ${scopeTier}\n• Features: ${selectedFeatureLabels}\n• Timeline: ${timeline === "express" ? "3-5 Days Priority" : "5-10 Days Standard"}\n\nPlease share your lowest-cost quote.`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientContact) return;
    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-28 relative z-10 bg-[#f5f5f7] border-t border-black/6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/8 shadow-md relative overflow-hidden">
          {/* Subtle Ambient Accent */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100/40 blur-3xl rounded-full pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-3 font-semibold shadow-2xs">
              <Calculator className="w-3.5 h-3.5" /> Feature-Wise Pricing Configurator
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-3 font-heading">
              Build Your Website at <span className="apple-blue-gradient">Minimal Cost</span>
            </h2>
            <p className="text-[#6e6e73] text-sm sm:text-base leading-relaxed">
              Pick only the features your business actually needs. No unnecessary bloated packages — pay only for what you choose and get an instant custom quote.
            </p>
          </div>

          {!submitted ? (
            <div className="space-y-10">
              {/* Step 1: Base Platform */}
              <div>
                <label className="block text-xs uppercase font-mono text-[#0071e3] mb-3 font-bold">
                  Step 1: Choose Your Starting Base
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "starter-web", label: "Starter Business Website", desc: "Low-cost essentials", icon: <Globe className="w-4 h-4 text-[#0071e3]" /> },
                    { id: "pro-web", label: "Pro Multi-Page Website", desc: "For growing brands", icon: <ShoppingCart className="w-4 h-4 text-purple-600" /> },
                    { id: "mobile", label: "Mobile App (Android/iOS)", desc: "Cross-platform app", icon: <Smartphone className="w-4 h-4 text-emerald-600" /> },
                    { id: "custom-software", label: "Custom Software / CRM", desc: "Tailored to workflow", icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id)}
                      className={`p-4 rounded-2xl text-xs sm:text-sm font-medium border text-left transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                        projectType === type.id
                          ? "bg-blue-50/80 border-[#0071e3] text-[#0071e3] font-bold shadow-xs scale-102"
                          : "bg-[#fbfbfd] border-black/8 text-[#515154] hover:text-[#1d1d1f] hover:bg-gray-100"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-black/5 shadow-2xs">
                        {type.icon}
                      </div>
                      <div>
                        <div className="font-bold">{type.label}</div>
                        <div className="text-[10px] text-[#86868b]">{type.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Feature-Wise Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase font-mono text-[#0071e3] font-bold">
                    Step 2: Select Exact Features (Keep cost minimal)
                  </label>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200">
                    {features.length} Features Selected
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {FEATURE_LIST.map((feat) => {
                    const isSelected = features.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-3.5 rounded-2xl text-xs font-medium border flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? "bg-emerald-50/80 border-emerald-500 text-emerald-950 font-bold shadow-xs"
                            : "bg-[#fbfbfd] border-black/8 text-[#515154] hover:text-[#1d1d1f] hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex flex-col text-left">
                          <span className="font-semibold">{feat.label}</span>
                          <span className="text-[9px] font-mono text-[#86868b]">{feat.tag}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Delivery Window */}
              <div>
                <label className="block text-xs uppercase font-mono text-[#0071e3] mb-3 font-bold">
                  Step 3: Desired Delivery Window
                </label>
                <div className="grid grid-cols-2 gap-3 max-w-lg">
                  {[
                    { id: "standard", label: "Standard Delivery (5-10 Days)" },
                    { id: "express", label: "Priority Express (3-5 Days)" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id)}
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm font-bold border text-center transition-all cursor-pointer ${
                        timeline === t.id
                          ? "bg-[#0f172a] text-white border-black shadow-sm"
                          : "bg-[#fbfbfd] border-black/8 text-[#515154] hover:text-[#1d1d1f] hover:bg-gray-100"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instant WhatsApp & Call Options Box */}
              <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
                <div className="space-y-1 text-center md:text-left">
                  <span className="text-[11px] text-[#86868b] font-mono uppercase tracking-wider font-bold">Configured Scope:</span>
                  <div className="text-lg sm:text-xl font-extrabold text-[#1d1d1f] flex items-center gap-2 font-heading justify-center md:justify-start">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    {scopeTier}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-700 font-bold justify-center md:justify-start">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Minimal Cost Guarantee • Direct Code Ownership
                  </div>
                </div>

                {/* Direct Action Triggers */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                  {/* WhatsApp Direct with Configured Scope */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-md active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Get Quote on WhatsApp
                  </a>

                  {/* Direct Phone Call */}
                  <a
                    href={`tel:${COMPANY_INFO.rawPhone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-black transition-all shadow-md active:scale-95"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#38bdf8]" />
                    Call: {COMPANY_INFO.rawPhone}
                  </a>
                </div>
              </div>

              {/* Form Option: Email / Phone submit */}
              <form onSubmit={handleSubmit} className="pt-2 flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  required
                  placeholder="Or enter your Phone / Email for a detailed PDF proposal..."
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-full bg-white border border-black/15 text-[#1d1d1f] text-xs placeholder:text-gray-400 focus:outline-none focus:border-[#0071e3] shadow-2xs"
                />
                <button
                  type="submit"
                  className="apple-btn-black px-7 py-3.5 text-xs font-bold shadow-md cursor-pointer shrink-0"
                >
                  Send Proposal Request
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" />
                </button>
              </form>
            </div>
          ) : (
            /* Success Feedback */
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1d1d1f] font-heading">Proposal Request Received!</h3>
              <p className="text-[#515154] max-w-md mx-auto text-sm leading-relaxed">
                Thank you! We have logged your selected features for <strong className="text-[#1d1d1f]">{scopeTier}</strong>. 
                Our team at <strong>SA Software Innovation</strong> will reach out to <strong className="text-[#1d1d1f]">{clientContact}</strong> within 2 hours with our lowest-cost transparent breakdown.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 text-white font-bold text-xs shadow-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#38bdf8]" /> Call {COMPANY_INFO.rawPhone} Now
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#1d1d1f] hover:bg-gray-50"
                >
                  Reconfigure
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
