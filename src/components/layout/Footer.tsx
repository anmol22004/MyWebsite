import React from 'react'
import { site } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-3 font-mono">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a href={site.url} className="hover:text-text-2 transition-colors">
          {site.url.replace(/^https?:\/\//, '')}
        </a>
      </div>
    </footer>
  )
}
