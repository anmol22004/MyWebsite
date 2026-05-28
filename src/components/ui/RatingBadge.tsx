import React from 'react'
import { cn } from '@/lib/cn'

type Props = { rating: number; className?: string }

/**
 * Star + numeric rating badge color-coded by tier:
 *   10   → emerald   (perfect)
 *   ≥ 9  → indigo    (loved)
 *   ≥ 7  → amber     (liked)
 *   else → neutral
 */
export function RatingBadge({ rating, className }: Props) {
  const color =
    rating === 10 ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' :
    rating >= 9   ? 'bg-indigo-100  dark:bg-indigo-900/30  text-indigo-700  dark:text-indigo-400'  :
    rating >= 7   ? 'bg-amber-100   dark:bg-amber-900/30   text-amber-700   dark:text-amber-400'   :
                    'bg-surface     text-text-3'

  return (
    <span className={cn(
      'shrink-0 inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[11px] font-bold font-mono',
      color,
      className,
    )}>
      ★ {rating}
    </span>
  )
}
