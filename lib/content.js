export const DBRIEF_URL = 'https://www.debrieff1.in/'

export const INFRANOVA_URL = 'https://infranovalabs.com/'

export const GYANX_URL = 'https://www.gyanx.in/'

export const profile = {
  name: 'Faiyaz Sabab',
  role: 'Data Analyst - Business operations',
  location: 'Bengaluru, India',
  email: 'sababfaiyaz25@gmail.com',
  headline: 'Answers, not assumptions',
  tagline: 'I build the systems that turn messy operations into decisions people trust.',
  linkedin: 'https://in.linkedin.com/in/faiyaz-sabab-0925-cse',
  github: 'https://github.com/orieantx25',
  resume: '/Faiyaz_Sabab_Resume.pdf',
}

/** Pinned craft chapters (scroll story) */
export const craft = {
  title: 'How signal becomes decision',
  lead: 'Three layers I keep rebuilding - from question to something a team will open every Monday.',
  points: [
    {
      title: 'See the business',
      body: 'Looker, Metabase, Power BI - surfaces that track KPIs, delivery health, and the questions leadership actually asks.',
      code: 'explore("ops_signal")',
    },
    {
      title: 'Ship the pipeline',
      body: 'Validation, structured tables, and report hubs with real UIs - so accuracy is a product, not a spreadsheet hope.',
      code: 'hub.render(report_id)',
    },
    {
      title: 'Move with AI',
      body: 'Cursor and Claude Code to go from question to prototype fast - judgment stays on the insight, not the boilerplate.',
      code: 'cursor.ship(insight)',
    },
  ],
}

/**
 * The Year - upGrad School of Technology arc.
 * Policy-safe: no real metrics, schemas, or confidential outlines.
 * Mock UI labels are fictional placeholders.
 */
export const yearAtSot = {
  eyebrow: 'One year inside the build',
  title: 'School of Technology, from glass board to operating system',
  lead:
    'I joined early - employee #31 in the School of Tech vertical - and helped turn “we need answers” into structured data, trusted pipelines, and reports people actually use.',
  disclaimer:
    'Story and contribution themes only. No confidential schemas, real figures, or internal product outlines.',
  chapters: [
    {
      id: 'origin',
      phase: '01',
      title: 'Employee #31 · 0 → 1',
      body: 'The school started as an idea on a glass board. Being early meant building the data foundations while the campus, programs, and teams were still forming.',
      mock: 'origin',
    },
    {
      id: 'structure',
      phase: '02',
      title: 'Structure the chaos',
      body: 'Raw operational signals became models: definitions, validation, and ownership - so “what happened?” stopped meaning three different Excel truths.',
      mock: 'structure',
    },
    {
      id: 'excel',
      phase: '03',
      title: 'Excel was the first truth',
      body: 'Early reporting lived in spreadsheets. Useful - until volume, versioning, and accuracy demanded something that could scale with the school.',
      mock: 'excel',
    },
    {
      id: 'looker',
      phase: '04',
      title: 'Looker for shared visibility',
      body: 'We moved critical views into Looker so stakeholders could explore the same governed signal - KPIs, delivery outcomes, program health - without waiting on a manual export.',
      mock: 'looker',
    },
    {
      id: 'metabase',
      phase: '05',
      title: 'Metabase for faster questions',
      body: 'Metabase covered the “I need an answer today” layer - quicker exploration while deeper Looker surfaces stayed the system of record for recurring decisions.',
      mock: 'metabase',
    },
    {
      id: 'gui',
      phase: '06',
      title: 'Fully automated GUI reports',
      body: 'Then report hubs with Python and full UIs: scheduled logic, validation gates, and interfaces operators open like products - not attachments in a thread. Preview below is synthetic.',
      mock: 'gui',
    },
    {
      id: 'now',
      phase: '07',
      title: 'Now: org data + internal tools',
      body: 'The role widened into product and operations: Pact PRDs and B2B process maps, enterprise pipelines that consolidate vertical data, CXO Power BI dashboards in SQL and Python, and workflow automation with PostgreSQL, n8n, and REST APIs. Previews stay synthetic.',
      mock: 'now',
    },
  ],
}

/** Learnings & contributions - policy-safe themes */
export const learnings = {
  eyebrow: 'Field notes',
  title: 'What a year of building taught me',
  lead:
    'Patterns I can share without crossing company lines - the craft, not the confidentials. More detail welcome when you send screenshots and safe copy.',
  items: [
    {
      title: 'Definitions beat dashboards',
      body: 'A pretty chart on three conflicting definitions is worse than a plain table with one. Alignment first, viz second.',
    },
    {
      title: 'Pipelines are products',
      body: 'If validation, ownership, and refresh aren’t designed, the “insight” dies the first busy week. Treat data paths like shipped software.',
    },
    {
      title: 'Excel → BI → automation is a ladder',
      body: 'Each rung earns the next. Skipping trust for tools creates shadow systems. Climb when the org is ready to use the rung.',
    },
    {
      title: '0 → 1 rewires how you see data',
      body: 'Early-stage ops teach that strategy in a sheet collapses without ground truth. Iterate: ideate → build → validate → learn.',
    },
    {
      title: 'AI speeds craft, not judgment',
      body: 'Assistants shrink boilerplate. Stakeholder clarity, metric honesty, and PRD thinking still belong to the analyst.',
    },
    {
      title: 'Internal tools need PRDs too',
      body: 'Streamlining tools fail when they’re “just a script.” Spec the user, the failure mode, and the decision they unlock.',
    },
  ],
}

export const experience = [
  {
    company: 'upGrad School of Technology',
    location: 'Bengaluru',
    roles: [
      {
        role: 'Data Analyst - Business Operations',
        period: 'Mar 2026 – Present',
        description:
          'Own product design for Pact (B2B process management), enterprise data pipelines, CXO dashboards, and revenue analytics. Author PRDs, map end-to-end workflows, consolidate vertical data into a centralized foundation, and deliver automated Power BI reporting with SQL and Python. Partner across business, ops, and technology to turn challenges into analytical solutions, process improvements, and workflow automation.',
        highlights: [
          'Product Design & Strategy (Pact): authored PRDs, defined B2B workflows, mapped end-to-end processes, and partnered with tech on data collection, verification, standardization, and workflow automation',
          'Enterprise Data Pipelines: consolidated information across organizational verticals, standardized datasets, and built a centralized foundation for automated reporting and enterprise-wide visibility',
          'CXO Dashboards & BI: automated Power BI dashboards with SQL and Python to monitor KPIs, track performance, and give CXOs actionable decision support',
          'Revenue & Business Analytics: evaluated revenue and operational data to surface trends, performance gaps, and growth opportunities for strategic planning',
          'Business Process Optimization: improved program delivery pipelines by finding bottlenecks, streamlining workflows, raising efficiency, and cutting turnaround times',
          'Cross-Functional Collaboration: partnered with business, operations, and technology stakeholders to convert challenges into analytical solutions, product requirements, and process improvements',
          'Data Quality & Governance: strengthened accuracy, consistency, and reporting reliability through cleaning, validation, reconciliation, and structured data management',
          'Workflow Automation & Data Integration: SQL, Python, PostgreSQL, n8n, REST APIs, and automated workflows to speed processing, connect systems, and reduce manual effort',
        ],
      },
      {
        role: 'Data Analyst - Growth & Strategy',
        period: 'Oct 2025 – Apr 2026',
        description:
          'Supported growth initiatives through performance tracking and insight generation. Built databases from scratch, analyzed structured datasets for GTM opportunities, and collaborated across teams on market and funnel decisions.',
        highlights: [
          'Acquisition, retention, and revenue tracking',
          'Database creation and reliability from day one',
          'Cross-functional GTM and market analysis support',
        ],
      },
    ],
  },
  {
    company: 'GyanX',
    location: 'Bengaluru',
    roles: [
      {
        role: 'Product & AI Lead (Freelance)',
        period: 'Sep 2025 – Sep 2026',
        description:
          'Built and led product and AI for an EdTech venture as freelance work - personalized, data-driven learning workflows, RAG prototypes, and analytics-minded surfaces. Exited September 2026.',
        highlights: [
          'Custom RAG prototypes with open-source models',
          'Learning interface, assessment, and insights architecture',
          'Product vision aligned to research and user journeys',
        ],
      },
    ],
  },
  {
    company: 'TekWissen',
    location: 'Visakhapatnam',
    roles: [
      {
        role: 'Jr. Program Coordinator',
        period: 'Nov 2024 – Sep 2025',
        description:
          'Built analytics dashboards for operational decisions, validated structured and unstructured data, streamlined ATS filtering pipelines, and managed Azure SQL with SLA discipline for global clients.',
        highlights: [
          'Workforce and operations analytics dashboards',
          'ATS automation reducing manual processing',
          'Partnered with clients including Amazon, Unisys, ThermoFisher',
        ],
      },
    ],
  },
  {
    company: 'Indian Oil Corporation Limited',
    location: 'Digboi',
    roles: [
      {
        role: 'Summer Intern',
        period: 'Aug 2023 – Sep 2023',
        description:
          'Shipped a computer-vision ANPR system that automated vehicle authentication and cut manual gate processes.',
        highlights: [
          'YOLOv8 + EasyOCR pipeline in production conditions',
          'Significant reduction in manual authentication effort',
        ],
      },
    ],
  },
  {
    company: 'Cotton University',
    location: 'Guwahati',
    roles: [
      {
        role: 'Research Intern',
        period: 'Aug 2022 – Sep 2022',
        description:
          'Researched backtracking and search algorithms, documenting performance limits and optimization opportunities in file-search systems.',
        highlights: ['Algorithm performance analysis', 'Documented optimization patterns'],
      },
    ],
  },
  {
    company: 'Maan Ki Umeed',
    location: 'Remote',
    roles: [
      {
        role: 'Social Media Analyst',
        period: 'Jan 2021 – Oct 2022',
        description:
          'Used content performance data and A/B testing to refine themes, formats, and audience targeting.',
        highlights: ['~30% lift in post engagement', 'A/B testing on creatives and formats'],
      },
    ],
  },
]

export const projects = [
  {
    title: 'Pact',
    path: '~/projects/pact',
    description:
      'B2B process management product - PRDs, workflow mapping, verification, and automation for partner operations.',
    fullDescription:
      'Pact is a B2B process management product I designed as Data Analyst - Business Operations: Product Requirement Documents, end-to-end process maps, and functional requirements for data collection, verification, process standardization, and workflow automation. Internal only - no public URL. Portfolio preview uses invented figures.',
    tech: ['PRDs', 'B2B workflows', 'Process automation', 'Product UI'],
    category: 'Product & Operations',
    metrics: 'Internal tool · synthetic preview only',
    href: null,
    featured: true,
    preview: 'pact',
    blog: 'Pact started as a product problem, not a dashboard. I authored PRDs, defined business workflows, and mapped processes so technology could deliver collection, verification, standardization, and B2B automation. The UI is the operating surface for those workflows. Preview figures are synthetic.',
    doc: [
      { title: 'Architecture', body: 'Business need → PRD + process map → collection / verification / standardization → automated B2B workflow UI.' },
      { title: 'Technologies', body: 'PRDs, workflow mapping, product UI, process automation. Preview mock only - not production data.' },
      { title: 'Design choice', body: 'Translate operations into functional requirements before pixels so partner teams share one process, not three spreadsheets.' },
    ],
  },
  {
    title: 'DBRIEF',
    path: '~/projects/debrief',
    description:
      'Live Formula 1 analytics product: standings, race briefings, and model predictions for fans.',
    fullDescription:
      'Debrief F1 (debrieff1.in) is a public race-analytics product I build in the open. It turns each Grand Prix weekend into a briefing fans can actually use: countdown and session timeline, prediction vs reality grades, model win/podium odds that shift after practice and qualifying, grid-to-finish deltas, qualifying vs race pace, rivalry desk, drivers and constructors standings, and title probability. Active season coverage with historical depth back toward 1950. Built as a decision surface, not a highlight reel.',
    tech: ['Next.js', 'Race analytics', 'Prediction models', 'Dashboard UI'],
    category: 'Sports Analytics',
    metrics: 'Live product · debrieff1.in',
    href: DBRIEF_URL,
    featured: true,
    blog: 'Debrief F1 pipelines timing and results into a feature layer, then into prediction models and race briefings. The Next.js front end serves race-week timelines, prediction vs actual grades, grid deltas, standings, and title odds. Design principle: every view should answer a fan decision before or after the lights go out.',
    doc: [
      { title: 'Architecture', body: 'Timing / results / history → feature store → predict model + race briefing + standings UI.' },
      { title: 'Technologies', body: 'Next.js app, race analytics transforms, published prediction models, interactive dashboard UI.' },
      {
        title: 'Product surfaces',
        body: 'Weekend timeline, prediction center, grid-to-finish deltas, rivalry desk, drivers/constructors tables, title probability.',
      },
      { title: 'Live link', body: 'Public product at https://www.debrieff1.in/ - open to explore the current race week.' },
    ],
  },
  {
    title: 'InfraNova Labs',
    path: '~/projects/infranova',
    description:
      'AI-native tools research lab I am building as a side hustle - Discover, Ideate, Build, Ship.',
    fullDescription:
      'InfraNova Labs (infranovalabs.com) is my side hustle: an AI-native research lab that finds real tool problems, runs fast experiments, and ships only when something is useful. Live lab tracks include Sentinel (security intelligence for small teams), Helix IDE (calm developer environment), Schemes & Funding, Split Flow expenses, approachable analytics, and a marketing automation suite. Built in public, open-source first, human-centered.',
    tech: ['AI-native tools', 'Product research', 'Next.js', 'Automation', 'Analytics'],
    category: 'Side Hustle',
    metrics: 'Active lab · infranovalabs.com',
    href: INFRANOVA_URL,
    featured: true,
    blog: 'InfraNova runs a Discover → Ideate → Build → Ship loop. Problems are researched in public across security, developer tools, funding guides, expense splitting, analytics, and marketing automation. Shared principles: open when responsible, simple not simplistic, and products that compound on one platform language. Current momentum includes early Sentinel testers, Helix IDE core editor work, and question-first analytics experiments for teams without a BI department.',
    doc: [
      {
        title: 'Lab workflow',
        body: 'Discover real problems → ideate fast experiments → build focused tools → ship when ready → publish learnings.',
      },
      {
        title: 'Active tracks',
        body: 'Sentinel (security), Helix IDE, Schemes & Funding, Split Flow, Analytics Tool, Marketing Automation Suite.',
      },
      {
        title: 'Technologies & craft',
        body: 'AI-native product research, web product surfaces, automation workflows, analytics for operators, public learnings cadence.',
      },
      {
        title: 'Live link',
        body: 'Side hustle lab at https://infranovalabs.com/ - browse tools, principles, and research updates.',
      },
    ],
  },
  {
    title: 'Analytical Dashboard & Report Hub',
    path: '~/projects/upgrad-hub',
    description: 'Looker dashboards and a full Python UI report hub for upGrad School of Technology.',
    fullDescription:
      'Internal Looker surfaces and a Python report hub with full UI - validation, delivery outcomes, operational KPIs. No public preview.',
    tech: ['Looker', 'Python', 'SQL', 'Report Hub UI'],
    category: 'Business Intelligence',
    metrics: 'Full UI + Looker at upGrad SoT',
    href: null,
    featured: true,
    blog: 'The hub sits between messy source tables and operators who need a trustworthy Monday answer. SQL sources and exports go through validation/ETL, then branch into governed Looker explores and a Python report hub UI with scheduled runs. Architecture favors definitions and gates before pixels.',
    doc: [
      { title: 'Architecture', body: 'SQL / exports → validate + ETL → Looker views + Python hub UI + schedulers.' },
      { title: 'Technologies', body: 'Looker, Python, SQL, Azure-friendly warehouse patterns, full report-hub UI.' },
      { title: 'Design choice', body: 'Separate exploration (Looker) from automated operating reports (hub) so neither fights the other.' },
    ],
  },
  {
    title: 'Growth Analytics Dashboard',
    path: '~/projects/growth-dash',
    description: 'Strategic views on acquisition, retention, and revenue for GTM decisions.',
    fullDescription:
      'Funnel, cohort, and GTM tracking so marketing, product, and sales share one source of truth.',
    tech: ['Power BI', 'SQL', 'Python', 'Looker Studio'],
    category: 'Business Intelligence',
    metrics: 'Funnel, cohort & GTM tracking',
    href: null,
    blog: 'Growth dashboards model the funnel as stages - acquire, activate, retain, revenue - then publish shared cohort and GTM views. Power BI / Looker Studio sit on SQL + Python transforms so teams debate actions, not spreadsheet versions.',
    doc: [
      { title: 'Architecture', body: 'Acquire → Activate → Retain → Revenue, measured through shared cohort and funnel tables.' },
      { title: 'Technologies', body: 'Power BI, SQL, Python, Looker Studio for GTM-facing views.' },
      { title: 'Design choice', body: 'One funnel language across marketing, product, and sales.' },
    ],
  },
  {
    title: 'ANPR Authentication System',
    path: '~/projects/anpr',
    description: 'Automated vehicle authentication that replaced slow manual checks with vision pipelines.',
    fullDescription:
      'At Indian Oil, ANPR with YOLOv8 and EasyOCR for real-time plate recognition under operational conditions.',
    tech: ['YOLOv8', 'EasyOCR', 'Python', 'PyTorch'],
    category: 'Applied Systems',
    metrics: '~90% efficiency improvement',
    href: null,
    blog: 'Camera frames enter a two-stage vision pipe: YOLOv8 detects plate regions, EasyOCR reads characters, then a match layer authenticates the vehicle. Built in Python/PyTorch for field conditions where manual checks were the bottleneck.',
    doc: [
      { title: 'Architecture', body: 'Camera feed → YOLOv8 detection → EasyOCR → plate match → auth decision.' },
      { title: 'Technologies', body: 'YOLOv8, EasyOCR, Python, PyTorch.' },
      { title: 'Design choice', body: 'Split detection and OCR so each stage can be tuned under real lighting and motion.' },
    ],
  },
  {
    title: 'Assamese-English Translator',
    path: '~/projects/translator',
    description: 'Seq2seq translation that made bilingual text usable for real evaluation loops.',
    fullDescription:
      'Transformer-based bilingual NLP with careful preprocessing - data quality first, model second.',
    tech: ['TensorFlow', 'Transformers', 'Python', 'NLP'],
    category: 'NLP',
    metrics: '50K+ sentence pairs',
    href: null,
    blog: 'The pipeline prioritizes corpus quality: Assamese text is cleaned and aligned, tokenized, then trained through a Transformer seq2seq stack in TensorFlow. Evaluation loops measure usable bilingual output, not demo-only BLEU theater.',
    doc: [
      { title: 'Architecture', body: 'Assamese corpus → tokenize / clean / align → Transformer → English output.' },
      { title: 'Technologies', body: 'TensorFlow, Transformers, Python, NLP preprocessing.' },
      { title: 'Design choice', body: 'Spend more cycles on data quality than on architecture novelty.' },
    ],
  },
  {
    title: 'Real-Time Facial Recognition',
    path: '~/projects/attendance',
    description: 'Attendance automation with structured reports in JSON and Excel.',
    fullDescription:
      'OpenCV, Flask, and SQL - attendance as a dataset, not a clipboard.',
    tech: ['OpenCV', 'Flask', 'TensorFlow', 'SQL'],
    category: 'Computer Vision',
    metrics: '95%+ accuracy · ~100ms response',
    href: null,
    blog: 'Webcam frames go through OpenCV capture, embedding match, and a Flask API that writes attendance into SQL with exportable JSON/Excel reports. Latency target stays near interactive (~100ms) so the classroom flow does not stall.',
    doc: [
      { title: 'Architecture', body: 'Webcam → OpenCV → embed match → Flask API → SQL attendance store.' },
      { title: 'Technologies', body: 'OpenCV, Flask, TensorFlow, SQL.' },
      { title: 'Design choice', body: 'Attendance is structured data with exports, not a handwritten sheet.' },
    ],
  },
  {
    title: 'Student Management Mini-ERP',
    path: '~/projects/mini-erp',
    description: 'Python GUI for CRUD, search, uploads, and analytics reporting.',
    fullDescription:
      'CustomTkinter + SQL - school ops as structured data.',
    tech: ['Python', 'CustomTkinter', 'SQL'],
    category: 'Software',
    metrics: 'CRUD + analytics reporting',
    href: null,
    blog: 'A desktop mini-ERP where CustomTkinter forms handle CRUD, search, and uploads against a SQL store, then emit basic analytics reports. Designed for school ops that need structure without a full web stack.',
    doc: [
      { title: 'Architecture', body: 'CustomTkinter UI (CRUD / search / upload) → SQL store → reports.' },
      { title: 'Technologies', body: 'Python, CustomTkinter, SQL.' },
      { title: 'Design choice', body: 'Keep the surface local and simple while still modeling real entities.' },
    ],
  },
  {
    title: 'Matrix Multiplication Optimizer',
    path: '~/projects/matrix-opt',
    description: 'Parallel C++ matrix multiply tuned for throughput.',
    fullDescription: 'C++11 with OpenMP and SIMD - performance as a measurable outcome.',
    tech: ['C++', 'OpenMP', 'SIMD'],
    category: 'Performance',
    metrics: 'Up to 3× faster',
    href: null,
    blog: 'Dense matrix multiply is split across OpenMP threads and SIMD lanes in C++11. The design treats throughput as the product metric: measure baseline, parallelize outer work, vectorize inner kernels, compare wall time.',
    doc: [
      { title: 'Architecture', body: 'Matrix A×B → OpenMP parallel regions + SIMD kernels → throughput result.' },
      { title: 'Technologies', body: 'C++11, OpenMP, SIMD intrinsics.' },
      { title: 'Design choice', body: 'Optimize what you can measure - wall-clock speedups over clever-looking code.' },
    ],
  },
]

export const builds = [
  {
    name: 'InfraNova Labs',
    href: INFRANOVA_URL,
    blurb: 'Side hustle AI-native lab - Sentinel, Helix IDE, funding guides, analytics.',
    path: '~/builds/infranova',
    status: 'Active',
    diagram: 'InfraNova Labs',
  },
  {
    name: 'Debrief F1',
    href: DBRIEF_URL,
    blurb: 'Live F1 briefings, predictions, and standings at debrieff1.in.',
    path: '~/builds/debrief',
    status: 'Live',
    diagram: 'DBRIEF',
  },
  {
    name: 'GyanX',
    href: GYANX_URL,
    blurb: 'AI EdTech I built freelancing - exited Sep 2026.',
    path: '~/builds/gyanx',
    status: 'Exited',
    diagram: 'GyanX',
  },
]

export const education = [
  {
    institution: 'Assam Science and Technology University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science',
    period: '2020 – 2024',
    description: 'Machine learning, data structures, and software engineering',
  },
  {
    institution: 'Kendriya Vidyalaya, Nagaon',
    degree: 'AISSCE / AISSE',
    field: 'Science (PCM)',
    period: '2008 – 2020',
    description: 'Physics, Chemistry, Mathematics',
  },
]

export const certifications = [
  { title: 'Introduction to Data Science', issuer: 'LinkedIn Learning', year: '2024' },
  { title: 'Introduction to Prompt Engineering for Generative AI', issuer: 'LinkedIn', year: '2024' },
  { title: 'Deloitte - Data Analytics Job Simulation', issuer: 'Deloitte / Forage', year: '2024' },
  { title: 'Introduction to Career Skills in Data Analytics', issuer: 'LinkedIn', year: '2024' },
  { title: 'Data Analysis & Power BI', issuer: 'Tutedude', year: '2024' },
  { title: 'Business Analysis', issuer: 'Microsoft & LinkedIn', year: '2024' },
]

export const skillGroups = [
  {
    label: 'Analytics & BI',
    skills: ['Power BI', 'SQL', 'Python', 'Looker', 'Metabase', 'Looker Studio', 'DAX', 'ETL'],
  },
  {
    label: 'Data & automation',
    skills: ['PostgreSQL', 'n8n', 'REST APIs', 'Pandas', 'NumPy', 'Azure SQL'],
  },
  {
    label: 'Product & AI',
    skills: ['PRDs', 'B2B workflows', 'Cursor', 'Claude Code', 'RAG prototypes', 'Prompt Engineering'],
  },
  {
    label: 'Web & systems',
    skills: ['React', 'Next.js', 'Flask', 'Git', 'AWS', 'Azure'],
  },
]

export const stats = [
  { value: 31, suffix: 'st', label: 'Hire in SoT', description: 'Early builder in the vertical' },
  { value: 4, suffix: '', label: 'Report eras', description: 'Excel → Looker → Metabase → GUI' },
  { value: 1, suffix: '', label: 'Year of 0→1', description: 'Glass board to 86 Cr revenue' },
]
