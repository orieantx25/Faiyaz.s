'use client'

import { motion } from 'framer-motion'
import { craft, learnings, yearAtSot } from '@/lib/content'
import { STORY_FRAMES } from '@/lib/media'
import { Reveal, ClipImage, HoverLift, easeOut } from '@/components/cinematic/motion'

export default function StoryStrip() {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#090909] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-end mb-14">
          <Reveal>
            <p className="section-eyebrow mb-3">the story</p>
            <h2 className="font-display text-5xl sm:text-7xl text-white mb-4 max-w-3xl leading-[0.95]">
              {yearAtSot.title}
            </h2>
            <p className="text-[#B8B8B8] max-w-2xl leading-relaxed">{yearAtSot.lead}</p>
          </Reveal>
          <Reveal delay={0.12} className="grid grid-cols-3 gap-2">
            {STORY_FRAMES.map((src, i) => (
              <ClipImage
                key={src}
                src={src}
                alt=""
                className={`rounded-md border border-white/10 h-28 sm:h-36 ${i === 1 ? 'translate-y-4' : ''}`}
              />
            ))}
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {craft.points.map((p, i) => (
            <HoverLift key={p.title}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: easeOut }}
                className="card-surface rounded-lg p-5 h-full group hover:border-[color:var(--profile-accent)]/40 transition-colors relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(400px 120px at 0% 0%, rgba(229,9,20,0.12), transparent 60%)',
                  }}
                />
                <div className="relative">
                  <p className="font-data text-xs mb-2" style={{ color: 'var(--profile-accent)' }}>
                    0{i + 1}
                  </p>
                  <h3 className="font-heading text-xl text-white mb-2 group-hover:text-[color:var(--profile-accent)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            </HoverLift>
          ))}
        </div>

        <Reveal>
          <h3 className="font-heading text-2xl text-white mb-6">{learnings.title}</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {learnings.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="border-t border-white/10 py-5 group hover:border-[color:var(--profile-accent)]/35 transition-colors">
                <p className="font-data text-[10px] mb-1" style={{ color: 'var(--profile-accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h4 className="font-heading text-lg text-white mb-1 group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h4>
                <p className="text-sm text-[#B8B8B8] leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
