'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/lib/content'
import { useProfile } from '@/lib/ProfileContext'

export default function CinematicNav() {
  const { profile: audience, openGate } = useProfile()
  const [scrolled, setScrolled] = useState(false)
  const accent = audience?.accent || '#E50914'
  const links = audience?.nav || [
    { id: 'top', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'credits', label: 'Credits' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#090909]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-14 md:h-16 flex items-center justify-between gap-4">
        <a href="#top" className="font-display text-xl tracking-wide text-white shrink-0">
          {profile.name.split(' ')[0]}
          <span style={{ color: accent }}>.</span>
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-heading text-xs tracking-wide text-[#B8B8B8] hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {audience && (
            <button
              type="button"
              onClick={openGate}
              className="font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded border text-[#B8B8B8] hover:text-white transition"
              style={{ borderColor: `${accent}66` }}
            >
              {audience.label.split(' ')[0]}
            </button>
          )}
          <a
            href={profile.resume}
            className="hidden sm:inline-flex btn-netflix !py-2 !px-4 text-xs"
            style={{ background: accent }}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
