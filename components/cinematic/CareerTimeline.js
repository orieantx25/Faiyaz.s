'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award } from 'lucide-react'
import { experience, education, certifications, skillGroups } from '@/lib/content'
import { useProfile } from '@/lib/ProfileContext'
import { Reveal, HoverLift, easeOut } from '@/components/cinematic/motion'

const ease = easeOut

function GuestCertifications() {
  return (
    <div className="mt-16 md:col-span-2">
      <Reveal>
        <p className="section-eyebrow mb-2" style={{ color: 'var(--profile-accent)' }}>
          bonus features
        </p>
        <h3 className="font-display text-4xl sm:text-5xl text-white">The credential reel</h3>
        <p className="text-sm text-[#B8B8B8] mt-2 max-w-lg">
          Six stills from 2024. Analytics, BI, and AI, framed as credits.
        </p>
      </Reveal>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-[#101010]">
              <div className="flex justify-between px-3 py-2 bg-black">
                {Array.from({ length: 8 }).map((_, hole) => (
                  <span key={hole} className="h-2.5 w-2.5 rounded-full bg-[#1c1c1c] ring-1 ring-white/15" />
                ))}
              </div>
              <div className="flex flex-1 flex-col px-5 py-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-5xl leading-none text-[#E50914]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">
                    {c.year}
                  </span>
                </div>
                <h4 className="mt-6 font-heading text-lg text-white leading-snug">{c.title}</h4>
                <p className="mt-auto pt-4 text-xs tracking-wide text-[#B8B8B8]">{c.issuer}</p>
              </div>
              <div className="flex justify-between px-3 py-2 bg-black">
                {Array.from({ length: 8 }).map((_, hole) => (
                  <span key={hole} className="h-2.5 w-2.5 rounded-full bg-[#1c1c1c] ring-1 ring-white/15" />
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function CertificationsBlock({ recruiter }) {
  if (recruiter) {
    return (
      <div className="mt-10 md:col-span-2">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <p className="section-eyebrow mb-2" style={{ color: 'var(--profile-accent)' }}>
                credentials
              </p>
              <h3 className="font-heading text-2xl sm:text-3xl text-white">Certifications</h3>
              <p className="text-sm text-[#B8B8B8] mt-1 max-w-lg">
                Verified learning signals - analytics, BI, and AI literacy for hiring screens.
              </p>
            </div>
            <p className="font-data text-xs hidden sm:block" style={{ color: 'var(--profile-accent)' }}>
              {certifications.length} listed · {certifications[0]?.year || '2024'}
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((c, i) => (
            <HoverLift key={c.title}>
              <Reveal delay={i * 0.04}>
                <article className="h-full rounded-lg border border-white/10 bg-[#121212] p-4 relative overflow-hidden group hover:border-[color:var(--profile-accent)]/45 transition-colors">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 opacity-80"
                    style={{ background: 'var(--profile-accent)' }}
                  />
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/10"
                      style={{ background: 'var(--profile-accent-soft)' }}
                    >
                      <Award className="w-3.5 h-3.5" style={{ color: 'var(--profile-accent)' }} />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/50">
                      {c.year}
                    </span>
                  </div>
                  <h4 className="font-heading text-base text-white leading-snug group-hover:text-[color:var(--profile-accent)] transition-colors">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#B8B8B8]">{c.issuer}</p>
                </article>
              </Reveal>
            </HoverLift>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <h3 className="font-heading text-2xl text-white mt-8 mb-4">Certifications</h3>
      <ul className="space-y-2">
        {certifications.map((c) => (
          <li key={c.title} className="text-sm text-[#B8B8B8]">
            <span className="text-white">{c.title}</span> - {c.issuer} ({c.year})
          </li>
        ))}
      </ul>
    </>
  )
}

export default function CareerTimeline({ showSkills = true }) {
  const [open, setOpen] = useState(null)
  const { profile: audience } = useProfile()
  const isRecruiter = audience?.id === 'recruiter'
  const isGuest = audience?.id === 'guest'

  return (
    <section id="career" className="relative py-20 md:py-28 bg-[#090909] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3" style={{ color: 'var(--profile-accent, #E50914)' }}>
            career
          </p>
          <h2 className="font-display text-5xl sm:text-7xl text-white mb-3">
            {isRecruiter ? 'Experience ledger' : 'Experience'}
          </h2>
          <p className="text-[#B8B8B8] max-w-xl mb-12">
            Vertical timeline - expand any role for contributions and highlights.
          </p>
        </Reveal>

        <div className="relative border-l border-white/10 ml-3 sm:ml-4 space-y-0">
          {experience.map((company, ci) =>
            company.roles.map((role, ri) => {
              const key = `${company.company}-${role.role}-${ri}`
              const isOpen = open === key
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: (ci + ri) * 0.04, ease }}
                  className="relative pl-8 sm:pl-10 py-6"
                >
                  <span
                    className="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full ring-4 ring-[#090909]"
                    style={{ background: 'var(--profile-accent)' }}
                  />
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="w-full text-left group"
                    aria-expanded={isOpen}
                  >
                    <p className="font-data text-xs mb-1" style={{ color: 'var(--profile-accent)' }}>
                      {role.period}
                    </p>
                    <h3 className="font-heading text-xl sm:text-2xl text-white group-hover:text-[color:var(--profile-accent)] transition">
                      {role.role}
                    </h3>
                    <p className="text-[#B8B8B8] mt-1">
                      {company.company} · {company.location}
                    </p>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-[#B8B8B8] leading-relaxed text-sm sm:text-base">
                          {role.description}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {role.highlights.map((h) => (
                            <li key={h} className="text-sm text-white/80 flex gap-2">
                              <span style={{ color: 'var(--profile-accent)' }}>▸</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })
          )}
        </div>

        {showSkills && (
          <div id="skills" className="mt-16 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading text-2xl text-white mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((e) => (
                  <div key={e.institution} className="card-surface rounded-lg p-4">
                    <p className="font-heading text-white">{e.degree}</p>
                    <p className="text-sm text-[#B8B8B8] mt-1">
                      {e.institution} · {e.field}
                    </p>
                    <p className="font-data text-xs mt-2" style={{ color: 'var(--profile-accent)' }}>
                      {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-white mb-4">Skills</h3>
              <div className="space-y-4">
                {skillGroups.map((g) => (
                  <div key={g.label}>
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#B8B8B8] mb-2">
                      {g.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 text-xs rounded border border-white/10 text-white/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {!isRecruiter && !isGuest && <CertificationsBlock recruiter={false} />}
            </div>
            {isRecruiter && <CertificationsBlock recruiter />}
            {isGuest && <GuestCertifications />}
          </div>
        )}
      </div>
    </section>
  )
}
