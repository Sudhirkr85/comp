import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, Clock, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blogData";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: `Tech Insights & Engineering Blog | ${COMPANY_INFO.name}`,
  description: "Read technical articles on AI RAG pipelines, Next.js SaaS development, mobile frameworks, and cloud architecture by Sudhir Technologies engineers.",
  openGraph: {
    title: `Tech Insights & Blog — ${COMPANY_INFO.name}`,
    description: "In-depth engineering guides, AI architecture breakdowns, and SaaS MVP strategies.",
    url: "https://sudhirtech.com/blog",
  },
};

export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] relative">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-white border-b border-black/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#0071e3] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-xs font-mono text-[#0071e3] border border-blue-200/60 mb-6 font-medium">
            <BookOpen className="w-3.5 h-3.5" /> Engineering & AI Insights
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-6">
            Technical Insights & Blog
          </h1>
          <p className="text-lg sm:text-xl text-[#86868b] leading-relaxed max-w-3xl mx-auto font-normal">
            Deep-dive articles on AI RAG pipelines, Next.js web performance, cross-platform mobile engineering, and startup SaaS strategies.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="apple-card rounded-3xl overflow-hidden bg-white flex flex-col justify-between group cursor-pointer block"
            >
              <div className="p-8">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-50 text-[#0071e3] font-medium">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#86868b] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#1d1d1f] mb-3 group-hover:text-[#0071e3] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-[#86868b] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="p-8 pt-0 border-t border-black/5 flex items-center justify-between text-xs text-[#515154] font-medium">
                <span>{post.publishedDate}</span>
                <span className="text-[#0071e3] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
