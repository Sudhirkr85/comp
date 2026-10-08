"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  PhoneCall,
  ChevronDown,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Briefcase,
  Users,
  TrendingUp,
  RefreshCw
} from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/companyData";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "web-saas": <Globe className="w-4 h-4 text-[#0071e3]" />,
  "seo-dominance": <TrendingUp className="w-4 h-4 text-emerald-600" />,
  "ai-solutions": <Bot className="w-4 h-4 text-purple-600" />,
  "maintenance-amc": <RefreshCw className="w-4 h-4 text-amber-600" />,
  "mobile-apps": <Smartphone className="w-4 h-4 text-blue-600" />,
  "cloud-devops": <Cloud className="w-4 h-4 text-sky-600" />,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl transition-all duration-300">
      {/* Apple Dynamic Island Floating Glass Capsule */}
      <div
        className={`rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between transition-all duration-300 border border-black/8 relative ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] border-black/10"
            : "bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]"
        }`}
      >
        {/* Brand Logo & Name with Live Pan-India & Global Beacon */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 pl-1">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-xs group-hover:scale-105 transition-transform duration-300 border border-black/10">
            <Image
              src="/logo.svg"
              alt="SA Software Innovation Logo"
              width={40}
              height={40}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-[#0f172a] leading-tight font-heading flex items-center gap-1">
              SA Software <span className="text-[#0071e3]">Innovation</span>
            </span>
            <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] text-[#64748b] font-semibold tracking-wider uppercase">
              <span>{COMPANY_INFO.motto}</span>
              <span className="text-black/20">•</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                India & Global
              </span>
            </div>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-[#475569] bg-black/[0.03] px-2 py-1 rounded-full border border-black/5">
          {/* Services Tab */}
          <div
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeDropdown === "services"
                  ? "bg-white text-[#0071e3] shadow-2xs font-bold"
                  : "hover:bg-white hover:text-[#0f172a] hover:shadow-2xs"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180 text-[#0071e3]" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* Methodology Link */}
          <Link
            href="/#process"
            onMouseEnter={() => setActiveDropdown(null)}
            className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#0f172a] hover:shadow-2xs transition-all"
          >
            Methodology
          </Link>

          {/* Case Studies Link */}
          <Link
            href="/#portfolio"
            onMouseEnter={() => setActiveDropdown(null)}
            className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#0f172a] hover:shadow-2xs transition-all"
          >
            Case Studies
          </Link>

          {/* Company Tab */}
          <div
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "company" ? null : "company")}
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeDropdown === "company"
                  ? "bg-white text-[#0071e3] shadow-2xs font-bold"
                  : "hover:bg-white hover:text-[#0f172a] hover:shadow-2xs"
              }`}
            >
              <span>Company</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "company" ? "rotate-180 text-[#0071e3]" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Action Triggers (Call, WhatsApp, Consultation) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pr-1">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${COMPANY_INFO.rawPhone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#0f172a] border border-black/10 hover:border-[#0071e3] hover:text-[#0071e3] transition-all shadow-2xs hover:scale-105 active:scale-95"
            title="Direct Call"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>{COMPANY_INFO.rawPhone}</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20have%20a%20project%20query.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all shadow-xs"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span className="hidden xs:inline">WhatsApp</span>
          </a>

          {/* Consultation CTA Pill */}
          <Link
            href="/#contact"
            className="apple-btn-black hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs shadow-xs hover:scale-105 active:scale-95"
          >
            Audit & Scope
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full text-[#0f172a] hover:bg-black/5 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* 🌟 1. PERFECTLY CENTERED & SOLID OPAQUE SERVICES DROPDOWN */}
        {activeDropdown === "services" && (
          <div
            className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[780px] max-w-[95vw] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            {/* SOLID WHITE CARD - NO HERO TEXT BLEED-THROUGH */}
            <div className="rounded-3xl bg-white border border-black/12 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] grid grid-cols-12 gap-6 text-left">
              {/* Left Column: 6 Core Services */}
              <div className="col-span-7 space-y-1">
                <div className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider font-bold px-3 pb-2 border-b border-black/6 mb-2 flex items-center justify-between">
                  <span>Full-Cycle Solutions</span>
                  <span className="text-[#0071e3] font-bold">New & Legacy</span>
                </div>
                {SERVICES_DATA.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.id}`}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2 rounded-2xl hover:bg-[#f8fafc] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#f1f5f9] flex items-center justify-center shrink-0 border border-black/5 group-hover:scale-110 transition-transform">
                      {SERVICE_ICONS[srv.id] || <Sparkles className="w-4 h-4 text-[#0071e3]" />}
                    </div>
                    <div>
                      <div className="font-extrabold text-[#0f172a] text-xs group-hover:text-[#0071e3] transition-colors leading-tight font-heading">
                        {srv.title}
                      </div>
                      <div className="text-[11px] text-[#64748b] line-clamp-1 mt-0.5 font-normal">
                        {srv.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Right Column: Featured Callout Card */}
              <div className="col-span-5 bg-gradient-to-br from-blue-50 via-emerald-50/50 to-slate-100 rounded-2xl p-5 border border-blue-100 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Global SEO & AMC Ready
                  </div>
                  <h4 className="text-sm font-extrabold text-[#0f172a] mt-3 font-heading leading-snug">
                    Build New, Modernize Old & Dominate Google Search
                  </h4>
                  <p className="text-[11px] text-[#64748b] mt-1.5 leading-relaxed font-normal">
                    We don't just launch sites — we manage old portals, optimize Google search rankings in India & abroad, and integrate 24/7 AI workflows.
                  </p>
                </div>

                <div className="pt-4 border-t border-black/6 space-y-2">
                  <a
                    href={`tel:${COMPANY_INFO.rawPhone}`}
                    className="w-full text-center py-2 px-3 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all"
                  >
                    <PhoneCall className="w-3 h-3 text-[#38bdf8]" /> Call {COMPANY_INFO.rawPhone}
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20have%20a%20project%20query.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-white" /> WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 🌟 2. PERFECTLY CENTERED & SOLID OPAQUE COMPANY DROPDOWN */}
        {activeDropdown === "company" && (
          <div
            className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            {/* SOLID WHITE CARD */}
            <div className="rounded-3xl bg-white border border-black/12 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.18)] space-y-1 text-left">
              <Link
                href="/about"
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2.5 p-2.5 rounded-2xl hover:bg-[#f8fafc] transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0071e3] flex items-center justify-center border border-blue-100">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-[#0f172a] group-hover:text-[#0071e3] font-heading">
                    About Our Team
                  </div>
                  <div className="text-[10px] text-[#86868b]">Mission & Standards</div>
                </div>
              </Link>

              <Link
                href="/blog"
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2.5 p-2.5 rounded-2xl hover:bg-[#f8fafc] transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-[#0f172a] group-hover:text-[#0071e3] font-heading">
                    Tech Blog
                  </div>
                  <div className="text-[10px] text-[#86868b]">Engineering Articles</div>
                </div>
              </Link>

              <Link
                href="/careers"
                onClick={() => setActiveDropdown(null)}
                className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#f8fafc] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0f172a] group-hover:text-[#0071e3] font-heading">
                      Careers
                    </div>
                    <div className="text-[10px] text-[#86868b]">Join Our Team</div>
                  </div>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#0071e3] font-bold border border-blue-200">
                  HIRING
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Floating Mobile Drawer Card */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 rounded-3xl bg-white border border-black/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
          <div className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider font-bold">
            Services (New & Legacy)
          </div>
          {SERVICES_DATA.map((srv) => (
            <Link
              key={srv.id}
              href={`/services/${srv.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#0071e3] text-xs font-bold text-[#0f172a] flex items-center justify-between"
            >
              <span>{srv.title}</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </Link>
          ))}

          <div className="pt-2 border-t border-black/6 flex flex-col gap-2">
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071e3] text-xs font-bold text-[#0f172a]"
            >
              Engineering Methodology
            </Link>
            <Link
              href="/#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071e3] text-xs font-bold text-[#0f172a]"
            >
              Client Case Studies
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071e3] text-xs font-bold text-[#0f172a]"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071e3] text-xs font-bold text-[#0f172a]"
            >
              Tech Blog
            </Link>
          </div>

          <div className="pt-2 border-t border-black/6 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="w-full text-center py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
            >
              <PhoneCall className="w-4 h-4 text-[#38bdf8]" /> Call: {COMPANY_INFO.rawPhone}
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20have%20a%20project%20requirement.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-white" /> WhatsApp Chat
            </a>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="apple-btn-black w-full text-center py-2.5 text-xs shadow-md"
            >
              Request Free Audit & Scope
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
