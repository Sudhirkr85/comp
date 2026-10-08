export interface ServiceItem {
  id: string;
  title: string;
  category: 'ai' | 'web' | 'mobile' | 'cloud' | 'enterprise';
  description: string;
  iconName: string;
  features: string[];
  techBadge: string[];
  pricingModel: string;
  deliveryTime: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  clientCategory: string;
  description: string;
  impactMetrics: string;
  techStack: string[];
  imageGradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: "SA Software Innovation",
  shortName: "SA Innovation",
  motto: "Strive and Achieve",
  tagline: "Strive and Achieve — High-Performance Websites & Complete Software Solutions",
  establishedYear: "2025",
  contactEmail: "sasofwareinnovation@gmail.com",
  phone: "+91 9102130956",
  rawPhone: "9102130956",
  whatsappNumber: "919102130956",
  address: "Innovation Tech Hub • Serving Delhi NCR, UP, Bihar, MP & Pan-India",
  ndaGuaranteed: true,
  mvpDeliveryTime: "2-4 Weeks",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-saas",
    title: "New Websites & Legacy Web Modernization",
    category: "web",
    description: "We engineer brand-new high-converting websites and completely overhaul old, slow, or outdated websites into ultra-fast Apple-speed digital assets.",
    iconName: "Globe",
    features: [
      "Brand-New Modern Website Development",
      "Redesign & Speed Overhaul of Old Websites",
      "Core Web Vitals Boost (20s to <1s Load Time)",
      "Instant 1-Click WhatsApp & Call Lead Triggers"
    ],
    techBadge: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Legacy Migration"],
    pricingModel: "Custom Architecture Scope",
    deliveryTime: "5-10 Days"
  },
  {
    id: "seo-dominance",
    title: "Search Engine Dominance (India & Global SEO)",
    category: "web",
    description: "Rank #1 on Google for high-intent search queries across Hindi-belt states (Delhi NCR, UP, Bihar, MP) and global international markets (USA, UK, UAE).",
    iconName: "TrendingUp",
    features: [
      "Hyper-Local SEO (Google Business Profile & Map Pack)",
      "International / Global Technical SEO Architecture",
      "Schema.org Structured Data & Hreflang Tags",
      "High-Conversion Keyword Mapping & Organic Inquiries"
    ],
    techBadge: ["Technical SEO", "Schema.org", "Core Web Vitals", "Global Hreflang", "Search Console"],
    pricingModel: "Search Dominance Retainer",
    deliveryTime: "Sprint / Ongoing"
  },
  {
    id: "ai-solutions",
    title: "AI Workflows & 24/7 WhatsApp Automation",
    category: "ai",
    description: "Automate customer inquiries, qualify high-value leads, and sync directly with your CRM 24/7 using intelligent custom AI agents and WhatsApp bots.",
    iconName: "Bot",
    features: [
      "24/7 WhatsApp Customer Auto-Reply Chatbots",
      "Intelligent Lead Qualification & Instant Owner Alert",
      "Internal Business Knowledge Search & RAG AI",
      "Custom Workflow Automation & CRM Pipeline Sync"
    ],
    techBadge: ["OpenAI API", "Python", "WhatsApp Cloud API", "FastAPI", "CRM Sync"],
    pricingModel: "Custom AI Implementation",
    deliveryTime: "1-2 Weeks"
  },
  {
    id: "maintenance-amc",
    title: "Website AMC, Management & Code Upgrades",
    category: "enterprise",
    description: "Complete hands-off management for your web assets: regular bug fixing, security patches, plugin/framework upgrades, and 99.9% uptime monitoring.",
    iconName: "ShieldCheck",
    features: [
      "Ongoing Monthly Website Management & AMC",
      "Legacy Codebase Bug Fixing & Framework Upgrades",
      "Daily Automated Cloud Backups & SSL Maintenance",
      "Dedicated Technical Support & Fast Fix SLA"
    ],
    techBadge: ["Website AMC", "Security Audits", "Bug Fixing", "99.9% Uptime SLA"],
    pricingModel: "Annual Maintenance Contract",
    deliveryTime: "Monthly SLA"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Engineering (Android & iOS)",
    category: "mobile",
    description: "High-performance cross-platform mobile apps for startups and enterprises with fluid 60fps animations, payment gateways, and scalable cloud backends.",
    iconName: "Smartphone",
    features: [
      "Google Play Store & Apple App Store Deployment",
      "Push Notifications & Fast OTP Authentication",
      "Payment Gateways (UPI, Razorpay, Stripe)",
      "Pixel-Perfect Apple Interface & Offline Caching"
    ],
    techBadge: ["Flutter", "React Native", "Firebase", "Node.js", "PostgreSQL"],
    pricingModel: "Native Cross-Platform Scope",
    deliveryTime: "2-4 Weeks"
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure, Global CDN & DevOps",
    category: "cloud",
    description: "Enterprise cloud server infrastructure, business email setup, domain SSL configuration, and automated database backups with 99.9% uptime SLA.",
    iconName: "Cloud",
    features: [
      "Enterprise Cloud Setup (Vercel / AWS / DigitalOcean)",
      "Cloudflare Global CDN & Edge Caching (<30ms)",
      "Custom Corporate Domain & Business Email Setup",
      "High Availability & Automated Disaster Recovery"
    ],
    techBadge: ["AWS", "Vercel", "Cloudflare", "Docker", "PostgreSQL"],
    pricingModel: "Cloud SLA Management",
    deliveryTime: "2-5 Days"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "legacy-modernization",
    title: "Apex Industrial — 20s to 0.6s Speed Overhaul",
    clientCategory: "Legacy Modernization & AMC",
    description: "Completely overhauled a slow, 7-year-old corporate website. Re-architected in Next.js, eliminating server crashes and boosting organic leads by 320%.",
    impactMetrics: "20.4s ➔ 0.6s Load Time • 99 Core Web Vitals",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Performance Engineering"],
    imageGradient: "from-blue-600/30 via-cyan-600/20 to-slate-950"
  },
  {
    id: "global-seo-dominance",
    title: "Zenith Global Exports — Pan-India & US SEO",
    clientCategory: "Search Engine Dominance",
    description: "Targeted competitive export keywords across Delhi NCR, UP, and global buyers in USA and UAE. Ranked on Page 1 within 60 days.",
    impactMetrics: "#1 Google Search Rank • +410% International Inquiries",
    techStack: ["Technical SEO", "Schema.org", "Hreflang", "Core Web Vitals"],
    imageGradient: "from-emerald-600/30 via-teal-600/20 to-slate-950"
  },
  {
    id: "ai-whatsapp-automation",
    title: "MediCare Specialist — 24/7 AI WhatsApp Bot",
    clientCategory: "AI Lead Automation",
    description: "Deployed custom 24/7 WhatsApp AI auto-reply bot that handles patient FAQs, schedules consultations, and notifies doctors instantly.",
    impactMetrics: "8,500+ Qualified Leads • Zero Staff Response Delay",
    techStack: ["WhatsApp API", "FastAPI", "OpenAI", "CRM Integration"],
    imageGradient: "from-purple-600/30 via-indigo-600/20 to-slate-950"
  },
  {
    id: "mobile-ecom",
    title: "StyleVogue Omnichannel — iOS & Android App",
    clientCategory: "Mobile & Web Engineering",
    description: "Built high-speed cross-platform shopping application with UPI single-click checkout and real-time inventory management.",
    impactMetrics: "₹18 Lakh+ Monthly GMV • 99.9% Cloud Uptime",
    techStack: ["Flutter", "Node.js", "Razorpay", "AWS Cloud"],
    imageGradient: "from-amber-600/30 via-orange-600/20 to-slate-950"
  }
];

export const WHY_US_DATA = [
  {
    title: "⚡ Build New & Modernize Old Websites",
    description: "Whether creating a brand-new website from scratch or taking over an existing slow, buggy legacy site, we deliver 99/100 Google PageSpeed and modern Apple aesthetics."
  },
  {
    title: "🚫 Zero Blind Prompts. True Software Engineering",
    description: "We don't copy-paste generic AI prompts that create buggy, unmaintainable spaghetti code. Every line of TypeScript, database schema, and API route is custom-engineered for enterprise stability."
  },
  {
    title: "🌍 Pan-India & Global #1 SEO Dominance",
    description: "Engineered to rank at the top of Google search across Hindi-belt states (Delhi NCR, UP, Bihar, MP) and international global markets (USA, UK, UAE)."
  },
  {
    title: "🤖 24/7 AI Automation & WhatsApp Bots",
    description: "Turn every website visitor into a booked client with instant WhatsApp auto-replies, smart lead capture agents, and automated CRM workflows."
  },
  {
    title: "🛠️ 100% IP Ownership & Dedicated AMC",
    description: "You own 100% of your source code and database. We also provide ongoing monthly website management (AMC) for worry-free 99.9% uptime, security, and regular upgrades."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Do you build websites using blind AI prompts or generic generators?",
    answer: "Never. Amateurs use single-prompt AI generators that produce brittle, buggy spaghetti code that breaks on production. At SA Software Innovation, we practice disciplined software engineering: custom technical blueprints, strict TypeScript typing, optimized database schemas, and Apple-grade UI/UX standards. AI accelerates our velocity, but senior human architecture guarantees production-grade reliability."
  },
  {
    question: "Do you take over, manage, and fix existing / old websites?",
    answer: "Yes, absolutely! We specialize in legacy website handling. We conduct a complete code and performance audit, fix existing bugs, overhaul slow 15-20 second loading speeds down to sub-1 second, and provide ongoing monthly Website AMC to keep your site updated, secure, and running 24/7 with a 99.9% uptime SLA."
  },
  {
    question: "How does your Pan-India and Global SEO process rank my business #1 on Google?",
    answer: "We engineer SEO into the code itself: perfect Schema.org structured data, geo-targeted location metadata for Indian regions (Delhi NCR, UP, Bihar, MP, Rajasthan), multi-region hreflang architecture for international markets (USA, UK, UAE), and 99/100 Core Web Vitals speed scores that Google algorithms prioritize for top ranking."
  },
  {
    question: "Can you connect a 24/7 AI WhatsApp bot to our website and business?",
    answer: "Yes. We build custom WhatsApp AI bots and website live-agents trained specifically on your company's services, pricing guidelines, and FAQs. They qualify leads immediately, answer customer queries 24/7 in English or Hindi, and send instant notifications directly to your phone or CRM."
  },
  {
    question: "What is included in your Website AMC (Annual Maintenance Contract)?",
    answer: "Our Website AMC includes regular security patching, daily automated cloud backups, SSL renewals, bug fixing, content and design updates, speed monitoring, and priority technical support whenever you need changes or troubleshooting."
  },
  {
    question: "What is your delivery timeline for new projects?",
    answer: "A standard high-performance business website is typically delivered in 5 to 10 days. Mobile applications and custom software portals take 2 to 4 weeks depending on the technical roadmap and feature scope."
  },
  {
    question: "Who owns the code and intellectual property after completion?",
    answer: "You own 100% of your source code, design assets, and database. We provide full GitHub repository transfer and server access upon completion with zero vendor lock-in and a signed Non-Disclosure Agreement (NDA)."
  }
];
