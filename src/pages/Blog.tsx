import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import posts from '../data/blogs'

function readingTime(text: string) {
  return Math.ceil(text.trim().split(/\s+/).length / 200)
}

export default function Blog() {
  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="max-w-[680px] mx-auto px-4 py-6">
      <Meta
        title="Blog — Anmol Agarwal"
        description="Essays on trading, data engineering, finance, and life."
        image="/images/og-image.svg"
        url="https://www.1mol.in/blog"
      />

      <section className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-3">
          Blog & Essays
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          Reflections on trading systems, data engineering, finance, and life.
        </p>
      </section>

      <div className="divide-y divide-gray-100 dark:divide-white/5">
        {sorted.map(post => {
          const mins = readingTime(post.content)
          return (
            <Link key={post.id} to={`/blog/${post.id}`} className="group block py-7">
              <div className="flex items-center gap-2 mb-2">
                <time className="font-mono text-[11px] text-gray-400 dark:text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </time>
                <span className="text-gray-300 dark:text-gray-600 text-xs">·</span>
                <span className="font-mono text-[11px] text-gray-400 dark:text-gray-500">{mins} min read</span>
              </div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <span className="mt-3 inline-block text-xs font-medium text-indigo-500 dark:text-indigo-400 group-hover:underline underline-offset-4">
                Read →
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
