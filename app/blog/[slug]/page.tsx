import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, BlogPost } from "@/data/blogData";
import { COMPANY_INFO } from "@/data/companyData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | ${COMPANY_INFO.name} Blog`,
    description: post.excerpt,
    keywords: [...post.tags, COMPANY_INFO.name, "Tech Blog", "Software Engineering"],
    alternates: {
      canonical: `https://sasoftwareinnovation.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      url: `https://sasoftwareinnovation.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // JSON-LD Article & Breadcrumb Schema for Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `https://sasoftwareinnovation.com/blog/${post.slug}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "author": {
          "@type": "Organization",
          "name": COMPANY_INFO.name,
          "url": "https://sasoftwareinnovation.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": COMPANY_INFO.name,
          "url": "https://sasoftwareinnovation.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sasoftwareinnovation.com/logo.svg"
          }
        },
        "datePublished": post.publishedDate,
        "mainEntityOfPage": `https://sasoftwareinnovation.com/blog/${post.slug}`
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sasoftwareinnovation.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://sasoftwareinnovation.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://sasoftwareinnovation.com/blog/${post.slug}`
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <article className="pt-36 pb-20 bg-white border-b border-black/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#0071e3] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#86868b] font-mono mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0071e3] font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-[#86868b] leading-relaxed mb-8 font-normal">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-black/5 text-xs text-[#515154]">
            <div className="flex items-center gap-2 font-medium">
              <User className="w-4 h-4 text-[#0071e3]" /> Written by {post.author}
            </div>
            <div className="flex items-center gap-2 font-mono text-gray-400">
              <span>Share Article</span>
              <Share2 className="w-4 h-4 cursor-pointer hover:text-[#0071e3]" />
            </div>
          </div>
        </div>
      </article>

      {/* Article Content Body */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none space-y-6 text-[#1d1d1f] leading-relaxed font-normal text-base">
          {post.content.split('\n\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold text-[#1d1d1f] pt-4">{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold text-[#1d1d1f] pt-2">{trimmed.replace('### ', '')}</h3>;
            }
            return <p key={index} className="text-[#515154] leading-relaxed">{trimmed}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-black/5 flex flex-wrap items-center gap-2">
          <span className="text-xs text-[#86868b] font-mono mr-2">Topic Tags:</span>
          {post.tags.map((tag, i) => (
            <span key={i} className="text-xs font-mono px-3 py-1 rounded-md bg-[#f5f5f7] text-[#1d1d1f]">
              #{tag}
            </span>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="mt-16 rounded-3xl bg-[#000000] text-white p-8 sm:p-10 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Need a custom AI or Web solution for your company?</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Book a free 15-minute technical discovery call with our Solutions Architect.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1d1d1f] text-xs font-bold hover:bg-gray-100 transition-all shadow-md"
          >
            Get Custom Proposal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
