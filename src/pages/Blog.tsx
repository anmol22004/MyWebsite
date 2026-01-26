

import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import posts from '../data/blogs'

export default function Blog() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text mb-4">Blog & Essays</h1>
        <p className="text-lg text-slate-700">In-depth reflections on my journey, technical insights, and lessons learned.</p>
      </section>

      <Meta title="Blog  Anmol Agarwal" description="Thoughtful essays and technical deep-dives on trading, ML, and personal growth." image="/images/og-image.svg" url="https://www.1mol.in/blog" />
      <div className="space-y-5">
        {posts.map(post => {
          const blogUrl = `/blog/${post.id}`;
          return (
            <article
              key={post.id}
              className="group overflow-hidden bg-white rounded-lg shadow-md border border-indigo-200 hover:shadow-xl transition duration-300"
            >
              <Link
                to={blogUrl}
                className="block p-6 hover:bg-indigo-50 transition cursor-pointer"
                title="Read full blog"
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
                  <div className="ml-4 flex-shrink-0 text-2xl text-indigo-600 group-hover:text-indigo-700 transition">
                    ↗
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
              </Link>
              {/* ...removed shareable link and Copy Link button... */}
            </article>
          );
        })}
      </div>

      <section className="flex gap-4 pt-8">
        <a href="/" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-200 font-semibold">
          ← Back Home
        </a>
      </section>
    </div>
  );
}
