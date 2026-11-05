'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { builds, profile } from '@/lib/content'
import { GyanxDashboardMock, AiCallingMock } from '@/components/GuiReportMocks'

export default function Building() {
  return (
    <motion.section
      id="building"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-void bg-mesh-dark border-t border-white/5 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(800px 400px at 90% 10%, hsl(168 78% 34% / 0.14), transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-24 md:py-32">
        <p className="section-eyebrow text-signal/80 mb-4">now shipping</p>
        <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight mb-4 max-w-2xl leading-[1.02]">
          Building in public
        </h2>
        <p className="text-white/50 max-w-lg mb-14 leading-relaxed text-base sm:text-lg">
          Side labs and live products — the same muscle as the day job, without the NDA.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {builds.map((b, i) => (
            <motion.a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative block rounded-2xl border border-white/10 bg-white/[0.03] hover:border-signal/40 hover:bg-white/[0.05] transition-colors overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-signal/70 signal-dot" />
                <span className="ml-1 font-mono text-[11px] text-white/35">{b.path}</span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl text-white tracking-tight group-hover:text-signal transition-colors">
                    {b.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-white/35 group-hover:text-signal transition-colors" />
                </div>
                <p className="text-sm text-white/45 leading-relaxed">{b.blurb}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mb-6">
          <p className="section-eyebrow text-signal/80 mb-2">product preview</p>
          <h3 className="font-display text-2xl sm:text-4xl text-white tracking-tight max-w-xl leading-tight">
            GyanX surfaces I shipped
          </h3>
          <p className="mt-3 text-sm sm:text-base text-white/45 max-w-xl leading-relaxed">
            Layout recreations with invented figures — a look at the analytics and AI-calling UIs,
            not live production data.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-14">
          <div className="rounded-2xl ring-1 ring-white/10 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.8)] overflow-hidden">
            <GyanxDashboardMock />
          </div>
          <div className="rounded-2xl ring-1 ring-white/10 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.8)] overflow-hidden">
            <AiCallingMock />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Invite
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  )
}
