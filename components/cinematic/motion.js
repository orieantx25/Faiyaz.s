'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export const easeOut = [0.16, 1, 0.3, 1]

/** Scroll-triggered reveal - blur/clip/y */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 36,
  once = true,
  as: Tag = 'div',
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[Tag] || motion.div

  if (reduce) {
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-10% 0px' }}
      transition={{ duration: 0.75, delay, ease: easeOut }}
    >
      {children}
    </MotionTag>
  )
}

/** Magnetic hover for CTAs */
export function Magnetic({ children, className = '', strength = 18 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        x.set((dx / r.width) * strength)
        y.set((dy / r.height) * strength)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

/** Hover lift card wrapper */
export function HoverLift({ children, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`hover-lift ${className}`}
      whileHover={reduce ? undefined : { y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}

/** Clip-path image reveal on scroll */
export function ClipImage({ src, alt = '', className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={reduce ? false : { clipPath: 'inset(12% 12% 12% 12%)', opacity: 0.6 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 1, ease: easeOut }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover scale-105" />
    </motion.div>
  )
}

export function usePrefersReducedMotion() {
  const [v, setV] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setV(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return v
}
