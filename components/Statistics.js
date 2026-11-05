'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/content'

export default function Statistics() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-void bg-mesh-dark">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(600px 200px at 20% 50%, hsl(168 78% 34% / 0.18), transparent 70%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-3 gap-6 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-center md:text-left"
            >
              <p className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                {s.value}
                <span className="text-signal">{s.suffix}</span>
              </p>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-white/40 mt-3">
                {s.label}
              </p>
              <p className="hidden sm:block text-sm text-white/45 mt-2 leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
