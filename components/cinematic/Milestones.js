'use client'

import { milestones } from '@/lib/audienceContent'
import { Reveal, HoverLift } from '@/components/cinematic/motion'

export default function Milestones() {
  return (
    <section id="milestones" className="py-20 md:py-24 border-t border-white/5 profile-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3" style={{ color: 'var(--profile-accent)' }}>
            {milestones.eyebrow}
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-10">{milestones.title}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.items.map((m, i) => (
            <HoverLift key={m.title}>
              <Reveal delay={i * 0.05}>
                <div className="card-surface rounded-lg p-5 h-full hover:border-[color:var(--profile-accent)]/40 transition-colors">
                  <p className="font-data text-xs mb-2" style={{ color: 'var(--profile-accent)' }}>
                    {m.year}
                  </p>
                  <h3 className="font-heading text-lg text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed">{m.body}</p>
                </div>
              </Reveal>
            </HoverLift>
          ))}
        </div>
      </div>
    </section>
  )
}
