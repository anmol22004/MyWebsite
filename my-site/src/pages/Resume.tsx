import React from 'react'
import Meta from '../components/Meta'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

export default function Resume() {
  return (
    <div className="space-y-8">
      <Meta title="Resume — Anmol Agarwal" description="Resume of Anmol Agarwal — Software engineer with experience in data engineering, ML, and trading systems. View or download the latest resume from the provided link." image="/images/og-image.svg" url="https://www.1mol.in/resume" />
      <section>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text mb-2">Resume</h1>
        <a href="https://drive.google.com/uc?export=download&id=1eWfnrdcKq3Yfr554J3dLgi-pbzHt5ssB" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold inline-block">
          ↓ View / Download Resume
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Professional Summary</h2>
        <p className="text-slate-700 leading-relaxed bg-gradient-to-r from-indigo-50 to-cyan-50 p-4 rounded-lg border border-indigo-200">
          Experienced software engineer with expertise building and maintaining production-grade data pipelines, ML systems, backend services, and web applications. Skilled in Python, JavaScript/TypeScript, SQL, and cloud platforms. Proven track record of delivering reliable systems at scale.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-600 pl-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-slate-900">Personal Goal Pursuit – Civil Services Preparation (UPSC)</h3>
                <p className="text-sm text-indigo-600 font-medium">Aug'23 – Nov'25</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-cyan-500 pl-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-slate-900">Software Engineer</h3>
                <p className="text-sm text-cyan-600 font-medium">Urban Company, Gurgaon | Jun'22 – Jul'23</p>
                <div className="mt-3 space-y-3 text-sm text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-900">Core Data Engineering & Pipeline Platforms</p>
                    <ul className="mt-1 space-y-1 ml-2">
                      <li>• Designed and implemented <span className="font-semibold">config-driven ETL data and ML pipelines</span> supporting batch processing, enabling standardized, schema-driven onboarding of data science models, reducing onboarding turnaround by <span className="font-semibold">~70-80%</span>.</li>
                      <li>• Developed <span className="font-semibold">robust event ingestion and configuration platforms</span> serving multiple internal consumers with self-serve dashboards and versioned APIs, deprecating legacy flows and reducing <span className="font-semibold">~15 weekly platform support tickets</span>.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Reliability, Backfill & Quality Systems</p>
                    <ul className="mt-1 space-y-1 ml-2">
                      <li>• Identified and <span className="font-semibold">resolved race conditions and idempotency issues</span> in data backfilling workflows, improving data quality, reliability, and correctness across dependent upstream layers.</li>
                      <li>• Built <span className="font-semibold">observability into pipeline runs</span> through structured logging, monitoring hooks, and alert integrations, improving operational insight and reducing incident response time.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Deployment & Performance Automation</p>
                    <ul className="mt-1 space-y-1 ml-2">
                      <li>• Enabled <span className="font-semibold">CI/CD pipelines</span> for automated deployments of production data and ML services, reducing manual release steps by <span className="font-semibold">~50%</span> and improving deployment reliability and SLA adherence.</li>
                      <li>• Optimized <span className="font-semibold">Apache Superset</span> analytics workloads by tuning refresh strategies and queries, increasing cross-team adoption while reducing unnecessary compute costs by <span className="font-semibold">~30%</span>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-indigo-400 pl-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-slate-900">Software Developer Intern</h3>
                <p className="text-sm text-indigo-500 font-medium">Urban Company, Remote | Jan'22 – Apr'22</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Migrated a <span className="font-semibold">core backend service from monolithic architecture to microservices</span>, reducing deployment coupling and improving fault isolation across <span className="font-semibold">3–4 independent components</span>.</li>
                  <li>• Implemented <span className="font-semibold">audit logging and change-tracking</span> capturing old/new values, user IDs, and timestamps, covering <span className="font-semibold">100% of critical write operations</span> and improving system traceability and security.</li>
                  <li>• Built <span className="font-semibold">SQL-based alerting</span> on key business and system metrics, enabling early anomaly detection and reducing manual monitoring effort by <span className="font-semibold">~50%</span>.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-slate-900">Quant Developer Intern</h3>
                <p className="text-sm text-purple-600 font-medium">Algoji, Remote | Feb'21 – Jun'21</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Developed and deployed <span className="font-semibold">algorithmic trading strategies</span> (Short Straddle, Fibonacci-based) using Python, xlwings, and schedulers, integrated with broker APIs for <span className="font-semibold">100% automated order execution</span> across multiple live strategies.</li>
                  <li>• Optimized strategy execution by analyzing <span className="font-semibold">performance metrics and trader feedback</span>, reducing order placement latency by <span className="font-semibold">~30-40%</span> and improving overall execution efficiency.</li>
                  <li>• Improved robustness of trading systems by implementing <span className="font-semibold">structured logging, exception handling, and fail-safes</span>, achieving <span className="font-semibold">99%+ execution uptime</span> in backtests, and mentored <span className="font-semibold">15+ interns</span> in strategy design and optimization.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Technical Skills</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white border border-indigo-200 rounded-lg">
            <h3 className="font-semibold text-indigo-600 mb-2">Languages</h3>
            <p className="text-sm text-slate-700">Java, Python, JavaScript, SQL</p>
          </div>
          <div className="p-4 bg-white border border-indigo-200 rounded-lg">
            <h3 className="font-semibold text-indigo-600 mb-2">Data & Backend</h3>
            <p className="text-sm text-slate-700">Data Pipelines, ETL, Backfilling, Batch & Streaming Concepts, REST APIs, CI/CD</p>
          </div>
          <div className="p-4 bg-white border border-indigo-200 rounded-lg">
            <h3 className="font-semibold text-indigo-600 mb-2">Core CS Concepts</h3>
            <p className="text-sm text-slate-700">Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management, System Design</p>
          </div>
          <div className="p-4 bg-white border border-indigo-200 rounded-lg">
            <h3 className="font-semibold text-indigo-600 mb-2">Analytics & Tools</h3>
            <p className="text-sm text-slate-700">Apache Superset, Pandas, NumPy</p>
          </div>
          <div className="p-4 bg-white border border-indigo-200 rounded-lg">
            <h3 className="font-semibold text-indigo-600 mb-2">Version Control & Collaboration</h3>
            <p className="text-sm text-slate-700">Git, GitHub, Bitbucket, Jira, Confluence</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Key Achievements</h2>
        <div className="space-y-3">
          <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200 rounded-lg">
            <p className="text-sm text-slate-700"><span className="font-semibold text-indigo-700">UPSC Civil Services Preliminary</span> — Cleared twice, ranking in the top <span className="font-bold">1–1.4% among ~1M+ candidates</span> nationwide.</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200 rounded-lg">
            <p className="text-sm text-slate-700"><span className="font-semibold text-indigo-700">CFA Level I Qualified</span> — Strong foundations in finance, economics, and analytical reasoning.</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200 rounded-lg">
            <p className="text-sm text-slate-700"><span className="font-semibold text-indigo-700">Published Research Paper</span> — Comparative study on pairs trading with ML models; achieved <span className="font-bold">95% accuracy</span> for profitably traded pairs.</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200 rounded-lg">
            <p className="text-sm text-slate-700"><span className="font-semibold text-indigo-700">JEE Main (2018)</span> — Secured <span className="font-bold">Top 1%</span> among ~1.2M candidates.</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200 rounded-lg">
            <p className="text-sm text-slate-700"><span className="font-semibold text-indigo-700">SOF International Mathematics Olympiad (2013)</span> — Achieved <span className="font-bold">City Rank 1</span>.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Education</h2>
        <div className="space-y-3">
          <div className="p-4 bg-white border border-indigo-200 rounded-lg flex items-start gap-4">
            <img src="/images/dtu-logo.png" alt="DTU Logo" loading="lazy" className="w-12 h-12 object-contain flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-slate-700">
                <span className="font-bold">2022</span> : <span className="font-semibold">B.Tech. (Computer Engineering)</span> <span className="font-semibold text-indigo-700">Delhi Technological University</span>, Delhi – <span className="font-bold">CGPA : 8.60</span>
              </p>
            </div>
          </div>
          <div className="p-4 bg-white border border-indigo-200 rounded-lg flex items-start gap-4">
            <img src="/images/lbs-logo.png" alt="LBS Logo" loading="lazy" className="w-12 h-12 object-contain flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-slate-700">
                <span className="font-bold">2018</span> : <span className="font-semibold">Class 12<sup>th</sup></span> from <span className="font-semibold text-cyan-700">Lal Bahadur Shashtri Sr. Sec. School</span>, Delhi – <span className="font-bold">Score : 92.2%</span>
              </p>
            </div>
          </div>
          <div className="p-4 bg-white border border-indigo-200 rounded-lg flex items-start gap-4">
            <img src="/images/lakhimpur-logo.png" alt="St. Don Bosco Logo" loading="lazy" className="w-12 h-12 object-contain flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-slate-700">
                <span className="font-bold">2016</span> : <span className="font-semibold">Class 10<sup>th</sup></span> from <span className="font-semibold text-indigo-700">St. Don Bosco School</span>, Lakhimpur – <span className="font-bold">CGPA : 9.40</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex gap-4 pt-4">
        <a href="/about" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-200 font-semibold">Back</a>
      </section>
    </div>
  )
}
