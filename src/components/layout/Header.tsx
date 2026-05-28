import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { site } from '@/config/site'
import { cn } from '@/lib/cn'

export function Header() {
  const { dark, toggle }      = useDarkMode()
  const { pathname }          = useLocation()
  const [mobileOpen, setOpen] = useState(false)

  const linkCls = (path: string) => cn(
    'px-3 py-1.5 rounded-md text-sm transition-colors',
    pathname === path
      ? 'text-accent bg-accent-muted font-medium'
      : 'text-text-3 hover:text-text-1 hover:bg-surface-hover',
  )

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-sm font-bold text-text-1 hover:text-accent transition-colors"
        >
          {site.name}
        </Link>

        {/* Desktop */}
        <nav className="hidden sm:flex items-center gap-0.5">
          {site.nav.map(({ label, path }) => (
            <Link key={path} to={path} className={linkCls(path)}>{label}</Link>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-md text-text-3 hover:text-text-2 hover:bg-surface-hover transition-colors"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        {/* Mobile */}
        <div className="sm:hidden flex items-center gap-1">
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 text-text-3">
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button onClick={() => setOpen(o => !o)} className="p-2 text-text-3">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden border-t border-border bg-bg px-4 py-3 space-y-0.5">
          {site.nav.map(({ label, path }) => (
            <Link key={path} to={path} onClick={() => setOpen(false)} className={cn('block', linkCls(path))}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
