import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Meta } from '@/components/Meta'
import { PostView } from '@/features/blog/PostView'
import { posts } from '@/features/blog/data'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function BlogPostPage() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const post     = posts.find(p => p.id === id)

  if (!post) {
    return (
      <Container size="prose">
        <Meta title="Post not found" path={`/blog/${id ?? ''}`} />
        <div className="py-20 text-center">
          <h2 className="text-xl font-bold text-text-1 mb-4">Post not found</h2>
          <Button variant="secondary" onClick={() => navigate('/blog')}>
            Back to Blog
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <>
      <Meta title={post.title} description={post.excerpt} path={`/blog/${post.id}`} />
      <PostView post={post} />
    </>
  )
}
