import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, MapPin, Briefcase, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: `Careers at ${COMPANY_INFO.name} — Join Our Engineering Team`,
  description: `Explore career opportunities at ${COMPANY_INFO.name}. We are hiring Full-Stack Developers, AI Engineers, and UI/UX Designers to build next-generation software products.`,
  alternates: {
    canonical: "https://sasoftwareinnovation.in/careers",
  },
  openGraph: {
    title: `Careers at ${COMPANY_INFO.name}`,
    description: "Build cutting-edge AI products and full-stack web applications with our remote-first team.",
    url: "https://sasoftwareinnovation.in/careers",
  },
};

const OPEN_POSITIONS = [
  {
    id: "sr-fullstack-dev",
    title: "Senior Full-Stack Engineer (Next.js & TypeScript)",
    department: "Engineering",
    location: "Remote Worldwide",
    type: "Full-Time / Contract",
    description: "Lead the development of high-performance client web applications, SaaS MVPs, and serverless backend architecture.",
    requirements: ["4+ years experience with Next.js App Router & React", "Strong TypeScript & PostgreSQL expertise", "Experience building scalable REST/GraphQL APIs"],
  },
  {
    id: "ai-llm-specialist",
    title: "AI & LLM Integration Specialist",
    department: "AI & Machine Learning",
    location: "Remote Worldwide",
    type: "Full-Time / Contract",
    description: "Design and implement custom RAG pipelines, OpenAI/Claude API workflows, and intelligent business chatbots.",
    requirements: ["Strong Python expertise (FastAPI, LangChain, LlamaIndex)", "Hands-on experience with Vector DBs (Pinecone/PGVector)", "Fine-tuning & prompt engineering proficiency"],
  },
  {
    id: "ui-ux-designer",
    title: "Product & UI/UX Designer",
    department: "Design",
    location: "Remote Worldwide",
    type: "Full-Time / Project",
    description: "Create Apple-grade minimalist designs, Figma component libraries, and interactive prototypes for startup MVPs.",
    requirements: ["Mastery of Figma & modern design systems", "Understanding of micro-animations & responsive web layouts", "Strong portfolio showcasing web and mobile apps"],
  },
  {
    id: "solutions-architect",
    title: "Technical Solutions Architect",
    department: "Client Strategy",
    location: "Remote Worldwide",
    type: "Full-Time",
    description: "Work directly with client founders to scope software architecture, estimate timelines, and guide development teams.",
    requirements: ["Background in Software Engineering / CTO role", "Exceptional technical communication & client-facing skills", "Ability to define full-stack architecture & data schemas"],
  },
];

export default function CareersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://sasoftwareinnovation.in/careers#webpage",
        "url": "https://sasoftwareinnovation.in/careers",
        "name": `Careers at ${COMPANY_INFO.name}`,
        "description": "Explore remote engineering and AI careers at SA Software Innovation.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://sasoftwareinnovation.in/#website",
          "name": COMPANY_INFO.name,
          "url": "https://sasoftwareinnovation.in"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sasoftwareinnovation.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Careers",
            "item": "https://sasoftwareinnovation.in/careers"
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#0071e3] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-6 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> We Are Hiring Global Talent
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-6">
            Build the Future of AI & Software
          </h1>
          <p className="text-lg sm:text-xl text-[#86868b] leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            Join a fast-moving, remote-first team of engineers and designers crafting high-impact digital products for ambitious companies worldwide.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left pt-6 border-t border-black/5">
            <div className="p-4 rounded-2xl bg-[#f5f5f7]">
              <span className="block text-xl font-bold text-[#1d1d1f]">100% Remote</span>
              <span className="text-xs text-[#86868b]">Work from anywhere in the world</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f5f7]">
              <span className="block text-xl font-bold text-[#1d1d1f]">AI-First</span>
              <span className="text-xs text-[#86868b]">Cutting-edge technology stack</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f5f7]">
              <span className="block text-xl font-bold text-[#1d1d1f]">Agile Team</span>
              <span className="text-xs text-[#86868b]">Zero bureaucracy, fast execution</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f5f7]">
              <span className="block text-xl font-bold text-[#1d1d1f]">Competitive</span>
              <span className="text-xs text-[#86868b]">Top-market pay & milestone bonuses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#1d1d1f]">Open Positions</h2>
            <p className="text-sm text-[#86868b]">Explore current engineering, design, and strategic roles.</p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
            ● 4 Roles Available
          </span>
        </div>

        <div className="space-y-6 mb-16">
          {OPEN_POSITIONS.map((job) => (
            <div
              key={job.id}
              className="apple-card rounded-3xl p-8 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-blue-50 text-[#0071e3] font-medium">
                    {job.department}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-[#f5f5f7] text-[#515154] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-400" /> {job.location}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-[#f5f5f7] text-[#515154] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" /> {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1d1d1f]">{job.title}</h3>
                <p className="text-sm text-[#86868b] leading-relaxed">{job.description}</p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {job.requirements.map((req, idx) => (
                    <span key={idx} className="text-xs text-[#515154] flex items-center gap-1.5 bg-[#f5f5f7] px-2.5 py-1 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <a
                  href={`mailto:${COMPANY_INFO.contactEmail}?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#000000] text-white text-xs font-semibold hover:bg-[#1d1d1f] transition-all shadow-md active:scale-95"
                >
                  Apply for Role
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Banner */}
        <div className="rounded-3xl bg-white border border-black/8 p-8 sm:p-10 text-center shadow-xs">
          <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Don't see your specific role?</h3>
          <p className="text-sm text-[#86868b] max-w-xl mx-auto mb-6">
            We are always looking for exceptional engineers, AI researchers, and designers. Send your portfolio and GitHub profile to our talent team.
          </p>
          <a
            href={`mailto:${COMPANY_INFO.contactEmail}?subject=General Career Inquiry`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5f5f7] border border-black/10 text-[#1d1d1f] text-xs font-semibold hover:bg-[#e8e8ed] transition-all"
          >
            Send General Application
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
