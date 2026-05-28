import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

const navLinks = [
  { label: 'About',    path: '/about'    },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog',     path: '/blog'     },
  { label: 'Films',    path: '/films'    },
]

export default function Header() {
  const { dark, toggle } = useDarkMode()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkCls = (path: string) =>
    `px-3 py-1.5 rounded-md text-sm transition-colors ${
      pathname === path
        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 font-medium'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/5'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur border-b border-gray-200 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="text-sm font-bold text-gray-900 dark:text-gray-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Anmol Agarwal
        </Link>

        {/* Desktop */}
        <nav className="hidden sm:flex items-center gap-0.5">
          {navLinks.map(({ label, path }) => (
            <Link key={path} to={path} className={linkCls(path)}>{label}</Link>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        {/* Mobile */}
        <div className="sm:hidden flex items-center gap-1">
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 text-gray-400">
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button onClick={() => setMobileOpen(o => !o)} className="p-2 text-gray-400">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] px-4 py-3 space-y-0.5">
          {navLinks.map(({ label, path }) => (
            <Link key={path} to={path} onClick={() => setMobileOpen(false)} className={`block ${linkCls(path)}`}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
