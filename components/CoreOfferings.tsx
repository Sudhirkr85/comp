import Link from "next/link";
import { Globe, Smartphone, Code2, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Zap, ShieldCheck } from "lucide-react";

export default function CoreOfferings() {
  const offerings = [
    {
      id: "web-dev",
      title: "Business & Enterprise Websites",
      subtitle: "Our Primary Specialty",
      badge: "Flagship Engineering",
      highlight: true,
      icon: <Globe className="w-8 h-8 text-[#0071e3]" />,
      iconPodBg: "bg-blue-50 border-blue-200/60",
      description: "Custom-crafted, ultra-fast websites engineered to rank #1 on Google searches and convert visitors into high-value inquiries.",
      points: [
        "Tailored Technical Architecture & Responsive Design",
        "Direct 1-Click WhatsApp & Phone Lead Triggers",
        "Top Google Local SEO (Delhi NCR, UP, Bihar, MP)",
        "5 to 10 Days Delivery with Zero Hosting Management Hassle",
      ],
      link: "/services/web-saas",
      delivery: "5-10 Days Delivery",
      capabilityNote: "High-Performance Core Web Vitals",
      metric: "3.8x More Inquiries",
    },
    {
      id: "app-dev",
      title: "Mobile App Engineering",
      subtitle: "iOS & Android",
      badge: "Cross-Platform Power",
      highlight: false,
      icon: <Smartphone className="w-8 h-8 text-emerald-600" />,
      iconPodBg: "bg-emerald-50 border-emerald-200/60",
      description: "High-performance cross-platform mobile apps for startups and enterprises with fluid animations and secure cloud backends.",
      points: [
        "Google Play Store & Apple App Store Ready Setup",
        "Payment Gateways (UPI, Razorpay, Cards) & OTP Login",
        "Fast Offline Mode & Real-Time Push Notifications",
        "Pixel-Perfect Apple Interface & Fluid 60fps Animations",
      ],
      link: "/services/mobile-apps",
      delivery: "2-4 Weeks Delivery",
      capabilityNote: "Scalable Microservices Backend",
      metric: "100% Native Speed",
    },
    {
      id: "full-software",
      title: "Full-Cycle Software & AI",
      subtitle: "Custom Automation",
      badge: "Enterprise Suite",
      highlight: false,
      icon: <Code2 className="w-8 h-8 text-purple-600" />,
      iconPodBg: "bg-purple-50 border-purple-200/60",
      description: "End-to-end software solutions: Custom billing and CRM portals, 24/7 AI customer service chatbots, and cloud infrastructure.",
      points: [
        "Custom Billing, Invoicing, Staff & CRM Management Portals",
        "24/7 WhatsApp & Website AI Customer Auto-Reply Chatbots",
        "High-Availability Cloud Hosting & Domain SSL Setup",
        "100% Complete Source Code & Database Ownership Handover",
      ],
      link: "/services/enterprise-custom",
      delivery: "2-4 Weeks Delivery",
      capabilityNote: "Tailored to Your Workflow",
      metric: "Zero Vendor Lock-in",
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
            Websites First, <br className="hidden sm:inline" />
            <span className="apple-blue-gradient">Full Software Power</span>
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            Delivering high-converting business websites — backed by full engineering capabilities for mobile applications, enterprise CRM systems, and AI automation.
          </p>
        </div>

        {/* 3 Apple White Bento Box Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offerings.map((item) => (
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

        {/* Apple Pro Executive Action Banner */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-black/8 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Free Consultation • Free NDA Protected
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight font-heading">
              Ready to architect your high-converting business website or app?
            </h4>
            <p className="text-sm text-[#6e6e73] max-w-xl">
              Discuss your project scope directly with our engineering team for a comprehensive technical roadmap.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="apple-btn-black px-8 py-4 text-xs font-bold hover:scale-105 active:scale-95 shadow-md"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
