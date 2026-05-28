import React from 'react'
import { cn } from '@/lib/cn'

type Props = {
  children: React.ReactNode
  size?: 'narrow' | 'prose' | 'wide'
  className?: string
}

/**
 * Centered content container with consistent max-width.
 *   narrow → 680px (default — text-heavy pages)
 *   prose  → 720px (blog posts)
 *   wide   → 1024px (grids: films, projects)
 */
export function Container({ children, size = 'narrow', className }: Props) {
  const max = size === 'wide' ? 'max-w-5xl' : size === 'prose' ? 'max-w-prose' : 'max-w-text'
  return (
    <div className={cn('mx-auto px-4 w-full', max, className)}>
      {children}
    </div>
  )
}
