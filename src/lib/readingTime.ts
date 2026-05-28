/**
 * Estimate reading time in minutes for a text body.
 * Uses 200 words-per-minute (average adult prose speed).
 */
export function readingTime(text: string): number {
  return Math.ceil(text.trim().split(/\s+/).length / 200)
}
