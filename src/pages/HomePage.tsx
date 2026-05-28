import React from 'react'
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { Meta } from '@/components/Meta'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ButtonLink } from '@/components/ui/Button'
import { PostCard } from '@/features/blog/PostCard'
import { posts } from '@/features/blog/data'
import { site } from '@/config/site'
import { Link } from 'react-router-dom'

const recent = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 4)

const socialIcons = [
  { href: site.social.github,   Icon: Github,   label: 'GitHub'   },
  { href: site.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { href: site.social.twitter,  Icon: Twitter,  label: 'Twitter'  },
]

export default function HomePage() {
  return (
    <Container>
      <Meta description={site.description} path="/" />

      <div className="space-y-16 pt-2 sm:pt-6">
        {/* Hero */}
        <section className="space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-1">
            Hi, I'm Anmol.
          </h1>
          <p className="text-base sm:text-[1.05rem] text-text-2 leading-relaxed">
            Software engineer building data pipelines, trading systems, and ML applications.
            Three years at{' '}
            <span className="text-text-1 font-medium">Urban Company</span>{' '}
            and{' '}
            <span className="text-text-1 font-medium">Algoji</span>.
            Currently studying for CFA Level 1 and writing about finance, engineering, and the space between.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <ButtonLink to="/about">About me</ButtonLink>
            <ButtonLink to="/projects" variant="secondary">Projects</ButtonLink>
            <ButtonLink to="/films" variant="secondary">Films</ButtonLink>
          </div>
        </section>

        {/* Recent writing */}
        <section>
          <SectionTitle>Recent Writing</SectionTitle>
          <div className="divide-y divide-border">
            {recent.map(post => <PostCard key={post.id} post={post} compact />)}
          </div>
          <Link
            to="/blog"
            className="mt-5 inline-flex items-center gap-1.5 text-xs text-accent hover:underline underline-offset-4"
          >
            All posts <ArrowRight size={12} />
          </Link>
        </section>

        {/* Contact */}
        <section className="border-t border-border pt-12 space-y-4">
          <SectionTitle>Get in Touch</SectionTitle>
          <p className="text-sm text-text-2 leading-relaxed">
            Open to interesting conversations, collaborations, and opportunities.
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-1">
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-accent hover:underline underline-offset-4"
            >
              {site.email}
            </a>
            <div className="flex items-center gap-4">
              {socialIcons.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="text-text-3 hover:text-text-1 transition-colors"
                >
                  <Icon size={17} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}
