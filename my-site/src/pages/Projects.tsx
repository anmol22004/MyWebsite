import React from 'react'
import Meta from '../components/Meta'
import projects from '../data/projects'

export default function Projects() {
  return (
    <div className="space-y-8">
      <Meta title="Projects — Anmol Agarwal" description="Featured projects: Pairs Trading, Malware Analysis, Encrypted KeyLogger, Generative Models for Trading." image="/images/og-image.svg" url="https://www.1mol.in/projects" />
      <section>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text mb-4">Projects & Work</h1>
        <p className="text-lg text-slate-700">A selection of projects I've worked on, showcasing diverse technical interests.</p>
      </section>

      <div className="grid gap-6">
        {projects.map(project => (
          <div key={project.id} className="p-6 bg-white rounded-lg shadow-md border border-indigo-200 hover:shadow-lg hover:border-indigo-400 transition duration-200">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded hover:shadow-md transition duration-200"
                >
                  View →
                </a>
              )}
            </div>

            <p className="text-sm text-slate-700 mb-3 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-xs font-semibold bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="flex gap-4 pt-4">
        <a href="/" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-200 font-semibold">Back Home</a>
      </section>
    </div>
  )
}
