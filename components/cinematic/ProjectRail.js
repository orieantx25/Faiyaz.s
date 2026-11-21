'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ExternalLink, Play } from 'lucide-react'
import { projects } from '@/lib/content'
import { artForProject } from '@/lib/media'
import { filterProjects } from '@/lib/audienceContent'
import { useProfile } from '@/lib/ProfileContext'
import PactMock from '@/components/PactMock'
import { Reveal, HoverLift, easeOut } from '@/components/cinematic/motion'

function ProjectOverlay({ project, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.dispatchEvent(new CustomEvent('fs-modal', { detail: { open: true } }))
    panelRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      window.dispatchEvent(new CustomEvent('fs-modal', { detail: { open: false } }))
    }
  }, [project])

  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  if (!project) return null
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button type="button" className="absolute inset-0 bg-black/85" aria-label="Close" onClick={onClose} />
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        tabIndex={-1}
        initial={{ y: 48, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        className="project-modal project-modal-scroll relative z-[1] w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto overscroll-contain rounded-t-2xl sm:rounded-xl bg-[#171717] border border-white/10 outline-none"
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-30 flex justify-end pointer-events-none px-3 pt-3 h-0">
          <button
            type="button"
            onClick={onClose}
            className="pointer-events-auto p-2 rounded-full bg-black/55 text-white hover:bg-[color:var(--profile-accent,#E50914)] transition"
            aria-label="Close project"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-[#0c0c0c]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artForProject(project.title)}
            alt={`${project.title} system design diagram`}
            className="w-full h-auto max-h-[48vh] object-contain object-center block"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[55%] sm:w-[48%] bg-gradient-to-r from-[#0c0c0c]/95 via-[#0c0c0c]/55 to-transparent" />
          <div className="absolute left-0 bottom-0 top-0 z-10 flex flex-col justify-end p-5 sm:p-6 max-w-[70%] sm:max-w-[55%]">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1.5 drop-shadow">
              {project.category}
            </p>
            <h3 className="font-display text-3xl sm:text-5xl text-white leading-[0.92] drop-shadow-lg">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-5 sm:p-8 space-y-5">
          <p className="text-[#B8B8B8] leading-relaxed text-base">{project.fullDescription}</p>
          {project.blog && (
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#B8B8B8] mb-3">
                Tech blog
              </p>
              <p className="text-sm text-[#D4D4D4] leading-relaxed">{project.blog}</p>
            </div>
          )}
          {project.doc?.length > 0 && (
            <div className="space-y-3">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#B8B8B8]">
                Design & stack
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.doc.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                  >
                    <h4 className="font-heading text-sm text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs text-[#B8B8B8] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#B8B8B8] mb-2">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-xs font-heading bg-white/5 text-white/80 border border-white/10 hover:border-[color:var(--profile-accent,#E50914)]/50 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className="font-data text-sm" style={{ color: 'var(--profile-accent, #E50914)' }}>
            {project.metrics}
          </p>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-netflix inline-flex"
              style={{ background: 'var(--profile-accent, #E50914)' }}
            >
              Visit {project.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}{' '}
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <p className="font-mono text-[10px] text-[#B8B8B8] uppercase tracking-wider">
              Internal / no public link
            </p>
          )}
          {project.preview === 'pact' && (
            <div className="pt-2 pb-2">
              <PactMock />
            </div>
          )}
          <div className="h-2" aria-hidden />
        </div>
      </motion.div>
    </motion.div>
  )
}

function RailCard({ project, onOpen, index, cinema }) {
  return (
    <HoverLift className="shrink-0 snap-start">
      <button
        type="button"
        role="listitem"
        onClick={() => onOpen(project)}
        className={`group relative block text-left overflow-hidden border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rail-card ${
          cinema ? 'w-[280px] sm:w-[340px] rounded-none' : 'w-[240px] sm:w-[280px] rounded-md'
        }`}
      >
        <div className={`relative overflow-hidden bg-[#111] ${cinema ? 'h-[180px] sm:h-[200px]' : 'h-[150px] sm:h-[168px]'}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artForProject(project.title)}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 opacity-85 group-hover:opacity-70 transition-opacity" />
          <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 border border-white/20 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Play className="w-3.5 h-3.5 text-white fill-white" />
          </span>
          <span
            className="absolute left-0 top-0 h-full w-1 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-400 bg-[color:var(--profile-accent,#E50914)]"
            aria-hidden
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3.5">
          <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/55 mb-1">
            {String(index + 1).padStart(2, '0')} · {project.category}
          </p>
          <p className="font-heading text-sm text-white leading-snug group-hover:text-[color:var(--profile-accent,#E50914)] transition-colors">
            {project.title}
          </p>
        </div>
      </button>
    </HoverLift>
  )
}

function Rail({ title, items, onOpen, cinema }) {
  const scroller = useRef(null)
  const scrollBy = (dir) => scroller.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })

  return (
    <div className="mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <Reveal className="flex items-end justify-between mb-5">
        <h3 className="font-heading text-xl sm:text-2xl text-white">{title}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className="p-2 rounded border border-white/15 text-white/70 hover:text-white hover:border-[#E50914]/60 hover:bg-white/5 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className="p-2 rounded border border-white/15 text-white/70 hover:text-white hover:border-[#E50914]/60 hover:bg-white/5 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </Reveal>
      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory rail-mask-right"
        style={{ scrollbarWidth: 'none' }}
        tabIndex={0}
        role="list"
        aria-label={title}
      >
        {items.map((p, i) => (
          <RailCard key={p.title} project={p} onOpen={onOpen} index={i} cinema={cinema} />
        ))}
      </div>
    </div>
  )
}

const RAIL_COPY = {
  you: {
    eyebrow: 'selected work',
    title: 'Projects that shaped me',
    lead: 'Personal picks - sports analytics, NLP, and systems I cared about building.',
  },
  recruiter: {
    eyebrow: 'career evidence',
    title: 'Work that shows the hire',
    lead: 'Featured production work plus supporting builds - outcomes first.',
  },
  client: {
    eyebrow: 'case studies',
    title: 'Products shipped',
    lead: 'Engagement-ready cases: ops tools, dashboards, and product analytics.',
  },
  guest: {
    eyebrow: 'browse by genre',
    title: 'The catalogue',
    lead: 'Every title in the film. Hover a poster. Open it for the architecture.',
  },
}

export default function ProjectRails() {
  const { profile: audience } = useProfile()
  const [active, setActive] = useState(null)
  const filtered = useMemo(
    () => filterProjects(projects, audience?.projectFilter || 'all'),
    [audience?.projectFilter]
  )
  const featured = filtered.filter((p) => p.featured)
  const more = filtered.filter((p) => !p.featured)
  const cinema = audience?.id === 'guest'
  const copy = RAIL_COPY[audience?.id] || RAIL_COPY.guest

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-[#090909] profile-section">
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-10">
        <p className="section-eyebrow mb-3" style={{ color: 'var(--profile-accent, #E50914)' }}>
          {copy.eyebrow}
        </p>
        <h2 className="font-display text-5xl sm:text-7xl text-white">{copy.title}</h2>
        <p className="mt-3 text-[#B8B8B8] max-w-xl">{copy.lead}</p>
      </Reveal>
      {featured.length > 0 && (
        <Rail title={cinema ? 'Featured titles' : 'Featured'} items={featured} onOpen={setActive} cinema={cinema} />
      )}
      {more.length > 0 && (
        <Rail
          title={featured.length ? (cinema ? 'More in the catalogue' : 'More builds') : 'Builds'}
          items={more}
          onOpen={setActive}
          cinema={cinema}
        />
      )}
      <AnimatePresence>
        {active && <ProjectOverlay project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
