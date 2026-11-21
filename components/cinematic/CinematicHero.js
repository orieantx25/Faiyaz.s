'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile } from '@/lib/content'
import { useProfile } from '@/lib/ProfileContext'
import { HERO_FRAMES, artForProject } from '@/lib/media'
import { Magnetic, easeOut, usePrefersReducedMotion } from '@/components/cinematic/motion'

const POSTERS = ['DBRIEF', 'InfraNova Labs', 'Pact', 'Analytical Dashboard & Report Hub']

function Ctas({ items, accent }) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {items.map((c) => (
        <Magnetic key={c.label} strength={c.primary ? 18 : 12}>
          <a
            href={c.href}
            className={c.primary ? 'btn-netflix magnetic-btn' : 'btn-ghost-dark magnetic-btn'}
            style={c.primary ? { background: accent, color: c.ink || '#fff' } : undefined}
            {...(c.href.startsWith('http') || c.href.endsWith('.pdf')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {c.label}
          </a>
        </Magnetic>
      ))}
    </div>
  )
}

function YouHero() {
  const { profile: audience } = useProfile()
  const accent = audience?.accent || '#F5C542'
  const sectionRef = useRef(null)
  const [blend, setBlend] = useState({ a: 0, b: 1, t: 0 })
  const reduce = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 38, damping: 32, mass: 1.05, restDelta: 0.0008 })
  const titleY = useTransform(smooth, [0, 1], [0, 80])
  const mediaY = useTransform(smooth, [0, 1], [0, -42])
  const mediaScale = useTransform(smooth, [0, 1], [1, 1.045])

  useEffect(() => {
    HERO_FRAMES.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    if (reduce) return
    gsap.registerPlugin(ScrollTrigger)
    const max = HERO_FRAMES.length - 1
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.6,
        onUpdate: (self) => {
          const raw = self.progress * max
          const a = Math.min(max, Math.floor(raw))
          setBlend({ a, b: Math.min(max, a + 1), t: raw - a })
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section id="top" ref={sectionRef} className="relative min-h-[115svh] flex items-end overflow-hidden film-grain">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, #090909 0%, #090909ee 32%, transparent 72%), radial-gradient(ellipse 70% 60% at 72% 38%, ${accent}48, transparent 58%), #0c0c0c`,
        }}
      />
      <motion.div
        className="absolute right-[-4%] top-[-4%] bottom-[-8%] w-[62%] sm:w-[58%]"
        style={reduce ? undefined : { y: mediaY, scale: mediaScale }}
        data-speed="0.15"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_FRAMES[blend.a]} alt="" className="absolute inset-0 w-full h-full object-cover hero-face" style={{ objectPosition: '64% 26%', opacity: 1 - blend.t }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_FRAMES[blend.b]} alt="" className="absolute inset-0 w-full h-full object-cover hero-face" style={{ objectPosition: '64% 26%', opacity: blend.t }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/40" />
        </div>
      </motion.div>
      <motion.div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 pb-24 pt-32" style={reduce ? undefined : { y: titleY }}>
        <p className="section-eyebrow mb-3" style={{ color: accent }}>Personal cut · YOU</p>
        <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/45 mb-3">{profile.name}</p>
        <h1 className="font-display text-[clamp(2.8rem,9vw,6.5rem)] leading-[0.92] text-white max-w-4xl">{audience?.heroTitle}</h1>
        <p className="mt-5 font-heading text-xl sm:text-2xl max-w-xl" style={{ color: accent }}>{profile.headline}</p>
        <p className="mt-4 max-w-xl text-base sm:text-lg text-[#B8B8B8] leading-relaxed">{audience?.heroBlurb}</p>
        <Ctas accent={accent} items={[{ href: '#personal', label: 'About me', primary: true }, { href: '#milestones', label: 'Milestones' }]} />
      </motion.div>
    </section>
  )
}

function RecruiterHero() {
  const { profile: audience } = useProfile()
  const accent = audience?.accent || '#5B9FD4'
  const chips = [
    { k: 'Product', v: 'Pact · PRDs' },
    { k: 'BI', v: 'CXO Power BI' },
    { k: 'Data', v: 'Pipelines · SQL' },
  ]
  const bars = [38, 62, 44, 86, 52, 96, 40, 74, 58, 90, 46, 78, 34, 68]
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden film-grain bg-[#07090c]">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[58%] overflow-hidden" aria-hidden>
        <div className="signal-floor" />
        <div className="absolute left-[28%] right-[4%] top-[16%] h-[50%] flex items-end justify-between gap-1.5 sm:gap-2">
          {bars.map((h, i) => (
            <span
              key={i}
              className="signal-bar"
              style={{ height: `${h}%`, animationDelay: `${i * 0.14}s` }}
            />
          ))}
        </div>
        <div className="signal-scan" />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#07090c] to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 pb-20 pt-32">
        <p className="font-mono text-[11px] tracking-[0.32em] uppercase mb-4" style={{ color: accent }}>Hiring ledger</p>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-white max-w-3xl">{audience?.heroTitle}</h1>
        <p className="mt-4 font-heading text-lg text-white/90">{profile.role}</p>
        <p className="mt-3 max-w-xl text-[#B8B8B8]">{audience?.heroBlurb}</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl">
          {chips.map((c) => (
            <div key={c.k} className="border border-white/10 bg-[#090909]/70 px-4 py-3">
              <p className="font-mono text-[10px] tracking-widest uppercase text-white/45">{c.k}</p>
              <p className="font-heading text-white mt-1">{c.v}</p>
            </div>
          ))}
        </div>
        <Ctas
          accent={accent}
          items={[
            { href: '#brief', label: 'Summary', primary: true },
            { href: profile.resume, label: 'Resume' },
            { href: profile.linkedin, label: 'LinkedIn' },
          ]}
        />
      </div>
    </section>
  )
}

function ClientHero() {
  const { profile: audience } = useProfile()
  const accent = audience?.accent || '#2DD4BF'
  const sparks = [
    [36, 168], [78, 132], [58, 214], [104, 188], [28, 252], [92, 248], [124, 150], [70, 292],
  ]
  const reel = [
    'Innovative websites',
    'UI design',
    'Data pipelines',
    'Analytical pipeline',
    'CXO boards',
    'Pact-style products',
    'SQL pipelines',
    'n8n automation',
    'PRDs',
  ]

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden film-grain bg-[#041311] flex flex-col">
      <div className="pointer-events-none absolute -right-24 top-10 h-[520px] w-[520px] rounded-full bg-[#2DD4BF]/20 blur-3xl studio-pulse" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 hidden md:flex items-center justify-center border-r border-white/10">
        <p className="font-mono text-[11px] tracking-[0.45em] uppercase text-[#2DD4BF] -rotate-90 whitespace-nowrap">
          Client studio · open for briefs
        </p>
      </div>

      <div className="relative z-10 flex-1 grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16 py-28">
        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: accent }}>
            A build, not a deck
          </p>
          <h1 className="font-display text-[clamp(3.6rem,10vw,8rem)] leading-[0.82] text-white">
            {audience?.heroTitle}
          </h1>
          <p className="mt-6 max-w-md text-[#D1E7E4] text-lg">{audience?.heroBlurb}</p>
          <Ctas
            accent={accent}
            items={[
              { href: '#services', label: 'See the studio', primary: true, ink: '#042f2e' },
              { href: '#credits', label: 'Start a brief' },
            ]}
          />
        </div>

        <div className="relative hidden lg:block h-[460px]" aria-hidden>
          <svg viewBox="0 0 560 460" className="h-full w-full overflow-visible">
            <defs>
              <linearGradient id="launchFade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0" />
                <stop offset="100%" stopColor="#2DD4BF" stopOpacity="1" />
              </linearGradient>
              <filter id="buildGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M70 230 C 150 170, 210 250, 300 210 S 430 160, 530 150"
              fill="none"
              stroke="rgba(45,212,191,0.28)"
              strokeWidth="1.2"
            />

            {sparks.map(([x, y], i) => (
              <circle
                key={`${x}-${y}`}
                className="build-spark"
                cx={x}
                cy={y}
                r={i % 3 === 0 ? 4.5 : 2.6}
                fill="#2DD4BF"
                style={{ animationDelay: `${i * 0.28}s` }}
              />
            ))}

            <g className="build-draw" fill="none" stroke="#99F6E4" strokeWidth="1.4">
              <rect x="168" y="148" width="132" height="150" rx="10" pathLength="100" />
              <path d="M190 200 H250 V250 H300" pathLength="100" />
              <circle cx="190" cy="200" r="4" fill="#2DD4BF" stroke="none" />
              <circle cx="250" cy="200" r="4" fill="#2DD4BF" stroke="none" />
              <circle cx="250" cy="250" r="4" fill="#2DD4BF" stroke="none" />
              <circle cx="300" cy="250" r="4" fill="#2DD4BF" stroke="none" />
            </g>

            <g>
              <rect x="348" y="156" width="108" height="26" rx="6" fill="rgba(45,212,191,0.18)" stroke="#2DD4BF" />
              <rect x="348" y="194" width="108" height="62" rx="8" fill="rgba(45,212,191,0.08)" stroke="#2DD4BF" />
              <rect className="build-bar" x="360" y="210" width="72" height="6" rx="3" fill="#2DD4BF" />
              <rect className="build-bar" x="360" y="226" width="48" height="6" rx="3" fill="#5EEAD4" style={{ animationDelay: '0.35s' }} />
              <rect x="348" y="268" width="108" height="22" rx="6" fill="#2DD4BF" opacity="0.85" />
            </g>

            <g className="build-launch" filter="url(#buildGlow)">
              <path d="M470 168 H540" stroke="url(#launchFade)" strokeWidth="3" strokeLinecap="round" />
              <path d="M482 196 H548" stroke="url(#launchFade)" strokeWidth="2" strokeLinecap="round" />
              <path d="M476 224 H532" stroke="url(#launchFade)" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="540" cy="168" r="4" fill="#ECFDF5" />
            </g>

            <circle r="5" fill="#ECFDF5" filter="url(#buildGlow)">
              <animateMotion dur="6.5s" repeatCount="indefinite" path="M70 230 C 150 170, 210 250, 300 210 S 430 160, 530 150" />
            </circle>
          </svg>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-white/10 py-4">
        <div className="studio-marquee flex w-max gap-10">
          {[...reel, ...reel].map((item, i) => (
            <span key={`${item}-${i}`} className="font-display text-3xl tracking-wide text-white/80">
              {item}
              <span className="mx-6 text-[#2DD4BF]">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function GuestHero() {
  const { profile: audience } = useProfile()
  const accent = '#E50914'
  const row = useRef(null)
  const sectionRef = useRef(null)
  const reduce = usePrefersReducedMotion()

  useEffect(() => {
    if (reduce) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.to(row.current, {
        xPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section id="top" ref={sectionRef} data-pin="billboard" className="relative min-h-[120svh] overflow-hidden film-grain bg-[#090909] flex flex-col justify-end">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,rgba(229,9,20,0.28),transparent_60%)]" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 pt-28 pb-8 max-w-7xl">
        <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-[#E50914] mb-4">Now playing</p>
        <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-[0.82] text-white">{audience?.heroTitle}</h1>
        <p className="mt-5 max-w-lg text-lg text-[#B8B8B8]">{audience?.heroBlurb}</p>
        <Ctas accent={accent} items={[{ href: '#atlas', label: 'Browse channels', primary: true }, { href: '#projects', label: 'All genres' }]} />
      </div>
      <div className="relative z-10 overflow-hidden pb-10">
        <div ref={row} className="flex gap-3 px-4 sm:px-6 lg:px-10 w-max">
          {POSTERS.map((title) => (
            <a key={title} href="#projects" className="relative w-[220px] sm:w-[280px] h-[140px] sm:h-[168px] shrink-0 overflow-hidden border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={artForProject(title)} alt="" className="w-full h-full object-cover" />
              <span className="absolute bottom-2 left-2 right-2 font-heading text-sm text-white drop-shadow">{title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CinematicHero() {
  const { profile: audience } = useProfile()
  const kind = audience?.heroKind || 'catalogue'
  if (kind === 'face') return <YouHero />
  if (kind === 'billboard') return <RecruiterHero />
  if (kind === 'studio') return <ClientHero />
  return <GuestHero />
}
