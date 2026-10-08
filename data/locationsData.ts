export interface LocationData {
  id: string;
  name: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  region: string;
  country: string;
  cities: string[];
  timezone: string;
  currency: string;
  localStats: {
    stat: string;
    label: string;
  }[];
  servicesOffered: {
    title: string;
    description: string;
    link: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const LOCATIONS_DATA: LocationData[] = [
  {
    id: "delhi-ncr",
    name: "Delhi NCR",
    badge: "Delhi • Noida • Gurugram Hub",
    heroTitle: "Best Website Development & Modernization Company in",
    heroHighlight: "Delhi NCR",
    heroDescription: "High-performance Next.js web applications, legacy website speed overhauls, 24/7 AI automation, and Google #1 SEO dominance for startups and enterprises across Delhi, Noida, and Gurugram.",
    metaTitle: "Website Development & Software Modernization Company in Delhi NCR | SA Software Innovation",
    metaDescription: "Top-rated website & software development agency in Delhi NCR (Noida, Gurugram). We build sub-second Next.js web apps, mobile apps, and 24/7 WhatsApp AI automation.",
    region: "Delhi NCR & Northern India",
    country: "India",
    cities: ["New Delhi", "Noida (Sector 62 & 135)", "Gurugram (Cyber City & Golf Course Rd)", "Faridabad", "Ghaziabad"],
    timezone: "IST (Indian Standard Time) — Same-day Technical Response",
    currency: "INR (₹) / Milestone Based",
    localStats: [
      { stat: "< 1s", label: "Average Page Load Time" },
      { stat: "2-4 Wks", label: "Startup MVP Delivery" },
      { stat: "100%", label: "Source Code Ownership" },
      { stat: "24/7", label: "Dedicated WhatsApp Support" }
    ],
    servicesOffered: [
      {
        title: "Enterprise Website Engineering",
        description: "Modern, ultra-fast corporate websites built on Next.js 16, React, and Tailwind CSS. Built to rank on Google Page 1.",
        link: "/services/web-saas"
      },
      {
        title: "Old Website Speed & Redesign Overhaul",
        description: "Upgrade slow WordPress or legacy PHP sites to Apple-speed modern architectures with 95+ Core Web Vitals scores.",
        link: "/services/web-saas"
      },
      {
        title: "WhatsApp & Business AI Automation",
        description: "Deploy 24/7 intelligent WhatsApp auto-reply bots and CRM integrations for rapid local lead conversions.",
        link: "/services/ai-solutions"
      },
      {
        title: "Cross-Platform Mobile Apps (iOS & Android)",
        description: "Native-speed Flutter and React Native mobile apps with UPI, Razorpay, and instant OTP login.",
        link: "/services/mobile-apps"
      }
    ],
    faqs: [
      {
        question: "Can we have an in-person or video discovery session in Delhi NCR?",
        answer: "Yes, our primary engineering leadership is based in the region. We regularly conduct Google Meet / Zoom discovery workshops or on-site architecture sessions for enterprise clients across Delhi, Noida, and Gurugram."
      },
      {
        question: "How quickly can you deliver a business website or MVP in Delhi NCR?",
        answer: "Most production-ready corporate websites are delivered in 5 to 10 days, while custom startup MVPs and mobile apps are deployed within 2 to 4 weeks under clear milestone contracts."
      },
      {
        question: "Do you offer post-launch website maintenance and AMC in Delhi NCR?",
        answer: "Yes, our Website AMC packages provide ongoing monthly monitoring, security patches, framework updates, and guaranteed SLA response times."
      }
    ]
  },
  {
    id: "usa",
    name: "United States (North America)",
    badge: "North America Delivery Hub",
    heroTitle: "Enterprise Next.js Development & Offshore Engineering for",
    heroHighlight: "United States",
    heroDescription: "High-velocity full-stack web engineering, legacy modernization, and AI automation for US founders and venture-backed startups. EST & PST active timezone overlap with Silicon Valley standards.",
    metaTitle: "Enterprise Next.js Web Development Agency for USA | SA Software Innovation",
    metaDescription: "Partner with top offshore Next.js & AI software engineering teams for US startups and enterprises. EST/PST active overlap, 100% IP ownership, and 2-4 week delivery.",
    region: "North America",
    country: "United States",
    cities: ["New York", "San Francisco / Silicon Valley", "Austin", "Seattle", "Chicago", "Toronto"],
    timezone: "EST / PST Active Collaboration Window",
    currency: "USD ($) / Stripe & Wire Transfer",
    localStats: [
      { stat: "EST/PST", label: "Active Overlap Hours" },
      { stat: "Sub-1s", label: "Global Edge CDN Latency" },
      { stat: "100%", label: "US-Standard NDA & IP Transfer" },
      { stat: "60-70%", label: "Engineering Cost Efficiency" }
    ],
    servicesOffered: [
      {
        title: "Next.js SaaS MVP Acceleration",
        description: "Launch your production-grade SaaS product in 2 to 4 weeks with Stripe billing, Clerk auth, and PostgreSQL database schemas.",
        link: "/services/web-saas"
      },
      {
        title: "Legacy Enterprise Web Modernization",
        description: "Re-engineer monolithic legacy systems into decoupled headless architectures with sub-second Core Web Vitals.",
        link: "/services/web-saas"
      },
      {
        title: "Custom RAG Pipelines & AI Integration",
        description: "Connect proprietary company knowledge bases to OpenAI and Anthropic Claude for intelligent internal workflows.",
        link: "/services/ai-solutions"
      },
      {
        title: "Cross-Border Technical SEO",
        description: "Dominate Google North American searches for high-intent B2B and SaaS transactional queries.",
        link: "/services/seo-dominance"
      }
    ],
    faqs: [
      {
        question: "How do you coordinate with US timezone working hours?",
        answer: "Our senior solutions architects and engineering leads maintain active overlap during US Eastern (EST) and Pacific (PST) business hours for daily standups, sprint reviews, and Slack/Teams communication."
      },
      {
        question: "What are your intellectual property and contract terms for US clients?",
        answer: "We sign mutual NDAs and standard IP assignment agreements prior to kickoff. You hold 100% full ownership of all source code, databases, and infrastructure from Day 1."
      },
      {
        question: "How do you handle payments from US entities?",
        answer: "We accept payments via international wire transfer, ACH, and Stripe invoicing in USD, structured around transparent milestone-based deliverables."
      }
    ]
  },
  {
    id: "uae-dubai",
    name: "UAE & Middle East (Dubai)",
    badge: "Middle East & GCC Hub",
    heroTitle: "Premier Web Engineering, E-Commerce & AI Automation in",
    heroHighlight: "Dubai & UAE",
    heroDescription: "Engineering bespoke web portals, real estate platforms, high-converting luxury e-commerce, and 24/7 WhatsApp AI automation for business leaders across Dubai, Abu Dhabi, and Saudi Arabia.",
    metaTitle: "Website Development, SEO & AI Automation Company in Dubai UAE | SA Software Innovation",
    metaDescription: "Premier web development, legacy speed overhauls, and 24/7 AI automation company serving Dubai, Abu Dhabi, and GCC. GST timezone support and multi-currency solutions.",
    region: "Middle East & GCC",
    country: "United Arab Emirates",
    cities: ["Dubai (Downtown, Business Bay, DIFC)", "Abu Dhabi", "Sharjah", "Riyadh (KSA)"],
    timezone: "GST (Gulf Standard Time) — Direct Sync",
    currency: "AED / USD / Flexible Milestones",
    localStats: [
      { stat: "GST", label: "Full Middle East Timezone Alignment" },
      { stat: "24/7", label: "WhatsApp AI Customer Lead Capture" },
      { stat: "100%", label: "Bilingual (EN / AR) Architecture" },
      { stat: "5-10 Days", label: "Fast Commercial Deployment" }
    ],
    servicesOffered: [
      {
        title: "Luxury Real Estate & Corporate Portals",
        description: "Ultra-fast Next.js portals with immersive 3D/video tours, instant WhatsApp agent connection, and lead tracking.",
        link: "/services/web-saas"
      },
      {
        title: "24/7 WhatsApp AI Customer Support & Sales",
        description: "Capture high-intent GCC buyers around the clock with AI agents that qualify leads and sync to your sales pipeline.",
        link: "/services/ai-solutions"
      },
      {
        title: "High-Conversion E-Commerce Platforms",
        description: "Custom headless e-commerce with Tabby, Tamara, Apple Pay, and Stripe payment gateway integrations.",
        link: "/services/web-saas"
      },
      {
        title: "Gulf Search Engine Dominance (SEO)",
        description: "Rank #1 on Google UAE and Saudi Arabia for commercial buyer intent and localized corporate searches.",
        link: "/services/seo-dominance"
      }
    ],
    faqs: [
      {
        question: "Do you build bilingual English and Arabic websites?",
        answer: "Yes, our Next.js architecture natively supports Right-to-Left (RTL) Arabic layouts alongside international English versions with automatic locale detection."
      },
      {
        question: "How does the WhatsApp AI lead automation work for UAE businesses?",
        answer: "We connect the official WhatsApp Cloud API to an AI agent trained on your inventory, pricing, or properties. When leads message your WhatsApp business number, the bot qualifies them and alerts your sales team instantly."
      },
      {
        question: "Can we pay in AED or USD?",
        answer: "Yes, we support both AED and USD invoicing with secure corporate bank transfer and international payment gateways."
      }
    ]
  },
  {
    id: "uk-europe",
    name: "United Kingdom & Europe",
    badge: "UK & Western Europe Hub",
    heroTitle: "Sub-Second Enterprise Web Platforms & Modernization for",
    heroHighlight: "UK & Europe",
    heroDescription: "Transform slow legacy websites into ultra-fast digital assets with GDPR-compliant cloud architectures, Next.js performance engineering, and GMT/CET overlapping delivery teams.",
    metaTitle: "Web Engineering & Legacy Modernization in UK & Europe | SA Software Innovation",
    metaDescription: "Corporate web development and legacy codebase speed overhauls for UK and European businesses. Full GDPR compliance, GMT/CET active collaboration, and sub-second load times.",
    region: "United Kingdom & Europe",
    country: "United Kingdom",
    cities: ["London", "Manchester", "Birmingham", "Edinburgh", "Berlin", "Amsterdam"],
    timezone: "GMT / BST / CET Active Delivery Sync",
    currency: "GBP (£) / EUR (€) / USD ($)",
    localStats: [
      { stat: "GMT/CET", label: "Active Overlap Collaboration" },
      { stat: "100%", label: "GDPR & Cookie Consent Compliant" },
      { stat: "< 0.8s", label: "Core Web Vitals Load Benchmark" },
      { stat: "2-4 Wks", label: "MVP & Corporate Launch" }
    ],
    servicesOffered: [
      {
        title: "Corporate Web Platforms & Modernization",
        description: "Modernize legacy PHP, WordPress, or monolithic websites into headless Next.js platforms that pass all Core Web Vitals.",
        link: "/services/web-saas"
      },
      {
        title: "GDPR-Ready Cloud Infrastructure",
        description: "Deploy secure European edge servers with automated compliance, cookie management, and SSL encryption.",
        link: "/services/cloud-devops"
      },
      {
        title: "Cross-Border European SEO",
        description: "Multi-country hreflang setup and technical SEO to capture organic search traffic across the UK and European continent.",
        link: "/services/seo-dominance"
      },
      {
        title: "Dedicated Website Management (AMC)",
        description: "Hands-off ongoing technical care, security patching, and uptime monitoring backed by strict SLA guarantees.",
        link: "/services/maintenance-amc"
      }
    ],
    faqs: [
      {
        question: "Are your platforms fully compliant with UK & EU GDPR regulations?",
        answer: "Yes, all data storage, analytics configurations, and user tracking scripts are engineered to comply strictly with European GDPR and UK Data Protection laws."
      },
      {
        question: "How do your teams manage sprint reviews across European timezones?",
        answer: "Our project managers and lead engineers work during GMT and CET hours, providing direct Slack/Teams syncs, video reviews, and weekly milestone demos."
      },
      {
        question: "What currencies do you invoice in?",
        answer: "We support GBP (£), EUR (€), and USD ($) invoicing with transparent milestone-based deliverables."
      }
    ]
  }
];
