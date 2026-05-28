import React from 'react'
import Meta from '../components/Meta'
import { Briefcase, Heart, TrendingUp, BookOpen, Code, Globe, Music, Activity, Users } from 'lucide-react'

const principles = [
  { icon: <Heart className="w-6 h-6 text-pink-500" />,   title: 'Empathy First',       desc: 'I believe in listening deeply, understanding context, and building with compassion.' },
  { icon: <TrendingUp className="w-6 h-6 text-indigo-500" />, title: 'Relentless Growth', desc: 'I seek constant improvement, learning from every project, mistake, and mentor.' },
  { icon: <Briefcase className="w-6 h-6 text-cyan-500" />, title: 'Craft with Integrity', desc: "I value quality, honesty, and delivering work I'm proud to put my name on." },
]

const interests = [
  { icon: <BookOpen className="w-4 h-4" />, label: 'Reading'       },
  { icon: <Code className="w-4 h-4" />,     label: 'Coding'        },
  { icon: <Globe className="w-4 h-4" />,    label: 'World Affairs' },
  { icon: <Music className="w-4 h-4" />,    label: 'Music'         },
  { icon: <Activity className="w-4 h-4" />, label: 'Fitness'       },
  { icon: <Users className="w-4 h-4" />,    label: 'Community'     },
]

const workTimeline = [
  {
    year: '2023–2025',
    title: 'Personal Goal Pursuit',
    desc: 'Preparing for Civil Services (UPSC), focusing on discipline, resilience, and broad knowledge.\nCleared UPSC Civil Services Preliminary Examination twice, ranking in the top ~1–1.4% among ~1M+ candidates nationwide.',
  },
  {
    year: '2022–2023',
    title: 'Software Engineer, Urban Company',
    desc: 'Built scalable data/ML pipelines and analytics systems.\nAutomated deployments (CI/CD), improved reliability.\nEnabled cross-team adoption and reduced support tickets.',
  },
  {
    year: '2022',
    title: 'Software Developer Intern, Urban Company',
    desc: 'Migrated core backend to microservices.\nBuilt audit logging, change-tracking, and alerting.\nImproved system traceability and reduced manual effort.',
  },
  {
    year: '2021',
    title: 'Quant Developer Intern, Algoji',
    desc: 'Developed & deployed trading strategies.\nAutomated order execution, improved latency.\nMentored interns and improved system robustness.',
  },
]

const educationTimeline = [
  { year: '2018–2022', title: 'B.Tech, DTU',        desc: 'Graduated in Computer Engineering, Delhi Technological University.' },
  { year: '2016–2018', title: 'Class 12th, LBS School', desc: 'Lal Bahadur Shashtri Sr. Sec. School, Delhi – 92.2%' },
  { year: '2014–2016', title: 'Class 10th, St. Don Bosco', desc: 'St. Don Bosco School, Lakhimpur – CGPA: 9.40' },
]

const skills = [
  'Python','TypeScript','React','SQL','Data Pipelines','Machine Learning',
  'APIs','Cloud (AWS/GCP)','CI/CD','System Design','Analytics','Git',
]

function Timeline({ items }: { items: { year: string; title: string; desc: string }[] }) {
  return (
    <ol className="relative border-l border-gray-200 dark:border-white/10 ml-3">
      {items.map((item, i) => (
        <li key={i} className="mb-9 ml-6">
          <span className="absolute -left-[9px] flex items-center justify-center w-[18px] h-[18px] bg-indigo-500 rounded-full ring-4 ring-[#fafafa] dark:ring-[#0a0a0a]" />
          <div className="font-mono text-[11px] text-gray-400 dark:text-gray-500 mb-1">{item.year}</div>
          <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line">{item.desc}</p>
        </li>
      ))}
    </ol>
  )
}

export default function About() {
  return (
    <div className="max-w-[680px] mx-auto px-4 py-6 space-y-14">
      <Meta title="About — Anmol Agarwal" description="Software engineer, ex-Urban Company & Algoji, CFA Level 1 candidate." image="/images/og-image.svg" url="https://www.1mol.in/about" />

      {/* Intro */}
      <section className="flex flex-col items-center gap-4 text-center">
        <img
          src="/images/profile.jpg"
          alt="Anmol Agarwal"
          className="w-24 h-24 rounded-full object-cover ring-2 ring-indigo-200 dark:ring-indigo-900"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">Anmol Agarwal</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            Software engineer passionate about reliable systems, learning deeply, and making a positive impact.
            Blending tech, finance, and curiosity to solve real-world problems.
          </p>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1eWfnrdcKq3Yfr554J3dLgi-pbzHt5ssB"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Download Resume
        </a>
      </section>

      {/* Principles */}
      <section>
        <h2 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">My Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <div key={i} className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl p-5 flex flex-col gap-3 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              {p.icon}
              <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">{p.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section>
        <h2 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Work Experience</h2>
        <Timeline items={workTimeline} />
      </section>

      {/* Education */}
      <section>
        <h2 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Education</h2>
        <Timeline items={educationTimeline} />
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
              {item.icon} {item.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
