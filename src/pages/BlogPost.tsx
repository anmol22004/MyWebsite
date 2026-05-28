import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams, useNavigate } from 'react-router-dom'
import posts from '../data/blogs'
import Meta from '../components/Meta'

function readingTime(text: string) {
  return Math.ceil(text.trim().split(/\s+/).length / 200)
}

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="max-w-[680px] mx-auto py-20 text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-4">Post not found</h2>
        <button
          onClick={() => navigate('/blog')}
          className="px-5 py-2 text-sm rounded-lg border border-gray-300 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
        >
          Back to Blog
        </button>
      </div>
    )
  }

  const mins = readingTime(post.content)

  return (
    <article className="max-w-[720px] mx-auto py-8 px-4">
      <Meta
        title={`${post.title} — Anmol Agarwal`}
        description={post.excerpt}
        image="/images/og-image.svg"
        url={`https://www.1mol.in/blog/${post.id}`}
      />

      <button
        onClick={() => { navigate('/blog'); window.scrollTo({ top: 0, behavior: 'instant' }) }}
        className="text-xs text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10 flex items-center gap-1"
      >
        ← All posts
      </button>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight tracking-tight mb-4">
        {post.title}
      </h1>

      <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 dark:text-gray-500 mb-10 pb-10 border-b border-gray-200 dark:border-white/10">
        <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>·</span>
        <span>{mins} min read</span>
      </div>

      <div className="blog-body">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-14 pt-8 border-t border-gray-200 dark:border-white/10 flex items-center justify-between flex-wrap gap-4">
        <button
          onClick={() => { navigate('/blog'); window.scrollTo({ top: 0, behavior: 'instant' }) }}
          className="px-5 py-2 text-sm rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          ← Back to Blog
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.1mol.in/blog/${post.id}`)}`}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 text-sm rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        >
          Share on X →
        </a>
      </div>
    </article>
  )
}
