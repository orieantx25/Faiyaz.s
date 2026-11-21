'use client'

import { recruiterBrief } from '@/lib/audienceContent'
import { profile } from '@/lib/content'
import { Reveal, Magnetic } from '@/components/cinematic/motion'

export default function RecruiterBrief() {
  return (
    <section id="brief" className="py-20 md:py-28 border-t border-white/5 profile-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <Reveal>
            <p className="section-eyebrow mb-3" style={{ color: 'var(--profile-accent)' }}>
              {recruiterBrief.eyebrow}
            </p>
            <h2 className="font-display text-5xl sm:text-7xl text-white mb-5 leading-[0.95]">
              {recruiterBrief.title}
            </h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed max-w-2xl mb-8">
              {recruiterBrief.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <a href={profile.resume} className="btn-netflix" style={{ background: 'var(--profile-accent)' }}>
                  Download resume
                </a>
              </Magnetic>
              <Magnetic strength={12}>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark"
                >
                  LinkedIn
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-3">
            {recruiterBrief.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-lg p-4 border border-white/10"
                style={{ background: 'var(--profile-accent-soft)' }}
              >
                <p className="font-mono text-[10px] tracking-wider uppercase text-[#B8B8B8] mb-2">
                  {h.label}
                </p>
                <p className="font-heading text-lg text-white leading-snug">{h.value}</p>
                <p className="text-xs text-[#B8B8B8] mt-1">{h.hint}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
