import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://sasoftwareinnovation.com"),
  title: {
    default: "SA Software Innovation — Best Website & Mobile App Development Company in India | Delhi NCR, UP, Bihar, MP",
    template: "%s | SA Software Innovation"
  },
  description: "Looking for top website development or mobile app company? SA Software Innovation delivers custom business websites, Android/iOS apps, ecommerce portals, and AI solutions in 2-4 weeks. Best software company serving Delhi, UP, Bihar, MP, Rajasthan & across India.",
  keywords: [
    "best website development company in Delhi",
    "top website designing company in Noida",
    "mobile app development company in Lucknow",
    "best software company in Patna Bihar",
    "software company in Indore MP",
    "website developer in Jaipur",
    "custom software development company India",
    "enterprise website development India",
    "business website developer near me",
    "Android app development company in UP",
    "ecommerce website development company",
    "startup MVP development agency India",
    "SA Software Innovation",
    "software innovation company"
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sasoftwareinnovation.com",
    title: "Best Website & Mobile App Development Company in India — SA Software Innovation",
    description: "Launch your custom business website or mobile app in 2-4 weeks. Fast delivery, enterprise architecture, 100% code ownership. Serving Delhi NCR, UP, Bihar, MP and pan-India.",
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
        "@id": "https://sasoftwareinnovation.com/#organization",
        "name": COMPANY_INFO.name,
        "alternateName": ["SA Innovation", "SA Software", "SA Web Development"],
        "slogan": COMPANY_INFO.motto,
        "url": "https://sasoftwareinnovation.com",
        "email": COMPANY_INFO.contactEmail,
        "telephone": COMPANY_INFO.phone,
        "priceRange": "$$",
        "image": "https://sasoftwareinnovation.com/logo.svg",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "Delhi NCR / Uttar Pradesh / Bihar / MP"
        },
        "areaServed": [
          { "@type": "State", "name": "Delhi" },
          { "@type": "State", "name": "Uttar Pradesh" },
          { "@type": "State", "name": "Bihar" },
          { "@type": "State", "name": "Madhya Pradesh" },
          { "@type": "State", "name": "Rajasthan" },
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
          "@id": "https://sasoftwareinnovation.com/#organization"
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
