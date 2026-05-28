import React from 'react'
import { cn } from '@/lib/cn'

export type RatingFilter = 'all' | 10 | 9 | 8 | 7

type Props = {
  search:       string
  onSearch:     (s: string) => void
  rating:       RatingFilter
  onRating:     (r: RatingFilter) => void
  genre:        string
  onGenre:      (g: string) => void
  availableGenres: string[]
}

const pill = (active: boolean) => cn(
  'px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
  active
    ? 'bg-accent text-white'
    : 'bg-surface text-text-2 border border-border hover:border-border-strong',
)

export function FilmFilters({
  search, onSearch, rating, onRating, genre, onGenre, availableGenres,
}: Props) {
  return (
    <>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search by title…"
          value={search}
          onChange={e => onSearch(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 text-sm rounded-lg border border-border bg-surface text-text-1 placeholder-text-3 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold text-text-3 uppercase tracking-wider">Rating</span>
        {(['all', 10, 9, 8, 7] as const).map(r => (
          <button key={r} onClick={() => onRating(r)} className={pill(rating === r)}>
            {r === 'all' ? 'All' : r === 10 ? '★10' : `★${r}+`}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-[10px] font-semibold text-text-3 uppercase tracking-wider">Genre</span>
        <button onClick={() => onGenre('all')} className={pill(genre === 'all')}>All</button>
        {availableGenres.map(g => (
          <button key={g} onClick={() => onGenre(g)} className={pill(genre === g)}>{g}</button>
        ))}
      </div>
    </>
  )
}
