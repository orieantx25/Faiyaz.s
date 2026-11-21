'use client'

import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/cinematic/motion'
import { useProfile } from '@/lib/ProfileContext'

function StudioChart({ option, style }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const chart = echarts.getInstanceByDom(el) || echarts.init(el, null, { renderer: 'canvas' })
    chart.setOption(option, true)
    const onResize = () => {
      if (!chart.isDisposed()) chart.resize()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [option])

  useEffect(() => {
    const el = ref.current
    return () => {
      const chart = el && echarts.getInstanceByDom(el)
      if (!chart || chart.isDisposed()) return
      try {
        chart.dispose()
      } catch {
        /* The chart host was already detached. */
      }
    }
  }, [])

  return <div ref={ref} style={style} />
}

/** All series are DEMO / synthetic for visualisation craft - not production KPIs. */

function Kpi({ label, value, delay = 0 }) {
  const [n, setN] = useState(value)
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    let raf
    const start = performance.now()
    const dur = 1100 + delay * 200
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, delay])

  return (
    <div className="card-surface rounded-lg p-4">
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#B8B8B8] mb-2">{label}</p>
      <p className="font-data text-3xl text-white tabular-nums">
        {n.toLocaleString('en-IN')}
        <span className="text-[#E50914] text-lg">+</span>
      </p>
      <p className="mt-1 font-mono text-[9px] text-[#B8B8B8]/70">Synthetic demo</p>
    </div>
  )
}

const CLIENT_OFFERS = [
  {
    n: '01',
    title: 'CXO board',
    body: 'Power BI style KPI surface with SQL and Python behind it - revenue, ops health, and the few numbers leadership actually opens.',
  },
  {
    n: '02',
    title: 'Process product',
    body: 'PRD, workflow map, then a working UI for collection, verification, and B2B handoffs - the same path used on Pact.',
  },
  {
    n: '03',
    title: 'Automation layer',
    body: 'PostgreSQL, n8n, and REST APIs so refresh, alerts, and system-to-system moves stop living in spreadsheets.',
  },
]

function ClientCapability() {
  const accent = '#2DD4BF'
  const lineOpt = {
    backgroundColor: 'transparent',
    textStyle: { color: '#B8B8B8', fontFamily: 'IBM Plex Mono' },
    grid: { left: 40, right: 16, top: 36, bottom: 28 },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Revenue sample', 'Ops sample'], textStyle: { color: '#B8B8B8' }, top: 4 },
    xAxis: {
      type: 'category',
      data: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'],
      axisLine: { lineStyle: { color: '#333' } },
      axisLabel: { color: '#888' },
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#222' } },
      axisLabel: { color: '#888' },
    },
    series: [
      {
        name: 'Revenue sample',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: { width: 2.5, color: accent },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(45,212,191,0.35)' },
              { offset: 1, color: 'rgba(45,212,191,0)' },
            ],
          },
        },
        data: [40, 48, 46, 62, 71, 84],
        animationDuration: 1400,
      },
      {
        name: 'Ops sample',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: { width: 2, color: '#94A3B8' },
        data: [55, 52, 60, 58, 66, 72],
        animationDuration: 1600,
      },
    ],
  }

  const funnelOpt = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    series: [
      {
        type: 'funnel',
        left: '8%',
        width: '84%',
        minSize: '20%',
        maxSize: '100%',
        sort: 'descending',
        gap: 4,
        label: { color: '#fff', fontSize: 11 },
        data: [
          { value: 100, name: 'Brief', itemStyle: { color: '#2DD4BF' } },
          { value: 72, name: 'Model', itemStyle: { color: '#14B8A6' } },
          { value: 48, name: 'Prototype', itemStyle: { color: '#0F766E' } },
          { value: 28, name: 'Ship', itemStyle: { color: '#134E4A' } },
        ],
        animationDuration: 1200,
      },
    ],
  }

  return (
    <section id="lab" className="relative py-20 md:py-28 bg-[#090909] border-t border-white/5 profile-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3" style={{ color: accent }}>
            capability
          </p>
          <h2 className="font-display text-5xl sm:text-7xl text-white mb-3">What you can hire</h2>
          <p className="text-[#B8B8B8] max-w-2xl mb-10 leading-relaxed">
            A client-facing sample of the operating surfaces I design. Charts use invented figures so you can
            judge structure and motion, not confidential production numbers.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {CLIENT_OFFERS.map((o) => (
            <article
              key={o.n}
              className="rounded-lg border border-white/10 bg-[#121212] p-5 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: accent }} />
              <p className="font-data text-xs mb-2" style={{ color: accent }}>
                {o.n}
              </p>
              <h3 className="font-heading text-xl text-white mb-2">{o.title}</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">{o.body}</p>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          <div className="card-surface rounded-lg p-4 min-h-[280px]">
            <p className="font-mono text-[10px] uppercase tracking-wider mb-1 px-1" style={{ color: accent }}>
              Sample CXO trend
            </p>
            <p className="text-xs text-[#B8B8B8] mb-2 px-1">Revenue vs ops health - layout sample only</p>
            <StudioChart option={lineOpt} style={{ height: 230, width: '100%' }} />
          </div>
          <div className="card-surface rounded-lg p-4 min-h-[280px]">
            <p className="font-mono text-[10px] uppercase tracking-wider mb-1 px-1" style={{ color: accent }}>
              Engagement path
            </p>
            <p className="text-xs text-[#B8B8B8] mb-2 px-1">Brief to ship - how a freelance build is scoped</p>
            <StudioChart option={funnelOpt} style={{ height: 230, width: '100%' }} />
          </div>
        </div>

        <a href="#credits" className="btn-netflix inline-flex" style={{ background: accent, color: '#062e2b' }}>
          Start a project enquiry
        </a>
      </div>
    </section>
  )
}

export default function AnalyticsLab() {
  const { profile: audience } = useProfile()

  if (audience?.id === 'client') {
    return <ClientCapability />
  }

  const lineOpt = {
    backgroundColor: 'transparent',
    textStyle: { color: '#B8B8B8', fontFamily: 'IBM Plex Mono' },
    grid: { left: 40, right: 16, top: 40, bottom: 32 },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Signal A', 'Signal B'], textStyle: { color: '#B8B8B8' }, top: 8 },
    xAxis: {
      type: 'category',
      data: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
      axisLine: { lineStyle: { color: '#333' } },
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#222' } },
      axisLabel: { color: '#888' },
    },
    series: [
      {
        name: 'Signal A',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: { width: 2, color: '#E50914' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(229,9,20,0.35)' },
              { offset: 1, color: 'rgba(229,9,20,0)' },
            ],
          },
        },
        data: [42, 58, 51, 73, 68, 90, 84, 96],
        animationDuration: 1600,
        animationEasing: 'cubicOut',
      },
      {
        name: 'Signal B',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: { width: 2, color: '#B8B8B8' },
        data: [30, 36, 44, 40, 55, 52, 61, 70],
        animationDuration: 1800,
        animationDelay: 200,
      },
    ],
  }

  const barOpt = {
    backgroundColor: 'transparent',
    grid: { left: 40, right: 12, top: 24, bottom: 28 },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['Acquire', 'Activate', 'Retain', 'Refer', 'Revenue'],
      axisLabel: { color: '#888', fontSize: 10 },
      axisLine: { lineStyle: { color: '#333' } },
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#222' } },
      axisLabel: { color: '#888' },
    },
    series: [
      {
        type: 'bar',
        data: [78, 64, 51, 38, 29],
        itemStyle: { color: '#E50914', borderRadius: [3, 3, 0, 0] },
        animationDuration: 1200,
        animationDelay: (i) => i * 80,
      },
    ],
  }

  const funnelOpt = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    series: [
      {
        type: 'funnel',
        left: '8%',
        width: '84%',
        minSize: '18%',
        maxSize: '100%',
        sort: 'descending',
        label: { color: '#fff', fontSize: 11 },
        data: [
          { value: 100, name: 'Lead', itemStyle: { color: '#E50914' } },
          { value: 62, name: 'Connected', itemStyle: { color: '#c40812' } },
          { value: 38, name: 'Qualified', itemStyle: { color: '#9a0a12' } },
          { value: 18, name: 'Offer', itemStyle: { color: '#6e0c12' } },
          { value: 9, name: 'Win', itemStyle: { color: '#3f0d10' } },
        ],
        animationDuration: 1400,
      },
    ],
  }

  const donutOpt = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    series: [
      {
        type: 'pie',
        radius: ['52%', '72%'],
        avoidLabelOverlap: true,
        label: { color: '#B8B8B8', fontSize: 11 },
        data: [
          { value: 42, name: 'BI', itemStyle: { color: '#E50914' } },
          { value: 28, name: 'Ops', itemStyle: { color: '#B8B8B8' } },
          { value: 18, name: 'AI', itemStyle: { color: '#555' } },
          { value: 12, name: 'Product', itemStyle: { color: '#888' } },
        ],
        animationType: 'scale',
        animationDuration: 1200,
      },
    ],
  }

  return (
    <section id="lab" className="relative py-20 md:py-28 bg-[#090909] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3">analytics laboratory</p>
          <h2 className="font-display text-5xl sm:text-7xl text-white mb-3">Signal studio</h2>
          <p className="text-[#B8B8B8] max-w-2xl mb-4 leading-relaxed">
            Animated dashboards that show how I think in charts. Series below are{' '}
            <span className="text-white">explicitly synthetic</span> - layout and motion craft, not
            confidential production metrics.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          <Kpi label="Demo leads" value={1240} delay={0} />
          <Kpi label="Demo converts" value={186} delay={1} />
          <Kpi label="Demo cycles" value={48} delay={2} />
          <Kpi label="Demo panels" value={12} delay={3} />
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface rounded-lg p-3 sm:p-4 min-h-[280px]"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#B8B8B8] mb-2 px-1">
              Multi-series trend · demo
            </p>
            <StudioChart option={lineOpt} style={{ height: 240, width: '100%' }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="card-surface rounded-lg p-3 sm:p-4 min-h-[280px]"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#B8B8B8] mb-2 px-1">
              Funnel stages · demo
            </p>
            <StudioChart option={funnelOpt} style={{ height: 240, width: '100%' }} />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="card-surface rounded-lg p-3 sm:p-4 min-h-[260px]">
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#B8B8B8] mb-2 px-1">
              Stage bars · demo
            </p>
            <StudioChart option={barOpt} style={{ height: 220, width: '100%' }} />
          </div>
          <div className="card-surface rounded-lg p-3 sm:p-4 min-h-[260px]">
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#B8B8B8] mb-2 px-1">
              Work mix · demo
            </p>
            <StudioChart option={donutOpt} style={{ height: 220, width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
