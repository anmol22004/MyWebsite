import React, { useState, useMemo, useEffect } from 'react'
import Meta from '../components/Meta'
import films from '../data/films'

type RatingFilter = 'all' | 10 | 9 | 8 | 7

const PAGE_SIZE = 48

const topGenres = (() => {
  const count: Record<string, number> = {}
  films.forEach(f => f.genre.forEach(g => { count[g] = (count[g] || 0) + 1 }))
  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([g]) => g)
})()

function RatingBadge({ rating }: { rating: number }) {
  const cls =
    rating === 10 ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' :
    rating >= 9   ? 'bg-indigo-100  dark:bg-indigo-900/30  text-indigo-700  dark:text-indigo-400'  :
    rating >= 7   ? 'bg-amber-100   dark:bg-amber-900/30   text-amber-700   dark:text-amber-400'   :
                    'bg-gray-100    dark:bg-white/5         text-gray-600    dark:text-gray-400'
  return (
    <span className={`shrink-0 inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[11px] font-bold font-mono ${cls}`}>
      ★ {rating}
    </span>
  )
}

const pill = (active: boolean) =>
  `px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
    active
      ? 'bg-indigo-600 text-white'
      : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
  }`

export default function Films() {
  const [search,       setSearch]       = useState('')
  const [ratingFilter, setRatingFilter] = useState<RatingFilter>('all')
  const [genreFilter,  setGenreFilter]  = useState('all')
  const [shown,        setShown]        = useState(PAGE_SIZE)

  const filtered = useMemo(() =>
    films
      .filter(f => {
        if (search && !f.title.toLowerCase().includes(search.toLowerCase())) return false
        if (ratingFilter !== 'all' && f.myRating < ratingFilter) return false
        if (genreFilter  !== 'all' && !f.genre.includes(genreFilter))  return false
        return true
      })
      .sort((a, b) => b.myRating - a.myRating || b.year - a.year),
    [search, ratingFilter, genreFilter]
  )

  useEffect(() => setShown(PAGE_SIZE), [search, ratingFilter, genreFilter])

  const visible = filtered.slice(0, shown)
  const hasMore = shown < filtered.length

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Meta
        title="Films — Anmol Agarwal"
        description="1,100+ films watched. Ratings and short takes."
        image="/images/og-image.svg"
        url="https://www.1mol.in/films"
      />

      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-3">Films</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3 max-w-xl">
          I watch a lot of films — 1,100+ and counting, with 950+ rated on IMDb.
        </p>
        <div className="flex gap-5 font-mono text-[11px] text-gray-400 dark:text-gray-500">
          <span>📽 1,100+ watched</span>
          <span>⭐ 950+ rated</span>
        </div>
      </section>

      {/* Search */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search by title…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition"
        />
      </div>

      {/* Rating filter */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Rating</span>
        {(['all', 10, 9, 8, 7] as const).map(r => (
          <button key={r} onClick={() => setRatingFilter(r)} className={pill(ratingFilter === r)}>
            {r === 'all' ? 'All' : r === 10 ? '★10' : r === 7 ? '★7+' : `★${r}+`}
          </button>
        ))}
      </div>

      {/* Genre filter */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Genre</span>
        <button onClick={() => setGenreFilter('all')} className={pill(genreFilter === 'all')}>All</button>
        {topGenres.map(g => (
          <button key={g} onClick={() => setGenreFilter(g)} className={pill(genreFilter === g)}>{g}</button>
        ))}
      </div>

      <p className="font-mono text-[11px] text-gray-400 dark:text-gray-500 mb-5">
        Showing {visible.length} of {filtered.length}
        {filtered.length !== films.length ? ` (filtered from ${films.length})` : ' films'}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map(film => (
          <div
            key={`${film.title}-${film.year}`}
            className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/10 p-4 hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-snug">{film.title}</h3>
              <RatingBadge rating={film.myRating} />
            </div>
            <p className="font-mono text-[11px] text-gray-400 dark:text-gray-500 mb-2">
              {film.year} · {film.director}
            </p>
            <div className="flex flex-wrap gap-1 mb-1">
              {film.genre.slice(0, 3).map(g => (
                <span key={g} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-[11px]">{g}</span>
              ))}
            </div>
            {film.myTake && (
              <p className="text-[11px] text-gray-500 dark:text-gray-400 italic leading-relaxed border-l-2 border-indigo-300 dark:border-indigo-800 pl-3 mt-2">
                "{film.myTake}"
              </p>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 dark:text-gray-600 py-16 text-sm">
          No films match — try a different search or filter.
        </p>
      )}

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShown(s => s + PAGE_SIZE)}
            className="px-6 py-2.5 text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 rounded-lg hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Load more · {filtered.length - shown} remaining
          </button>
        </div>
      )}
    </div>
  )
}
