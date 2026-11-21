'use client'

import { stats } from '@/lib/content'
import { Reveal } from '@/components/cinematic/motion'

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 border-y border-white/5 profile-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="section-eyebrow mb-6" style={{ color: 'var(--profile-accent)' }}>
            Snapshot
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-6 md:gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                {s.value}
                <span style={{ color: 'var(--profile-accent)' }}>{s.suffix}</span>
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8B8B8] mt-3">
                {s.label}
              </p>
              <p className="hidden sm:block text-sm text-[#B8B8B8] mt-1">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
