import React from 'react'
import Meta from '../components/Meta'

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-12">
      <Meta title="Anmol Agarwal — Software Engineer" description="I build data pipelines, trading systems, and ML-powered applications. Focused on reliability, performance, and solving real-world problems." image="/images/og-image.svg" url="https://www.1mol.in/" />
      <section className="text-center py-8 sm:py-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-transparent bg-clip-text mb-4">Hi, I'm Anmol</h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed px-4">
          I build data pipelines, trading systems, and ML-powered applications. Focused on reliability, performance, and solving real-world problems.
        </p>
        <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 justify-center flex-wrap px-4 w-full max-w-xl mx-auto">
          <a href="/about" className="w-full sm:w-auto block text-center px-4 sm:px-6 py-3 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:shadow-lg transition duration-200 font-semibold">About Me</a>
          <a href="/projects" className="w-full sm:w-auto block text-center mt-2 sm:mt-0 sm:ml-2 px-4 sm:px-6 py-3 sm:py-3 text-sm sm:text-base border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-200 font-semibold">View Projects</a>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4">
        <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200 border border-indigo-100">
          <h3 className="font-semibold text-base sm:text-lg text-indigo-600">🔧 Backend & Systems</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">Python, TypeScript, SQL, cloud platforms. Building reliable production systems.</p>
        </div>
        <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200 border border-indigo-100">
          <h3 className="font-semibold text-base sm:text-lg text-indigo-600">📊 Data & ML</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">Data pipelines, ML models, forecasting, and analytics. From prototypes to production.</p>
        </div>
        <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200 border border-indigo-100">
          <h3 className="font-semibold text-base sm:text-lg text-indigo-600">🎯 Trading Systems</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">Algo trading, low-latency processing, market analysis. Quant-focused engineering.</p>
        </div>
      </section>
    </div>
  )
}
