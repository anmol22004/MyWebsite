import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button, ButtonAnchor } from '@/components/ui/Button'
import { formatDate } from '@/lib/formatDate'
import { readingTime } from '@/lib/readingTime'
import { site } from '@/config/site'
import type { Post } from './data'

type Props = { post: Post }

export function PostView({ post }: Props) {
  const navigate = useNavigate()
  const mins  = readingTime(post.content)
  const tweet = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${site.url}/blog/${post.id}`)}`

  return (
    <Container size="prose">
      <article className="py-8">
        <button
          onClick={() => navigate('/blog')}
          className="text-xs text-text-3 hover:text-accent transition-colors mb-10 flex items-center gap-1"
        >
          ← All posts
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-1 leading-tight tracking-tight mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-2 text-[11px] font-mono text-text-3 mb-10 pb-10 border-b border-border">
          <time>{formatDate(post.date, 'long')}</time>
          <span>·</span>
          <span>{mins} min read</span>
        </div>

        <div className="prose-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
          <Button variant="secondary" onClick={() => navigate('/blog')}>← Back to Blog</Button>
          <ButtonAnchor variant="secondary" href={tweet} external>Share on X →</ButtonAnchor>
        </div>
      </article>
    </Container>
  )
}
