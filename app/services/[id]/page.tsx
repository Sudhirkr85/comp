import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Bot, Globe, Smartphone, Cloud, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA, COMPANY_INFO, ServiceItem } from "@/data/companyData";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | ${COMPANY_INFO.name}`,
    description: service.description,
    keywords: [service.title, ...service.techBadge, COMPANY_INFO.name, "Software Development"],
    alternates: {
      canonical: `https://sasoftwareinnovation.com/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} — ${COMPANY_INFO.name}`,
      description: service.description,
      url: `https://sasoftwareinnovation.com/services/${service.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} — ${COMPANY_INFO.name}`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  const getIcon = (name: string) => {
    switch (name) {
      case "Bot":
        return <Bot className="w-8 h-8 text-[#0071e3]" />;
      case "Globe":
        return <Globe className="w-8 h-8 text-indigo-600" />;
      case "Smartphone":
        return <Smartphone className="w-8 h-8 text-emerald-600" />;
      case "Cloud":
        return <Cloud className="w-8 h-8 text-sky-600" />;
      case "ShieldCheck":
        return <Shield className="w-8 h-8 text-purple-600" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#0071e3]" />;
    }
  };

  // Service Specific JSON-LD Schema with Breadcrumb
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://sasoftwareinnovation.com/services/${service.id}#service`,
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": COMPANY_INFO.name,
          "url": "https://sasoftwareinnovation.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sasoftwareinnovation.com/logo.svg"
          }
        },
        "areaServed": [
          "India",
          "United States",
          "United Kingdom",
          "United Arab Emirates",
          "Canada"
        ],
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Custom Scope",
          "availability": "https://schema.org/InStock"
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
            "name": "Services",
            "item": "https://sasoftwareinnovation.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://sasoftwareinnovation.com/services/${service.id}`
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

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-white border-b border-black/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#0071e3] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#f5f5f7] flex items-center justify-center border border-black/5 shadow-2xs">
              {getIcon(service.iconName)}
            </div>
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0071e3] font-medium border border-blue-200/60">
              Est. Delivery: {service.deliveryTime}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-6">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#86868b] leading-relaxed max-w-3xl mb-8 font-normal">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
            <span className="text-xs text-[#86868b] font-mono self-center mr-2">Core Tech Stack:</span>
            {service.techBadge.map((tech, idx) => (
              <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#f5f5f7] text-[#1d1d1f] border border-black/5">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Features Grid */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">What We Deliver</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {service.features.map((feature, index) => (
            <div key={index} className="apple-card rounded-2xl p-6 bg-white flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{feature}</h3>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  Engineered with production-grade security, automated testing, and scalable architecture.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Development Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Our 4-Step Engineering Workflow</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0071e3] font-bold">STEP 01</span>
              <h4 className="text-sm font-bold text-[#1d1d1f]">Technical Discovery</h4>
              <p className="text-xs text-[#86868b]">Architecture plan, data modeling, and milestone roadmap definition.</p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0071e3] font-bold">STEP 02</span>
              <h4 className="text-sm font-bold text-[#1d1d1f]">UI/UX & Prototype</h4>
              <p className="text-xs text-[#86868b]">Figma design system and interactive user journey mapping.</p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0071e3] font-bold">STEP 03</span>
              <h4 className="text-sm font-bold text-[#1d1d1f]">Agile Sprint Build</h4>
              <p className="text-xs text-[#86868b]">Weekly code deployments, AI pipeline integrations, and progress demos.</p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0071e3] font-bold">STEP 04</span>
              <h4 className="text-sm font-bold text-[#1d1d1f]">Launch & Support</h4>
              <p className="text-xs text-[#86868b]">Zero-downtime deployment, security audits, and post-launch maintenance.</p>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="rounded-3xl bg-[#000000] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> 100% Free NDA & Technical Consultation
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to build your {service.title}?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Get a customized scope breakdown, timeline estimate, and technical proposal for your project.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1d1d1f] font-bold text-sm hover:bg-gray-100 transition-all shadow-lg active:scale-95"
              >
                Discuss Your Project Scope
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
