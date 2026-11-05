'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { craft } from '@/lib/content'
import { motion, AnimatePresence } from 'framer-motion'
import CraftStage, { CraftSignalRail } from '@/components/CraftStage'

const ease = [0.16, 1, 0.3, 1]

function CraftCopy({ active, points }) {
  return (
    <div className="max-w-md">
      <p className="section-eyebrow mb-5">how signal becomes decision</p>
      <h2 className="font-display text-3xl sm:text-5xl text-ink tracking-tight mb-4 leading-[1.05]">
        {craft.title}
      </h2>
      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{craft.lead}</p>
      <CraftSignalRail active={active} total={points.length} />
    </div>
  )
}

function CraftGraphic({ active, points }) {
  const point = points[active]
  return (
    <div className="min-h-[340px] sm:min-h-[440px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={point.title}
          initial={{ opacity: 0, y: 28, rotateX: 4 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease }}
          className="w-full"
          style={{ transformPerspective: 900 }}
        >
          <CraftStage
            index={active}
            code={point.code}
            title={point.title}
            body={point.body}
            total={points.length}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function ScrollStory() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(false)
  const points = craft.points

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
        scrub: 1,
        onUpdate: (self) => {
          const i = Math.min(points.length - 1, Math.floor(self.progress * points.length))
          setActive(i)
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [points.length, reduced])

  if (reduced) {
    return (
      <section id="craft" className="relative bg-atmosphere bg-mesh py-24 md:py-32">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-16">
          <div className="max-w-md mb-14">
            <p className="section-eyebrow mb-5">how signal becomes decision</p>
            <h2 className="font-display text-3xl sm:text-5xl text-ink tracking-tight mb-4">
              {craft.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{craft.lead}</p>
          </div>
          <div className="space-y-10">
            {points.map((point, i) => (
              <CraftStage
                key={point.title}
                index={i}
                code={point.code}
                title={point.title}
                body={point.body}
                total={points.length}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="craft"
      ref={sectionRef}
      className="relative"
      style={{ height: `${points.length * 100}vh` }}
    >
      <div ref={pinRef} className="h-screen w-full flex items-center bg-atmosphere bg-mesh">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-16 pt-24 md:pt-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <CraftCopy active={active} points={points} />
            <CraftGraphic active={active} points={points} />
          </div>
        </div>
      </div>
    </section>
  )
}
