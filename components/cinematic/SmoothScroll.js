'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const LENIS = {
  editorial: { duration: 1.35, lerp: 0.08 },
  professional: { duration: 0.72, lerp: 0.14 },
  product: { duration: 1.05, lerp: 0.1 },
  cinema: { duration: 1.6, lerp: 0.06 },
}

export default function SmoothScroll({ enabled = true, mood = 'cinema' }) {
  useEffect(() => {
    if (!enabled) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    gsap.registerPlugin(ScrollTrigger)
    const tune = LENIS[mood] || LENIS.cinema
    const lenis = new Lenis({
      duration: tune.duration,
      lerp: tune.lerp,
      smoothWheel: true,
      touchMultiplier: mood === 'cinema' ? 1.45 : 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    window.__fsLenis = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const ticker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)
    document.documentElement.classList.add('lenis')

    const onModal = (e) => {
      if (e.detail?.open) lenis.stop()
      else lenis.start()
    }
    window.addEventListener('fs-modal', onModal)

    return () => {
      window.removeEventListener('fs-modal', onModal)
      gsap.ticker.remove(ticker)
      lenis.destroy()
      if (window.__fsLenis === lenis) delete window.__fsLenis
      document.documentElement.classList.remove('lenis')
    }
  }, [enabled, mood])

  return null
}
