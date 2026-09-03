'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { stats } from '@/lib/content'

function CountUp({ end, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      setCount(0)
      return
    }
    let startTime
    const duration = 1600
    const animate = (now) => {
      if (!startTime) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const value = end * eased
      setCount(end % 1 === 0 ? Math.floor(value) : Number(value.toFixed(1)))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, inView])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Statistics() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true })

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24 border-t border-border"
    >
      <div className="mb-12 max-w-xl">
        <p className="font-mono text-xs tracking-[0.22em] uppercase text-muted-foreground mb-3">
          metrics
        </p>
        <h2 className="text-3xl sm:text-4xl text-ink tracking-tight mb-2">Impact in brief</h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Dashboards, hubs, and analysis loops shipped.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="border-t border-border pt-5">
            <div className="font-mono text-4xl md:text-5xl text-ink tracking-tight mb-2">
              <CountUp end={stat.value} suffix={stat.suffix} inView={inView} />
            </div>
            <div className="text-sm font-medium text-ink/80 mb-1">{stat.label}</div>
            <div className="text-xs text-muted-foreground leading-relaxed">{stat.description}</div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
