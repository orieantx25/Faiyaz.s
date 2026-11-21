'use client'

import { ArrowUpRight } from 'lucide-react'
import { builds } from '@/lib/content'
import { Reveal, HoverLift } from '@/components/cinematic/motion'
import { diagramForProject } from '@/lib/media'
import SystemDiagram from '@/components/cinematic/SystemDiagram'

export default function BuildsRail() {
  return (
    <section id="builds" className="py-20 md:py-24 border-t border-white/5 profile-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3" style={{ color: 'var(--profile-accent)' }}>
            live builds
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-8">Shipping in public</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {builds.map((b, i) => {
            const poster = b.diagram ? diagramForProject(b.diagram) : null
            return (
            <HoverLift key={b.name} className="h-full">
              <Reveal delay={i * 0.06} className="h-full">
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-lg overflow-hidden border border-white/10 bg-[#171717]"
                >
                  <div className="h-48 relative overflow-hidden shrink-0">
                    {poster ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={poster}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <SystemDiagram title={b.diagram || b.name} className="h-full w-full" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent" />
                    {b.status && (
                      <span
                        className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-1 rounded border border-white/15 bg-black/50"
                        style={{ color: 'var(--profile-accent)' }}
                      >
                        {b.status}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-1 items-start justify-between gap-2">
                    <div>
                      <p className="font-mono text-[10px] text-[#B8B8B8] mb-1">{b.path}</p>
                      <h3 className="font-heading text-lg text-white group-hover:text-[color:var(--profile-accent)] transition-colors">
                        {b.name}
                      </h3>
                      <p className="text-sm text-[#B8B8B8] mt-1">{b.blurb}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[color:var(--profile-accent)] shrink-0" />
                  </div>
                </a>
              </Reveal>
            </HoverLift>
            )
          })}
        </div>
      </div>
    </section>
  )
}
