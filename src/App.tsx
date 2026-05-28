import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ScrollToTop } from '@/components/layout/ScrollToTop'

/**
 * Routes are lazy-loaded so each page ships as its own JS chunk —
 * Home doesn't pay for the Films data, etc.
 */
const HomePage      = lazy(() => import('@/pages/HomePage'))
const AboutPage     = lazy(() => import('@/pages/AboutPage'))
const ProjectsPage  = lazy(() => import('@/pages/ProjectsPage'))
const BlogPage      = lazy(() => import('@/pages/BlogPage'))
const BlogPostPage  = lazy(() => import('@/pages/BlogPostPage'))
const FilmsPage     = lazy(() => import('@/pages/FilmsPage'))
const NotFoundPage  = lazy(() => import('@/pages/NotFoundPage'))

function Loading() {
  return (
    <div className="flex justify-center py-20">
      <div className="font-mono text-xs text-text-3">Loading…</div>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/about"      element={<AboutPage />} />
          <Route path="/projects"   element={<ProjectsPage />} />
          <Route path="/blog"       element={<BlogPage />} />
          <Route path="/blog/:id"   element={<BlogPostPage />} />
          <Route path="/films"      element={<FilmsPage />} />
          <Route path="*"           element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
