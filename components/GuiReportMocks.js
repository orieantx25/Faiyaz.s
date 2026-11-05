'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/** Product-preview mocks. All figures are invented for layout — not production data. */

const ACCENT = '#e03e3e'
const ease = [0.16, 1, 0.3, 1]

function PreviewBadge() {
  return (
    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/35">
      Synthetic preview · not production data
    </p>
  )
}

const HUB_MODULES = [
  {
    title: 'Partner Pipeline',
    blurb: 'Funnel health, block reconcile, and executive pulse.',
    icon: '▦',
  },
  {
    title: 'Campus Admissions',
    blurb: 'Block bifurcation, refunds, and campus split views.',
    icon: '▣',
  },
  {
    title: 'Refund Cases',
    blurb: 'Retained vs processed vs refunded — ops distribution.',
    icon: '↩',
  },
  {
    title: 'Admission Journey',
    blurb: 'Backtrack admissions and block-paid progress.',
    icon: '⬡',
  },
  {
    title: 'Loan Desk',
    blurb: 'Vendor track, risk flags, and campus loan queues.',
    icon: '₹',
  },
]

const CAROUSEL_LINES = [
  'Partner Pipeline — funnel, blocks, and executive KPIs',
  'Campus Admissions — bifurcation and refund views',
  'Refund Cases — retained vs processed split',
  'Admission Journey — block-paid student backtrack',
  'Loan Desk — vendor track and risk queues',
  'Ops Pulse — scheduled report hub runs',
]

/** Reports-inside style carousel with floating chart glyphs */
export function ReportsInsideMock() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const t = window.setInterval(() => setI((n) => (n + 1) % CAROUSEL_LINES.length), 2600)
    return () => window.clearInterval(t)
  }, [])

  const glyphs = ['Σ', '%', '#', '☰', '⌁', '◈', '⟩', '⟨', '▦', '▲']

  return (
    <div
      className="relative overflow-hidden rounded-[14px] border border-white/10"
      style={{ background: '#0e0e10' }}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {glyphs.map((g, idx) => (
        <span
          key={idx}
          className="absolute font-mono text-white/15 select-none"
          style={{
            left: `${8 + ((idx * 17) % 84)}%`,
            top: `${10 + ((idx * 23) % 70)}%`,
            fontSize: `${12 + (idx % 4) * 4}px`,
            color: idx % 3 === 0 ? `${ACCENT}55` : undefined,
          }}
        >
          {g}
        </span>
      ))}

      <div className="relative z-10 p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display text-[11px] font-bold tracking-tight">
            <span style={{ color: ACCENT }}>up</span>
            <span className="text-white">Grad</span>
          </span>
          <span className="text-[10px] text-white/40">School of Technology</span>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#141416]/95 px-4 py-5 min-h-[120px] flex flex-col">
          <p
            className="font-mono text-[10px] tracking-[0.28em] uppercase mb-3"
            style={{ color: ACCENT }}
          >
            Reports inside
          </p>
          <div className="h-px w-full bg-white/10 mb-4" />
          <AnimatePresence mode="wait">
            <motion.p
              key={CAROUSEL_LINES[i]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
              className="text-sm text-white/75 leading-relaxed flex-1"
            >
              <span className="inline-block w-2 h-2 mr-2 align-middle" style={{ background: ACCENT }} />
              {CAROUSEL_LINES[i]}
            </motion.p>
          </AnimatePresence>
          <div className="mt-5 flex justify-center gap-1.5">
            {CAROUSEL_LINES.map((_, idx) => (
              <span
                key={idx}
                className="h-1 rounded-full transition-all"
                style={{
                  width: idx === i ? 18 : 6,
                  background: idx === i ? ACCENT : '#ffffff33',
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-3">
          <PreviewBadge />
        </div>
      </div>
    </div>
  )
}

/** Analytics hub card grid */
export function ReportHubMock() {
  return (
    <div
      className="overflow-hidden rounded-[14px] border border-white/10"
      style={{ background: '#121212' }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="shrink-0 rounded bg-white px-1.5 py-0.5 font-display text-[10px] font-bold text-black">
            <span style={{ color: ACCENT }}>up</span>Grad
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[9px] text-white/40 tracking-wide">REPORT HUB</p>
            <p className="font-display text-sm text-white tracking-tight truncate">Analytics hub</p>
          </div>
        </div>
        <span className="font-mono text-[9px] text-white/30 shrink-0">preview@demo</span>
      </div>

      <div className="p-3 sm:p-4 grid grid-cols-2 gap-2.5">
        {HUB_MODULES.map((m) => (
          <div
            key={m.title}
            className="rounded-lg border border-white/10 bg-[#1a1a1a] p-3 flex flex-col min-h-[108px]"
          >
            <span
              className="inline-flex w-6 h-6 items-center justify-center rounded text-[11px] text-white mb-2"
              style={{ background: ACCENT }}
            >
              {m.icon}
            </span>
            <p className="text-[12px] font-medium text-white leading-snug mb-1">{m.title}</p>
            <p className="text-[10px] text-white/45 leading-relaxed flex-1">{m.blurb}</p>
            <p
              className="mt-2 font-mono text-[9px] tracking-[0.12em] uppercase"
              style={{ color: ACCENT }}
            >
              Open dashboard
            </p>
          </div>
        ))}
      </div>
      <div className="px-4 pb-3">
        <PreviewBadge />
      </div>
    </div>
  )
}

const FUNNEL = [
  { label: 'Lead', w: 100 },
  { label: 'Connected', w: 62 },
  { label: 'Qualified', w: 41 },
  { label: 'Application', w: 28 },
  { label: 'Interview', w: 18 },
  { label: 'Offer', w: 11 },
  { label: 'Enrolled', w: 7 },
]

const PARTNERS = [
  { name: 'Northpeak', leads: 78, offer: 22, admit: 14 },
  { name: 'Campuswire', leads: 54, offer: 28, admit: 18 },
  { name: 'EduBridge', leads: 42, offer: 16, admit: 10 },
  { name: 'Admitly', leads: 36, offer: 20, admit: 12 },
  { name: 'Pathfindr', leads: 28, offer: 14, admit: 8 },
]

const TREND = [18, 24, 22, 38, 52, 44, 31, 26]

/** GyanX-style analytics composite with invented figures */
export function GyanxDashboardMock() {
  return (
    <div
      className="overflow-hidden rounded-[14px] border border-white/10"
      style={{ background: '#0a0a0b' }}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div>
          <p className="font-display text-sm text-white tracking-tight">GyanX · Analytics</p>
          <p className="font-mono text-[9px] text-white/35 mt-0.5">Demo workspace</p>
        </div>
        <div className="flex gap-1">
          {['Daily', 'Weekly', 'Monthly'].map((t, i) => (
            <span
              key={t}
              className="font-mono text-[9px] px-2 py-1 rounded"
              style={{
                background: i === 2 ? ACCENT : '#ffffff10',
                color: i === 2 ? '#fff' : '#ffffff66',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3 sm:p-4 space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Leads', value: '1.24k', delta: '↑ 6.2%' },
            { label: 'Connected', value: '840', delta: '↑ 2.1%' },
            { label: 'MQL', value: '312', delta: '→ 0.4%' },
            { label: 'Apps', value: '96', delta: '↑ 1.8%' },
          ].map((k) => (
            <div key={k.label} className="rounded-md border border-white/10 bg-[#141416] px-2 py-2">
              <p className="font-mono text-[8px] text-white/40 uppercase tracking-wide">{k.label}</p>
              <p className="font-display text-base text-white mt-0.5">{k.value}</p>
              <p className="font-mono text-[8px] mt-0.5" style={{ color: ACCENT }}>
                {k.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-md border border-white/10 bg-[#141416] p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-[9px] text-white/45 tracking-wide uppercase">Performance</p>
            <p className="font-mono text-[9px] text-white/30">Leads · demo series</p>
          </div>
          <svg viewBox="0 0 240 64" className="w-full h-16" aria-hidden="true">
            <polyline
              fill="none"
              stroke={ACCENT}
              strokeWidth="2"
              points={TREND.map((y, i) => `${(i / (TREND.length - 1)) * 240},${64 - y}`).join(' ')}
            />
            {TREND.map((y, i) => (
              <circle
                key={i}
                cx={(i / (TREND.length - 1)) * 240}
                cy={64 - y}
                r="2.5"
                fill={ACCENT}
              />
            ))}
          </svg>
        </div>

        <div className="grid sm:grid-cols-2 gap-2.5">
          <div className="rounded-md border border-white/10 bg-[#141416] p-3">
            <p className="font-mono text-[9px] text-white/45 tracking-wide uppercase mb-3">
              Lead funnel
            </p>
            <div className="space-y-1.5">
              {FUNNEL.map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <span className="w-16 shrink-0 font-mono text-[8px] text-white/50 truncate">
                    {f.label}
                  </span>
                  <div className="flex-1 h-1.5 rounded bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded"
                      style={{ width: `${f.w}%`, background: ACCENT }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-white/10 bg-[#141416] p-3">
            <p className="font-mono text-[9px] text-white/45 tracking-wide uppercase mb-3">
              Partner compare
            </p>
            <div className="flex items-end gap-1.5 h-24">
              {PARTNERS.map((p) => (
                <div key={p.name} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
                  <div className="w-full flex gap-0.5 items-end h-16">
                    <div
                      className="flex-1 rounded-sm"
                      style={{ height: `${p.leads}%`, background: ACCENT }}
                    />
                    <div
                      className="flex-1 rounded-sm bg-sky-500/80"
                      style={{ height: `${p.offer}%` }}
                    />
                    <div
                      className="flex-1 rounded-sm bg-teal-500/70"
                      style={{ height: `${p.admit}%` }}
                    />
                  </div>
                  <span className="font-mono text-[7px] text-white/35 truncate w-full text-center">
                    {p.name.slice(0, 6)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-2 font-mono text-[7px] text-white/40">
              <span>
                <i className="inline-block w-1.5 h-1.5 mr-1" style={{ background: ACCENT }} />
                Leads
              </span>
              <span>
                <i className="inline-block w-1.5 h-1.5 mr-1 bg-sky-500/80" />
                Offer
              </span>
              <span>
                <i className="inline-block w-1.5 h-1.5 mr-1 bg-teal-500/70" />
                Admit
              </span>
            </div>
          </div>
        </div>

        <PreviewBadge />
      </div>
    </div>
  )
}

/** Compact AI calling style board */
export function AiCallingMock() {
  const outcomes = [
    { label: 'Warm', h: 18 },
    { label: 'Qualified', h: 22 },
    { label: 'Intent', h: 8 },
    { label: 'Link', h: 12 },
    { label: 'DNP', h: 88 },
    { label: 'Callback', h: 14 },
  ]

  return (
    <div
      className="overflow-hidden rounded-[14px] border border-white/10"
      style={{ background: '#0a0a0b' }}
    >
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <span className="w-0.5 h-4 rounded" style={{ background: ACCENT }} />
        <div>
          <p className="font-display text-sm text-white">AI Calling Dashboard</p>
          <p className="font-mono text-[8px] text-white/35">Updated · demo clock</p>
        </div>
      </div>
      <div className="p-3 sm:p-4 grid sm:grid-cols-[1.4fr_0.7fr] gap-3">
        <div className="rounded-md border border-white/10 bg-[#141416] p-3">
          <p className="font-mono text-[9px] text-white/45 uppercase mb-3">Call outcomes</p>
          <div className="flex items-end gap-2 h-28">
            {outcomes.map((o) => (
              <div key={o.label} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <div
                  className="w-full rounded-sm"
                  style={{ height: `${o.h}%`, background: ACCENT }}
                />
                <span className="font-mono text-[7px] text-white/40 truncate w-full text-center">
                  {o.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-md bg-[#141416] p-3 flex flex-col justify-center"
          style={{ border: `1px solid ${ACCENT}55` }}
        >
          <p className="font-mono text-[9px] text-white/45 uppercase">AI effectiveness</p>
          <p className="font-display text-3xl mt-1" style={{ color: ACCENT }}>
            4.2%
          </p>
          <p className="font-mono text-[10px] text-white/50 mt-1">12.4k total calls</p>
        </div>
      </div>
      <div className="px-4 pb-3">
        <PreviewBadge />
      </div>
    </div>
  )
}
