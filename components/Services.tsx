"use client";

import { useState } from "react";
import Link from "next/link";
import { Bot, Globe, Smartphone, Cloud, ShieldCheck, CheckCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/companyData";

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices = activeTab === "all"
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  const getIcon = (name: string) => {
    switch (name) {
      case "Bot":
        return <Bot className="w-6 h-6 text-[#0071e3]" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-indigo-600" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-emerald-600" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-sky-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-purple-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0071e3]" />;
    }
  };

  return (
    <section id="services" className="py-28 relative z-10 border-t border-black/6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-xs font-mono text-[#0071e3] border border-black/8 mb-4 font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Full Spectrum Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-4 font-heading">
            Services Built for <span className="apple-blue-gradient">High Growth</span>
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            From high-converting corporate websites to cross-platform mobile apps and custom enterprise automation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { id: "all", label: "All Services" },
            { id: "ai", label: "AI & Automation" },
            { id: "web", label: "Web & SaaS" },
            { id: "mobile", label: "Mobile Apps" },
            { id: "cloud", label: "Cloud & DevOps" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0f172a] text-white shadow-md scale-105"
                  : "bg-white text-[#64748b] hover:text-[#0f172a] border border-black/6 hover:border-black/15"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="apple-bento-card p-8 flex flex-col justify-between relative group cursor-pointer block bg-white"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="apple-icon-pod w-12 h-12 rounded-2xl flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-50 text-[#0071e3] font-bold border border-blue-200/60 shadow-2xs">
                    {service.deliveryTime}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-extrabold text-[#1d1d1f] mb-3 flex items-center justify-between group-hover:text-[#0071e3] transition-colors font-heading">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#0071e3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-[#6e6e73] text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#334155] font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Model & Tech Badges Footer */}
              <div>
                <div className="text-[11px] font-bold text-[#0071e3] mb-3 flex items-center justify-between font-mono">
                  <span>✦ {service.pricingModel}</span>
                  <span className="group-hover:translate-x-1 transition-transform text-[11px] text-[#64748b]">Explore Architecture →</span>
                </div>
                <div className="pt-3 border-t border-black/6 flex flex-wrap gap-1.5">
                  {service.techBadge.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#f5f5f7] text-[#515154] font-semibold border border-black/4">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
