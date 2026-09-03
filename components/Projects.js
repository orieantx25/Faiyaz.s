'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { BarChart, PieChart, ToolMixChart, DeliveryTrendChart, DomainBarChart, SkillRadarChart } from './Charts'
import {
  projects,
  experience,
  education,
  certifications,
  skillGroups,
} from '@/lib/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [openKey, setOpenKey] = useState('0-0')

  return (
    <div className="relative">
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-28"
      >
        <motion.div variants={itemVariants} className="mb-12 md:mb-16 text-center mx-auto">
          <p className="font-mono text-xs tracking-[0.22em] uppercase text-muted-foreground mb-4">
            ~/featured
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight mb-4">
            Featured work
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground whitespace-nowrap">
            Analytics products and systems — dashboards, hubs, and pipelines that ship answers.
          </p>
        </motion.div>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="code-chrome group"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/50">
                <span className="w-2.5 h-2.5 rounded-full bg-clay/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-sage/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
                <span className="ml-3 font-mono text-[11px] text-muted-foreground truncate">
                  {project.path || `~/projects/${index}`}
                </span>
              </div>
              <div className="p-5 sm:p-7 grid md:grid-cols-[1fr_1.5fr] gap-4 md:gap-8">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-sage">
                    {project.category}
                  </span>
                  <div className="flex items-start gap-2 mt-2">
                    <h3 className="text-xl sm:text-2xl text-ink tracking-tight">{project.title}</h3>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 text-muted-foreground hover:text-sage transition-colors"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mt-2">{project.metrics}</p>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                    {hoveredProject === index ? project.fullDescription : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono text-ink/75 bg-background border border-border rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Experience — LinkedIn nested roles */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-28 border-t border-border"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <p className="font-mono text-xs tracking-[0.22em] uppercase text-muted-foreground mb-4">
            experience
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight">Experience</h2>
        </motion.div>

        <div className="space-y-10">
          {experience.map((company, cIdx) => (
            <motion.div key={company.company} variants={itemVariants} className="border-b border-border pb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <h3 className="text-xl sm:text-2xl text-ink tracking-tight">{company.company}</h3>
                <p className="font-mono text-xs text-muted-foreground">{company.location}</p>
              </div>
              <div className="space-y-1 border-l border-border ml-1 pl-4 sm:pl-6">
                {company.roles.map((role, rIdx) => {
                  const key = `${cIdx}-${rIdx}`
                  const isOpen = openKey === key
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => setOpenKey(isOpen ? '' : key)}
                      className="w-full text-left py-3 group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <p className="text-base sm:text-lg text-ink/85 group-hover:text-sage transition-colors">
                          {role.role}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground shrink-0">
                          {role.period}
                        </p>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-3xl">
                          {role.description}
                        </p>
                        <ul className="space-y-1.5">
                          {role.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-sage shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-28 border-t border-border"
      >
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl text-ink tracking-tight mb-10">
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 border-b border-border pb-8"
            >
              <div>
                <h3 className="text-xl text-ink tracking-tight">{edu.institution}</h3>
                <p className="text-ink/70 mt-1">
                  {edu.degree} · {edu.field}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{edu.description}</p>
              </div>
              <p className="font-mono text-xs text-muted-foreground shrink-0">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-28 border-t border-border"
      >
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl text-ink tracking-tight mb-10">
          Certifications
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={itemVariants} className="border-t border-sage/25 pt-4">
              <h3 className="text-base text-ink mb-1 tracking-tight">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="font-mono text-xs text-muted-foreground/70 mt-1">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-28 border-t border-border"
      >
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl text-ink tracking-tight mb-10">
          Skills
        </motion.h2>
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <motion.div key={group.label} variants={itemVariants}>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono text-ink/85 bg-cream border border-border rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Charts */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-28 border-t border-border"
      >
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl text-ink tracking-tight mb-4">
          Data snapshot
        </motion.h2>
        <motion.p variants={itemVariants} className="text-muted-foreground mb-10 max-w-2xl">
          How the work actually splits — tools, domains, and delivery over time.
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div variants={itemVariants} className="code-chrome p-5 sm:p-7">
            <h3 className="font-mono text-sm text-muted-foreground mb-2">core_stack.depth</h3>
            <p className="text-xs text-muted-foreground/80 mb-5">Self-rated proficiency across the daily stack.</p>
            <BarChart />
          </motion.div>
          <motion.div variants={itemVariants} className="code-chrome p-5 sm:p-7">
            <h3 className="font-mono text-sm text-muted-foreground mb-2">time.distribution</h3>
            <p className="text-xs text-muted-foreground/80 mb-5">Where attention goes across practice areas.</p>
            <PieChart />
          </motion.div>
          <motion.div variants={itemVariants} className="code-chrome p-5 sm:p-7">
            <h3 className="font-mono text-sm text-muted-foreground mb-2">tool_mix.share</h3>
            <p className="text-xs text-muted-foreground/80 mb-5">Share of build time by tool.</p>
            <ToolMixChart />
          </motion.div>
          <motion.div variants={itemVariants} className="code-chrome p-5 sm:p-7">
            <h3 className="font-mono text-sm text-muted-foreground mb-2">delivery.trend</h3>
            <p className="text-xs text-muted-foreground/80 mb-5">Cumulative dashboards and report hubs shipped.</p>
            <DeliveryTrendChart />
          </motion.div>
          <motion.div variants={itemVariants} className="code-chrome p-5 sm:p-7">
            <h3 className="font-mono text-sm text-muted-foreground mb-2">domain.share</h3>
            <p className="text-xs text-muted-foreground/80 mb-5">Recent work mix by business domain.</p>
            <DomainBarChart />
          </motion.div>
          <motion.div variants={itemVariants} className="code-chrome p-5 sm:p-7">
            <h3 className="font-mono text-sm text-muted-foreground mb-2">analyst.radar</h3>
            <p className="text-xs text-muted-foreground/80 mb-5">Capability profile across analysis and product craft.</p>
            <SkillRadarChart />
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
