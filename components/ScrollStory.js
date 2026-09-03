'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { craft } from '@/lib/content'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollStory() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const [active, setActive] = useState(0)
  const points = craft.points

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinRef.current,
        scrub: 1,
        onUpdate: (self) => {
          const i = Math.min(
            points.length - 1,
            Math.floor(self.progress * points.length)
          )
          setActive(i)
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [points.length])

  return (
    <section
      id="craft"
      ref={sectionRef}
      className="relative"
      style={{ height: `${points.length * 100}vh` }}
    >
      <div
        ref={pinRef}
        className="h-screen w-full flex items-center bg-atmosphere"
      >
        <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-16 pt-24 md:pt-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-sm">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground mb-5">
                how I work
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Product-style analytics work across BI, internal tools, and AI-assisted
                shipping. Scroll through each layer.
              </p>
            </div>

            <div className="min-h-[360px] sm:min-h-[420px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={points[active].title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div className="code-chrome">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/50">
                      <span className="w-2.5 h-2.5 rounded-full bg-clay/50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-sage/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
                      <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                        {points[active].code}
                      </span>
                    </div>

                    <div className="p-6 sm:p-8 md:p-10">
                      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-sage mb-4">
                        Feature {String(active + 1).padStart(2, '0')}
                      </p>
                      <h2 className="text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight mb-5 max-w-3xl text-balance">
                        {points[active].title}
                      </h2>
                      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
                        {points[active].body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 mt-10">
            {points.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  active === i ? 'w-8 bg-ink' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
