import React from 'react'
import { Meta } from '@/components/Meta'
import { ProjectsList } from '@/features/projects/ProjectsList'

export default function ProjectsPage() {
  return (
    <>
      <Meta
        title="Projects"
        description="Featured projects: pairs trading, malware analysis, and security research."
        path="/projects"
      />
      <ProjectsList />
    </>
  )
}
