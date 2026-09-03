'use client'

import { motion } from 'framer-motion'
import { profile, stats } from '@/lib/content'

export default function Hero({ ready = true }) {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-atmosphere bg-grid"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-16 pt-28 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs sm:text-sm tracking-[0.22em] uppercase text-muted-foreground mb-8"
        >
          data → decision · {profile.location}
        </motion.p>

        <motion.h1
          id="hero-name"
          initial={{ opacity: 0, y: 28 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[1.05] mb-5"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-ink/80 tracking-tight mb-4"
        >
          {profile.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          {profile.tagline}
          <br />
          {profile.taglineRest}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream text-sm font-medium hover:bg-ink/90 transition-colors"
          >
            See the work
          </a>
          <a
            href="#building"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-cream text-ink text-sm font-medium hover:border-sage/40 transition-colors"
          >
            Building something
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto border-t border-border pt-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-mono text-2xl sm:text-3xl text-ink tracking-tight">
                {s.value}
                {s.suffix}
              </p>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
