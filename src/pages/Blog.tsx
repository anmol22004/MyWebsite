import React, { useState } from 'react'
import Meta from '../components/Meta'
import posts from '../data/blogs'

export default function Blog() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text mb-4">Blog & Essays</h1>
        <p className="text-lg text-slate-700">In-depth reflections on my journey, technical insights, and lessons learned.</p>
      </section>

      <Meta title="Blog — Anmol Agarwal" description="Thoughtful essays and technical deep-dives on trading, ML, and personal growth." image="/images/og-image.svg" url="https://www.1mol.in/blog" />
      <div className="space-y-5">
        {posts.map(post => (
          <article
            key={post.id}
            className="group overflow-hidden bg-white rounded-lg shadow-md border border-indigo-200 hover:shadow-xl transition duration-300"
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => setExpanded(expanded === post.id ? null : post.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-xs text-indigo-600 font-semibold mt-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div
                  className="ml-4 flex-shrink-0 text-2xl text-indigo-600 group-hover:text-indigo-700 transition"
                  style={{
                    transform: expanded === post.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  ⌄
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {post.excerpt}
              </p>
            </div>

            {expanded === post.id && (
              <div className="border-t border-indigo-200 px-6 py-6 bg-gradient-to-b from-indigo-50 to-white">
                <div className="prose prose-sm max-w-none text-slate-800 leading-relaxed space-y-4">
                  {post.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-slate-700 leading-7">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button
                  className="mt-6 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
                  onClick={() => setExpanded(null)}
                >
                  ↑ Collapse
                </button>
              </div>
            )}
          </article>
        ))}
      </div>

      <section className="flex gap-4 pt-8">
        <a href="/" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-200 font-semibold">
          ← Back Home
        </a>
      </section>
    </div>
  )
}
