import React from 'react'
import { Meta } from '@/components/Meta'
import { PostList } from '@/features/blog/PostList'

export default function BlogPage() {
  return (
    <>
      <Meta
        title="Blog"
        description="Essays on trading, data engineering, finance, and life."
        path="/blog"
      />
      <PostList />
    </>
  )
}
