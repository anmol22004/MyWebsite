import React from 'react'

export default function Checklist() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Personal Website Checklist</h1>
      <p className="text-sm text-slate-600">A compact, practical checklist to make your personal site look premium, load fast, and help your career.</p>

      <section className="pt-4">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Goal</h2>
        <p className="text-sm text-slate-700">Be clear on the primary goal: <span className="font-semibold">Get shortlisted</span>, <span className="font-semibold">Build credibility</span>, <span className="font-semibold">Get clients</span>, or <span className="font-semibold">Show personality</span>. Design the site around that.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Must-have pages</h2>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
          <li>Home — clear one-line position + 2 CTAs</li>
          <li>About — micro-story, what you build next</li>
          <li>Projects — 3 featured projects with impact bullets</li>
          <li>Blog — optional for credibility; show 3 recent posts</li>
          <li>Contact — email + LinkedIn + short form</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Design principles</h2>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
          <li>2 fonts max, 2–3 colors, lots of white space</li>
          <li>Whitespace, calm typography, consistent buttons</li>
          <li>Keep animations minimal and purposeful</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Performance & SEO</h2>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
          <li>Compress images (WebP), lazy-load, avoid heavy libraries</li>
          <li>Add meta title, description, OpenGraph images</li>
          <li>Sitemap + robots.txt before deployment</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Mobile</h2>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
          <li>Readable fonts, touch-friendly buttons, collapsible nav</li>
          <li>No horizontal scroll; images scale responsively</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Quick checklist</h2>
        <ul className="text-sm text-slate-700 list-decimal list-inside space-y-1">
          <li>Hero: name + one-line statement + 2 CTAs</li>
          <li>Projects: 3 featured with short impact bullets</li>
          <li>Resume: PDF download in `public/`</li>
          <li>Contact: email + LinkedIn + simple form</li>
          <li>Blogs: 3 recent, tags, reading time</li>
        </ul>
      </section>

      <div className="pt-6">
        <a href="/contact" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Contact me for help</a>
      </div>
    </div>
  )
}
