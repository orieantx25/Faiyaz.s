'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useProfile } from '@/lib/ProfileContext'

export default function ChapterDock() {
  const { profile: audience } = useProfile()
  const chapters = useMemo(
    () => (audience?.nav || []).filter((c) => c.id !== 'top'),
    [audience?.nav]
  )
  const [active, setActive] = useState(chapters[0]?.id || 'top')
  const accent = audience?.accent || '#E50914'

  useEffect(() => {
    const ids = ['top', ...chapters.map((c) => c.id)]
    const onScroll = () => {
      let current = 'top'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= window.innerHeight * 0.35) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [chapters])

  if (!chapters.length) return null

  return (
    <nav
      className="hidden md:flex fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2"
      aria-label="Chapter navigation"
    >
      {chapters.map((c) => {
        const isActive = active === c.id
        return (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group flex items-center justify-end gap-2"
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className={`font-mono text-[9px] tracking-wider uppercase transition-all ${
                isActive
                  ? 'opacity-100 text-white translate-x-0'
                  : 'opacity-0 translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-[#B8B8B8]'
              }`}
            >
              {c.label}
            </span>
            <motion.span
              layout
              className="block rounded-full transition-all"
              style={{
                width: isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                background: isActive ? accent : 'rgba(255,255,255,0.35)',
              }}
            />
          </a>
        )
      })}
    </nav>
  )
}
