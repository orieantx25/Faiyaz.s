'use client'

import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

function StageChrome({ code, children }) {
  return (
    <div className="code-chrome-dark">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
        <span className="w-2 h-2 rounded-full bg-clay/70" />
        <span className="w-2 h-2 rounded-full bg-signal/70" />
        <span className="w-2 h-2 rounded-full bg-white/25" />
        <span className="ml-3 font-mono text-[11px] text-white/40 truncate">{code}</span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  )
}

function ExploreStage() {
  const heights = [36, 58, 44, 72, 50, 64, 48, 70]
  return (
    <div>
      <div className="flex gap-2 mb-4">
        {['Overview', 'Delivery', 'Quality'].map((t, i) => (
          <span
            key={t}
            className={`font-mono text-[10px] px-2.5 py-1 rounded-md ${
              i === 0 ? 'bg-signal/20 text-signal' : 'text-white/40 border border-white/10'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {['KPI pulse', 'Health', 'Ask'].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
          >
            <p className="font-mono text-[9px] text-white/40 mb-2">{label}</p>
            <div className="h-1.5 w-2/3 rounded bg-signal/50" />
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-28">
        {heights.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-signal to-signal/25"
            initial={{ height: '8%' }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.55, delay: i * 0.04, ease }}
          />
        ))}
      </div>
      <p className="font-mono text-[10px] text-white/35 mt-4">explore · shared visibility</p>
    </div>
  )
}

function PipelineStage() {
  const rows = [
    { label: 'validate', w: 88, ok: true },
    { label: 'structure', w: 72, ok: true },
    { label: 'render', w: 64, ok: true },
    { label: 'notify', w: 48, ok: false },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-mono text-[11px] text-white/55">hub://report-run</p>
        <span className="font-mono text-[10px] text-signal tracking-wide">AUTO</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {['Validate', 'Render', 'Ship'].map((s) => (
          <div
            key={s}
            className="rounded-xl border border-signal/25 bg-signal/10 px-2 py-3 text-center"
          >
            <p className="font-mono text-[10px] text-signal">{s}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2.5">
        {rows.map((r, i) => (
          <motion.div
            key={r.label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4, ease }}
          >
            <span className="font-mono text-[10px] text-white/40 w-16 shrink-0">{r.label}</span>
            <div className="h-2 flex-1 rounded bg-white/10 overflow-hidden">
              <motion.div
                className={`h-full rounded ${r.ok ? 'bg-signal/70' : 'bg-clay/70'}`}
                initial={{ width: 0 }}
                animate={{ width: `${r.w}%` }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.06, ease }}
              />
            </div>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${r.ok ? 'bg-signal' : 'bg-clay'}`} />
          </motion.div>
        ))}
      </div>
      <p className="font-mono text-[10px] text-white/35 mt-4">pipeline · accuracy as product</p>
    </div>
  )
}

function AiStage() {
  const reduce = useReducedMotion()
  return (
    <div>
      <div className="rounded-xl border border-white/10 bg-black/40 text-white/90 p-4 font-mono text-[11px] leading-relaxed mb-4">
        <p className="text-signal mb-2">$ cursor.ship(insight)</p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white/50"
        >
          → question framed
          <br />
          → prototype sketched
          <br />
          <span className="text-signal">→ judgment on the insight</span>
        </motion.p>
        <motion.span
          className="inline-block w-1.5 h-3 bg-signal ml-0.5 align-middle"
          animate={reduce ? { opacity: 1 } : { opacity: [1, 0.2, 1] }}
          transition={reduce ? undefined : { duration: 1.1, repeat: Infinity }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {['prompt', 'schema', 'UI stub'].map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease }}
            className="font-mono text-[10px] px-2.5 py-1.5 rounded-md border border-white/10 bg-white/[0.04] text-white/50"
          >
            {t}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4, ease }}
          className="font-mono text-[10px] px-2.5 py-1.5 rounded-md border border-signal/30 bg-signal/15 text-signal"
        >
          insight ready
        </motion.span>
      </div>
      <p className="font-mono text-[10px] text-white/35 mt-4">move with AI · keep the judgment</p>
    </div>
  )
}

const STAGES = [ExploreStage, PipelineStage, AiStage]

export default function CraftStage({ index = 0, code = '', title = '', body = '', total = 3 }) {
  const Stage = STAGES[Math.min(index, STAGES.length - 1)] || ExploreStage

  return (
    <div className="w-full">
      <StageChrome code={code}>
        <p className="font-mono text-[11px] text-signal mb-3">
          0{index + 1} / 0{total}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl text-white tracking-tight mb-2">{title}</h3>
        <p className="text-white/55 leading-relaxed text-base sm:text-lg mb-6">{body}</p>
        <Stage />
      </StageChrome>
    </div>
  )
}

export function CraftSignalRail({ active = 0, total = 3 }) {
  const pct = total > 1 ? (active / (total - 1)) * 100 : 0
  return (
    <div className="mt-8" aria-hidden="true">
      <div className="relative h-[2px] w-full max-w-xs rounded-full bg-border overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-signal"
          animate={{ width: `${Math.max(14, pct)}%` }}
          transition={{ duration: 0.45, ease }}
        />
      </div>
      <div className="mt-3 flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? 'w-8 bg-signal' : i < active ? 'w-3 bg-signal/35' : 'w-2 bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
