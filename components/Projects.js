'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects, experience, skillGroups } from '@/lib/content'

const featured = projects.filter((p) => p.featured)
const more = projects.filter((p) => !p.featured).slice(0, 4)

export default function Projects() {
  return (
    <section id="projects" className="relative bg-atmosphere border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-14"
        >
          <p className="section-eyebrow mb-4">selected signal</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink tracking-tight">
            Things I&apos;ve made that prove the story
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Not a CV dump — chapters where craft met a real question.
          </p>
        </motion.div>

        <div className="space-y-6 mb-20">
          {featured.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-cream"
            >
              <div className="grid md:grid-cols-[1.1fr_0.9fr]">
                <div className="p-6 sm:p-8 md:p-10">
                  <p className="font-mono text-[11px] text-signal mb-3">{p.category}</p>
                  <h3 className="font-display text-2xl sm:text-3xl text-ink tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{p.fullDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-signal transition"
                    >
                      Open live <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <p className="font-mono text-[11px] text-muted-foreground">{p.metrics}</p>
                  )}
                </div>
                <div className="relative min-h-[200px] md:min-h-full bg-void bg-mesh-dark p-6 flex items-end">
                  <div className="w-full">
                    <p className="font-mono text-[10px] text-white/40 mb-2">{p.path}</p>
                    <p className="font-display text-xl text-white/90 tracking-tight">{p.metrics}</p>
                    <div className="mt-6 h-24 flex items-end gap-1.5 opacity-80">
                      {[40, 65, 48, 78, 55, 88, 62, 70].map((h, idx) => (
                        <div
                          key={idx}
                          className="flex-1 rounded-sm bg-gradient-to-t from-signal/80 to-signal/15"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mb-20">
          <p className="section-eyebrow mb-6">also in the lab</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {more.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-cream/80 p-5">
                <h3 className="font-display text-lg text-ink tracking-tight mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="path" className="mb-16">
          <p className="section-eyebrow mb-4">the path</p>
          <h3 className="font-display text-2xl sm:text-3xl text-ink tracking-tight mb-8">
            Roles as chapters — not a LinkedIn mirror
          </h3>
          <div className="space-y-0 border-t border-border">
            {experience.map((company) =>
              company.roles.map((role) => (
                <div
                  key={`${company.company}-${role.role}`}
                  className="py-6 border-b border-border grid sm:grid-cols-[1fr_auto] gap-2"
                >
                  <div>
                    <p className="font-display text-lg text-ink tracking-tight">{role.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {company.company} · {company.location}
                    </p>
                  </div>
                  <p className="font-mono text-[11px] text-muted-foreground sm:text-right">
                    {role.period}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        <div id="skills">
          <p className="section-eyebrow mb-6">tools in the kit</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <p className="font-display text-sm text-ink mb-3">{g.label}</p>
                <ul className="space-y-1.5">
                  {g.skills.map((s) => (
                    <li key={s} className="font-mono text-[12px] text-muted-foreground">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
