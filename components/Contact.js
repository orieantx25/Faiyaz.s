'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import ContactForm from './ContactForm'
import { profile } from '@/lib/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}

export default function Contact() {
  return (
    <>
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-28 border-t border-border"
      >
        <motion.div variants={itemVariants} className="mb-12 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight">
            Let&apos;s connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="h-full min-h-0">
            <ContactForm />
          </div>
          <div className="h-full grid grid-cols-2 grid-rows-3 gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 flex items-center justify-center gap-3 px-6 rounded-2xl bg-ink text-cream font-medium"
            >
              <Mail className="w-5 h-5" />
              Email me
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href={profile.resume}
              download="Faiyaz_Sabab_Resume.pdf"
              type="application/pdf"
              className="col-span-2 flex items-center justify-center gap-3 px-6 rounded-2xl border border-border bg-cream text-ink font-medium hover:border-sage/40 transition-colors"
            >
              <FileText className="w-5 h-5 text-sage" />
              Resume
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 rounded-2xl border border-border bg-cream text-ink font-medium hover:border-sage/40 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-sage" />
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 rounded-2xl border border-border bg-cream text-ink font-medium hover:border-sage/40 transition-colors"
            >
              <Github className="w-5 h-5 text-clay" />
              GitHub
            </motion.a>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-border py-10 pb-28 md:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} · answers, not assumptions
          </p>
        </div>
      </footer>
    </>
  )
}
