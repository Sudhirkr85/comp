import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import CoreOfferings from "@/components/CoreOfferings";
import AuditTool from "@/components/AuditTool";
import RegionalTrust from "@/components/RegionalTrust";
import Services from "@/components/Services";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingContactDock from "@/components/FloatingContactDock";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#0071e3] selection:text-white relative">
      <Navbar />
      
      {/* 1. Apple White Keynote Hero */}
      <Hero />
      
      {/* 2. Enterprise Tech Stack & Standards Marquee Ticker */}
      <TechMarquee />

      {/* 3. Apple White Bento Box Core Offerings: New Builds, Modernization, Global SEO, AI */}
      <CoreOfferings />

      {/* 4. Instant 60-Second Website Speed & SEO Audit Tool */}
      <AuditTool />

      {/* 5. Regional & Global Trust: Targets Delhi NCR, UP, Bihar, MP & International Markets */}
      <RegionalTrust />

      {/* 6. Complete Services Matrix (6 Capabilities) */}
      <Services />

      {/* 7. Enterprise Engineering Workflow & Delivery Methodology */}
      <DevelopmentProcess />

      {/* 8. Proven Client Results & Case Studies */}
      <Portfolio />

      {/* 9. Why Founders Choose SA Software Innovation & FAQs */}
      <WhyUs />

      {/* 10. Direct Lead Capture Contact Form + Instant WhatsApp option */}
      <ContactForm />

      {/* 11. Apple Glass Floating Dynamic Island Contact Pill */}
      <FloatingContactDock />

      <Footer />
    </main>
  );
}
