import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/anmol22004', Icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anmol22004/', Icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/imanmolag', Icon: Twitter },
    { name: 'Email', url: 'mailto:anmol22004@gmail.com', Icon: Mail },
  ]

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
  ]

  return (
    <header className="border-b-2 border-indigo-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex-1">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 hover:from-indigo-300 hover:to-cyan-300 transition" onClick={() => setMobileMenuOpen(false)}>
            Anmol Agarwal
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-8">
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            {navLinks.map(({ label, path }) => (
              <Link key={path} to={path} className="text-slate-300 hover:text-indigo-300 font-medium transition duration-200 px-2 py-1 rounded hover:bg-slate-700">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                title={name}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-indigo-300 transition duration-200 hover:scale-125"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden text-slate-300 hover:text-indigo-300 p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-700 bg-slate-800 px-4 py-4">
          <nav className="space-y-3 mb-4">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-slate-300 hover:text-indigo-300 font-medium transition duration-200 px-3 py-2 rounded hover:bg-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-slate-700 pt-4 flex gap-4">
            {socialLinks.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                title={name}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-indigo-300 transition duration-200 p-2 rounded hover:bg-slate-700"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
