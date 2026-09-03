'use client'

import { useState, useEffect, useRef } from 'react'
import { Github, User, Briefcase, Zap, Mail, Layers } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '@/lib/content'

const navItems = [
  { name: 'About', href: '#top', icon: User },
  { name: 'Work', href: '#projects', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Zap },
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

      const sections = ['projects', 'skills', 'building', 'contact']
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 mx-auto z-50 transition-all duration-300 w-full ${
          isScrolled
            ? 'max-w-[95%] lg:max-w-4xl top-3 bg-cream/80 backdrop-blur-xl border border-border/60 shadow-sm rounded-full'
            : 'max-w-full lg:max-w-6xl top-0 bg-transparent'
        }`}
      >
        <div className="mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-14">
            <div className="min-w-[8.5rem] sm:min-w-[11rem]">
              <AnimatePresence mode="wait">
                {showNavName && (
                  <motion.button
                    key="nav-full-name"
                    type="button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-sm sm:text-base font-medium text-ink tracking-tight whitespace-nowrap"
                  >
                    {profile.name}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive =
                  item.name === 'About' ? !activeSection : activeSection === item.href.slice(1)
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm transition-colors ${
                      isActive ? 'text-ink' : 'text-muted-foreground hover:text-ink'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-sm bg-ink text-cream rounded-full hover:bg-ink/90 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>

            <div className="md:hidden">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 inline-flex"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-ink" />
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.nav
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-5 left-0 right-0 mx-auto w-[92%] z-50 pointer-events-none"
      >
        <div className="bg-cream/90 backdrop-blur-xl border border-border shadow-sm rounded-full px-3 py-2.5 flex items-center justify-between mx-auto max-w-md pointer-events-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive =
              item.name === 'About' ? !activeSection : activeSection === item.href.slice(1)
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`flex flex-col items-center gap-0.5 transition-all ${
                  isActive ? 'text-sage' : 'text-muted-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[9px] font-mono tracking-wide">{item.name}</span>
              </button>
            )
          })}
        </div>
      </motion.nav>
    </>
  )
}
