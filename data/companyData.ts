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
    description: "We build brand-new high-converting websites and completely overhaul old, slow, or outdated websites into ultra-fast Apple-speed platforms.",
    iconName: "Globe",
    features: [
      "Brand-New Modern Website Development",
      "Redesign & Speed Overhaul of Old Websites",
      "Google Top Local & Global SEO Pre-Configured",
      "Instant WhatsApp & Call Direct Lead Buttons"
    ],
    techBadge: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress/Custom"],
    pricingModel: "Custom Architecture Scope",
    deliveryTime: "5-10 Days"
  },
  {
    id: "seo-dominance",
    title: "Search Engine Dominance (India & Global SEO)",
    category: "web",
    description: "Rank #1 on Google for high-intent search queries across Hindi-belt states (Delhi NCR, UP, Bihar, MP) and global markets (USA, UK, UAE).",
    iconName: "TrendingUp",
    features: [
      "Local SEO (Google Business Profile, Maps & Schema)",
      "International / Global Technical SEO Architecture",
      "99/100 Core Web Vitals & Sub-Second Page Speeds",
      "High-Conversion Keyword Mapping & Organic Leads"
    ],
    techBadge: ["Technical SEO", "Schema.org", "Core Web Vitals", "Hreflang", "Analytics"],
    pricingModel: "Search Dominance Retainer",
    deliveryTime: "Ongoing / Sprint"
  },
  {
    id: "ai-solutions",
    title: "AI Workflows & 24/7 WhatsApp Automation",
    category: "ai",
    description: "Automate customer inquiries, lead qualification, and business workflows 24/7 using intelligent custom AI agents and WhatsApp bots.",
    iconName: "Bot",
    features: [
      "24/7 WhatsApp Customer Auto-Reply Chatbots",
      "Internal Business Knowledge Search & RAG AI",
      "Automated Lead Capture & CRM Pipeline Sync",
      "Custom Python Automation & Process Optimization"
    ],
    techBadge: ["OpenAI API", "Python", "WhatsApp API", "FastAPI", "Automation"],
    pricingModel: "Custom AI Implementation",
    deliveryTime: "1-2 Weeks"
  },
  {
    id: "maintenance-amc",
    title: "Website AMC, Management & Code Upgrades",
    category: "enterprise",
    description: "Complete hands-off management for your existing web assets: Monthly bug fixing, security patches, content updates, and 99.9% uptime monitoring.",
    iconName: "ShieldCheck",
    features: [
      "Ongoing Monthly Website Maintenance & AMC",
      "Legacy Codebase Bug Fixing & Framework Upgrades",
      "Daily Automated Cloud Backups & SSL Security",
      "Dedicated Technical Support & Fast Fix SLA"
    ],
    techBadge: ["Website AMC", "Security Audits", "Bug Fixing", "Uptime SLA"],
    pricingModel: "Annual Maintenance Contract",
    deliveryTime: "Monthly Retainer"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Engineering (Android & iOS)",
    category: "mobile",
    description: "High-performance cross-platform mobile apps for startups and growing enterprises with fluid 60fps animations and secure backends.",
    iconName: "Smartphone",
    features: [
      "Play Store & App Store Deployment Ready",
      "Push Notifications & Fast User Authentication",
      "Payment Gateway (UPI, Razorpay, Stripe)",
      "Smooth Apple-Grade Interface & Offline Support"
    ],
    techBadge: ["Flutter", "React Native", "Firebase", "Node.js"],
    pricingModel: "Native Cross-Platform Scope",
    deliveryTime: "2-4 Weeks"
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure, Global CDN & DevOps",
    category: "cloud",
    description: "Enterprise cloud server infrastructure, business email, domain SSL setup, and automated database backups with 99.9% uptime SLA.",
    iconName: "Cloud",
    features: [
      "Enterprise Cloud Setup (Vercel / AWS / DigitalOcean)",
      "Cloudflare Global CDN & DDoS Protection",
      "Custom Domain Linking & Corporate Email Config",
      "99.9% High Availability & Disaster Recovery"
    ],
    techBadge: ["AWS", "Vercel", "Cloudflare", "Linux", "Docker"],
    pricingModel: "Cloud SLA Management",
    deliveryTime: "2-5 Days"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "local-business",
    title: "Apex Logistics — Corporate Portal & Tracking",
    clientCategory: "Logistics Enterprise",
    description: "Developed a modern, high-speed corporate website with online consignment enquiry and instant WhatsApp booking.",
    impactMetrics: "3.5x More Inquiries • 0.5s Page Load Speed",
    techStack: ["Next.js", "Tailwind CSS", "WhatsApp API", "SEO"],
    imageGradient: "from-blue-600/30 via-cyan-600/20 to-slate-950"
  },
  {
    id: "health-saas",
    title: "MediCare Clinic — Patient Portal & Website",
    clientCategory: "Healthcare Clinic",
    description: "Designed a clean, trustworthy patient appointment booking website with automated SMS and WhatsApp confirmation.",
    impactMetrics: "+180% Online Bookings • Ranked #1 on Google Maps",
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "SEO"],
    imageGradient: "from-emerald-600/30 via-teal-600/20 to-slate-950"
  },
  {
    id: "ecom-store",
    title: "StyleVogue — High-Conversion E-Commerce Store",
    clientCategory: "Retail Store",
    description: "High-conversion online storefront with UPI and payment gateway integration, engineered for seamless order processing.",
    impactMetrics: "₹15 Lakh+ Monthly GMV • 99.9% Uptime",
    techStack: ["Next.js", "Razorpay", "Tailwind CSS", "Vercel"],
    imageGradient: "from-purple-600/30 via-indigo-600/20 to-slate-950"
  }
];

export const WHY_US_DATA = [
  {
    title: "⚡ Build New & Modernize Old Websites",
    description: "Whether crafting a brand-new website from scratch or overhauling an existing slow legacy site, we deliver 99/100 Google PageSpeed and modern Apple aesthetics."
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
    title: "🛠️ 100% IP Ownership & Ongoing AMC",
    description: "You own 100% of your code and database. We also provide ongoing monthly website management (AMC) for worry-free 99.9% uptime and security."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How do you scope and execute projects?",
    answer: "We analyze your exact business requirements, craft tailored technical blueprints, and work in transparent agile sprint milestones. You maintain 100% ownership of source code and infrastructure from day one."
  },
  {
    question: "Do you build all types of software?",
    answer: "Yes! While business websites are our main specialty, we also provide full-cycle software services including mobile apps (Android/iOS), custom CRM/billing software, AI automation, and cloud hosting."
  },
  {
    question: "How do I get leads from my website?",
    answer: "We design every website with high-conversion layouts, local Google SEO tags (for Delhi, UP, Bihar, MP, etc.), and prominent 1-click WhatsApp and call buttons so visitors can contact you immediately."
  },
  {
    question: "What is the delivery timeline for a website?",
    answer: "A standard business website is typically delivered in 5 to 10 days. Mobile apps and custom software portals take 2 to 4 weeks depending on selected features."
  }
];
