/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:              'var(--bg)',
        surface:         'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        'text-1':        'var(--text-1)',
        'text-2':        'var(--text-2)',
        'text-3':        'var(--text-3)',
        accent:          'var(--accent)',
        'accent-hover':  'var(--accent-hover)',
        'accent-muted':  'var(--accent-muted)',
        border:          'var(--border)',
        'border-strong': 'var(--border-strong)',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono:  ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        text:  '680px',
      },
    },
  },
  plugins: [],
}
