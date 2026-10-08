import Link from "next/link";
import { Metadata } from "next";
import {
  Globe,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  Sparkles,
  PhoneCall,
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactDock from "@/components/FloatingContactDock";
import { LOCATIONS_DATA } from "@/data/locationsData";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: `Global Delivery Hubs & Local Regional Offices | ${COMPANY_INFO.name}`,
  description: "Explore our physical offline engineering office at M-24 Sector 14 Gurugram, Delhi NCR hubs, and commercial delivery centers across India, North America, Europe, and UAE.",
  alternates: {
    canonical: "https://sasoftwareinnovation.com/locations",
  },
  openGraph: {
    title: `Regional Hubs & Engineering Centers — ${COMPANY_INFO.name}`,
    description: "Sub-second Next.js web applications, legacy website speed overhauls, and 24/7 AI automation across India and global markets.",
    url: "https://sasoftwareinnovation.com/locations",
  },
};

export default function LocationsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://sasoftwareinnovation.com/locations#webpage",
        "url": "https://sasoftwareinnovation.com/locations",
        "name": `Global Hubs & Regional Centers — ${COMPANY_INFO.name}`,
        "description": "Directory of engineering delivery centers and local hubs.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://sasoftwareinnovation.com/#website",
          "name": COMPANY_INFO.name,
          "url": "https://sasoftwareinnovation.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sasoftwareinnovation.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://sasoftwareinnovation.com/locations"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white border-b border-black/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-6 font-semibold shadow-2xs">
            <Globe className="w-3.5 h-3.5" /> Physical HQ & Active Regional Hubs
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-6 font-heading max-w-4xl mx-auto">
            Engineering Hubs. <br className="hidden sm:inline" />
            <span className="apple-blue-gradient">Local Presence. Global Delivery.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#6e6e73] max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            Headquartered in Gurugram at <strong className="text-[#1d1d1f]">M-24, Sector 14</strong> with dedicated commercial delivery teams serving Delhi NCR, key Indian growth corridors, and international tech centers.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#f5f5f7] border border-black/8 text-xs font-mono text-[#1d1d1f]">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Offline HQ: M-24, Ground Floor, Near SBI Bank, Sector 14, Gurugram, Haryana - 122001</span>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS_DATA.map((loc) => (
            <div
              key={loc.id}
              className="p-7 rounded-3xl bg-white border border-black/8 shadow-2xs hover:shadow-md hover:border-[#0071e3]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#0071e3] border border-blue-200/60">
                    {loc.badge}
                  </span>
                  <span className="text-xs text-[#86868b] font-medium">{loc.country}</span>
                </div>

                <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 group-hover:text-[#0071e3] transition-colors">
                  {loc.name}
                </h3>

                <p className="text-xs text-[#6e6e73] leading-relaxed mb-6 line-clamp-3">
                  {loc.heroDescription}
                </p>

                {/* Cities preview */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {loc.cities.slice(0, 3).map((c, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#f5f5f7] text-[#515154]">
                      {c}
                    </span>
                  ))}
                  {loc.cities.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#86868b]">
                      +{loc.cities.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-black/6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#64748b]">{loc.timezone.split('—')[0]}</span>
                <Link
                  href={`/locations/${loc.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0071e3] group-hover:translate-x-0.5 transition-transform"
                >
                  Explore Hub <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Dock */}
      <FloatingContactDock />

      <Footer />
    </main>
  );
}
