'use client'

import { motion } from 'framer-motion'
import { learnings } from '@/lib/content'

export default function Learnings() {
  return (
    <section id="learnings" className="relative bg-atmosphere bg-mesh border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <p className="section-eyebrow mb-4">{learnings.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink tracking-tight leading-[1.05]">
            {learnings.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{learnings.lead}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-0">
          {learnings.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 border-t border-border"
            >
              <p className="font-mono text-[11px] text-signal mb-2">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display text-xl text-ink tracking-tight mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
