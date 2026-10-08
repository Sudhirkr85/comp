export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  content: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-build-ai-rag-chatbot-nextjs",
    title: "How to Build an Enterprise AI RAG Chatbot with Next.js & OpenAI",
    excerpt: "Learn how we engineer custom Retrieval-Augmented Generation (RAG) pipelines over private company documents for enterprise client workflows.",
    category: "AI & Machine Learning",
    readTime: "6 min read",
    publishedDate: "January 15, 2025",
    author: "SA Software Innovation Engineering Team",
    tags: ["OpenAI", "Next.js", "Python", "RAG", "Vector DB"],
    content: `
      ## Introduction to Enterprise RAG Pipelines

      Retrieval-Augmented Generation (RAG) has emerged as the gold standard for companies looking to connect Large Language Models (LLMs) like OpenAI GPT-4 or Anthropic Claude to their proprietary business data.

      Unlike basic API integrations, a production-grade RAG pipeline ensures zero hallucination by retrieving relevant document snippets before sending queries to the model.

      ### 1. Document Chunking & Embedding Generation
      First, company documents (PDFs, Notion pages, SQL databases) are processed into semantic text chunks using recursive character splitters. Each chunk is converted into a 1536-dimensional vector using OpenAI's \`text-embedding-3-small\` model.

      ### 2. Vector Indexing with Pinecone or PGVector
      The vectors are stored in a high-speed vector database. For PostgreSQL users, **PGVector** provides sub-millisecond similarity search directly inside existing database infrastructure.

      ### 3. Next.js App Router Server Actions Integration
      In Next.js 14/15, we handle the vector search and stream OpenAI responses using Edge Runtime Server Actions, delivering instant streaming responses to the user UI.
    `
  },
  {
    slug: "saas-mvp-development-guide-2025",
    title: "Startup Founder's Guide: Launching a SaaS MVP in 2 to 4 Weeks",
    excerpt: "A step-by-step engineering roadmap for startup founders building scalable Minimum Viable Products without wasting capital.",
    category: "Startup Strategy",
    readTime: "5 min read",
    publishedDate: "January 10, 2025",
    author: "SA Software Innovation Solutions Team",
    tags: ["SaaS", "Next.js", "Startup MVP", "Stripe", "PostgreSQL"],
    content: `
      ## The Lean SaaS Engineering Framework

      Building a successful SaaS product isn't about shipping 50 features on day one. It's about launching the **Core Value Loop** in 2 to 4 weeks, gathering real user feedback, and iterating rapidly.

      ### Key MVP Components Checklist:
      - **Authentication & RBAC**: NextAuth.js or Clerk for secure Google & Email login.
      - **Billing & Subscriptions**: Stripe Checkout & Webhook listeners for monthly/annual pricing tiers.
      - **Core Value Dashboard**: Clean, responsive UI focused on solving one primary problem for your target user.
      - **Automated Analytics**: PostHog or Vercel Analytics to track conversion funnels.
    `
  },
  {
    slug: "flutter-vs-react-native-2025",
    title: "Flutter vs React Native: Choosing the Best Mobile Framework in 2025",
    excerpt: "An engineering comparison of performance, ecosystem maturity, and development speed for cross-platform iOS and Android mobile apps.",
    category: "Mobile App Development",
    readTime: "7 min read",
    publishedDate: "January 5, 2025",
    author: "SA Software Innovation Mobile Team",
    tags: ["Flutter", "React Native", "iOS", "Android", "TypeScript"],
    content: `
      ## Cross-Platform Mobile Engineering in 2025

      When clients ask us whether to build their mobile app in **Flutter** or **React Native**, the answer depends on their existing web stack and UI complexity.

      ### When to Choose React Native:
      - You already have a React or Next.js web application.
      - You want to share code, types, and state management logic between web and mobile.

      ### When to Choose Flutter:
      - Your application requires complex custom 2D/3D graphics or high-frame-rate canvas animations.
      - You want identical pixel-perfect UI rendering across iOS, Android, and Web out-of-the-box.
    `
  }
];
