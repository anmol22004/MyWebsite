import React from 'react';
import Meta from '../components/Meta';
import { Briefcase, Heart, TrendingUp, BookOpen, Code, Globe, Music, Activity, Users } from 'lucide-react';

const principles = [
  {
    icon: <Heart className="w-7 h-7 text-pink-400" />, title: 'Empathy First',
    desc: 'I believe in listening deeply, understanding context, and building with compassion.'
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-cyan-400" />, title: 'Relentless Growth',
    desc: 'I seek constant improvement, learning from every project, mistake, and mentor.'
  },
  {
    icon: <Briefcase className="w-7 h-7 text-indigo-400" />, title: 'Craft with Integrity',
    desc: 'I value quality, honesty, and delivering work I’m proud to put my name on.'
  },
];

const interests = [
  { icon: <BookOpen className="w-4 h-4" />, label: 'Reading' },
  { icon: <Code className="w-4 h-4" />, label: 'Coding' },
  { icon: <Globe className="w-4 h-4" />, label: 'World Affairs' },
  { icon: <Music className="w-4 h-4" />, label: 'Music' },
  { icon: <Activity className="w-4 h-4" />, label: 'Fitness' },
  { icon: <Users className="w-4 h-4" />, label: 'Community' },
];


const workTimeline = [
  {
    year: '2023–2025',
    title: 'Personal Goal Pursuit',
    desc: '• Preparing for Civil Services (UPSC), focusing on discipline, resilience, and broad knowledge\n• Cleared UPSC Civil Services Preliminary Examination twice, ranking in the top ~1–1.4% among ~1M+ candidates nationwide.'
  },
  {
    year: '2022–2023',
    title: 'Software Engineer, Urban Company',
    desc: '• Built scalable data/ML pipelines and analytics systems\n• Automated deployments (CI/CD), improved reliability\n• Enabled cross-team adoption and reduced support tickets'
  },
  {
    year: '2022',
    title: 'Software Developer Intern, Urban Company',
    desc: '• Migrated core backend to microservices\n• Built audit logging, change-tracking, and alerting\n• Improved system traceability and reduced manual effort'
  },
  {
    year: '2021',
    title: 'Quant Developer Intern, Algoji',
    desc: '• Developed & deployed trading strategies\n• Automated order execution, improved latency\n• Mentored interns and improved system robustness'
  },
];

const educationTimeline = [
  {
    year: '2018–2022',
    title: 'B.Tech, DTU',
    desc: 'Graduated in Computer Engineering, Delhi Technological University.'
  },
  {
    year: '2016–2018',
    title: 'Class 12th, LBS School',
    desc: 'Lal Bahadur Shashtri Sr. Sec. School, Delhi – 92.2%'
  },
  {
    year: '2014–2016',
    title: 'Class 10th, St. Don Bosco',
    desc: 'St. Don Bosco School, Lakhimpur – CGPA: 9.40'
  },
];

const skills = [
  'Python', 'TypeScript', 'React', 'SQL', 'Data Pipelines', 'Machine Learning', 'APIs', 'Cloud (AWS/GCP)', 'CI/CD', 'System Design', 'Analytics', 'Git',
];

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-14 animate-fadein font-sans text-slate-200">
      <Meta title="About  Anmol Agarwal" description="Personal, modern about page for Anmol Agarwal." image="/images/og-image.svg" url="https://www.1mol.in/about" />

      {/* Intro */}
      <section className="flex flex-col items-center gap-4 text-center">
        <img src="/images/profile.jpg" alt="Profile" className="w-28 h-28 rounded-full shadow-lg border-4 border-cyan-400 object-cover mb-2 animate-fadein-slow" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-cyan-600 text-transparent bg-clip-text mb-2">Hi, I’m Anmol Agarwal</h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">I’m a software engineer passionate about building reliable systems, learning deeply, and making a positive impact. I love blending tech, finance, and curiosity to solve real-world problems.</p>
        <a
          href="https://drive.google.com/uc?export=download&id=1eWfnrdcKq3Yfr554J3dLgi-pbzHt5ssB"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-cyan-400 transition"
        >
          Download Resume
        </a>
      </section>

      {/* My Principles */}
      <section>
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">My Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="bg-slate-900/80 rounded-xl shadow-lg p-6 flex flex-col items-center gap-3 border-t-4 border-b-4 border-transparent hover:border-cyan-400 transition-all duration-300 animate-fadein-up" style={{ animationDelay: `${i * 80}ms` }}>
              {p.icon}
              <h3 className="font-semibold text-lg text-slate-100 mb-1">{p.title}</h3>
              <p className="text-slate-400 text-sm text-center">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Work Experience Timeline */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 text-center">Work Experience</h2>
        <ol className="relative border-l-2 border-cyan-700 ml-4 animate-fadein-up">
          {workTimeline.map((item, i) => (
            <li key={i} className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full ring-4 ring-slate-900 shadow-lg animate-pop" style={{ animationDelay: `${i * 100}ms` }}></span>
              <h3 className="font-semibold text-base text-cyan-300 mb-1">{item.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-1 whitespace-pre-line">{item.desc}</p>
              <span className="text-xs text-slate-500">{item.year}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Education Timeline */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 text-center">Education</h2>
        <ol className="relative border-l-2 border-cyan-700 ml-4 animate-fadein-up">
          {educationTimeline.map((item, i) => (
            <li key={i} className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full ring-4 ring-slate-900 shadow-lg animate-pop" style={{ animationDelay: `${i * 100}ms` }}></span>
              <h3 className="font-semibold text-base text-cyan-300 mb-1">{item.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-1 whitespace-pre-line">{item.desc}</p>
              <span className="text-xs text-slate-500">{item.year}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-4 text-center">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center animate-fadein-up">
          {skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-slate-800/80 border border-cyan-700 text-cyan-200 text-xs sm:text-sm font-medium shadow hover:bg-cyan-900/80 transition-all duration-200 animate-pop" style={{ animationDelay: `${i * 40}ms` }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-4 text-center">Interests</h2>
        <div className="flex flex-wrap gap-3 justify-center animate-fadein-up">
          {interests.map((item, i) => (
            <span key={i} className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-cyan-700 text-cyan-200 text-xs sm:text-sm font-medium shadow hover:bg-cyan-900/80 transition-all duration-200 animate-pop" style={{ animationDelay: `${i * 60}ms` }}>
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>
      </section>

      <section className="pt-8 text-center">
        <a href="/" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-200 font-semibold">Back Home</a>
      </section>
    </div>
  );
}
