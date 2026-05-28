import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react'
import Meta from '../components/Meta'
import posts from '../data/blogs'

function readingTime(text: string) {
  return Math.ceil(text.trim().split(/\s+/).length / 200)
}

const recent = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 4)

export default function Home() {
  return (
    <div className="max-w-[680px] mx-auto space-y-16 pt-2 sm:pt-6">
      <Meta
        title="Anmol Agarwal — Software Engineer"
        description="Software engineer building data pipelines, trading systems, and ML applications."
        image="/images/og-image.svg"
        url="https://www.1mol.in/"
      />

      {/* Hero */}
      <section className="space-y-5">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Hi, I'm Anmol.
        </h1>
        <p className="text-base sm:text-[1.05rem] text-gray-600 dark:text-gray-400 leading-relaxed">
          Software engineer building data pipelines, trading systems, and ML applications.
          Three years at{' '}
          <span className="text-gray-900 dark:text-gray-200 font-medium">Urban Company</span>
          {' '}and{' '}
          <span className="text-gray-900 dark:text-gray-200 font-medium">Algoji</span>.
          Currently studying for CFA Level 1 and writing about finance, engineering, and the space between.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            to="/about"
            className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            About me
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-white/10 rounded-lg hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-500 dark:hover:border-white/30 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/films"
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-white/10 rounded-lg hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-500 dark:hover:border-white/30 transition-colors"
          >
            Films
          </Link>
        </div>
      </section>

      {/* Recent writing */}
      <section>
        <h2 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
          Recent Writing
        </h2>
        <div className="divide-y divide-gray-100 dark:divide-white/5">
          {recent.map(post => {
            const mins = readingTime(post.content)
            return (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group flex items-baseline justify-between gap-4 py-4"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                  {post.title}
                </span>
                <span className="shrink-0 font-mono text-[11px] text-gray-400 dark:text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </Link>
            )
          })}
        </div>
        <Link
          to="/blog"
          className="mt-5 inline-flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4"
        >
          All posts <ArrowRight size={12} />
        </Link>
      </section>

      {/* Contact */}
      <section className="border-t border-gray-100 dark:border-white/5 pt-12 space-y-4">
        <h2 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          Get in Touch
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Open to interesting conversations, collaborations, and opportunities.
        </p>
        <div className="flex flex-wrap items-center gap-5 pt-1">
          <a
            href="mailto:anmol22004@gmail.com"
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4"
          >
            anmol22004@gmail.com
          </a>
          <div className="flex items-center gap-4">
            {[
              { href: 'https://github.com/anmol22004', Icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/anmol22004/', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://twitter.com/imanmolag', Icon: Twitter, label: 'Twitter' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                <Icon size={17} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
