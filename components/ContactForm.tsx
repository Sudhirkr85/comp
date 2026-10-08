"use client";

import { MessageSquare, PhoneCall, Mail, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import { COMPANY_INFO } from "@/data/companyData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceNeeded: "Business & Enterprise Website",
    timeline: "5-10 Days",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-black/8 bg-white text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Direct Contact & Instant WhatsApp Option */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-xs font-mono text-emerald-800 border border-emerald-200/80 mb-4 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Free Consultation & Architecture Breakdown
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] mb-6 font-heading">
              Let's Build Your Project
            </h2>
            <p className="text-[#64748b] text-base mb-8 leading-relaxed font-normal">
              Have a website, mobile app, or custom software requirement? Connect directly with our engineering team for an architectural breakdown tailored to your business goals.
            </p>

            {/* Direct Instant Call & WhatsApp Lead Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-blue-50/50 border border-emerald-200 shadow-sm mb-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-emerald-600" /> Instant Direct Connection
                </span>
                <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                  ACTIVE NOW
                </span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Prefer an instant discussion without filling long forms? Call or message us directly:
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* Direct Call Button */}
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Call: {COMPANY_INFO.rawPhone}
                </a>

                {/* Direct WhatsApp Button */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20have%20a%20project%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#0f172a]">
                <div className="w-11 h-11 rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-[#0071e3] border border-black/5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94a3b8] uppercase font-mono font-semibold">Email Us Directly</div>
                  <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-sm font-bold hover:text-[#0071e3] transition-colors">
                    {COMPANY_INFO.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#0f172a]">
                <div className="w-11 h-11 rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-emerald-600 border border-black/5">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94a3b8] uppercase font-mono font-semibold">Phone / WhatsApp Number</div>
                  <span className="text-sm font-bold">{COMPANY_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#0f172a]">
                <div className="w-11 h-11 rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-purple-600 border border-black/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#94a3b8] uppercase font-mono font-semibold">Office Location</div>
                  <span className="text-sm font-semibold">{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Converting Lead Form */}
          <div className="bg-[#f8fafc] rounded-3xl p-8 sm:p-10 border border-black/8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-black text-[#0f172a] font-heading">Request Feature-Wise Quote</h3>
                  <span className="text-[11px] font-mono text-[#0071e3] font-bold">Free NDA Signed</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#64748b] font-mono mb-1 font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-[#0f172a] text-xs focus:outline-none focus:border-[#0071e3] shadow-2xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#64748b] font-mono mb-1 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-[#0f172a] text-xs focus:outline-none focus:border-[#0071e3] shadow-2xs font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#64748b] font-mono mb-1 font-semibold">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9102130956"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-[#0f172a] text-xs focus:outline-none focus:border-[#0071e3] shadow-2xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#64748b] font-mono mb-1 font-semibold">Service Needed</label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-[#0f172a] text-xs focus:outline-none focus:border-[#0071e3] shadow-2xs font-medium"
                    >
                      <option>Business & Enterprise Website</option>
                      <option>Mobile App (Android / iOS)</option>
                      <option>Custom CRM / Billing Software</option>
                      <option>AI Customer Auto-Reply Chatbot</option>
                      <option>High-Availability Cloud Hosting Setup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#64748b] font-mono mb-1 font-semibold">Project Scope & Features Needed</label>
                  <textarea
                    rows={3}
                    placeholder="Describe what features you need (e.g. WhatsApp lead button, online payment, admin panel)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-[#0f172a] text-xs focus:outline-none focus:border-[#0071e3] shadow-2xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-slate-950 hover:bg-black text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" /> Request Project Proposal & Free NDA
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black text-[#0f172a] font-heading">Inquiry Received!</h4>
                <p className="text-[#64748b] text-sm max-w-sm mx-auto">
                  Thank you, <strong className="text-[#0f172a]">{formData.name}</strong>. Our team at <strong>SA Software Innovation</strong> has received your project details. We will email your scope breakdown to <strong className="text-[#0f172a]">{formData.email}</strong> or WhatsApp you within 2 hours.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi,%20I%20just%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(formData.serviceNeeded)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> Instant Follow Up on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
