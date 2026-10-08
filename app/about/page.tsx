import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, ShieldCheck, Cpu, Code2, Globe2, Rocket, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: `About Us — ${COMPANY_INFO.name}`,
  description: "Learn about Sudhir Technologies. We are an AI & custom software engineering agency helping startups and enterprise leaders launch high-performance web applications and intelligent automation.",
  openGraph: {
    title: `About Us — ${COMPANY_INFO.name}`,
    description: "Our mission, engineering culture, and startup speed approach.",
    url: "https://sudhirtech.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": `About ${COMPANY_INFO.name}`,
    "description": COMPANY_INFO.tagline,
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": "https://sudhirtech.com"
    }
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#0071e3] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-6 font-medium">
            <Cpu className="w-3.5 h-3.5" /> Established {COMPANY_INFO.establishedYear}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-6">
            Engineering Software at Startup Speed
          </h1>
          <p className="text-lg sm:text-xl text-[#86868b] leading-relaxed max-w-3xl mx-auto font-normal">
            Sudhir Technologies was founded by software engineers to solve a major industry problem: traditional software agencies are too slow, overly expensive, and detached from modern AI capabilities.
          </p>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#0071e3] mb-3 font-semibold">
            Our DNA
          </h2>
          <p className="text-3xl font-bold text-[#1d1d1f]">Engineering Pillars</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="apple-card rounded-3xl p-8 bg-white space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0071e3] flex items-center justify-center border border-blue-100">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f]">2-4 Week MVP Speed</h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              We eliminate corporate bureaucracy. We ship working, production-ready software in 2 to 4 week agile sprints so you can test market demand fast.
            </p>
          </div>

          <div className="apple-card rounded-3xl p-8 bg-white space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f]">AI-Native Architecture</h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              We build every product with AI readiness in mind—integrating LLMs, vector search, and intelligent workflow automation into standard web stacks.
            </p>
          </div>

          <div className="apple-card rounded-3xl p-8 bg-white space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f]">100% IP Ownership</h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              You own 100% of your source code, data schemas, and intellectual property. We sign standard NDAs before any discovery call.
            </p>
          </div>
        </div>

        {/* Global Impact Banner */}
        <div className="rounded-3xl bg-[#000000] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Partner With a High-Speed Tech Team</h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
            Whether you need a SaaS MVP, an AI Chatbot, or an enterprise cloud migration, we are ready to build.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1d1d1f] font-bold text-sm hover:bg-gray-100 transition-all shadow-lg active:scale-95"
          >
            Schedule Free Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
