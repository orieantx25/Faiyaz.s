'use client'

import { useState, useEffect, useRef } from 'react'
import { Github, Compass, Briefcase, BookOpen, Mail, Layers, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '@/lib/content'

const navItems = [
  { name: 'Story', href: '#top', icon: Compass },
  { name: 'The year', href: '#year', icon: Sparkles },
  { name: 'Notes', href: '#learnings', icon: BookOpen },
  { name: 'Work', href: '#projects', icon: Briefcase },
  { name: 'Building', href: '#building', icon: Layers },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNavName, setShowNavName] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const nameEl = document.getElementById('hero-name')
      const navEl = navRef.current
      if (nameEl && navEl) {
        const nameTop = nameEl.getBoundingClientRect().top
        const navBottom = navEl.getBoundingClientRect().bottom
        setShowNavName(nameTop <= navBottom - 4)
      } else {
        setShowNavName(window.scrollY > window.innerHeight * 0.35)
      }

      const sections = ['year', 'learnings', 'projects', 'building', 'contact']
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = id
            break
          }
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 h-14 md:h-16 flex items-center justify-between">
          <a href="#top" className="relative h-6 flex items-center min-w-[9rem]">
            <AnimatePresence>
              {showNavName && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className={`font-display text-sm tracking-tight ${
                    isScrolled ? 'text-ink' : 'text-white'
                  }`}
                >
                  {profile.name}
                </motion.span>
              )}
            </AnimatePresence>
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const id = item.href.slice(1)
              const active = item.name === 'Story' ? !activeSection : activeSection === id
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition ${
                    active
                      ? isScrolled
                        ? 'text-ink'
                        : 'text-white'
                      : isScrolled
                        ? 'text-muted-foreground hover:text-ink'
                        : 'text-white/50 hover:text-white'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span
                      className={`absolute left-3 right-3 -bottom-0.5 h-px ${
                        isScrolled ? 'bg-signal' : 'bg-signal/80'
                      }`}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition ${
              isScrolled ? 'text-ink hover:bg-secondary' : 'text-white/70 hover:text-white'
            }`}
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around px-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const id = item.href.slice(1)
            const active = item.name === 'Story' ? !activeSection : activeSection === id
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 min-w-[3rem] ${
                  active ? 'text-signal' : 'text-muted-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[9px] font-medium">{item.name}</span>
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
