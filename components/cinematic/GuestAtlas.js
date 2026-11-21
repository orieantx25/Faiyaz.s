'use client'

import { guestAtlas } from '@/lib/audienceContent'
import { Reveal } from '@/components/cinematic/motion'

export default function GuestAtlas() {
  return (
    <section id="atlas" className="py-16 md:py-24 border-t border-white/5 profile-section cinema-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#E50914] mb-3">Channels</p>
          <h2 className="font-display text-5xl sm:text-7xl text-white mb-8">{guestAtlas.title}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {guestAtlas.tiles.map((t, i) => (
            <a
              key={t.id}
              href={`#${t.id === 'story' ? 'episodes' : t.id}`}
              className="group relative min-h-[140px] overflow-hidden border border-white/10 bg-[#141414] p-5 hover:scale-[1.03] hover:border-[#E50914] hover:z-10 transition-transform duration-300"
            >
              <p className="font-data text-[10px] text-[#E50914] mb-2">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="font-display text-4xl text-white leading-none group-hover:text-[#E50914] transition-colors">
                {t.label}
              </h3>
              <p className="text-sm text-[#B8B8B8] mt-3">{t.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
