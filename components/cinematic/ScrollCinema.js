'use client'

import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useProfile } from '@/lib/ProfileContext'

export default function ScrollCinema() {
  const { profile } = useProfile()
  const mood = profile?.mood

  useLayoutEffect(() => {
    if (!mood) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cinema-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 56, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 0.9,
            scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none reverse' },
          }
        )
      })

      gsap.utils.toArray('[data-speed]').forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.2')
        gsap.to(el, {
          yPercent: -30 * speed,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      })

      if (mood === 'cinema') {
        const pin = document.querySelector('[data-pin="billboard"]')
        if (pin) {
          ScrollTrigger.create({
            trigger: pin,
            start: 'top top',
            end: '+=35%',
            pin: true,
            pinSpacing: true,
          })
        }
      }

      if (mood === 'product') {
        const row = document.querySelector('#process .process-row')
        if (row) {
          gsap.to(row, {
            x: -48,
            ease: 'none',
            scrollTrigger: { trigger: '#process', start: 'top 75%', end: 'bottom 40%', scrub: 1 },
          })
        }
      }
    })

    return () => ctx.revert()
  }, [mood])

  return null
}
