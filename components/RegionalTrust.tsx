"use client";

import { MapPin, Globe, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function RegionalTrust() {
  const regions = [
    { city: "Delhi NCR", state: "Delhi, Noida, Gurgaon, Faridabad" },
    { city: "Uttar Pradesh", state: "Lucknow, Kanpur, Varanasi, Agra, Meerut" },
    { city: "Bihar", state: "Patna, Gaya, Muzaffarpur, Bhagalpur" },
    { city: "Madhya Pradesh", state: "Bhopal, Indore, Gwalior, Jabalpur" },
    { city: "Rajasthan", state: "Jaipur, Jodhpur, Udaipur, Kota" },
    { city: "Pan-India & Global", state: "Serving Founders Across India, USA, UAE & UK" },
  ];

  return (
    <section className="py-20 bg-[#fbfbfd] border-t border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-3 font-semibold">
            <Globe className="w-3.5 h-3.5" /> High-Trust Local & National Reach
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-3">
            Trusted Web & App Development Across India
          </h2>
          <p className="text-[#86868b] text-sm sm:text-base">
            Whether you are a startup in Delhi, an established enterprise in UP & Bihar, or a growing business in MP and Rajasthan, we provide transparent communication and fast project delivery.
          </p>
        </div>

        {/* Region Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-black/6 shadow-2xs text-center flex flex-col justify-center items-center hover:border-[#0071e3]/40 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0071e3] mb-2">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#1d1d1f] mb-0.5">{reg.city}</span>
              <span className="text-[10px] text-[#86868b] leading-tight line-clamp-2">{reg.state}</span>
            </div>
          ))}
        </div>

        {/* Why Clients Choose Us Guarantee */}
        <div className="p-8 rounded-3xl bg-white border border-black/8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">Clear Communication</h4>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Direct phone and WhatsApp support in Hindi and English. Regular weekly progress demo calls.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0071e3] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">100% IP & Code Ownership</h4>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Complete source code handover with free Non-Disclosure Agreement (NDA) protection for your business idea.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">Top Google Search Ranking</h4>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Every website is built with Schema.org markup, local SEO tags, and blazing-fast loading speeds to rank #1.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
