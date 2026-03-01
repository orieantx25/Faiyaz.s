'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Github, User, Briefcase, Zap, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'About', href: '#top' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNavName, setShowNavName] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Trigger nav bar name exactly when Hero name hits the nav bar physically (15vh scroll depth)
      setShowNavName(window.scrollY > window.innerHeight * 0.15)
      
      // Detect active section
      const sections = ['projects', 'skills', 'contact']
      let currentSection = ''
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
            break
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.querySelector(href)
    if (element) {
      // Offset for bottom padding on mobile
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const getNavIcon = (name) => {
    switch (name) {
      case 'About': return <User className="w-5 h-5" />
      case 'Projects': return <Briefcase className="w-5 h-5" />
      case 'Skills': return <Zap className="w-5 h-5" />
      case 'Contact': return <Mail className="w-5 h-5" />
      default: return null
    }
  }

  if (!mounted) return null

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 mx-auto z-50 transition-all duration-300 w-full ${
          isScrolled 
            ? `max-w-[95%] lg:max-w-4xl top-4 bg-background/60 backdrop-blur-xl border border-border/50 shadow-2xl rounded-full` 
            : 'max-w-full lg:max-w-7xl top-0 bg-transparent'
        }`}
      >
        <div className={`mx-auto px-6 lg:px-12 transition-all ${isScrolled ? 'rounded-full' : ''}`}>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 min-w-[150px]">
              <AnimatePresence>
                {showNavName && (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="text-xl font-bold text-foreground block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Faiyaz Sabab
                  </motion.a>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = item.name === 'About' ? !activeSection : activeSection === item.href.slice(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive
                        ? item.name === 'Contact'
                          ? 'text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]'
                          : 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              
              <a
                href="https://github.com/orieantx25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>

            {/* Mobile Top Actions (Theme + Github) */}
            <div className="md:hidden flex items-center gap-3">
              <a
                href="https://github.com/orieantx25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Tab Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-6 left-0 right-0 mx-auto w-[90%] z-50 pointer-events-none"
      >
        <div className="bg-background/80 backdrop-blur-xl border border-border/50 shadow-[0_20px_40px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_40px_rgba(255,255,255,0.05)] rounded-full px-6 py-4 flex items-center justify-between mx-auto max-w-sm pointer-events-auto">
          {/* Dynamic Sections */}
          {navItems.map((item) => {
            const isActive = item.name === 'About' ? !activeSection : activeSection === item.href.slice(1)
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  isActive 
                    ? 'text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)] scale-110' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {getNavIcon(item.name)}
                <span className="text-[10px] font-medium tracking-wide">{item.name}</span>
              </button>
            )
          })}
        </div>
      </motion.nav>
      
      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}
