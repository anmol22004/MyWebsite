import React from 'react'
import { Briefcase, Heart, TrendingUp, BookOpen, Code, Globe, Music, Activity, Users } from 'lucide-react'
import { Meta } from '@/components/Meta'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ButtonAnchor } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { site } from '@/config/site'

const principles = [
  { icon: <Heart className="w-6 h-6 text-pink-500" />,        title: 'Empathy First',         desc: 'I believe in listening deeply, understanding context, and building with compassion.' },
  { icon: <TrendingUp className="w-6 h-6 text-indigo-500" />, title: 'Relentless Growth',     desc: 'I seek constant improvement, learning from every project, mistake, and mentor.' },
  { icon: <Briefcase className="w-6 h-6 text-cyan-500" />,    title: 'Craft with Integrity',  desc: "I value quality, honesty, and delivering work I'm proud to put my name on." },
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
  { year: '2023–2025', title: 'Personal Goal Pursuit',                desc: 'Preparing for Civil Services (UPSC), focusing on discipline, resilience, and broad knowledge.\nCleared UPSC Civil Services Preliminary Examination twice, ranking in the top ~1–1.4% among ~1M+ candidates nationwide.' },
  { year: '2022–2023', title: 'Software Engineer, Urban Company',     desc: 'Built scalable data/ML pipelines and analytics systems.\nAutomated deployments (CI/CD), improved reliability.\nEnabled cross-team adoption and reduced support tickets.' },
  { year: '2022',      title: 'Software Developer Intern, Urban Company', desc: 'Migrated core backend to microservices.\nBuilt audit logging, change-tracking, and alerting.\nImproved system traceability and reduced manual effort.' },
  { year: '2021',      title: 'Quant Developer Intern, Algoji',       desc: 'Developed & deployed trading strategies.\nAutomated order execution, improved latency.\nMentored interns and improved system robustness.' },
]

const educationTimeline = [
  { year: '2018–2022', title: 'B.Tech, DTU',                    desc: 'Graduated in Computer Engineering, Delhi Technological University.' },
  { year: '2016–2018', title: 'Class 12th, LBS School',         desc: 'Lal Bahadur Shashtri Sr. Sec. School, Delhi – 92.2%' },
  { year: '2014–2016', title: 'Class 10th, St. Don Bosco',      desc: 'St. Don Bosco School, Lakhimpur – CGPA: 9.40' },
]

const skills = [
  'Python','TypeScript','React','SQL','Data Pipelines','Machine Learning',
  'APIs','Cloud (AWS/GCP)','CI/CD','System Design','Analytics','Git',
]

function Timeline({ items }: { items: { year: string; title: string; desc: string }[] }) {
  return (
    <ol className="relative border-l border-border ml-3">
      {items.map((item, i) => (
        <li key={i} className="mb-9 ml-6">
          <span className="absolute -left-[9px] flex items-center justify-center w-[18px] h-[18px] bg-accent rounded-full ring-4 ring-bg" />
          <div className="font-mono text-[11px] text-text-3 mb-1">{item.year}</div>
          <h3 className="font-semibold text-sm text-text-1 mb-1">{item.title}</h3>
          <p className="text-sm text-text-2 leading-relaxed whitespace-pre-line">{item.desc}</p>
        </li>
      ))}
    </ol>
  )
}

export default function AboutPage() {
  return (
    <Container>
      <Meta title="About" description={`About ${site.name} — software engineer, ex-Urban Company & Algoji.`} path="/about" />

      <div className="space-y-14 py-6">
        {/* Intro */}
        <section className="flex flex-col items-center gap-4 text-center">
          <img
            src="/images/profile.jpg"
            alt={site.name}
            className="w-24 h-24 rounded-full object-cover ring-2 ring-accent-muted"
          />
          <div>
            <h1 className="text-3xl font-bold text-text-1 mb-2">{site.name}</h1>
            <p className="text-text-2 text-sm leading-relaxed max-w-md mx-auto">
              Software engineer passionate about reliable systems, learning deeply, and making a positive impact.
              Blending tech, finance, and curiosity to solve real-world problems.
            </p>
          </div>
          <ButtonAnchor href={site.resume} external>Download Resume</ButtonAnchor>
        </section>

        <section>
          <SectionTitle>My Principles</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-accent/40 transition-colors">
                {p.icon}
                <h3 className="font-semibold text-sm text-text-1">{p.title}</h3>
                <p className="text-xs text-text-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Work Experience</SectionTitle>
          <Timeline items={workTimeline} />
        </section>

        <section>
          <SectionTitle>Education</SectionTitle>
          <Timeline items={educationTimeline} />
        </section>

        <section>
          <SectionTitle>Skills</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {skills.map(s => <Tag key={s}>{s}</Tag>)}
          </div>
        </section>

        <section>
          <SectionTitle>Interests</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {interests.map(i => (
              <Tag key={i.label} className="gap-1.5">{i.icon} {i.label}</Tag>
            ))}
          </div>
        </section>
      </div>
    </Container>
  )
}
