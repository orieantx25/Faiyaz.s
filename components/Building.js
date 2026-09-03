'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { INFRANOVA_URL, DBRIEF_URL, profile } from '@/lib/content'

const builds = [
  {
    name: 'InfraNova Labs',
    href: INFRANOVA_URL,
    blurb: 'Side build in progress — product experiments shipping live.',
    path: '~/builds/infranova',
  },
  {
    name: 'Debrief F1',
    href: DBRIEF_URL,
    blurb: 'Race data, predictions, and historical analysis — signal, not noise.',
    path: '~/builds/debrief',
  },
]

export default function Building() {
  return (
    <motion.section
      id="building"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-28"
    >
      <p className="font-mono text-xs tracking-[0.22em] uppercase text-muted-foreground mb-4">
        now shipping
      </p>
      <h2 className="text-4xl sm:text-5xl text-ink tracking-tight mb-3 max-w-xl">
        Building something
      </h2>
      <p className="text-muted-foreground max-w-lg mb-10 leading-relaxed">
        Live side projects. Glimpse the work, invite a conversation, or collaborate.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        {builds.map((b) => (
          <a
            key={b.name}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="code-chrome group block hover:border-sage/40 transition-colors"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/50">
              <span className="w-2.5 h-2.5 rounded-full bg-clay/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-sage/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">{b.path}</span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-xl text-ink tracking-tight group-hover:text-sage transition-colors">
                  {b.name}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-sage" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.blurb}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-cream text-ink text-sm font-medium hover:border-sage/40 transition-colors"
        >
          Invite
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Collaborate%20with%20Faiyaz`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-cream text-ink text-sm font-medium hover:border-sage/40 transition-colors"
        >
          Collaborate
        </a>
      </div>
    </motion.section>
  )
}
