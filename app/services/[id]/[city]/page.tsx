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
  Zap,
  HelpCircle,
  TrendingUp,
  Cpu,
  RefreshCw,
  Smartphone,
  Cloud
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactDock from "@/components/FloatingContactDock";
import { SERVICES_DATA, COMPANY_INFO } from "@/data/companyData";
import { PROGRAMMATIC_LOCATIONS, getLocationBySlug } from "@/data/indiaLocations";

interface Props {
  params: Promise<{ id: string; city: string }>;
}

export const dynamicParams = true;

// Prerender top high-intent hubs at build time, all other 5,000+ generated on-demand
export async function generateStaticParams() {
  const topServices = ["web-saas", "seo-dominance", "ai-solutions"];
  const topCities = ["gurugram-sector-14", "gurugram-cyber-city", "noida-sector-62", "delhi-connaught-place", "patna", "lucknow"];
  
  const params: { id: string; city: string }[] = [];
  for (const id of topServices) {
    for (const city of topCities) {
      params.push({ id, city });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, city } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);
  const location = getLocationBySlug(city);

  if (!service || !location) {
    return { title: "Service Location Not Found" };
  }

  const pageUrl = `https://sasoftwareinnovation.com/services/${service.id}/${location.slug}`;
  const title = `${service.title} in ${location.name} | ${COMPANY_INFO.name}`;
  const description = `Top-rated ${service.title.toLowerCase()} in ${location.name}, ${location.state}. Sub-second Next.js web applications, mobile apps, 24/7 AI WhatsApp automation, and 100% source code ownership. Call: ${COMPANY_INFO.rawPhone}.`;

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()} in ${location.name}`,
      `web development in ${location.name}`,
      `software company in ${location.name}`,
      `website designer ${location.name}`,
      ...service.techBadge,
      COMPANY_INFO.name
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      siteName: COMPANY_INFO.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProgrammaticServiceLocationPage({ params }: Props) {
  const { id, city } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);
  const location = getLocationBySlug(city);

  if (!service || !location) {
    notFound();
  }

  const pageUrl = `https://sasoftwareinnovation.com/services/${service.id}/${location.slug}`;

  // Nearby locations in the same state/region for rich internal linking
  const nearbyLocations = PROGRAMMATIC_LOCATIONS.filter(
    (l) => l.state === location.state && l.slug !== location.slug
  ).slice(0, 6);

  // Localized Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${pageUrl}#localbusiness`,
        "name": `${COMPANY_INFO.name} — ${service.title} in ${location.name}`,
        "description": `${service.title} for clients across ${location.name}, ${location.state}.`,
        "url": pageUrl,
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.contactEmail,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "M-24, Ground Floor, Near SBI Bank, Old DLF Colony, Sector 14",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122001",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Place",
          "name": `${location.name}, ${location.state}`
        }
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": `${service.title} in ${location.name}`,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": COMPANY_INFO.name,
          "url": "https://sasoftwareinnovation.com"
        },
        "areaServed": `${location.name}, ${location.state}`
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
            "name": service.title,
            "item": `https://sasoftwareinnovation.com/services/${service.id}`
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
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How do you deliver ${service.title} in ${location.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We provide dedicated sprint delivery for clients in ${location.name}, ${location.state}. Backed by our engineering headquarters in Gurugram, we conduct video workshops, daily progress updates, and rapid 5-10 day commercial milestones.`
            }
          },
          {
            "@type": "Question",
            "name": `Do we get 100% full source code ownership in ${location.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100%. All GitHub repository rights, database schemas, and cloud deployment setups belong completely to your company upon milestone completion."
            }
          },
          {
            "@type": "Question",
            "name": `Can we consult your engineering team directly on WhatsApp from ${location.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes. Click our WhatsApp consultation button or call +91 ${COMPANY_INFO.rawPhone} to speak directly with an architect regarding ${service.title} in ${location.name}.`
            }
          }
        ]
      }
    ]
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-8 h-8 text-[#0071e3]" />;
      case "TrendingUp":
        return <TrendingUp className="w-8 h-8 text-emerald-600" />;
      case "Bot":
        return <Cpu className="w-8 h-8 text-purple-600" />;
      case "ShieldCheck":
        return <RefreshCw className="w-8 h-8 text-amber-600" />;
      case "Smartphone":
        return <Smartphone className="w-8 h-8 text-blue-600" />;
      case "Cloud":
        return <Cloud className="w-8 h-8 text-sky-600" />;
      default:
        return <Zap className="w-8 h-8 text-[#0071e3]" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 bg-white border-b border-black/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-100/60 via-indigo-50/30 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Navigation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-6 font-semibold shadow-2xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location.name} • {location.state}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-6 font-heading max-w-4xl mx-auto leading-tight">
            {service.title} <br className="hidden sm:inline" />
            <span className="apple-blue-gradient">in {location.name}</span>
          </h1>

          <p className="text-base sm:text-xl text-[#6e6e73] max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Engineering high-velocity Next.js web applications, legacy website speed overhauls, and 24/7 AI automation for growing businesses and enterprises across <strong className="text-[#1d1d1f]">{location.name}, {location.state}</strong>.
          </p>

          {/* Quick Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-[#38bdf8]" />
              Call Direct: {COMPANY_INFO.rawPhone}
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I'm%20inquiring%20about%20${encodeURIComponent(service.title)}%20in%20${encodeURIComponent(location.name)}.`}
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

          {/* Trust Value Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-black/6">
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 text-left">
              <span className="block text-2xl font-black text-[#1d1d1f] font-heading">&lt; 1s</span>
              <span className="text-xs text-[#6e6e73] font-medium">PageSpeed Benchmark</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 text-left">
              <span className="block text-2xl font-black text-[#1d1d1f] font-heading">5-10 Days</span>
              <span className="text-xs text-[#6e6e73] font-medium">Commercial Delivery</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 text-left">
              <span className="block text-2xl font-black text-[#1d1d1f] font-heading">100%</span>
              <span className="text-xs text-[#6e6e73] font-medium">Source Code Ownership</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 text-left">
              <span className="block text-2xl font-black text-[#1d1d1f] font-heading">Sector 14</span>
              <span className="text-xs text-[#6e6e73] font-medium">Offline Gurugram HQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features & Deliverables Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="apple-card rounded-3xl p-8 sm:p-12 bg-white border border-black/8 shadow-sm mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
              {getServiceIcon(service.iconName)}
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#0071e3] font-bold">
                Tailored Deliverables
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                What We Deliver for {location.name}
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#515154] leading-relaxed mb-8">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#fbfbfd] border border-black/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#1d1d1f]">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-black/6">
            <span className="text-xs text-[#86868b] font-mono mr-2">Engineered With:</span>
            {service.techBadge.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-md bg-[#f5f5f7] text-[#1d1d1f] text-xs font-mono font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Localized FAQs */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#0071e3] font-bold">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] mt-2 font-heading">
              {service.title} in {location.name} FAQs
            </h3>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-black/8 shadow-2xs">
              <h4 className="text-base font-bold text-[#1d1d1f] mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" />
                <span>How do you deliver {service.title} in {location.name}?</span>
              </h4>
              <p className="text-sm text-[#6e6e73] leading-relaxed pl-7">
                We provide dedicated sprint delivery for clients in {location.name}, {location.state}. Backed by our engineering headquarters in Gurugram, we conduct video workshops, daily progress updates, and rapid 5-10 day commercial milestones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/8 shadow-2xs">
              <h4 className="text-base font-bold text-[#1d1d1f] mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" />
                <span>Do we get 100% full source code ownership in {location.name}?</span>
              </h4>
              <p className="text-sm text-[#6e6e73] leading-relaxed pl-7">
                Yes, 100%. All GitHub repository rights, database schemas, and cloud deployment setups belong completely to your company upon milestone completion under a signed contract.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/8 shadow-2xs">
              <h4 className="text-base font-bold text-[#1d1d1f] mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" />
                <span>Can we consult your engineering team directly on WhatsApp?</span>
              </h4>
              <p className="text-sm text-[#6e6e73] leading-relaxed pl-7">
                Yes. Click our WhatsApp consultation button or call +91 {COMPANY_INFO.rawPhone} to speak directly with an architect regarding {service.title} in {location.name}.
              </p>
            </div>
          </div>
        </div>

        {/* Nearby / Related Locations Internal Mesh */}
        {nearbyLocations.length > 0 && (
          <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-black/6">
            <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-[#1d1d1f] mb-4">
              Explore {service.title} in Nearby Areas ({location.state}):
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {nearbyLocations.map((nearLoc) => (
                <Link
                  key={nearLoc.slug}
                  href={`/services/${service.id}/${nearLoc.slug}`}
                  className="px-3.5 py-1.5 rounded-full bg-white text-xs font-medium text-[#475569] border border-black/8 hover:text-[#0071e3] hover:border-[#0071e3]/40 transition-all shadow-2xs"
                >
                  {nearLoc.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Floating Action Dock */}
      <FloatingContactDock />

      <Footer />
    </main>
  );
}
