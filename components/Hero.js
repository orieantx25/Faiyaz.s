'use client'

import { motion } from 'framer-motion'
import { profile } from '@/lib/content'
import SignalPlane from '@/components/SignalPlane'

const ease = [0.16, 1, 0.3, 1]
const [firstName, ...rest] = profile.name.split(' ')
const lastName = rest.join(' ')

export default function Hero({ ready = true }) {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-void bg-mesh-dark"
    >
      <SignalPlane ready={ready} />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-16 pt-28 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={ready ? { opacity: 1, scaleX: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease }}
          className="origin-left h-px w-24 mb-8 bg-signal/70"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.65, ease }}
          className="section-eyebrow text-white/40 mb-5"
        >
          {profile.location} · data → decision
        </motion.p>

        <motion.h1
          id="hero-name"
          initial={{ opacity: 0, y: 40 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.95, delay: 0.05, ease }}
          className="font-display text-[clamp(3.4rem,13vw,8rem)] leading-[0.88] text-white tracking-tight max-w-5xl"
        >
          <span className="block">{firstName}</span>
          <span className="block text-white/90">
            {lastName}
            <span className="text-signal">.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease }}
          className="mt-7 max-w-lg text-base sm:text-lg text-white/58 leading-relaxed font-light"
        >
          <span className="text-signal font-display text-lg sm:text-xl tracking-tight not-italic font-semibold">
            {profile.headline}
          </span>
          <span className="block mt-2">{profile.tagline}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#year" className="btn-primary">
            Scroll the year
          </a>
          <a href="#building" className="btn-ghost">
            What I&apos;m shipping
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-14 md:mt-16 flex items-center gap-3 text-white/30"
          aria-hidden="true"
        >
          <span className="signal-dot w-1.5 h-1.5 rounded-full bg-signal" />
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase">
            Enter the story
          </span>
        </motion.div>
      </div>
    </section>
  )
}
