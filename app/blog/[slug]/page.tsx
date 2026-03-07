import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://krylox.ai/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://krylox.ai/blog/${post.slug}`,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Post header */}
        <section className="bg-white pt-32 pb-12 border-b border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-600 truncate max-w-xs">{post.title}</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-red-600 bg-red-50 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">{post.description}</p>

            {/* Meta */}
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
                  K
                </span>
                Krylox Team
              </span>
              <span>&middot;</span>
              <span>{formatDate(post.date)}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article content */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <article className="prose prose-gray max-w-none">
              <MDXRemote source={post.content} />
            </article>
          </div>
        </section>

        {/* Back link */}
        <section className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <a
              href="mailto:hello@krylox.ai?subject=Free Audit Request"
              className="rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
            >
              Work with us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
