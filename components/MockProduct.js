'use client'

import {
  ReportsInsideMock,
  ReportHubMock,
  GyanxDashboardMock,
  AiCallingMock,
} from '@/components/GuiReportMocks'

/** Fictional placeholder UIs — no real schemas, figures, or internal outlines.
 *  Stages accumulate: glass → grid → model → BI → ask → hub → org stream.
 *  GUI / GyanX stages use synthetic product previews (not production numbers).
 */

function Chrome({ title, children, layer }) {
  return (
    <div className="mock-screen">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
        <span className="w-2 h-2 rounded-full bg-white/25" />
        <span className="w-2 h-2 rounded-full bg-white/25" />
        <span className="w-2 h-2 rounded-full bg-signal/70 signal-dot" />
        <span className="ml-3 font-mono text-[10px] text-white/45 tracking-wide truncate">
          {title}
        </span>
        {layer != null && (
          <span className="ml-auto font-mono text-[9px] text-signal/70">L{layer}</span>
        )}
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

function DomainTiles({ solid = false }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {['Campus', 'Programs', 'Ops'].map((t) => (
        <div
          key={t}
          className={`rounded-lg p-3 min-h-[72px] ${
            solid
              ? 'border border-white/15 bg-white/[0.04]'
              : 'border border-dashed border-white/20'
          }`}
        >
          <p className="font-mono text-[10px] text-white/50">{t}</p>
          <div className="mt-3 h-px w-full bg-white/10" />
          <div className="mt-2 space-y-1.5 mock-blur">
            <div className="h-1.5 w-3/4 bg-white/20 rounded" />
            <div className="h-1.5 w-1/2 bg-white/15 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}

function SheetGrid({ compact = false }) {
  const cells = compact ? 8 : 12
  return (
    <div className="overflow-hidden rounded-md border border-white/10">
      <div className="grid grid-cols-4 gap-px bg-white/10 text-[10px] font-mono">
        {['A', 'B', 'C', 'D'].map((c) => (
          <div key={c} className="bg-[#0b1218] px-2 py-1.5 text-white/40">
            {c}
          </div>
        ))}
        {Array.from({ length: cells }).map((_, i) => (
          <div key={i} className="bg-[#0b1218] px-2 py-2 mock-blur">
            <div
              className="h-1.5 rounded bg-white/20"
              style={{ width: `${40 + (i % 5) * 10}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function EntityModel({ highlight }) {
  return (
    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
      {['entity.alpha', 'entity.beta', 'metric.gamma', 'metric.delta'].map((id) => (
        <div
          key={id}
          className={`rounded-md px-3 py-2 border ${
            highlight && id === highlight
              ? 'bg-signal/10 border-signal/35'
              : 'bg-white/[0.04] border-white/10'
          }`}
        >
          <span className="text-signal">{id}</span>
          <p className="text-white/35 mt-1 mock-blur">own · validate · refresh</p>
        </div>
      ))}
    </div>
  )
}

function Bars({ seed = 1, height = 24 }) {
  const heights = [28, 46, 38, 62, 44, 70, 52, 58].map((h, i) => h + ((seed * (i + 3)) % 17))
  return (
    <div className="mock-blur flex items-end gap-1.5 mt-3" style={{ height }}>
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-signal/80 to-signal/20"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}

function Rows() {
  return (
    <div className="mock-blur space-y-2 mt-3">
      {[72, 54, 81, 47, 63].map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="h-2 w-16 rounded bg-white/15" />
          <div className="h-2 rounded bg-white/10 flex-1" style={{ maxWidth: `${w}%` }} />
          <div className="h-2 w-8 rounded bg-signal/40" />
        </div>
      ))}
    </div>
  )
}

function SignalSpine({ step }) {
  const labels = ['board', 'model', 'sheet', 'looker', 'ask', 'hub', 'org']
  return (
    <div className="flex items-center gap-1 mb-3 overflow-hidden" aria-hidden="true">
      {labels.map((label, i) => (
        <div key={label} className="flex items-center gap-1 min-w-0">
          <span
            className={`h-1 rounded-full transition-all ${
              i <= step ? 'w-4 bg-signal' : 'w-2 bg-white/15'
            }`}
          />
          {i < labels.length - 1 && (
            <span className={`w-2 h-px ${i < step ? 'bg-signal/50' : 'bg-white/10'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

export default function MockProduct({ variant = 'looker' }) {
  switch (variant) {
    case 'origin':
      return (
        <Chrome title="concept://glass-board" layer={1}>
          <SignalSpine step={0} />
          <p className="font-mono text-[10px] text-signal mb-3">PLACEHOLDER · NOT PRODUCTION</p>
          <DomainTiles />
        </Chrome>
      )

    case 'structure':
      return (
        <Chrome title="model://ops-definitions" layer={2}>
          <SignalSpine step={1} />
          <div className="mb-3 grid grid-cols-[0.85fr_1.15fr] gap-2 items-start">
            <div className="opacity-40 scale-90 origin-top">
              <DomainTiles solid />
            </div>
            <div>
              <p className="font-mono text-[10px] text-white/40 mb-2">fictional entities</p>
              <EntityModel highlight="metric.gamma" />
            </div>
          </div>
        </Chrome>
      )

    case 'excel':
      return (
        <Chrome title="sheet://weekly-ops.xlsx" layer={3}>
          <SignalSpine step={2} />
          <div className="mb-3 opacity-40 scale-[0.9] origin-top hidden sm:block">
            <EntityModel />
          </div>
          <SheetGrid />
        </Chrome>
      )

    case 'looker':
      return (
        <Chrome title="looker://explore/ops_kpis" layer={4}>
          <SignalSpine step={3} />
          <div className="mb-2 flex gap-2 items-start">
            <div className="w-[28%] opacity-35 scale-90 origin-top hidden sm:block">
              <SheetGrid compact />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex gap-2 mb-2">
                {['Overview', 'Delivery', 'Quality'].map((t, i) => (
                  <span
                    key={t}
                    className={`font-mono text-[10px] px-2 py-1 rounded ${
                      i === 0 ? 'bg-signal/20 text-signal' : 'text-white/40'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Bars seed={2} height={88} />
              <p className="font-mono text-[9px] text-white/30 mt-3">
                synthetic bars · not real KPIs
              </p>
            </div>
          </div>
        </Chrome>
      )

    case 'metabase':
      return (
        <Chrome title="metabase://question/fast-ask" layer={5}>
          <SignalSpine step={4} />
          <div className="grid sm:grid-cols-[1fr_0.85fr] gap-3">
            <div>
              <div className="rounded-md bg-white/[0.04] border border-white/10 px-3 py-2 font-mono text-[11px] text-white/55 mb-2">
                SELECT signal FROM ops WHERE week = ?
              </div>
              <Rows />
            </div>
            <div className="opacity-40 hidden sm:block">
              <Bars seed={2} height={72} />
            </div>
          </div>
        </Chrome>
      )

    case 'gui':
      return (
        <div className="space-y-2">
          <SignalSpine step={5} />
          <ReportsInsideMock />
        </div>
      )

    case 'hub':
      return (
        <div className="space-y-2">
          <SignalSpine step={5} />
          <ReportHubMock />
        </div>
      )

    case 'gyanx':
      return <GyanxDashboardMock />

    case 'ai-calling':
      return <AiCallingMock />

    case 'now':
      return (
        <div className="space-y-2">
          <SignalSpine step={6} />
          <ReportHubMock />
          <p className="font-mono text-[9px] text-white/30 px-1">
            Org data · pipelines · internal tools — synthetic hub preview
          </p>
        </div>
      )

    default:
      return (
        <Chrome title="prd://internal-streamlining" layer={7}>
          <SignalSpine step={6} />
          <p className="font-mono text-[10px] text-white/45 mb-3">
            Org data · pipelines · tools
          </p>
          <div className="space-y-2">
            {[
              'Structure org datasets',
              'Compose learned pipelines',
              'PRD internal tooling',
            ].map((t, i) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-md border border-white/10 px-3 py-2"
              >
                <span className="font-mono text-[10px] text-signal">0{i + 1}</span>
                <span className="text-sm text-white/80">{t}</span>
              </div>
            ))}
          </div>
        </Chrome>
      )
  }
}
