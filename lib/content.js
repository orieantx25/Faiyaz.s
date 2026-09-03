export const DBRIEF_URL = 'https://www.debrieff1.in/'

export const INFRANOVA_URL = 'https://infranovalabs.infranovalabs.workers.dev'

export const profile = {
  name: 'Faiyaz Sabab',
  role: 'Data Analyst',
  location: 'Bengaluru, India',
  email: 'sababfaiyaz25@gmail.com',
  headline: 'Insights that drive decisions',
  tagline: 'I got into data because I wanted answers, not assumptions',
  taglineRest:
    'turning raw signals into dashboards, reports, and stories teams can act on.',
  linkedin: 'https://www.linkedin.com/in/faiyaz-sabab-0925-cse',
  github: 'https://github.com/orieantx25',
  resume: '/Faiyaz_Sabab_Resume.pdf',
}

export const craft = {
  title: 'How I work',
  lead:
    'My work sits where business meets data — dashboards, report hubs, and analysis that change how teams decide.',
  points: [
    {
      title: 'Looker & BI storytelling',
      body: 'I design Looker and Power BI surfaces that track KPIs, funnel health, with operational and business outcomes.',
      code: 'looker.explore("ops_kpis")',
    },
    {
      title: 'Python report hubs',
      body: 'I build full UI dashboards and report hubs with Python: validation, structured pipelines, and interfaces people actually open.',
      code: 'hub.render(report_id)',
    },
    {
      title: 'AI-assisted shipping',
      body: 'I use Cursor and Claude Code to move faster from question to prototype — keeping judgment on the analysis, not just the boilerplate.',
      code: 'cursor.ship(insight)',
    },
  ],
}

export const experience = [
  {
    company: 'upGrad School of Technology',
    location: 'Bengaluru',
    roles: [
      {
        role: 'Operation and Business Analyst',
        period: 'Mar 2026 – Present',
        description:
          'Analyze operational and business data to uncover trends and support strategic decisions. Design and maintain dashboards for KPIs, data delivery outcomes, and program performance. Identify bottlenecks in delivery pipelines and partner with stakeholders to turn problems into actionable insights.',
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
        period: 'Sep 2025 – Aug 2026',
        description:
          'Freelance product and AI lead for an EdTech venture focused on personalized, data-driven learning. Designed workflows, RAG prototypes, and analytics-minded product surfaces.',
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
      'Debrief (The Paddock) turns Formula 1 sessions into briefings, predictions, standings, and historical analysis. Built for signal over noise: race week intelligence, models, and season context in one product surface.',
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
      'Built Looker analytical dashboards and a functioning report hub with Python scripts and a complete UI — covering validation, delivery outcomes, and operational KPIs. Internal tooling (no public preview); designed for stakeholders who need answers fast.',
    tech: ['Looker', 'Python', 'SQL', 'Report Hub UI'],
    category: 'Business Intelligence',
    metrics: 'Full UI + Looker surfaces at upGrad SoT',
    href: null,
    featured: true,
  },
  {
    title: 'Growth Analytics Dashboard',
    path: '~/projects/growth-dash',
    description: 'Strategic views on acquisition, retention, and revenue for GTM decisions.',
    fullDescription:
      'Dashboards tracking funnel conversion, campaign performance, and ROI. Cohort analysis and forecasting to surface opportunities — so marketing, product, and sales share one source of truth.',
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
      'At Indian Oil, built ANPR with YOLOv8 and EasyOCR for real-time plate recognition — improving authentication efficiency dramatically and proving that systems thinking plus data pipelines can rewrite operational workflows.',
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
      'Transformer-based bilingual NLP with careful preprocessing, tokenization, and GPU training. Focused on measurable accuracy between Assamese and English — data quality first, model second.',
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
      'End-to-end system with OpenCV, Flask, and SQL — detection via TensorFlow/MediaPipe, then automated fetches and report generation so attendance became a dataset, not a clipboard.',
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
      'CustomTkinter app with SQL backend: dynamic search, file upload/download, access-aware reporting — a small ERP that treated school ops as structured data.',
    tech: ['Python', 'CustomTkinter', 'SQL'],
    category: 'Software',
    metrics: 'CRUD + analytics reporting',
    href: null,
  },
  {
    title: 'Matrix Multiplication Optimizer',
    path: '~/projects/matrix-opt',
    description: 'Parallel C++ matrix multiply tuned for throughput.',
    fullDescription:
      'C++11 with OpenMP and SIMD intrinsics — up to 3× faster execution by treating performance as a measurable outcome.',
    tech: ['C++', 'OpenMP', 'SIMD'],
    category: 'Performance',
    metrics: 'Up to 3× faster',
    href: null,
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
    skills: ['Power BI', 'Looker', 'Looker Studio', 'Tableau', 'Excel', 'DAX', 'ETL', 'Data Visualization'],
  },
  {
    label: 'Data & Code',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Statistical Analysis', 'Azure SQL', 'PostgreSQL'],
  },
  {
    label: 'Product & AI tools',
    skills: ['Cursor', 'Claude Code', 'Prompt Engineering', 'Generative AI', 'RAG prototypes'],
  },
  {
    label: 'Web & systems',
    skills: ['React', 'Next.js', 'Flask', 'Git', 'AWS', 'Azure'],
  },
]

export const stats = [
  {
    value: 15,
    suffix: '+',
    label: 'Dashboards',
    description: 'Looker, Power BI, and custom report UIs',
  },
  {
    value: 2,
    suffix: '+',
    label: 'Years in analytics',
    description: 'Growth, ops, and workforce decision support',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Shipped projects',
    description: 'With operational and business outcomes',
  },
]
