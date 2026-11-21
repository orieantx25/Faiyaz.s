'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '@/lib/content'

const ease = [0.16, 1, 0.3, 1]

export default function CinematicIntro({ onComplete }) {
  const [leaving, setLeaving] = useState(false)
  const [mounted, setMounted] = useState(false)
  const letters = profile.name.split('')

  const finish = useCallback(() => setLeaving(true), [])

  useEffect(() => {
    setMounted(true)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      onComplete?.()
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [onComplete])

  if (!mounted) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          background: '#090909',
          color: '#fff',
          display: 'grid',
          placeItems: 'center',
        }}
      />
    )
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        window.setTimeout(() => onComplete?.(), 0)
      }}
    >
      {!leaving && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
          transition={{ duration: 1.05, ease }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#090909',
            color: '#ffffff',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(229,9,20,0.22), transparent 60%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: 24, maxWidth: 900 }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontSize: 11,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#B8B8B8',
                marginBottom: 32,
              }}
            >
              A portfolio experience
            </motion.p>

            <h1
              style={{
                fontSize: 'clamp(3.2rem, 12vw, 8rem)',
                lineHeight: 0.9,
                color: '#ffffff',
                margin: 0,
                fontWeight: 400,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              {letters.map((ch, i) => (
                <motion.span
                  key={`${ch}-${i}`}
                  style={{ display: 'inline-block' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.03, duration: 0.45, ease }}
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.7, ease }}
              style={{
                margin: '24px auto 0',
                height: 1,
                width: 96,
                background: '#E50914',
                transformOrigin: 'center',
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.9, ease }}
              style={{ marginTop: 48 }}
            >
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                      color: '#B8B8B8',
                      marginBottom: 32,
                      maxWidth: 420,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      lineHeight: 1.5,
                    }}
                  >
                    {profile.headline}. Products, analytics, and operations - as an interactive film.
                  </p>
                  <button
                    type="button"
                    onClick={finish}
                    style={{
                      background: '#E50914',
                      color: '#fff',
                      border: 'none',
                      padding: '14px 40px',
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: 'pointer',
                      borderRadius: 4,
                    }}
                  >
                    Enter my world
                  </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
