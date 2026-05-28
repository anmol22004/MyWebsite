import React from 'react'
import Meta from '../components/Meta'
import projects from '../data/projects'

export default function Projects() {
  return (
    <div className="max-w-[680px] mx-auto px-4 py-6">
      <Meta
        title="Projects — Anmol Agarwal"
        description="Featured projects: pairs trading, malware analysis, and security research."
        image="/images/og-image.svg"
        url="https://www.1mol.in/projects"
      />

      <section className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-3">
          Projects
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          A selection of projects across trading systems, ML, and security research.
        </p>
      </section>

      <div className="space-y-4">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/10 p-6 hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                {project.name}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                >
                  View →
                </a>
              )}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
