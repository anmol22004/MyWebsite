import React from 'react'
import Meta from '../components/Meta'

export default function About() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <Meta title="About — Anmol Agarwal" description="Anmol Agarwal — B.Tech (DTU) in Computer Engineering. Software engineer focused on data pipelines, ML and trading systems." image="/images/og-image.svg" url="https://www.1mol.in/about" />
      <section className="flex flex-col items-center md:flex-row md:items-start gap-6 md:gap-12">
        <div className="flex-shrink-0">
          <img 
            src="/images/profile.jpg" 
            alt="Profile" 
            loading="lazy"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg shadow-lg border-4 border-indigo-200 object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text mb-4">About Me</h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-3">
            I'm a software engineer with a strong background in algorithmic trading, machine learning, and backend systems engineering. I'm passionate about building reliable, high-performance systems that solve real-world problems.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Over the years, I've worked on data pipelines, ML models, low-latency trading infrastructure, and web applications. I enjoy the challenge of combining domain knowledge with engineering rigor to create systems that scale.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4">Interests & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 bg-white border border-indigo-200 rounded-lg">
            <h3 className="font-semibold text-indigo-600 mb-2 text-base">Technical</h3>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-1">
              <li>• Python, TypeScript, React, SQL</li>
              <li>• Data pipelines (ETL, streaming)</li>
              <li>• Machine learning & forecasting</li>
              <li>• API design & optimization</li>
              <li>• Cloud platforms (AWS, GCP, Azure)</li>
            </ul>
          </div>
          <div className="p-4 sm:p-5 bg-white border border-indigo-200 rounded-lg">
            <h3 className="font-semibold text-indigo-600 mb-2 text-base">Domain</h3>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-1">
              <li>• Algorithmic trading</li>
              <li>• Quantitative analysis</li>
              <li>• Financial data & markets</li>
              <li>• Risk management</li>
              <li>• Cryptocurrency & blockchain insights</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4">Education</h2>
        <div className="p-4 sm:p-5 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg border-l-4 border-indigo-600">
          <p className="font-semibold text-slate-900">B.Tech. in Computer Engineering</p>
          <p className="text-xs sm:text-sm text-indigo-700 font-medium mt-1">Delhi Technological University (DTU), Delhi</p>
          <p className="text-xs sm:text-sm text-slate-700 mt-2">2022 • <span className="font-semibold">CGPA: 8.60</span></p>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
        <a href="/resume" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:shadow-lg transition duration-200 font-semibold">View Resume</a>
        <a href="/" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-200 font-semibold">Back Home</a>
      </section>
    </div>
  )
}
