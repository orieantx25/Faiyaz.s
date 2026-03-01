'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const titles = [
  'Data Analyst',
  'Business Intelligence',
  'Process Optimization'
]

export default function Overlay() {
  const containerRef = useRef(null)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Typing animation effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    let charIndex = 0
    
    const typingInterval = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typingInterval)
        // Move to next title after delay
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
          setDisplayedText('')
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentTitleIndex])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Section 1: 0-10% (Name & Titles - fades out going up)
  const section1Opacity = useTransform(scrollYProgress, [0, 0.02, 0.08, 0.1], [1, 1, 1, 0])
  const section1Y = useTransform(scrollYProgress, [0, 0.1], ['0vh', '-100vh'])

  // Section 2: 10-30% (Duration: 0.20, gap 0.02)
  const section2Opacity = useTransform(scrollYProgress, [0.10, 0.12, 0.28, 0.30], [0, 1, 1, 0])
  const section2Y = useTransform(scrollYProgress, [0.10, 0.30], ['100vh', '-100vh'])

  // Section 3: 32-52% (Duration: 0.20, gap 0.02)
  const section3Opacity = useTransform(scrollYProgress, [0.32, 0.34, 0.50, 0.52], [0, 1, 1, 0])
  const section3Y = useTransform(scrollYProgress, [0.32, 0.52], ['100vh', '-100vh'])

  // Section 4: 54-74% (Duration: 0.20, gap 0.02)
  const section4Opacity = useTransform(scrollYProgress, [0.54, 0.56, 0.72, 0.74], [0, 1, 1, 0])
  const section4Y = useTransform(scrollYProgress, [0.54, 0.74], ['100vh', '-100vh'])

  // Section 5: 76-96% (Duration: 0.20, ends before 1.0 to prevent skip)
  const section5Opacity = useTransform(scrollYProgress, [0.76, 0.78, 0.94, 0.96], [0, 1, 1, 0])
  const section5Y = useTransform(scrollYProgress, [0.76, 0.96], ['100vh', '-100vh'])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 perspective-1000" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">

      {/* Section 1 - Name and Typing Titles (Left Aligned, Stacked Vertically) */}
      <motion.div
        style={{ opacity: section1Opacity, y: section1Y }}
        className="fixed inset-0 p-4 sm:p-8 lg:p-16 h-screen flex flex-col justify-center pointer-events-none"
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative h-full">
          {/* Left Side Container */}
          <div className="text-left space-y-6 max-w-2xl relative z-20 pointer-events-auto">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-2xl cursor-default text-foreground transition-colors"
            >
              Faiyaz Sabab
            </motion.h1>
            
            <div className="space-y-3">
              {titles.map((title, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: index <= currentTitleIndex ? 1 : 0.4, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide flex items-center"
                >
                  {index === currentTitleIndex ? (
                    <motion.span whileHover={{ scale: 1.02, originX: 0, color: 'var(--primary)' }} className="flex items-center drop-shadow-lg cursor-default transition-colors text-foreground">
                      {displayedText}
                      <span className={`inline-block w-[2px] h-6 ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'} bg-foreground`}></span>
                    </motion.span>
                  ) : index < currentTitleIndex ? (
                    <motion.span whileHover={{ scale: 1.02, originX: 0, color: 'var(--primary)' }} className="drop-shadow-lg cursor-default transition-colors text-foreground">{title}</motion.span>
                  ) : (
                    <motion.span whileHover={{ scale: 1.02, originX: 0, color: 'var(--primary)' }} className="drop-shadow-lg cursor-default transition-colors text-foreground/60">{title}</motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Side Interactive Elements */}
          <div className="hidden lg:flex w-1/2 h-full relative items-center justify-center pointer-events-auto">
            {/* Orbital Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(150,150,150,0.1)' }}
              className={`absolute w-[400px] h-[400px] border rounded-full border-dashed flex items-center justify-center cursor-pointer transition-colors border-foreground/20 hover:border-foreground/40`}
            >
              <motion.div whileHover={{ scale: 0.95 }} className={`w-[300px] h-[300px] border rounded-full transition-colors border-foreground/10`}></motion.div>
            </motion.div>
            
            {/* Central Glowing Core */}
            <motion.div 
              whileHover={{ scale: 1.2, filter: 'blur(30px)' }}
              className="absolute w-48 h-48 bg-gradient-to-tr from-primary/30 to-blue-500/30 blur-2xl rounded-full animate-pulse cursor-pointer pointer-events-auto transition-all"
            ></motion.div>
            
            {/* Floating Data Nodes */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, i % 2 === 0 ? 15 : -15, 0],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                className={`absolute w-3 h-3 rounded-full ${mounted && theme === 'light' ? 'bg-black shadow-[0_0_15px_rgba(0,0,0,0.5)]' : 'bg-white shadow-[0_0_15px_rgba(255,255,255,1)]'}`}
                style={{
                  top: `${30 + i * 10}%`,
                  left: `${20 + i * 15}%`
                }}
                whileHover={{ scale: 2, backgroundColor: 'var(--primary)' }}
                className={`absolute w-3 h-3 rounded-full cursor-pointer pointer-events-auto transition-colors bg-foreground shadow-[0_0_15px_rgba(0,0,0,0.5)] dark:shadow-[0_0_15px_rgba(255,255,255,1)]`}
              />
            ))}
            
            {/* Processing Bar UI */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className={`absolute bottom-20 right-10 w-64 glass p-4 rounded-xl border shadow-2xl cursor-pointer pointer-events-auto transition-all border-foreground/10 hover:border-foreground/30 hover:shadow-[0_10px_30px_rgba(150,150,150,0.1)]`}
            >
              <p className={`font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2 text-foreground`}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Processing Data
              </p>
              <div className="space-y-2">
                <div className={`w-full h-1 rounded-full overflow-hidden bg-foreground/10`}>
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="h-full bg-primary"
                  />
                </div>
                <div className={`w-3/4 h-1 rounded-full overflow-hidden bg-foreground/10`}>
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    className="h-full bg-blue-400"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Section 2 - Left aligned with 3D effect */}
      <motion.div
        style={{ opacity: section2Opacity, y: section2Y }}
        className="absolute inset-0 flex items-center perspective-1000 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full pointer-events-auto">
          <motion.h2 
            whileHover={{ scale: 1.02, originX: 0, textShadow: '0 8px 40px var(--primary)' }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl cursor-default inline-block transition-all"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
          >
            I transform data<br />
            into insights.
          </motion.h2>
          <motion.p 
            whileHover={{ scale: 1.02, originX: 0, textShadow: '0 4px 20px var(--primary)' }}
            className="text-base sm:text-lg md:text-xl text-white/90 mt-4 md:mt-6 max-w-xl font-medium drop-shadow-lg cursor-default transition-all" 
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            Leveraging ML, AI, and analytics to drive strategic growth.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 3 - Center aligned with 3D effect */}
      <motion.div
        style={{ opacity: section3Opacity, y: section3Y }}
        className="absolute inset-0 flex items-center justify-center perspective-1000 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-left lg:text-center pointer-events-auto flex flex-col items-start lg:items-center">
          <motion.h2 
            whileHover={{ scale: 1.02, textShadow: '0 8px 40px var(--primary)' }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl cursor-default inline-block transition-all"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
          >
            Finding hidden patterns<br />
            in complex data.
          </motion.h2>
          <motion.p 
            whileHover={{ scale: 1.02, textShadow: '0 4px 20px var(--primary)' }}
            className="text-base sm:text-lg md:text-xl text-white/90 mt-4 md:mt-6 max-w-xl font-medium drop-shadow-lg cursor-default transition-all" 
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            Translating raw numbers into compelling narratives.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 4 - Left aligned with 3D effect */}
      <motion.div
        style={{ opacity: section4Opacity, y: section4Y }}
        className="absolute inset-0 flex items-center perspective-1000 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full pointer-events-auto">
          <motion.h2 
            whileHover={{ scale: 1.02, originX: 0, textShadow: '0 8px 40px var(--primary)' }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl cursor-default inline-block transition-all"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
          >
            Visualizing the unseen<br />
            for smarter decisions.
          </motion.h2>
          <motion.p 
            whileHover={{ scale: 1.02, originX: 0, textShadow: '0 4px 20px var(--primary)' }}
            className="text-base sm:text-lg md:text-xl text-white/90 mt-4 md:mt-6 max-w-xl font-medium drop-shadow-lg cursor-default transition-all" 
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            Empowering teams with actionable intelligence.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 5 - Right aligned with 3D effect */}
      <motion.div
        style={{ opacity: section5Opacity, y: section5Y }}
        className="absolute inset-0 flex items-center justify-end perspective-1000 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-left lg:text-right pointer-events-auto flex flex-col items-start lg:items-end">
          <motion.h2 
            whileHover={{ scale: 1.02, originX: 1, textShadow: '0 8px 40px var(--primary)' }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl cursor-default inline-block transition-all"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
          >
            From metrics<br />
            to action.
          </motion.h2>
          <motion.p 
            whileHover={{ scale: 1.02, originX: 1, textShadow: '0 4px 20px var(--primary)' }}
            className="text-base sm:text-lg md:text-xl text-white/90 mt-4 md:mt-6 max-w-xl lg:ml-auto font-medium drop-shadow-lg cursor-default transition-all" 
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            Building intelligent systems that scale.
          </motion.p>
        </div>
      </motion.div>
      </div>
    </div>
  )
}
