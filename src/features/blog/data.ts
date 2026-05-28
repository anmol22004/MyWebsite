export type Post = {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    id: 'economics-thinking',
    title: "Economics: My Default Way of Thinking",
    date: '2026-01-26',
    excerpt: 'How Economics became more than a subject—it became a lens for understanding the world, from supply shocks to policy trade-offs.',
    content: `I didn't choose Economics because it was the easiest path; I chose it because it felt like the most honest one. Most subjects stay confined to the margins of a notebook, but Economics is restless. It follows you out of the study room and into the streets, the morning headlines, and the grocery store aisles. It is the science of "why things are the way they are."

  ## **The Filter of "Second-Order Effects"**

  During my UPSC preparation, a subtle shift occurred. I stopped seeing news as isolated events and started seeing the invisible threads connecting them. Suddenly, inflation wasn't just a dry definition to be memorized for a Prelims mock; it was a living chain of supply-side shocks and demand pressures hitting household budgets in real-time.

  Growth ceased to be a mere percentage on a slide. It became a question of quality: Who is being left behind? Is this productivity-led or just a debt-fueled surge? Economics trained my brain to look past the first-order headline and hunt for the second-order consequence.

  ## **Cracking the Code: From Data to Patterns**

  One of the biggest turning points in my journey was how I approached the Economic Survey. I stopped treating it like a giant encyclopedia and started treating it like a map.

  I realized that the real "soul" of the economy isn't found in the bulk of the text, but in the shifts of a trendline or the specific logic of a boxed case study. By focusing on graphs and charts, I stopped memorizing and started extracting. This shift transformed my notes from a collection of facts into a library of evidence-based arguments.

  ## **The Mentor Effect: Making Logic Visible**

  This journey wouldn't have been the same without mentors who stripped away the intimidation factor. Learning from Dr. Vibhas Jha was a masterclass in structural thinking. He didn't just teach "chapters"; he connected the dots until the logic of the entire system became visible. Under his guidance, Economics stopped being a "center" of my prep and started being its backbone—providing a level of clarity and confidence that spilled over into every other GS paper.

  ## **The Discipline of the Trade-off**

  What I admire most about Economics is that it punishes loud opinions and rewards balanced thinking. It is the ultimate reality check. It forces you to pause before offering "simple" solutions.

  When someone says, "Just increase spending," Economics whispers, "At what cost, and for whom?" It is the study of incentives and trade-offs. It teaches you that there is no such thing as a "free" policy—only choices between different sets of consequences.

  ## **Beyond the Exam**

  Ultimately, Economics stayed with me not because it provided all the answers, but because it taught me how to ask better questions. It isn't just a tool for an exam; it's a permanent upgrade to my mental hardware. It is a way of navigating the world with a bit more nuance, a bit more evidence, and a lot more reason.`
  },
  {
    id: 'upsc-journey',
    title: "2 Years of UPSC Preparation: Lessons Beyond the Exam",
    date: '2026-01-15',
    excerpt: 'A reflective account of my UPSC journey—the discipline, failures, and pivotal lessons that shaped my approach to problem-solving.',
    content: `Two years of UPSC preparation have taught me that this journey is not just about completing a syllabus—it is about building the mindset required to survive uncertainty every single day. When I began, I believed success depended mainly on intelligence and long study hours. Over time, I realised UPSC rewards something deeper: consistency, clarity, and the ability to keep going even when confidence is low.

In the initial phase, my biggest challenge was direction. I spent time collecting resources, making plans, and searching for the "perfect strategy." But preparation truly started when I shifted from passive reading to active output—answer writing, revision cycles, and learning how to present ideas in a structured way. I understood that in UPSC, knowledge is not enough unless it can be reproduced under time pressure in a limited word count.

Economics optional became a turning point in my preparation. It forced me to think analytically, connect theory with real-world policy, and use data and economists' views to strengthen arguments. Gradually, I also learned how to use government reports like the Economic Survey as a tool for improving my answers—extracting key trends, case studies, and policy direction rather than memorising everything. This helped me write more balanced and evidence-based responses in GS and essays.

Another major lesson was emotional discipline. There were phases of self-doubt, slow progress, and anxiety—especially due to the unpredictable nature of Prelims and the vastness of Mains. I learned that one bad day, one poor mock score, or one missed target doesn't define the journey. What matters is the ability to recover quickly and return to the process.

After two years, I have realised UPSC preparation is a transformation. It teaches patience, resilience, and self-management. The exam is important, but the person I am becoming through this journey is the real achievement.`
  },
  {
    id: 'urban-company-journey',
    title: "Building Reliable Data Pipelines at Urban Company",
    date: '2024-10-22',
    excerpt: 'Lessons from building production data systems that powered analytics and ML at a hypergrowth startup.',
    content: `At Urban Company, I worked in a chaos of growth. The platform processed millions of bookings daily, and the data team was tasked with one thing: make data accessible, trustworthy, and fast for analysts and data scientists.

The challenge was real. Data was scattered across multiple services, schemas were inconsistent, and pipelines broke frequently with cryptic errors. Our dashboards sometimes showed conflicting metrics, eroding trust in data across the org. I was tasked with building a reliable data pipeline infrastructure.

The first lesson: data contracts matter. We introduced a contract between producers (services creating data) and consumers (dashboards, ML models). Each producer published a schema, transformation rules, and data quality expectations. This simple change reduced integration time from weeks to days and caught schema changes before they broke downstream systems.

The second was observability. We added logging at every stage—ingestion, transformation, and loading. For every record, we tracked lineage and could trace a booking from creation to the analytics warehouse. When a metric disagreed with another system, we could root cause in minutes instead of days.

The third was resilience. Pipelines fail. A database timeout, a service restart, network hiccup—any of these could break an ETL job. We built with idempotency as a first principle. Jobs could re-run on the same data without creating duplicates. We added circuit breakers and retry logic with exponential backoff. A failed job would alert us, but the system would self-heal within minutes.

The result: our data pipeline processed 100M+ records daily with 99.95% uptime. Analysts trusted the data. ML models got fresh, clean features. The team scaled from managing one pipeline to hundreds with the same three engineers.

The real lesson? Boring infrastructure is the foundation of everything. Reliable plumbing enables innovation everywhere else.`
  },
  {
    id: 'algoji-trading',
    title: "Algorithmic Trading at Algoji: Engineering for Microseconds",
    date: '2024-09-18',
    excerpt: 'Insights from building and operating algorithmic trading systems where latency, correctness, and risk management are non-negotiable.',
    content: `Trading is unforgiving. A miscalculation or a 100-millisecond delay can cost thousands. Working at Algoji exposed me to a world where software engineering meets financial markets—where performance isn't a nice-to-have, it's existential.

The first shock was latency obsession. In traditional software, a 500ms request is acceptable. In trading, we optimize every microsecond. A strategy that reacts in 50ms versus 100ms can mean the difference between capturing an arbitrage and missing it entirely. This obsession with performance trickles into every decision: we profiled code relentlessly, avoided garbage collection during active trading windows, and managed memory allocation like it was currency.

But speed without correctness is worse than useless—it's dangerous. We built rigorous risk systems. Every order was validated before submission: position limits, notional exposure, market impact estimates, compliance rules. If any check failed, the order rejected silently and was logged for manual review. We had circuit breakers that halted trading if our models showed unexpected losses. These safeguards saved us multiple times when live market conditions diverged from our assumptions.

The third pillar was continuous monitoring. We tracked every trade's lifecycle: entry price, exit price, duration, slippage, fees. Every strategy had dashboards showing real-time P&L, trade statistics, and risk metrics. When performance degraded, we could identify whether it was market conditions or a system issue.

Testing was obsessive. We replayed historical market data, stress-tested strategies under tail events, and ran weekly live paper trading on real market feeds. Bugs were found not in production but in lab simulations of edge cases.

What fascinated me most was the marriage of mathematics and engineering. A data scientist would hand off a trading signal, and we'd engineer it into production systems that could execute millions of tiny decisions per second while managing massive capital.

The markets don't care about your elegant code or good intentions. They punish sloppiness immediately and reward rigor with profits. That's the best teacher.`
  },
  {
    id: 'lakhimpur-reflections',
    title: "Lakhimpur: Where I Learned to See the World Differently",
    date: '2024-08-30',
    excerpt: 'Reflections on growing up in Lakhimpur—a city that teaches you about agricultural heartland, simplicity, and the real India beyond metros.',
    content: `Lakhimpur is not on most software engineers' radar. It's a tier-2 city in Uttar Pradesh, the agricultural heart of North India. Growing up here shaped my worldview in ways that moving to metros didn't erase—instead, it crystallized them.

The city taught me about cycles—agricultural cycles, monsoon patterns, harvest seasons. Unlike metros where you can ignore seasons, in Lakhimpur you're acutely aware that the economy rises and falls with crop yields. When wheat prices collapsed one year, the entire city felt it. This taught me that growth isn't linear and systems are interconnected in ways that spreadsheets don't capture.

Education was valued but resources were scarce. My school had no computers until class 9. We didn't have the privilege of weekend coding bootcamps or startup culture. But that scarcity forced us to be resourceful. We solved problems with basic tools, learned to optimize ruthlessly, and didn't assume access to unlimited computing power or data. This mindset is rare in Silicon Valley where unlimited resources mask inefficient algorithms.

The people of Lakhimpur are pragmatic. There's no pretense or performance. A farmer will tell you directly whether something works or not. A shopkeeper will teach you business fundamentals through daily transactions. This directness and result-orientation seeped into how I approach problems. Does it work? Can it scale? What's the actual bottleneck?

Moving to metros exposed me to another world—the world of startups, tech culture, rapid iteration. But I noticed that many brilliant engineers from metros struggle with resilience during setbacks. Lakhimpur taught me that setbacks are normal, patience is a virtue, and slow, steady progress compounds. When my UPSC preparation failed, I wasn't devastated because I'd seen failures everywhere around me and knew you just try again.

Even now, after years in algorithmic trading and tech, I think like a Lakhimpur boy. I optimize for simplicity. I don't buy complexity until I've exhausted simple solutions. I believe in building systems that work reliably under pressure, because reliability—not innovation—is what creates value.

Lakhimpur may not have made me a genius. But it made me practical, resilient, and grounded. That's worth more than genius.`
  },
  {
    id: 'cfa-level1-journey',
    title: "CFA Level 1 Preparation: Understanding Markets Beyond Code",
    date: '2025-01-20',
    excerpt: 'My journey preparing for the CFA Level 1 exam—why a software engineer is diving deep into finance, and lessons learned along the way.',
    content: `After years building trading systems, I realized I was engineering solutions without fully understanding the underlying financial theory. I decided to pursue the CFA Level 1 designation—not for the credential, but to ground my trading intuitions in rigorous financial knowledge.

The CFA curriculum is comprehensive. Ethics, financial reporting, quantitative methods, economics, fixed income, equity analysis, derivatives, alternative investments, portfolio management. Unlike software engineering where you can learn by doing, finance requires understanding first principles deeply. You can't code your way through derivatives pricing if you don't understand the Black-Scholes model conceptually.

Ethics was surprisingly eye-opening. The code of conduct isn't just rules—it's a framework for thinking about conflicts of interest, market integrity, and your fiduciary responsibility to clients. In trading, where you're managing other people's capital, ethics isn't academic. It's existential.

Quantitative methods bridged my software and finance worlds. Probability distributions, hypothesis testing, regression analysis—these are tools I use daily in strategy development. But the CFA framing emphasized understanding assumptions and limitations. A beautiful model is worthless if its assumptions don't hold in live markets. This humility is rare in machine learning communities.

Financial reporting was tedious but crucial. Understanding how companies manipulate GAAP vs. cash flow, how off-balance-sheet financing works, how analyst estimates get revised—this context is gold for equity traders. The same rigor applies to our data pipelines: what looks good on a dashboard might hide problems in the underlying data.

The economics section reinforced what I intuited from markets: supply-demand dynamics, central bank policy transmission, currency effects, commodity cycles. But the CFA version is systematic. You're not guessing—you're mapping mechanisms.

Fixed income and derivatives are where trading becomes practical. Bond duration, convexity, credit spreads, swap mechanics, option Greeks—these aren't theoretical abstractions. They're levers you pull when managing risk or positioning for expected moves.

The challenge of CFA isn't technical difficulty—it's breadth. You're learning 19 study sessions across 6+ hours of content each. That's ~300 hours of study for Level 1. The exam tests pattern recognition and judgment, not just knowledge recall.

Why pursue this as a software engineer? Because the best trading systems aren't built by engineers alone or quants alone. They're built when someone understands both the technical implementation and the financial mechanics. CFA bridges that gap. It forces you to think like a portfolio manager, not just an algorithm designer.

Six months in, I'm halfway through. The grind is real—late nights with spreadsheets, financial calculators, and endless practice exams. But every concept I master makes me more dangerous as a system builder. I'm not just optimizing execution anymore; I'm building strategies with genuine economic intuition.

The exam is in a few months. Will I pass? I'm confident. More importantly, I'll graduate with a framework that makes me a better engineer in finance. And that's worth more than the three letters after my name.`
  }
]

export default posts

