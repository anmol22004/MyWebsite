/**
 * Format an ISO date string or Date object for display.
 *
 *   'long'  → "January 26, 2026"
 *   'short' → "Jan 26, 2026"
 *   'mono'  → "Jan 2026"   (used inline next to titles)
 */
export type DateFormat = 'long' | 'short' | 'mono'

export function formatDate(date: string | Date, format: DateFormat = 'long'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const options: Record<DateFormat, Intl.DateTimeFormatOptions> = {
    long:  { year: 'numeric', month: 'long', day: 'numeric' },
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    mono:  { year: 'numeric', month: 'short' },
  }
  return d.toLocaleDateString('en-US', options[format])
}
