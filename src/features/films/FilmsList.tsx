import React, { useState, useMemo, useEffect } from 'react'
import { films } from './data'
import { FilmCard } from './FilmCard'
import { FilmFilters, type RatingFilter } from './FilmFilters'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const PAGE_SIZE = 48

const topGenres = (() => {
  const count: Record<string, number> = {}
  films.forEach(f => f.genre.forEach(g => { count[g] = (count[g] || 0) + 1 }))
  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([g]) => g)
})()

export function FilmsList() {
  const [search, setSearch] = useState('')
  const [rating, setRating] = useState<RatingFilter>('all')
  const [genre,  setGenre]  = useState('all')
  const [shown,  setShown]  = useState(PAGE_SIZE)

  const filtered = useMemo(() =>
    films
      .filter(f => {
        if (search && !f.title.toLowerCase().includes(search.toLowerCase())) return false
        if (rating !== 'all' && f.myRating < rating) return false
        if (genre  !== 'all' && !f.genre.includes(genre))  return false
        return true
      })
      .sort((a, b) => b.myRating - a.myRating || b.year - a.year),
    [search, rating, genre]
  )

  useEffect(() => setShown(PAGE_SIZE), [search, rating, genre])

  const visible = filtered.slice(0, shown)
  const hasMore = shown < filtered.length

  return (
    <Container size="wide">
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-1 tracking-tight mb-3">Films</h1>
        <p className="text-text-2 text-sm leading-relaxed mb-3 max-w-xl">
          I watch a lot of films — 1,100+ and counting, with 950+ rated on IMDb.
        </p>
        <div className="flex gap-5 font-mono text-[11px] text-text-3">
          <span>📽 1,100+ watched</span>
          <span>⭐ 950+ rated</span>
        </div>
      </section>

      <FilmFilters
        search={search}    onSearch={setSearch}
        rating={rating}    onRating={setRating}
        genre={genre}      onGenre={setGenre}
        availableGenres={topGenres}
      />

      <p className="font-mono text-[11px] text-text-3 mb-5">
        Showing {visible.length} of {filtered.length}
        {filtered.length !== films.length ? ` (filtered from ${films.length})` : ' films'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map(film => <FilmCard key={`${film.title}-${film.year}`} film={film} />)}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-3 py-16 text-sm">No films match — try a different search or filter.</p>
      )}

      {hasMore && (
        <div className="mt-8 text-center">
          <Button variant="secondary" onClick={() => setShown(s => s + PAGE_SIZE)}>
            Load more · {filtered.length - shown} remaining
          </Button>
        </div>
      )}
    </Container>
  )
}
