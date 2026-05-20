"use client";

import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";

type Props = {
  posts: PostMeta[];
  categories: string[];
};

export default function BlogFilter({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory ? posts.filter((p) => p.category === activeCategory) : posts;

  return (
    <>
      {/* Category filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-1.5 text-xs font-semibold transition-colors ${
            activeCategory === null
              ? "bg-black text-white"
              : "bg-white border border-gray-200 text-gray-500 hover:border-black hover:text-black"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-4 py-1.5 text-xs font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-red-600 text-white"
                : "bg-white border border-gray-200 text-gray-500 hover:border-red-400 hover:text-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center py-16">No posts in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white p-8 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Category + Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs font-semibold text-white bg-black px-3 py-1">
                  {post.category}
                </span>
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-red-600 bg-red-50 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors leading-snug mb-3">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.description}</p>

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
    </>
  );
}
