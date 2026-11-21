/** Profile-specific copy - factual, one person, different lenses. */

export const personalWorld = {
  eyebrow: 'Get to know me',
  title: 'Off the spreadsheet',
  lead: 'Bengaluru-based builder who cares about clarity, craft, and systems people actually use.',
  traits: [
    {
      title: 'Working philosophy',
      body: 'Answers, not assumptions. Definitions before dashboards. Ship the path, not just the chart.',
    },
    {
      title: 'How I think',
      body: 'Start from the decision someone needs on Monday - then reverse into data, UI, and automation.',
    },
    {
      title: 'What energizes me',
      body: '0→1 environments, F1 analytics in public, InfraNova as a side hustle, partnering with operators who feel the pain daily.',
    },
  ],
  interests: ['Badminton', 'Netflix and chill', 'Driving', 'F1', 'Coding', 'Foodie'],
}

export const milestones = {
  eyebrow: 'Personal milestones',
  title: 'Moments that shaped the craft',
  items: [
    { year: '2020–24', title: 'CS degree', body: 'Assam Science and Technology University - foundations in systems and ML.' },
    { year: '2023', title: 'IOCL internship', body: 'ANPR vision pipeline - efficiency as a measurable outcome.' },
    { year: '2025', title: 'GyanX freelance', body: 'Product & AI lead for EdTech - exited Sep 2026.' },
    { year: '2025–26', title: 'upGrad SoT #31', body: 'Early hire - glass board vision to 86Cr revenue in 1st year of operations.' },
    { year: 'Live', title: 'Debrief F1', body: 'Public race analytics for fans who want signal, not noise.' },
    {
      year: 'Now',
      title: 'InfraNova Labs',
      body: 'Side hustle AI-native lab at infranovalabs.com - Discover, Ideate, Build, Ship.',
    },
  ],
}

export const recruiterBrief = {
  eyebrow: 'Professional summary',
  title: 'What I bring to a team',
  summary:
    'Product and operations analyst who authors PRDs for Pact (B2B process management), consolidates enterprise pipelines, and ships CXO Power BI dashboards with SQL and Python. Revenue and ops analytics, data governance, and workflow automation with PostgreSQL, n8n, and REST APIs - early hire energy with production discipline.',
  highlights: [
    { label: 'Current', value: 'Data Analyst - Business Operations', hint: 'upGrad School of Technology' },
    { label: 'Product', value: 'Pact · PRDs', hint: 'B2B workflows + automation' },
    { label: 'BI', value: 'CXO Power BI', hint: 'SQL · Python · pipelines' },
    { label: 'Origin', value: 'Employee #31', hint: 'School of Tech vertical' },
  ],
}

export const clientProcess = {
  eyebrow: 'How we collaborate',
  title: 'From brief to operating surface',
  steps: [
    { n: '01', title: 'Discover', body: 'Map the decision, owners, and what “good” looks like without inventing vanity KPIs.' },
    { n: '02', title: 'Model', body: 'Definitions, validation, and a source of truth - before pixels.' },
    { n: '03', title: 'Prototype', body: 'Fast UI / dashboard spikes with Cursor + judgment on the insight.' },
    { n: '04', title: 'Ship', body: 'Automate refresh, gates, and the interface operators open every week.' },
  ],
}

export const guestAtlas = {
  eyebrow: 'Site atlas',
  title: 'Everything in one pass',
  tiles: [
    { id: 'story', label: 'Story', desc: 'Year at SoT + craft layers' },
    { id: 'projects', label: 'Projects', desc: 'InfraNova, Debrief, Pact, hubs' },
    { id: 'lab', label: 'Analytics lab', desc: 'Synthetic studio charts' },
    { id: 'career', label: 'Career', desc: 'Timeline + skills + certs' },
    { id: 'builds', label: 'Builds', desc: 'InfraNova · Debrief · GyanX' },
    { id: 'credits', label: 'Connect', desc: 'Resume, LinkedIn, email' },
  ],
}

const PERSONAL_TITLES = new Set([
  'InfraNova Labs',
  'DBRIEF',
  'Assamese-English Translator',
  'ANPR Authentication System',
  'Real-Time Facial Recognition',
  'Student Management Mini-ERP',
])

const CLIENT_TITLES = new Set([
  'InfraNova Labs',
  'Pact',
  'DBRIEF',
  'Analytical Dashboard & Report Hub',
  'Growth Analytics Dashboard',
])

export function filterProjects(all, mode) {
  if (mode === 'all' || !mode) return all
  if (mode === 'personal') {
    return all.filter(
      (p) =>
        PERSONAL_TITLES.has(p.title) ||
        ['Sports Analytics', 'NLP', 'Applied Systems', 'Computer Vision', 'Side Hustle'].includes(
          p.category
        )
    )
  }
  if (mode === 'career') {
    return all.filter(
      (p) =>
        p.featured ||
        ['Business Intelligence', 'Product & Operations', 'Applied Systems'].includes(p.category)
    )
  }
  if (mode === 'client') {
    return all.filter(
      (p) => CLIENT_TITLES.has(p.title) || p.category === 'Product & Operations'
    )
  }
  return all
}
