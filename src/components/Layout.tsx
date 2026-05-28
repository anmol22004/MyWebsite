import React from 'react'
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-50 flex flex-col transition-colors duration-200">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:dark:bg-gray-800 focus:px-3 focus:py-2 focus:rounded focus:shadow">
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        {children}
      </main>
      <footer className="border-t border-gray-200 dark:border-white/10 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-gray-600 font-mono">
          <span>© {new Date().getFullYear()} Anmol Agarwal</span>
          <span>www.1mol.in</span>
        </div>
      </footer>
    </div>
  )
}
