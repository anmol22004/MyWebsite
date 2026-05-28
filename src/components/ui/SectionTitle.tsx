import React from 'react'
import { cn } from '@/lib/cn'

type Props = {
  children: React.ReactNode
  className?: string
}

/**
 * Small all-caps tracked label used to mark sections
 * ("Recent Writing", "Get in Touch", "My Principles").
 */
export function SectionTitle({ children, className }: Props) {
  return (
    <h2 className={cn(
      'text-[11px] font-semibold text-text-3 uppercase tracking-widest mb-5',
      className
    )}>
      {children}
    </h2>
  )
}
