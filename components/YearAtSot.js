'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'framer-motion'
import { yearAtSot } from '@/lib/content'
import MockProduct from '@/components/MockProduct'

const ease = [0.16, 1, 0.3, 1]

function YearHeader() {
  return (
    <div className="mb-8 md:mb-10 max-w-2xl">
      <p className="section-eyebrow text-signal/80 mb-3">{yearAtSot.eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.02]">
        {yearAtSot.title}
      </h2>
      <p className="mt-4 text-white/50 leading-relaxed max-w-xl text-base sm:text-lg">
        {yearAtSot.lead}
      </p>
    </div>
  )
}

function ChapterBody({ chapter, chapters, active, onSelect }) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {chapters.map((c, i) => (
          <button
            key={c.id}
            type="button"
            aria-label={`Chapter ${c.phase}`}
            onClick={() => onSelect?.(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-10 bg-signal' : 'w-3 bg-white/20 hover:bg-white/35'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={chapter.id}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease }}
        >
          <p className="font-mono text-signal text-sm mb-3">{chapter.phase}</p>
          <h3 className="font-display text-2xl sm:text-3xl text-white tracking-tight mb-4">
            {chapter.title}
          </h3>
          <p className="text-white/60 leading-relaxed text-base sm:text-lg">{chapter.body}</p>
        </motion.div>
      </AnimatePresence>

      <p className="mt-8 font-mono text-[10px] text-white/30 leading-relaxed max-w-sm">
        {yearAtSot.disclaimer}
      </p>
    </div>
  )
}

export default function YearAtSot() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(false)
  const chapters = yearAtSot.chapters

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (reduced) return

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinRef.current,
        scrub: 0.85,
        onUpdate: (self) => {
          const i = Math.min(
            chapters.length - 1,
            Math.floor(self.progress * chapters.length)
          )
          setActive(i)
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [chapters.length, reduced])

  const chapter = chapters[active]

  if (reduced) {
    return (
      <section id="year" className="relative bg-void bg-mesh-dark py-24 md:py-32">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-16">
          <YearHeader />
          <div className="space-y-16">
            {chapters.map((c) => (
              <div
                key={c.id}
                className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center"
              >
                <div>
                  <p className="font-mono text-signal text-sm mb-3">{c.phase}</p>
                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-tight mb-4">
                    {c.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-base sm:text-lg">{c.body}</p>
                </div>
                <MockProduct variant={c.mock} />
              </div>
            ))}
          </div>
          <p className="mt-12 font-mono text-[10px] text-white/30 leading-relaxed max-w-sm">
            {yearAtSot.disclaimer}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="year"
      ref={sectionRef}
      className="relative bg-void"
      style={{ height: `${chapters.length * 85}vh` }}
    >
      <div
        ref={pinRef}
        className="h-screen w-full flex items-center bg-void bg-mesh-dark overflow-hidden"
      >
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-16 py-20 md:py-24">
          <YearHeader />

          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
            <ChapterBody
              chapter={chapter}
              chapters={chapters}
              active={active}
              onSelect={setActive}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.mock}
                initial={{ opacity: 0, scale: 0.97, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -12 }}
                transition={{ duration: 0.5, ease }}
                className="max-h-[min(58vh,560px)] overflow-y-auto overflow-x-hidden pr-1"
              >
                <MockProduct variant={chapter.mock} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
