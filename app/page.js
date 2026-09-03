'use client'

import { useState, useCallback } from 'react'
import HelloIntro from '@/components/HelloIntro'
import Hero from '@/components/Hero'
import ScrollStory from '@/components/ScrollStory'
import Statistics from '@/components/Statistics'
import Projects from '@/components/Projects'
import Building from '@/components/Building'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const onIntroComplete = useCallback(() => setIntroDone(true), [])

  return (
    <>
      <HelloIntro onComplete={onIntroComplete} />
      <main className="relative bg-background min-h-screen pb-24 md:pb-0">
        <Navigation />
        <Hero ready={introDone} />
        <ScrollStory />
        <Statistics />
        <Projects />
        <Building />
        <Contact />
      </main>
    </>
  )
}
