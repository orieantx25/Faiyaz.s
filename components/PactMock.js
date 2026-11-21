'use client'

/** Synthetic Pact reports UI - invented figures only; not production data. */

const ACCENT = '#e11d2e'

const NAV = [
  'Home',
  'Dashboard',
  'Meetings',
  'Events',
  'Types',
  'My Network',
  'MoU',
  'Operations',
  'Reports',
  'Documents',
  'Users',
]

const MEETING_KPIS = [
  { label: 'Total meetings', value: '84', hint: 'Demo range · all statuses', tone: 'ink' },
  { label: 'Meetings done', value: '71', hint: 'Completed in window', tone: 'green' },
  { label: 'Unique meetings done', value: '63', hint: 'Contacts counted once', tone: 'green' },
  { label: 'Done today', value: '3', hint: 'Synthetic day slice', tone: 'green' },
  { label: 'Scheduled tomorrow', value: '5', hint: 'Upcoming', tone: 'blue' },
  { label: 'Scheduled next week', value: '12', hint: 'Pipeline', tone: 'blue' },
]

const OUTCOMES = [
  { label: 'Success', value: '9', trend: '+2 vs 7', tone: 'green' },
  { label: 'Decline', value: '1', trend: '0 vs 1', tone: 'red' },
  { label: 'No-show', value: '4', trend: 'New vs 0', tone: 'red' },
  { label: 'Interested', value: '18', trend: '+11 vs 7', tone: 'amber' },
  { label: 'Not interested', value: '6', trend: '+2 vs 4', tone: 'slate' },
  { label: 'Follow up', value: '28', trend: '+19 vs 9', tone: 'gold' },
  { label: 'No response', value: '5', trend: '+1 vs 4', tone: 'muted' },
]

const EVENTS = [
  { label: 'Event-based meetings', value: '52' },
  { label: 'Summit Alpha', value: '31' },
  { label: 'Partner Day', value: '21' },
]

const toneClass = {
  ink: 'text-[#111]',
  green: 'text-emerald-600',
  blue: 'text-sky-600',
  red: 'text-red-600',
  amber: 'text-amber-600',
  gold: 'text-yellow-600',
  slate: 'text-slate-600',
  muted: 'text-stone-500',
}

function Dot({ tone }) {
  const map = {
    green: 'bg-emerald-500',
    red: 'bg-red-500',
    amber: 'bg-amber-500',
    gold: 'bg-yellow-500',
    slate: 'bg-slate-500',
    muted: 'bg-stone-400',
  }
  return <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${map[tone] || 'bg-stone-400'}`} />
}

export default function PactMock() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-stone-200 bg-[#f7f7f8] text-[#111] shadow-[0_40px_100px_-50px_rgba(0,0,0,0.45)]">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 px-3 sm:px-4 py-2.5 border-b border-stone-200 bg-white">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-display text-sm tracking-tight" style={{ color: ACCENT }}>
            Pact
          </span>
          <span className="font-mono text-[9px] text-stone-400 truncate">partner ops · demo</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline font-mono text-[9px] text-stone-400">◐</span>
          <span className="font-mono text-[9px] px-2 py-1 rounded-md bg-stone-100 text-stone-500">
            Analyst · Demo
          </span>
        </div>
      </div>

      <div className="flex min-h-[320px]">
        {/* Sidebar */}
        <aside className="hidden sm:flex w-[118px] shrink-0 flex-col border-r border-stone-200 bg-white py-2">
          {NAV.map((item) => {
            const active = item === 'Reports'
            return (
              <div
                key={item}
                className={`mx-1.5 px-2 py-1.5 rounded-md font-mono text-[9px] ${
                  active ? 'text-white' : 'text-stone-500'
                }`}
                style={active ? { background: ACCENT } : undefined}
              >
                {item}
              </div>
            )
          })}
          <div className="mt-auto px-3 py-2 font-mono text-[8px] text-stone-400">Hide labels</div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0 p-3 sm:p-4 bg-white">
          <div className="mb-3">
            <h3 className="font-display text-lg tracking-tight text-[#111]">Reports</h3>
            <p className="text-[11px] text-stone-500 mt-0.5">
              A meetings report is open. Choose Events when you need that view.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-end gap-2 mb-4">
            <label className="space-y-1">
              <span className="block font-mono text-[8px] uppercase tracking-wide text-stone-400">
                General
              </span>
              <span className="inline-flex items-center px-2.5 py-1.5 rounded-md border border-stone-200 bg-stone-50 text-[11px] text-stone-700 min-w-[88px]">
                Meetings ▾
              </span>
            </label>
            <label className="space-y-1">
              <span className="block font-mono text-[8px] uppercase tracking-wide text-stone-400">
                Member
              </span>
              <span className="inline-flex items-center px-2.5 py-1.5 rounded-md border border-stone-200 bg-stone-50 text-[11px] text-stone-700 min-w-[96px]">
                All members ▾
              </span>
            </label>
            <label className="space-y-1">
              <span className="block font-mono text-[8px] uppercase tracking-wide text-stone-400">
                From
              </span>
              <span className="inline-flex items-center px-2.5 py-1.5 rounded-md border border-stone-200 bg-stone-50 text-[11px] text-stone-600">
                01-10-2026
              </span>
            </label>
            <label className="space-y-1">
              <span className="block font-mono text-[8px] uppercase tracking-wide text-stone-400">
                To
              </span>
              <span className="inline-flex items-center px-2.5 py-1.5 rounded-md border border-stone-200 bg-stone-50 text-[11px] text-stone-600">
                31-10-2026
              </span>
            </label>
            <button
              type="button"
              tabIndex={-1}
              className="px-3 py-1.5 rounded-md text-[11px] font-medium text-white"
              style={{ background: ACCENT }}
            >
              Show report
            </button>
            <button
              type="button"
              tabIndex={-1}
              className="px-3 py-1.5 rounded-md text-[11px] font-medium border border-stone-200 text-stone-600 bg-white"
            >
              Weekly mail
            </button>
          </div>

          {/* Meetings KPIs */}
          <div className="rounded-lg border border-stone-200 overflow-hidden mb-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-stone-100">
              {MEETING_KPIS.map((k) => (
                <div key={k.label} className="p-2.5 sm:p-3">
                  <p className="text-[10px] text-stone-500 mb-1 leading-tight">{k.label}</p>
                  <p className={`font-display text-xl tracking-tight ${toneClass[k.tone]}`}>
                    {k.value}
                  </p>
                  <p className="text-[9px] text-stone-400 mt-1 leading-snug">{k.hint}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="rounded-lg border border-stone-200 overflow-hidden mb-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-x divide-y lg:divide-y-0 divide-stone-100">
              {OUTCOMES.map((o) => (
                <div key={o.label} className="p-2.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Dot tone={o.tone} />
                    <p className="text-[10px] text-stone-500 truncate">{o.label}</p>
                  </div>
                  <p className={`font-display text-lg tracking-tight ${toneClass[o.tone]}`}>
                    {o.value}
                  </p>
                  <p className="text-[8px] text-stone-400 mt-1">{o.trend}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="rounded-lg border border-stone-200 overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-stone-100">
              {EVENTS.map((e) => (
                <div key={e.label} className="p-2.5 sm:p-3">
                  <p className="text-[10px] text-stone-500 mb-1 leading-tight">{e.label}</p>
                  <p className="font-display text-xl tracking-tight text-[#111]">{e.value}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 font-mono text-[9px] tracking-[0.18em] uppercase text-stone-400">
            Synthetic preview · internal tool · not production data
          </p>
        </div>
      </div>
    </div>
  )
}
