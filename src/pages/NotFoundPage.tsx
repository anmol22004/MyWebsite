import React from 'react'
import { Meta } from '@/components/Meta'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <Container>
      <Meta title="Page not found" />
      <div className="py-24 text-center space-y-6">
        <p className="font-mono text-sm text-text-3">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-1 tracking-tight">Page not found</h1>
        <p className="text-text-2 max-w-md mx-auto">
          The page you're looking for doesn't exist, or has been moved.
        </p>
        <ButtonLink to="/" variant="secondary">← Back home</ButtonLink>
      </div>
    </Container>
  )
}
