/**
 * Concatenate class names, filtering out falsy values.
 * Lightweight clsx alternative — no dependencies.
 *
 * @example
 *   cn('px-4', active && 'bg-blue-500', 'rounded')
 */
export function cn(...classes: (string | undefined | false | null | 0)[]): string {
  return classes.filter(Boolean).join(' ')
}
