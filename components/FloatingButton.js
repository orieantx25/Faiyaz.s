'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Mail, Users } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function FloatingButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showButton, setShowButton] = useState(false)
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const contactSection = document.getElementById('contact')
    if (contactSection) {
      observer.observe(contactSection)
    }

    // Helper to keep checking if contact loads later
    const interval = setInterval(() => {
      const section = document.getElementById('contact')
      if (section) {
        observer.observe(section)
        clearInterval(interval)
      }
    }, 1000)

    return () => {
      if (contactSection) observer.unobserve(contactSection)
      clearInterval(interval)
    }
  }, [])

  const options = [
    {
      icon: Mail,
      label: 'Invite',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sababfaiyaz25@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      label: 'Glimpse',
      href: 'https://gyanx.in/',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      label: 'Collaborate',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=faiyaz@gyanx.in',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block fixed bottom-8 right-8 z-50 pointer-events-auto"
          >
            <div
              className="relative"
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
              {/* Floating Options */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-full right-0 mb-4 space-y-2"
                  >
                    {options.map((option, index) => {
                      const Icon = option.icon
                      const handleClick = (e) => {
                        if (option.action) {
                          e.preventDefault()
                          option.action()
                        }
                      }
                      
                      return (
                        <motion.a
                          key={option.label}
                          href={option.href}
                          onClick={handleClick}
                          target={option.href && option.href.startsWith('http') ? '_blank' : undefined}
                          rel={option.href && option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex items-center gap-3 px-4 py-3 rounded-full glass border hover:scale-105 transition-transform whitespace-nowrap bg-gradient-to-r ${option.color} shadow-lg`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-4 h-4 text-white" />
                          <span className="text-sm font-medium text-white">{option.label}</span>
                        </motion.a>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Button */}
              <motion.a
                href="https://gyanx.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-4 rounded-full border bg-black dark:bg-white text-white dark:text-black shadow-2xl hover:scale-105 transition-transform cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-bold whitespace-nowrap !text-white dark:!text-black">
                  Building something 👀
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
