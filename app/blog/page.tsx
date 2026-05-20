import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogFilter from "@/components/BlogFilter";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "MLOps insights, AI inference optimization guides, and production ML best practices from the Krylox team.",
  alternates: { canonical: "https://krylox.ai/blog" },
  openGraph: {
    title: "Krylox Blog | MLOps & AI Inference Insights",
    description:
      "MLOps insights, AI inference optimization guides, and production ML best practices from the Krylox team.",
    url: "https://krylox.ai/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category))).sort();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white pt-32 pb-16 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-red-600" />
              <span className="text-sm font-semibold text-red-600 uppercase tracking-widest">
                From the Krylox team
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
              MLOps & AI Insights
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl">
              Practical guides on inference optimization, production ML, and the engineering behind
              reliable AI systems.
            </p>
          </div>
        </section>

        {/* Posts grid with filter */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {posts.length === 0 ? (
              <p className="text-gray-500 text-center py-16">No posts yet. Check back soon.</p>
            ) : (
              <BlogFilter posts={posts} categories={categories} />
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Want this applied to your stack?
            </h2>
            <p className="mt-4 text-gray-400 max-w-lg mx-auto">
              We do this for production systems every day. Let us audit yours.
            </p>
            <a
              href="https://cal.com/jagadeesh-jaganathan-rqsxg9/30min"
              className="mt-8 inline-flex bg-red-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
            >
              Schedule a call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
