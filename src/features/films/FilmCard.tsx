import React from 'react'
import { RatingBadge } from '@/components/ui/RatingBadge'
import { Tag } from '@/components/ui/Tag'
import type { Film } from './data'

type Props = { film: Film }

export function FilmCard({ film }: Props) {
  return (
    <div className="bg-surface rounded-xl border border-border p-4 hover:border-accent/40 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-semibold text-text-1 text-sm leading-snug">{film.title}</h3>
        <RatingBadge rating={film.myRating} />
      </div>
      <p className="font-mono text-[11px] text-text-3 mb-2">
        {film.year} · {film.director}
      </p>
      <div className="flex flex-wrap gap-1 mb-1">
        {film.genre.slice(0, 3).map(g => (
          <Tag key={g} variant="subtle">{g}</Tag>
        ))}
      </div>
      {film.myTake && (
        <p className="text-[11px] text-text-2 italic leading-relaxed border-l-2 border-accent/40 pl-3 mt-2">
          "{film.myTake}"
        </p>
      )}
    </div>
  )
}
