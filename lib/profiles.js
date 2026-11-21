/** Audience perspectives - one brand, distinct journeys. */

export const PROFILE_IDS = ['you', 'recruiter', 'client', 'guest']

export const profiles = [
  {
    id: 'you',
    label: 'YOU',
    subtitle: 'Get to know the person behind the work.',
    accent: '#F5C542',
    accentSoft: 'rgba(245,197,66,0.18)',
    mood: 'editorial',
    heroKind: 'face',
    heroEyebrow: 'Personal cut',
    heroTitle: 'The person behind the work',
    heroBlurb:
      'Interests, philosophy, and the journey - before the dashboards and job titles.',
    nav: [
      { id: 'top', label: 'Home' },
      { id: 'personal', label: 'About' },
      { id: 'story', label: 'Journey' },
      { id: 'milestones', label: 'Milestones' },
      { id: 'projects', label: 'Selected' },
      { id: 'credits', label: 'Connect' },
    ],
    sections: ['hero', 'personal', 'story', 'milestones', 'projects', 'credits'],
    projectFilter: 'personal',
    endCredits: {
      eyebrow: 'stay in touch',
      title: ['Nice to meet', 'you'],
      blurb: 'If any of this resonated - say hello. Always up for a chat about craft, F1, or what we are building next.',
      primary: 'email',
      tagline: 'See you around',
    },
  },
  {
    id: 'recruiter',
    label: 'RECRUITER',
    subtitle: 'Explore my professional journey.',
    accent: '#5B9FD4',
    accentSoft: 'rgba(91,159,212,0.18)',
    mood: 'professional',
    heroKind: 'billboard',
    heroEyebrow: 'Hiring view',
    heroTitle: 'Ready for the next role',
    heroBlurb:
      'Pact product work, enterprise pipelines, CXO Power BI, and automation - resume-first, no fluff.',
    nav: [
      { id: 'top', label: 'Home' },
      { id: 'brief', label: 'Summary' },
      { id: 'career', label: 'Experience' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Work' },
      { id: 'lab', label: 'Proof' },
      { id: 'credits', label: 'Contact' },
    ],
    sections: ['hero', 'brief', 'timeline', 'skills', 'achievements', 'projects', 'lab', 'credits'],
    projectFilter: 'career',
    endCredits: {
      eyebrow: 'hiring contact',
      title: ['Ready when', 'you are'],
      blurb: 'Resume, LinkedIn, and email - open to roles that need product ops, CXO analytics, and workflow automation.',
      primary: 'resume',
      tagline: 'Open to opportunities',
    },
  },
  {
    id: 'client',
    label: 'FREELANCING CLIENT',
    subtitle: "Let's build something meaningful.",
    accent: '#2DD4BF',
    accentSoft: 'rgba(45,212,191,0.16)',
    mood: 'product',
    heroKind: 'studio',
    heroEyebrow: 'Client studio',
    heroTitle: 'Build with me',
    heroBlurb:
      'Services, case studies, how engagement works - from brief to shipped analytics product.',
    nav: [
      { id: 'top', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'process', label: 'Process' },
      { id: 'projects', label: 'Cases' },
      { id: 'lab', label: 'Capability' },
      { id: 'credits', label: 'Enquire' },
    ],
    sections: ['hero', 'services', 'process', 'projects', 'lab', 'credits'],
    projectFilter: 'client',
    endCredits: {
      eyebrow: 'start a brief',
      title: ["Let's scope", 'the build'],
      blurb: 'Have a product, dashboard, or ops system in mind? Send the brief - we can map Discover → Ship together.',
      primary: 'email',
      tagline: 'Enquire to begin',
    },
  },
  {
    id: 'guest',
    label: 'GUEST',
    subtitle: 'Explore everything.',
    accent: '#E50914',
    accentSoft: 'rgba(229,9,20,0.18)',
    mood: 'cinema',
    heroKind: 'catalogue',
    heroEyebrow: 'Full catalogue',
    heroTitle: 'Everything, unfiltered',
    heroBlurb:
      'Story, projects, lab, career, builds - the complete interactive film.',
    nav: [
      { id: 'top', label: 'Home' },
      { id: 'atlas', label: 'Channels' },
      { id: 'episodes', label: 'Episodes' },
      { id: 'projects', label: 'Genres' },
      { id: 'lab', label: 'Lab' },
      { id: 'builds', label: 'Reels' },
      { id: 'career', label: 'Career' },
      { id: 'credits', label: 'End' },
    ],
    sections: [
      'hero',
      'atlas',
      'episodes',
      'projects',
      'lab',
      'builds',
      'timeline',
      'skills',
      'credits',
    ],
    projectFilter: 'all',
    endCredits: {
      eyebrow: 'end titles',
      title: ["Let's build", 'the next signal'],
      blurb: 'Full catalogue watched. Resume, LinkedIn, GitHub, or email - pick a channel and continue the reel.',
      primary: 'resume',
      tagline: 'To be continued',
    },
  },
]

export function getProfile(id) {
  return profiles.find((p) => p.id === id) || profiles[3]
}

export function profileShows(profileId, section) {
  return getProfile(profileId).sections.includes(section)
}
