'use client'

import { motion } from 'framer-motion'

const SERVICES = [
  {
    title: 'CXO analytics',
    body: 'Power BI dashboards with SQL and Python - KPIs, revenue signal, and decisions leadership can act on.',
  },
  {
    title: 'Product & process',
    body: 'PRDs and B2B workflow design like Pact - collection, verification, standardization, and automation.',
  },
  {
    title: 'Pipelines & automation',
    body: 'Centralized data foundations plus n8n, PostgreSQL, and REST APIs that cut manual handoffs.',
  },
]

export default function ServicesStrip() {
  return (
    <section id="services" className="py-20 md:py-24 bg-[#090909] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <p className="section-eyebrow mb-3">collaboration</p>
        <h2 className="font-display text-5xl sm:text-6xl text-white mb-3">How we can work</h2>
        <p className="text-[#B8B8B8] max-w-xl mb-10">
          Freelance capabilities - scoped around product, analytics, and operational clarity.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-surface rounded-lg p-5"
            >
              <p className="font-data text-xs mb-2" style={{ color: 'var(--profile-accent, #E50914)' }}>
                0{i + 1}
              </p>
              <h3 className="font-heading text-xl text-white mb-2">{s.title}</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
        <a
          href="#credits"
          className="btn-netflix mt-10 inline-flex"
          style={{ background: 'var(--profile-accent)', color: '#042f2e' }}
        >
          Start a project enquiry
        </a>
      </div>
    </section>
  )
}
