import React from 'react'
import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-50 text-slate-900 flex flex-col">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md focus:shadow">Skip to content</a>
      <Header />
      <main id="content" className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        {children}
      </main>
      <footer className="border-t-2 border-indigo-200 bg-gradient-to-r from-slate-900 to-slate-800 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-indigo-200 font-medium">
          © {new Date().getFullYear()} Anmol Agarwal — www.1mol.in
        </div>
      </footer>
    </div>
  )
}
