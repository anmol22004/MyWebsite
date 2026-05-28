import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

type Base = {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

const variants: Record<Variant, string> = {
  primary:   'bg-accent text-white hover:bg-accent-hover',
  secondary: 'border border-border text-text-2 hover:border-border-strong hover:text-text-1',
  ghost:     'text-text-2 hover:text-text-1 hover:bg-surface-hover',
}

const sizes: Record<Size, string> = {
  sm: 'px-3  py-1.5 text-xs',
  md: 'px-4  py-2   text-sm',
}

function cls(variant: Variant, size: Size, className?: string) {
  return cn(
    'inline-flex items-center justify-center gap-1.5 font-medium rounded-lg transition-colors',
    variants[variant],
    sizes[size],
    className,
  )
}

// ── Real <button> ─────────────────────────────────────────────────
export function Button({
  variant = 'primary',
  size    = 'md',
  className,
  children,
  ...rest
}: Base & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Base>) {
  return (
    <button {...rest} className={cls(variant, size, className)}>
      {children}
    </button>
  )
}

// ── Internal route link styled as a button ────────────────────────
export function ButtonLink({
  to,
  variant = 'primary',
  size    = 'md',
  className,
  children,
}: Base & { to: string }) {
  return (
    <Link to={to} className={cls(variant, size, className)}>
      {children}
    </Link>
  )
}

// ── External <a> styled as a button ───────────────────────────────
export function ButtonAnchor({
  href,
  external,
  variant = 'primary',
  size    = 'md',
  className,
  children,
  ...rest
}: Base & { href: string; external?: boolean } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof Base | 'href'>) {
  return (
    <a
      {...rest}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cls(variant, size, className)}
    >
      {children}
    </a>
  )
}
