import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '@/lib/formatDate'
import { readingTime } from '@/lib/readingTime'
import type { Post } from './data'

type Props = {
  post: Post
  /** Compact one-line layout (used on Home's Recent Writing list). */
  compact?: boolean
}

export function PostCard({ post, compact }: Props) {
  const mins = readingTime(post.content)

  if (compact) {
    return (
      <Link to={`/blog/${post.id}`} className="group flex items-baseline justify-between gap-4 py-4">
        <span className="text-sm font-medium text-text-1 group-hover:text-accent transition-colors leading-snug">
          {post.title}
        </span>
        <span className="shrink-0 font-mono text-[11px] text-text-3">
          {formatDate(post.date, 'mono')}
        </span>
      </Link>
    )
  }

  return (
    <Link to={`/blog/${post.id}`} className="group block py-7">
      <div className="flex items-center gap-2 mb-2">
        <time className="font-mono text-[11px] text-text-3">{formatDate(post.date, 'short')}</time>
        <span className="text-border text-xs">·</span>
        <span className="font-mono text-[11px] text-text-3">{mins} min read</span>
      </div>
      <h2 className="text-base font-semibold text-text-1 group-hover:text-accent transition-colors mb-2 leading-snug">
        {post.title}
      </h2>
      <p className="text-sm text-text-2 leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>
      <span className="mt-3 inline-block text-xs font-medium text-accent group-hover:underline underline-offset-4">
        Read →
      </span>
    </Link>
  )
}
