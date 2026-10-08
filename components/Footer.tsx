import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, MessageSquare, Mail, PhoneCall, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/8 pt-16 pb-12 relative z-10 text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col with Logo */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-xs border border-black/10">
                <Image
                  src="/logo.svg"
                  alt="SA Software Innovation Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-[#0f172a] tracking-tight leading-tight font-heading">
                  SA Software <span className="text-[#0071e3]">Innovation</span>
                </span>
                <span className="text-[10px] text-[#64748b] font-semibold uppercase">{COMPANY_INFO.motto}</span>
              </div>
            </Link>
            <p className="text-[#64748b] text-xs leading-relaxed">
              Custom Web Applications, Next-Gen AI Solutions & Cloud Architecture for ambitious founders worldwide.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-mono font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% IP & Source Code Ownership
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs uppercase font-mono text-[#0f172a] font-bold mb-4 tracking-wider font-heading">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#475569] font-medium">
              <li><Link href="/services/web-saas" className="hover:text-[#0071e3] transition-colors">Business & Enterprise Websites</Link></li>
              <li><Link href="/services/mobile-apps" className="hover:text-[#0071e3] transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services/ai-solutions" className="hover:text-[#0071e3] transition-colors">AI & LLM Integration</Link></li>
              <li><Link href="/services/cloud-devops" className="hover:text-[#0071e3] transition-colors">Cloud Hosting & Domain Setup</Link></li>
              <li><Link href="/services/enterprise-custom" className="hover:text-[#0071e3] transition-colors">Custom CRM & Billing Software</Link></li>
            </ul>
          </div>

          {/* Quick Lead Navigation */}
          <div>
            <h4 className="text-xs uppercase font-mono text-[#0f172a] font-bold mb-4 tracking-wider font-heading">
              Quick Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-[#475569] font-medium">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="hover:text-[#0071e3] transition-colors font-bold flex items-center gap-1.5 text-slate-900"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#0071e3]" /> Call: {COMPANY_INFO.rawPhone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20SA%20Software%20Innovation,%20I%20have%20a%20project%20query.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors font-bold flex items-center gap-1.5 text-emerald-800"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Direct Chat
                </a>
              </li>
              <li><Link href="/#process" className="hover:text-[#0071e3] transition-colors">Engineering Methodology</Link></li>
              <li><Link href="/about" className="hover:text-[#0071e3] transition-colors">About Our Mission</Link></li>
              <li><Link href="/blog" className="hover:text-[#0071e3] transition-colors">Tech Blog & Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-[#0071e3] transition-colors flex items-center gap-1.5">Careers at SA Innovation <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-[#0071e3] border border-blue-200">HIRING</span></Link></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="text-xs uppercase font-mono text-[#0f172a] font-bold mb-4 tracking-wider font-heading">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#475569]">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <a href={`tel:${COMPANY_INFO.rawPhone}`} className="hover:text-[#0071e3] font-bold text-slate-900">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0071e3]" />
                <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="hover:text-[#0071e3]">
                  {COMPANY_INFO.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Hubs Index for Internal SEO Linking */}
        <div className="pt-6 pb-6 border-t border-black/6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#64748b]">
          <span className="font-bold text-[#0f172a] font-mono text-[11px] uppercase">Regional Hubs:</span>
          <Link href="/locations/delhi-ncr" className="hover:text-[#0071e3] transition-colors">Delhi NCR</Link>
          <Link href="/locations/usa" className="hover:text-[#0071e3] transition-colors">United States (USA)</Link>
          <Link href="/locations/uae-dubai" className="hover:text-[#0071e3] transition-colors">Dubai & UAE</Link>
          <Link href="/locations/uk-europe" className="hover:text-[#0071e3] transition-colors">UK & Europe</Link>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-black/6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. • <em>"{COMPANY_INFO.motto}"</em>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#0f172a] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#0f172a] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#0f172a] cursor-pointer">NDA Confidentiality Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
