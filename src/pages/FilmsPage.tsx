import React from 'react'
import { Meta } from '@/components/Meta'
import { FilmsList } from '@/features/films/FilmsList'

export default function FilmsPage() {
  return (
    <>
      <Meta
        title="Films"
        description="1,100+ films watched. Ratings and short takes."
        path="/films"
      />
      <FilmsList />
    </>
  )
}
