import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, formatDate } from "@/lib/blog";

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

        {/* Posts grid */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {posts.length === 0 ? (
              <p className="text-gray-500 text-center py-16">No posts yet. Check back soon.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white p-8 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-red-600 bg-red-50 px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors leading-snug mb-3">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>{formatDate(post.date)}</span>
                        <span>&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-sm font-semibold text-red-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read
                        <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
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
              href="https://calendar.app.google/3QEmmNd7hzfVYk6K8"
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
