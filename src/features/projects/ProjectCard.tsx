import React from 'react'
import { Tag } from '@/components/ui/Tag'
import { ButtonAnchor } from '@/components/ui/Button'
import type { Project } from './data'

type Props = { project: Project }

export function ProjectCard({ project }: Props) {
  return (
    <div className="bg-surface rounded-xl border border-border p-6 hover:border-accent/40 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-semibold text-text-1 leading-snug">{project.name}</h3>
        {project.link && (
          <ButtonAnchor href={project.link} external variant="secondary" size="sm">
            View →
          </ButtonAnchor>
        )}
      </div>

      <p className="text-sm text-text-2 mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tech, i) => <Tag key={i}>{tech}</Tag>)}
      </div>
    </div>
  )
}
