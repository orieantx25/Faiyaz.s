'use client'

import { yearAtSot } from '@/lib/content'
import { Reveal } from '@/components/cinematic/motion'

export default function GuestEpisodes() {
  return (
    <section id="episodes" className="py-16 md:py-24 border-t border-white/5 profile-section cinema-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#E50914] mb-3">Episodes</p>
          <h2 className="font-display text-5xl sm:text-7xl text-white mb-8">The year, as a series</h2>
        </Reveal>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x" style={{ scrollbarWidth: 'none' }}>
          {yearAtSot.chapters.map((ch) => (
            <article
              key={ch.id}
              className="snap-start shrink-0 w-[260px] sm:w-[300px] min-h-[220px] bg-[#141414] border border-white/10 p-5 hover:border-[#E50914]/60 transition-colors"
            >
              <p className="font-data text-xs text-[#E50914] mb-3">EP {ch.phase}</p>
              <h3 className="font-heading text-xl text-white mb-2">{ch.title}</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed line-clamp-4">{ch.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
