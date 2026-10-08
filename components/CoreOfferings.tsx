import Link from "next/link";
import { Globe, Smartphone, Code2, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Zap, ShieldCheck, Bot, Wrench, Cloud } from "lucide-react";

export default function CoreOfferings() {
  const primaryOfferings = [
    {
      id: "web-dev",
      title: "New Websites & Legacy Modernization",
      subtitle: "Flagship Web Engineering",
      badge: "Core Specialty",
      highlight: true,
      icon: <Globe className="w-8 h-8 text-[#0071e3]" />,
      iconPodBg: "bg-blue-50 border-blue-200/60",
      description: "We architect brand-new high-converting websites and completely overhaul old, slow, or broken legacy websites into ultra-fast digital assets.",
      points: [
        "Speed Overhaul: Slashes load times from 20s to sub-1s (99/100 Core Web Vitals)",
        "Apple-grade conversion-focused UI/UX with seamless responsive design",
        "Legacy bug fixing, broken code repair, and modern technology upgrades",
        "Prominent 1-Click WhatsApp and direct phone lead triggers",
      ],
      link: "/services/web-saas",
      delivery: "5-10 Days Delivery",
      capabilityNote: "99/100 Google PageSpeed SLA",
      metric: "3.8x More Inquiries",
    },
    {
      id: "seo-dominance",
      title: "Search Engine Dominance (India & Global)",
      subtitle: "Top Google Rankings",
      badge: "Organic Growth",
      highlight: false,
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      iconPodBg: "bg-emerald-50 border-emerald-200/60",
      description: "Engineered to rank at the top of Google search across Hindi-belt states and international global markets to drive high-intent commercial buyers.",
      points: [
        "Regional SEO: Delhi NCR, Uttar Pradesh, Bihar, Madhya Pradesh, Rajasthan",
        "Global SEO: Structured architecture for USA, UK, UAE & overseas markets",
        "Schema.org rich snippets, Google Map Pack dominance & local citations",
        "Sub-second page speeds directly aligned with Google ranking algorithm",
      ],
      link: "/services/seo-dominance",
      delivery: "Continuous / Sprint",
      capabilityNote: "Top #1 Google Positions",
      metric: "+410% Organic Reach",
    },
    {
      id: "ai-whatsapp",
      title: "24/7 AI Automation & WhatsApp Bots",
      subtitle: "Autonomous Lead Capture",
      badge: "Next-Gen AI",
      highlight: false,
      icon: <Bot className="w-8 h-8 text-purple-600" />,
      iconPodBg: "bg-purple-50 border-purple-200/60",
      description: "Turn every website visitor into an immediate prospect with 24/7 autonomous WhatsApp bots and custom AI workflows trained on your business.",
      points: [
        "24/7 instant WhatsApp auto-replies in English and Hindi with zero delays",
        "Smart lead qualification that alerts business owners on high-ticket leads",
        "Custom AI agents trained on your pricing, services, and company FAQs",
        "Automated CRM sync, lead logging, and customer inquiry routing",
      ],
      link: "/services/ai-solutions",
      delivery: "1-2 Weeks Setup",
      capabilityNote: "Zero Missed Leads",
      metric: "24/7 Autonomous Ops",
    },
    {
      id: "website-amc",
      title: "Website AMC & Codebase Maintenance",
      subtitle: "Full Hands-Off Management",
      badge: "Enterprise SLA",
      highlight: false,
      icon: <ShieldCheck className="w-8 h-8 text-sky-600" />,
      iconPodBg: "bg-sky-50 border-sky-200/60",
      description: "Complete hands-off management for your web assets: ongoing bug fixes, security patches, framework upgrades, and guaranteed 99.9% uptime.",
      points: [
        "Ongoing monthly Website AMC (Annual Maintenance Contract)",
        "Continuous bug fixing, code refactoring, and security vulnerability patching",
        "Daily automated cloud backups and disaster recovery protocols",
        "Priority technical support with guaranteed response times",
      ],
      link: "/services/maintenance-amc",
      delivery: "Monthly Retainer",
      capabilityNote: "99.9% Uptime Guarantee",
      metric: "Zero Downtime Worry",
    },
  ];

  return (
    <section className="py-28 bg-[#f5f5f7] border-t border-black/6 relative z-10 text-[#1d1d1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-xs font-mono text-[#0071e3] border border-black/8 mb-4 font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> High-End Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-5 leading-tight font-heading">
            New Builds, Legacy Modernization <br className="hidden sm:inline" />
            <span className="apple-blue-gradient">& Global SEO Dominance</span>
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            We don't just build brand-new websites. We take over and fix old slow websites, dominate Google search across India & global markets, and automate customer inquiries 24/7.
          </p>
        </div>

        {/* 4 Apple White Bento Box Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {primaryOfferings.map((item) => (
            <div
              key={item.id}
              className={`apple-bento-card p-8 sm:p-9 flex flex-col justify-between ${
                item.highlight ? "border-[#0071e3]/30 shadow-md ring-1 ring-[#0071e3]/20" : ""
              }`}
            >
              <div>
                {/* Header Icon Pod & Metric Pill */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`apple-icon-pod w-16 h-16 rounded-2xl flex items-center justify-center ${item.iconPodBg}`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-[10px] font-mono px-3 py-1 rounded-full font-bold border shadow-2xs ${
                      item.highlight
                        ? "bg-blue-50 text-[#0071e3] border-blue-200"
                        : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}>
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> {item.metric}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider mb-1 font-semibold">
                  {item.subtitle}
                </div>
                <h3 className="text-2xl font-extrabold text-[#1d1d1f] mb-2 tracking-tight group-hover:text-[#0071e3] transition-colors font-heading">
                  {item.title}
                </h3>
                
                {/* Capability Note Pill */}
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-900 bg-blue-50 px-3 py-1 rounded-lg font-bold border border-blue-200/60 mb-6">
                  <Zap className="w-3.5 h-3.5 text-[#0071e3]" />
                  <span>{item.capabilityNote}</span>
                </div>

                <p className="text-[#515154] text-sm mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Feature Checkpoints */}
                <ul className="space-y-3.5 mb-8">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-[#1d1d1f] font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Footer Action */}
              <div className="pt-6 border-t border-black/6 flex items-center justify-between">
                <span className="text-xs font-mono text-[#86868b]">{item.delivery}</span>
                <Link
                  href={item.link}
                  className="text-xs font-bold text-[#0071e3] hover:text-[#0077ed] flex items-center gap-1.5 transition-colors group"
                >
                  Explore Architecture <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Capabilities Strip: Mobile Apps & Cloud Infrastructure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-black/8 shadow-2xs flex items-center justify-between gap-6 hover:border-[#0071e3]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#1d1d1f] font-heading">Mobile App Engineering (iOS & Android)</h4>
                <p className="text-xs text-[#6e6e73]">Flutter & React Native cross-platform apps with UPI payments & OTP logins.</p>
              </div>
            </div>
            <Link href="/services/mobile-apps" className="text-xs font-bold text-[#0071e3] shrink-0 hover:underline">
              View Specs →
            </Link>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-black/8 shadow-2xs flex items-center justify-between gap-6 hover:border-[#0071e3]/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#1d1d1f] font-heading">Cloud Infrastructure & DevOps SLA</h4>
                <p className="text-xs text-[#6e6e73]">AWS, Vercel & Cloudflare Edge CDN deployment with 99.9% uptime guarantee.</p>
              </div>
            </div>
            <Link href="/services/cloud-devops" className="text-xs font-bold text-[#0071e3] shrink-0 hover:underline">
              View Specs →
            </Link>
          </div>
        </div>

        {/* Apple Pro Executive Action Banner */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-black/8 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Free Architecture & Website Speed Audit • NDA Protected
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight font-heading">
              Have an existing website or a brand-new project to discuss?
            </h4>
            <p className="text-sm text-[#6e6e73] max-w-xl">
              Get an instant code review, speed analysis, and SEO ranking breakdown from our senior engineering team.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="apple-btn-black px-8 py-4 text-xs font-bold hover:scale-105 active:scale-95 shadow-md"
            >
              Get Free Technical Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
