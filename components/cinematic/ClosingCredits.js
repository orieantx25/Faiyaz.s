'use client'

import { motion } from 'framer-motion'
import { profile } from '@/lib/content'
import { useProfile } from '@/lib/ProfileContext'
import { Magnetic, Reveal } from '@/components/cinematic/motion'
import { SEQUENCE } from '@/lib/media'

const ease = [0.16, 1, 0.3, 1]

const FALLBACK = {
  eyebrow: 'end titles',
  title: ["Let's build", 'the next signal'],
  blurb: profile.tagline,
  primary: 'resume',
  tagline: 'To be continued',
}

function CreditsBackdrop({ accent, profileId }) {
  if (profileId === 'you') {
    return (
      <>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 40% at 50% 50%, ${accent}22, transparent 65%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] opacity-[0.28]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SEQUENCE(110)} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/55 to-transparent" />
        </div>
      </>
    )
  }

  if (profileId === 'recruiter') {
    return (
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 50% 70%, rgba(91,159,212,0.16), transparent 70%),
            linear-gradient(180deg, #07090c 0%, #090909 55%, #0a1018 100%)
          `,
        }}
      />
    )
  }

  if (profileId === 'client') {
    return (
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 75%, rgba(45,212,191,0.18), transparent 68%),
            linear-gradient(180deg, #041311 0%, #090909 50%, #06201c 100%)
          `,
        }}
      />
    )
  }

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 50% 50%, ${accent}22, transparent 65%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] opacity-[0.24]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/diagrams/diagram-dbrief.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/55 to-transparent" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(229,9,20,0.28), transparent 70%)',
        }}
      />
    </>
  )
}

export default function ClosingCredits() {
  const { profile: audience } = useProfile()
  const end = audience?.endCredits || FALLBACK
  const accent = audience?.accent || '#E50914'
  const [line1, line2] = end.title

  const actions = [
    {
      id: 'resume',
      href: profile.resume,
      label: 'Download resume',
      external: false,
    },
    {
      id: 'linkedin',
      href: profile.linkedin,
      label: 'LinkedIn',
      external: true,
    },
    {
      id: 'github',
      href: profile.github,
      label: 'GitHub',
      external: true,
    },
    {
      id: 'email',
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
      label: 'Email',
      external: true,
    },
  ]

  const ordered = [
    ...actions.filter((a) => a.id === end.primary),
    ...actions.filter((a) => a.id !== end.primary),
  ]

  return (
    <section
      id="credits"
      className="cinema-reveal relative min-h-[90svh] flex flex-col items-center justify-center film-grain bg-[#090909] border-t border-white/5 px-4 py-24 text-center"
    >
      <CreditsBackdrop accent={accent} profileId={audience?.id} />

      <Reveal className="section-eyebrow mb-6 relative z-[1]">
        <span style={{ color: accent }}>{end.eyebrow}</span>
      </Reveal>

      <motion.h2
        key={audience?.id || 'guest'}
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
        className="font-display text-[clamp(3rem,12vw,7rem)] text-white relative z-[1] leading-[0.9]"
      >
        {line1}
        <br />
        {line2}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-6 text-[#B8B8B8] max-w-md relative z-[1]"
      >
        {end.blurb}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="mt-10 flex flex-wrap justify-center gap-3 relative z-[1]"
      >
        {ordered.map((a, i) => (
          <Magnetic key={a.id} strength={i === 0 ? 18 : 12}>
            <a
              href={a.href}
              className={i === 0 ? 'btn-netflix' : 'btn-ghost-dark'}
              style={i === 0 ? { background: accent } : undefined}
              {...(a.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {a.label}
            </a>
          </Magnetic>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.35, 1, 0.35] }}
        viewport={{ once: true }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-20 font-display text-2xl sm:text-3xl tracking-[0.2em] relative z-[1]"
        style={{ color: accent }}
      >
        {end.tagline}
      </motion.p>
    </section>
  )
}
