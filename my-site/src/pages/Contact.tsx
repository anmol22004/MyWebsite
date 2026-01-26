import React from 'react'
import Meta from '../components/Meta'

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Meta title="Contact — Anmol Agarwal" description="Contact Anmol Agarwal for project inquiries, collaborations, or resume reviews." image="/images/og-image.svg" url="https://www.1mol.in/contact" />
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Contact</h1>
      <p className="text-sm text-slate-700 mb-4">You can reach me at <a href="mailto:anmol22004@gmail.com" className="text-indigo-600">anmol22004@gmail.com</a> or through LinkedIn/GitHub linked in the header.</p>

      <div className="bg-white border border-indigo-100 rounded-lg p-4">
        <p className="text-sm text-slate-700">If you'd like help implementing any of the checklist items or want a quick review, send a message to the email above.</p>
      </div>
    </div>
  )
}
