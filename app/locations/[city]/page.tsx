import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  Globe,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  MessageSquare,
  MapPin,
  Building2,
  Coins,
  Zap,
  HelpCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactDock from "@/components/FloatingContactDock";
import { LOCATIONS_DATA, LocationData } from "@/data/locationsData";
import { COMPANY_INFO } from "@/data/companyData";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((loc) => ({
    city: loc.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = LOCATIONS_DATA.find((l) => l.id === city);

  if (!location) {
    return { title: "Location Not Found" };
  }

  const pageUrl = `https://sasoftwareinnovation.com/locations/${location.id}`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: [
      `web development ${location.name}`,
      `software company in ${location.name}`,
      `website redesign ${location.name}`,
      `nextjs developers ${location.name}`,
      `ai automation agency ${location.name}`,
      ...location.cities.map((c) => `website developer ${c}`),
      COMPANY_INFO.name,
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: pageUrl,
      type: "website",
      siteName: COMPANY_INFO.name,
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { city } = await params;
  const location = LOCATIONS_DATA.find((l) => l.id === city);

  if (!location) {
    notFound();
  }

  const pageUrl = `https://sasoftwareinnovation.com/locations/${location.id}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${pageUrl}#localbusiness`,
        "name": `${COMPANY_INFO.name} — ${location.name}`,
        "description": location.metaDescription,
        "url": pageUrl,
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.contactEmail,
        "priceRange": "$$",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": location.region
          },
          ...location.cities.map((cityName) => ({
            "@type": "City",
            "name": cityName
          }))
        ],
        "knowsAbout": [
          "Enterprise Website Development",
          "Next.js & React Engineering",
          "Legacy Codebase Modernization",
          "Core Web Vitals Speed Optimization",
          "AI & WhatsApp Automation",
          "Google SEO Dominance"
        ]
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
            "name": "Global Hubs",
            "item": "https://sasoftwareinnovation.com/#regional"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": location.name,
            "item": pageUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": location.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 bg-white border-b border-black/5 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-100/60 via-indigo-50/30 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-6 font-semibold shadow-2xs">
            <Globe className="w-3.5 h-3.5" />
            <span>{location.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-6 font-heading max-w-4xl mx-auto leading-tight">
            {location.heroTitle} <br className="hidden sm:inline" />
            <span className="apple-blue-gradient">{location.heroHighlight}</span>
          </h1>

          <p className="text-base sm:text-xl text-[#6e6e73] max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            {location.heroDescription}
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-[#38bdf8]" />
              Call Direct: {COMPANY_INFO.rawPhone}
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I'm%20inquiring%20about%20a%20project%20in%20${encodeURIComponent(location.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              WhatsApp Consultation
            </a>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white text-[#1d1d1f] border border-black/10 font-bold text-xs sm:text-sm hover:bg-[#f5f5f7] transition-all"
            >
              Request Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Localized Key Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-black/6">
            {location.localStats.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 text-left">
                <span className="block text-2xl font-black text-[#1d1d1f] font-heading">{item.stat}</span>
                <span className="text-xs text-[#6e6e73] font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Localities / Metro Centers Covered */}
      <section className="py-12 bg-[#f5f5f7] border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1d1d1f]">
              <MapPin className="w-4 h-4 text-[#0071e3]" />
              <span>Key Areas Served in {location.name}:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {location.cities.map((cityBadge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white text-xs font-medium text-[#475569] border border-black/8 shadow-2xs"
                >
                  {cityBadge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Localized Services Grid */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#0071e3] font-bold">
            Tailored Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] mt-2 mb-4 font-heading">
            Core Capabilities for {location.name}
          </h2>
          <p className="text-[#6e6e73] text-sm sm:text-base">
            From modern Next.js web applications to complete speed overhauls and AI bots, engineered with localized SLAs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {location.servicesOffered.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white border border-black/8 shadow-2xs hover:shadow-md hover:border-[#0071e3]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0071e3] flex items-center justify-center mb-5 font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">{service.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">{service.description}</p>
              </div>

              <Link
                href={service.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0071e3] hover:underline"
              >
                Learn More About This Service <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Operating Standards Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0071e3]">
              <Clock className="w-4 h-4" /> Active Delivery Timezone
            </div>
            <p className="text-xs text-[#515154] font-medium leading-relaxed">
              {location.timezone}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600">
              <Coins className="w-4 h-4" /> Billing & Currencies
            </div>
            <p className="text-xs text-[#515154] font-medium leading-relaxed">
              {location.currency}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-600">
              <ShieldCheck className="w-4 h-4" /> Intellectual Property
            </div>
            <p className="text-xs text-[#515154] font-medium leading-relaxed">
              100% Full Source Code, Database & Hosting Ownership under NDA.
            </p>
          </div>
        </div>

        {/* Localized FAQs (Google FAQ Accordions) */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#0071e3] font-bold">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] mt-2 font-heading">
              {location.name} Client FAQs
            </h3>
          </div>

          <div className="space-y-4">
            {location.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-black/8 shadow-2xs">
                <h4 className="text-base font-bold text-[#1d1d1f] mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-sm text-[#6e6e73] leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Regional Hubs Switcher */}
      <section className="py-16 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-xs uppercase font-mono text-[#6e6e73] tracking-widest font-bold mb-6">
            Explore Other Global Delivery Hubs
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {LOCATIONS_DATA.map((otherLoc) => (
              <Link
                key={otherLoc.id}
                href={`/locations/${otherLoc.id}`}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  otherLoc.id === location.id
                    ? "bg-[#0071e3] text-white shadow-sm"
                    : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]"
                }`}
              >
                {otherLoc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Dock */}
      <FloatingContactDock />

      <Footer />
    </main>
  );
}
