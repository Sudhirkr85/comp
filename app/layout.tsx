import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/companyData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0071e3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sasoftwareinnovation.in"),
  title: {
    default: "SA Software Innovation — Global Web Engineering, Legacy Modernization & Cross-Border SEO",
    template: "%s | SA Software Innovation"
  },
  description: "SA Software Innovation engineers high-impact enterprise websites, legacy codebase speed overhauls (20s to <1s), cross-border Google SEO dominance, 24/7 AI automation, and dedicated Website AMC across North America, Europe, UAE, and India.",
  keywords: [
    "global web engineering agency",
    "legacy website modernization",
    "website speed optimization core web vitals",
    "cross-border SEO agency",
    "international SEO company USA UK UAE",
    "website AMC and maintenance services",
    "enterprise Next.js development company",
    "custom AI WhatsApp automation agency",
    "mobile app engineering Flutter iOS Android",
    "software development agency India USA UAE",
    "SA Software Innovation"
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://sasoftwareinnovation.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sasoftwareinnovation.in",
    title: "SA Software Innovation — Global Web Engineering, Modernization & Cross-Border SEO",
    description: "Launch your custom business website or mobile app in 2-4 weeks. Enterprise architecture, legacy speed overhauls, 100% code ownership. Serving North America, Europe, UAE, and India.",
    siteName: "SA Software Innovation",
  },
  twitter: {
    card: "summary_large_image",
    title: "SA Software Innovation — Top Web & App Development Company",
    description: "Build custom high-converting websites and mobile applications. Free consultation & proposal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://sasoftwareinnovation.in/#organization",
        "name": COMPANY_INFO.name,
        "alternateName": ["SA Innovation", "SA Software", "SA Web Development"],
        "slogan": COMPANY_INFO.motto,
        "url": "https://sasoftwareinnovation.in",
        "email": COMPANY_INFO.contactEmail,
        "telephone": COMPANY_INFO.phone,
        "priceRange": "$$",
        "image": "https://sasoftwareinnovation.in/logo.svg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "M-24, Ground Floor, Near SBI Bank, Old DLF Colony, Sector 14",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122001",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "48",
          "bestRating": "5"
        },
        "areaServed": [
          { "@type": "City", "name": "Gurugram" },
          { "@type": "State", "name": "Delhi" },
          { "@type": "State", "name": "Haryana" },
          { "@type": "State", "name": "Uttar Pradesh" },
          { "@type": "State", "name": "Bihar" },
          { "@type": "State", "name": "Madhya Pradesh" },
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United States" }
        ],
        "knowsAbout": [
          "Website Development",
          "Mobile App Development",
          "Ecommerce Website Design",
          "Custom Software Development",
          "Next.js & React Web Apps",
          "AI Automation Solutions"
        ]
      },
      {
        "@type": "Service",
        "name": "Custom Business Website & Mobile App Development",
        "provider": {
          "@id": "https://sasoftwareinnovation.in/#organization"
        },
        "serviceType": "Website Design & Mobile App Development",
        "areaServed": "India",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web & App Services",
          "itemListElement": SERVICES_DATA.map((service, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.description
            },
            "position": index + 1
          }))
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you scope and execute software and website projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Development scope is structured around your specific business objectives and technical architecture. At SA Software Innovation, we provide transparent milestone-based proposals for growing startups and enterprises."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to develop a business website or app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most business websites and startup mobile app MVPs are delivered in 2 to 4 weeks with complete testing and deployment."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide 100% source code ownership?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100%. You own the complete source code, database architecture, and hosting setup upon project delivery."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`light ${jakarta.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} ${outfit.variable} antialiased bg-[#f5f5f7] text-[#1d1d1f] min-h-screen font-sans`}>
        {children}
      </body>
    </html>
  );
}
