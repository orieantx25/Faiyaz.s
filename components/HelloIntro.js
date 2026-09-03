'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const GREETINGS = [
  'Hello',
  'नमस्ते',
  'নমস্কাৰ',
  'வணக்கம்',
  'ನಮಸ್ಕಾರ',
  'Hola',
  'Bonjour',
  'こんにちは',
]

export default function HelloIntro({ onComplete }) {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const [mounted, setMounted] = useState(false)
  const doneRef = useRef(false)

  const finish = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    document.body.style.overflow = ''
    setVisible(false)
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    setMounted(true)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      finish()
      return
    }

    document.body.style.overflow = 'hidden'

    // Word cycle ~2s, then slide out ~1.25s (same rhythm as vishaljunakdas.in)
    const leaveAt = 2100
    const doneAt = leaveAt + 1250
    const leaveTimer = window.setTimeout(() => setLeaving(true), leaveAt)
    const doneTimer = window.setTimeout(finish, doneAt)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(doneTimer)
      document.body.style.overflow = ''
    }
  }, [finish])

  if (!visible) return null

  return (
    <div
      className={`intro-loader ${leaving ? 'is-out' : ''} ${mounted ? 'is-ready' : ''}`}
      aria-hidden="true"
    >
      <div className="loader-center">
        {GREETINGS.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </div>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="loader-wave"
        aria-hidden="true"
      >
        <path d="M0,0 C360,120 1080,120 1440,0 L1440,0 L0,0 Z" />
      </svg>
    </div>
  )
}
