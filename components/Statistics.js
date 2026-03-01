'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Database, Award } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const stats = [
  {
    icon: Database,
    value: 10,
    suffix: '+',
    label: 'Projects',
    description: 'Completed projects showcasing expertise',
    color: 'text-blue-500'
  },
  {
    icon: TrendingUp,
    value: 1.5,
    suffix: '+',
    label: 'Years Experience',
    description: 'Hands-on experience in analytics',
    color: 'text-emerald-500'
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Dashboards Built',
    description: 'Delivering value consistently',
    color: 'text-purple-500'
  }
]

function CountUp({ end, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      setCount(0)
      return
    }

    let startTime
    const duration = 2000 // 2 seconds
    const startValue = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      
      const currentValue = startValue + (end - startValue) * easeProgress
      setCount(end % 1 === 0 ? Math.floor(currentValue) : Number(currentValue.toFixed(1)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, inView])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function Statistics() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-20 md:py-32"
    >
      <motion.div variants={itemVariants} className="text-center mb-12 md:mb-20">
        <motion.h2 whileHover={{ scale: 1.05, color: 'var(--primary)' }} className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 md:mb-6 inline-block cursor-default transition-colors">Impact by Numbers</motion.h2>
        <motion.p whileHover={{ scale: 1.02 }} className="text-xl text-muted-foreground max-w-2xl mx-auto cursor-default">
          Measurable results from data-driven solutions
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
              className="glass rounded-2xl p-6 sm:p-8 text-center border hover:border-primary/30 transition-all"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className={`w-6 h-6 ${stat.color || 'text-primary'}`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-sm font-semibold text-foreground/80 mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
