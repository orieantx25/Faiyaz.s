'use client'

import ScrollyCanvas from '@/components/ScrollyCanvas'
import Overlay from '@/components/Overlay'
import Statistics from '@/components/Statistics'
import Projects from '@/components/Projects'
import Navigation from '@/components/Navigation'
import FloatingButton from '@/components/FloatingButton'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Select all major sections below the hero
    const sections = mainRef.current.querySelectorAll('.parallax-section')

    sections.forEach((section) => {
      // Create a subtle 3D perspective scroll effect using GSAP
      gsap.fromTo(
        section,
        {
          y: 40,
          opacity: 0.8
        },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 30%',
            scrub: 1, // Smooth scrub effect
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <main ref={mainRef} className="relative bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Scrollytelling Section with Canvas and Overlay */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      {/* Statistics Section */}
      <div className="parallax-section">
        <Statistics />
      </div>
      
      {/* Projects and Content Below */}
      <div className="parallax-section">
        <Projects />
      </div>
      
      {/* Floating Button */}
      <FloatingButton />
    </main>
  )
}
