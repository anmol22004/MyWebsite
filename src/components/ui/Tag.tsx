import React from 'react'
import { cn } from '@/lib/cn'

type Variant = 'default' | 'subtle' | 'accent'

type Props = {
  children: React.ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  default: 'bg-surface text-text-2 border border-border',
  subtle:  'bg-surface text-text-3',
  accent:  'bg-accent-muted text-accent border border-accent/20',
}

/**
 * Small inline pill — used for skills, genres, tech stacks.
 */
export function Tag({ children, variant = 'default', className }: Props) {
  return (
    <span className={cn(
      'inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium',
      variants[variant],
      className,
    )}>
      {children}
    </span>
  )
}
