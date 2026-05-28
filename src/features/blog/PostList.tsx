import React from 'react'
import { posts } from './data'
import { PostCard } from './PostCard'
import { Container } from '@/components/ui/Container'

export function PostList() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <Container>
      <section className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-1 tracking-tight mb-3">
          Blog & Essays
        </h1>
        <p className="text-text-3 text-sm leading-relaxed">
          Reflections on trading systems, data engineering, finance, and life.
        </p>
      </section>

      <div className="divide-y divide-border">
        {sorted.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  )
}
