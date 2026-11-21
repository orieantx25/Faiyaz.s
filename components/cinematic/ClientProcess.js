'use client'

import { clientProcess } from '@/lib/audienceContent'
import { Reveal, HoverLift } from '@/components/cinematic/motion'

export default function ClientProcess() {
  return (
    <section id="process" className="py-20 md:py-28 border-t border-white/5 profile-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3" style={{ color: 'var(--profile-accent)' }}>
            {clientProcess.eyebrow}
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-10">{clientProcess.title}</h2>
        </Reveal>
        <div className="process-row grid md:grid-cols-4 gap-4 items-stretch">
          {clientProcess.steps.map((s, i) => (
            <HoverLift key={s.n} className="h-full">
              <Reveal delay={i * 0.07} className="h-full">
                <div className="card-surface rounded-lg p-5 h-full min-h-[220px] flex flex-col relative overflow-hidden group">
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-80"
                    style={{ background: 'var(--profile-accent)' }}
                  />
                  <p className="font-data text-sm mb-3" style={{ color: 'var(--profile-accent)' }}>
                    {s.n}
                  </p>
                  <h3 className="font-heading text-xl text-white mb-2 group-hover:translate-x-0.5 transition-transform">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            </HoverLift>
          ))}
        </div>
      </div>
    </section>
  )
}
