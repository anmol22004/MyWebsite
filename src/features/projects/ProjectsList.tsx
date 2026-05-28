import React from 'react'
import { projects } from './data'
import { ProjectCard } from './ProjectCard'
import { Container } from '@/components/ui/Container'

export function ProjectsList() {
  return (
    <Container>
      <section className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-1 tracking-tight mb-3">
          Projects
        </h1>
        <p className="text-text-3 text-sm leading-relaxed">
          A selection of projects across trading systems, ML, and security research.
        </p>
      </section>

      <div className="space-y-4">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Container>
  )
}
