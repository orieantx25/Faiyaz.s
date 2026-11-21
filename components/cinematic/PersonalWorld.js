'use client'

import { personalWorld } from '@/lib/audienceContent'
import { SEQUENCE } from '@/lib/media'
import { Reveal, HoverLift, ClipImage } from '@/components/cinematic/motion'

export default function PersonalWorld() {
  return (
    <section id="personal" className="py-20 md:py-28 border-t border-white/5 profile-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 items-start">
          <div>
            <Reveal>
              <p className="section-eyebrow mb-3" style={{ color: 'var(--profile-accent)' }}>
                {personalWorld.eyebrow}
              </p>
              <h2 className="font-display text-5xl sm:text-7xl text-white mb-4 leading-[0.95]">
                {personalWorld.title}
              </h2>
              <p className="text-[#B8B8B8] text-lg leading-relaxed max-w-xl">{personalWorld.lead}</p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {personalWorld.traits.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.06}>
                  <article className="border-l-2 pl-5 py-2" style={{ borderColor: 'var(--profile-accent)' }}>
                    <h3 className="font-heading text-xl text-white mb-1">{t.title}</h3>
                    <p className="text-sm text-[#B8B8B8] leading-relaxed">{t.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#B8B8B8] mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {personalWorld.interests.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs border text-white/85"
                    style={{
                      borderColor: 'color-mix(in srgb, var(--profile-accent) 45%, transparent)',
                      background: 'var(--profile-accent-soft)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-3">
            <ClipImage src={SEQUENCE(30)} alt="" className="rounded-lg h-48 col-span-2 border border-white/10" />
            <ClipImage src={SEQUENCE(60)} alt="" className="rounded-lg h-36 border border-white/10" />
            <ClipImage src={SEQUENCE(95)} alt="" className="rounded-lg h-36 border border-white/10" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
