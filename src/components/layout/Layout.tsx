import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = { children: React.ReactNode }

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-bg text-text-1 flex flex-col transition-colors duration-200">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-surface focus:px-3 focus:py-2 focus:rounded focus:shadow"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex-1 w-full py-8 sm:py-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}
