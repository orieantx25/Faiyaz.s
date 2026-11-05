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
  lead: 'Three layers I keep rebuilding — from question to something a team will open every Monday.',
  points: [
    {
      title: 'See the business',
      body: 'Looker, Metabase, Power BI — surfaces that track KPIs, delivery health, and the questions leadership actually asks.',
      code: 'explore("ops_signal")',
    },
    {
      title: 'Ship the pipeline',
      body: 'Validation, structured tables, and report hubs with real UIs — so accuracy is a product, not a spreadsheet hope.',
      code: 'hub.render(report_id)',
    },
    {
      title: 'Move with AI',
      body: 'Cursor and Claude Code to go from question to prototype fast — judgment stays on the insight, not the boilerplate.',
      code: 'cursor.ship(insight)',
    },
  ],
}

/**
 * The Year — upGrad School of Technology arc.
 * Policy-safe: no real metrics, schemas, or confidential outlines.
 * Mock UI labels are fictional placeholders.
 */
export const yearAtSot = {
  eyebrow: 'One year inside the build',
  title: 'School of Technology, from glass board to operating system',
  lead:
    'I joined early — employee #31 in the School of Tech vertical — and helped turn “we need answers” into structured data, trusted pipelines, and reports people actually use.',
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
      body: 'Raw operational signals became models: definitions, validation, and ownership — so “what happened?” stopped meaning three different Excel truths.',
      mock: 'structure',
    },
    {
      id: 'excel',
      phase: '03',
      title: 'Excel was the first truth',
      body: 'Early reporting lived in spreadsheets. Useful — until volume, versioning, and accuracy demanded something that could scale with the school.',
      mock: 'excel',
    },
    {
      id: 'looker',
      phase: '04',
      title: 'Looker for shared visibility',
      body: 'We moved critical views into Looker so stakeholders could explore the same governed signal — KPIs, delivery outcomes, program health — without waiting on a manual export.',
      mock: 'looker',
    },
    {
      id: 'metabase',
      phase: '05',
      title: 'Metabase for faster questions',
      body: 'Metabase covered the “I need an answer today” layer — quicker exploration while deeper Looker surfaces stayed the system of record for recurring decisions.',
      mock: 'metabase',
    },
    {
      id: 'gui',
      phase: '06',
      title: 'Fully automated GUI reports',
      body: 'Then report hubs with Python and full UIs: scheduled logic, validation gates, and interfaces operators open like products — not attachments in a thread. Preview below is synthetic.',
      mock: 'gui',
    },
    {
      id: 'now',
      phase: '07',
      title: 'Now: org data + internal tools',
      body: 'After helping take SOT from 0 → 1, the work widened: structuring org-level data, combining what we learned into new pipelines, and writing PRDs for internal streamlining tools. Hub preview uses invented labels only.',
      mock: 'now',
    },
  ],
}

/** Learnings & contributions — policy-safe themes */
export const learnings = {
  eyebrow: 'Field notes',
  title: 'What a year of building taught me',
  lead:
    'Patterns I can share without crossing company lines — the craft, not the confidentials. More detail welcome when you send screenshots and safe copy.',
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
        role: 'Operation & Business Analyst',
        period: 'Mar 2026 – Present',
        description:
          'Analyze operational and business data to uncover trends and support strategic decision-making. Design and maintain dashboards to monitor KPIs, data delivery outcomes, and overall operational performance. Identify bottlenecks in program delivery pipelines through deep-dive analysis, enabling targeted process improvements and faster turnaround. Partner with cross-functional stakeholders to translate business problems into actionable data insights. Enhance reporting accuracy by implementing data validation, cleaning, and structured data processes.',
        highlights: [
          'Dashboards monitoring KPIs and operational performance',
          'Deep-dives that shortened turnaround on program delivery',
          'Data validation and structured reporting processes',
        ],
      },
      {
        role: 'Growth & Strategy Analyst',
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
          'Built and led product and AI for an EdTech venture as freelance work — personalized, data-driven learning workflows, RAG prototypes, and analytics-minded surfaces. Exited September 2026.',
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
    title: 'DBRIEF',
    path: '~/projects/debrief',
    description: 'F1 analytics hub — race data, predictions, and historical signal for fans who want clarity.',
    fullDescription:
      'Debrief turns Formula 1 sessions into briefings fans can use: pace, stints, predictions vs reality, championship signal.',
    tech: ['Analytics', 'Dashboard UI', 'Predictions'],
    category: 'Sports Analytics',
    metrics: 'Live at debrieff1.in',
    href: DBRIEF_URL,
    featured: true,
  },
  {
    title: 'Analytical Dashboard & Report Hub',
    path: '~/projects/upgrad-hub',
    description: 'Looker dashboards and a full Python UI report hub for upGrad School of Technology.',
    fullDescription:
      'Internal Looker surfaces and a Python report hub with full UI — validation, delivery outcomes, operational KPIs. No public preview.',
    tech: ['Looker', 'Python', 'SQL', 'Report Hub UI'],
    category: 'Business Intelligence',
    metrics: 'Full UI + Looker at upGrad SoT',
    href: null,
    featured: true,
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
  },
  {
    title: 'Assamese–English Translator',
    path: '~/projects/translator',
    description: 'Seq2seq translation that made bilingual text usable for real evaluation loops.',
    fullDescription:
      'Transformer-based bilingual NLP with careful preprocessing — data quality first, model second.',
    tech: ['TensorFlow', 'Transformers', 'Python', 'NLP'],
    category: 'NLP',
    metrics: '50K+ sentence pairs',
    href: null,
  },
  {
    title: 'Real-Time Facial Recognition',
    path: '~/projects/attendance',
    description: 'Attendance automation with structured reports in JSON and Excel.',
    fullDescription:
      'OpenCV, Flask, and SQL — attendance as a dataset, not a clipboard.',
    tech: ['OpenCV', 'Flask', 'TensorFlow', 'SQL'],
    category: 'Computer Vision',
    metrics: '95%+ accuracy · ~100ms response',
    href: null,
  },
  {
    title: 'Student Management Mini-ERP',
    path: '~/projects/mini-erp',
    description: 'Python GUI for CRUD, search, uploads, and analytics reporting.',
    fullDescription:
      'CustomTkinter + SQL — school ops as structured data.',
    tech: ['Python', 'CustomTkinter', 'SQL'],
    category: 'Software',
    metrics: 'CRUD + analytics reporting',
    href: null,
  },
  {
    title: 'Matrix Multiplication Optimizer',
    path: '~/projects/matrix-opt',
    description: 'Parallel C++ matrix multiply tuned for throughput.',
    fullDescription: 'C++11 with OpenMP and SIMD — performance as a measurable outcome.',
    tech: ['C++', 'OpenMP', 'SIMD'],
    category: 'Performance',
    metrics: 'Up to 3× faster',
    href: null,
  },
]

export const builds = [
  {
    name: 'InfraNova Labs',
    href: INFRANOVA_URL,
    blurb: 'AI-native lab — Discover → Ideate → Build → Ship.',
    path: '~/builds/infranova',
  },
  {
    name: 'Debrief F1',
    href: DBRIEF_URL,
    blurb: 'Race analytics, built in public for F1 fans.',
    path: '~/builds/debrief',
  },
  {
    name: 'GyanX',
    href: GYANX_URL,
    blurb: 'AI EdTech I built freelancing — exited Sep 2026.',
    path: '~/builds/gyanx',
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
  { title: 'Deloitte — Data Analytics Job Simulation', issuer: 'Deloitte / Forage', year: '2024' },
  { title: 'Introduction to Career Skills in Data Analytics', issuer: 'LinkedIn', year: '2024' },
  { title: 'Data Analysis & Power BI', issuer: 'Tutedude', year: '2024' },
  { title: 'Business Analysis', issuer: 'Microsoft & LinkedIn', year: '2024' },
]

export const skillGroups = [
  {
    label: 'Analytics & BI',
    skills: ['Power BI', 'Looker', 'Metabase', 'Looker Studio', 'Tableau', 'Excel', 'DAX', 'ETL'],
  },
  {
    label: 'Data & Code',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Azure SQL', 'PostgreSQL'],
  },
  {
    label: 'Product & AI',
    skills: ['Cursor', 'Claude Code', 'PRDs', 'RAG prototypes', 'Prompt Engineering'],
  },
  {
    label: 'Web & systems',
    skills: ['React', 'Next.js', 'Flask', 'Git', 'AWS', 'Azure'],
  },
]

export const stats = [
  { value: 31, suffix: 'st', label: 'Hire in SoT', description: 'Early builder in the vertical' },
  { value: 4, suffix: '', label: 'Report eras', description: 'Excel → Looker → Metabase → GUI' },
  { value: 1, suffix: '', label: 'Year of 0→1', description: 'Glass board to operating rhythm' },
]
