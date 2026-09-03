'use client'

import { useState, useCallback, useEffect } from 'react'
import HelloIntro from '@/components/HelloIntro'
import Hero from '@/components/Hero'
import ScrollStory from '@/components/ScrollStory'
import Statistics from '@/components/Statistics'
import Projects from '@/components/Projects'
import Building from '@/components/Building'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

function jumpToHero() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    jumpToHero()

    // Re-enable smooth scrolling for in-page nav after the page has settled at top
    const ready = window.setTimeout(() => {
      document.documentElement.classList.add('smooth-ready')
    }, 50)

    const onPageShow = (e) => {
      if (e.persisted) jumpToHero()
    }
    window.addEventListener('pageshow', onPageShow)

    return () => {
      window.clearTimeout(ready)
      window.removeEventListener('pageshow', onPageShow)
      document.documentElement.classList.remove('smooth-ready')
    }
  }, [])

  const onIntroComplete = useCallback(() => {
    jumpToHero()
    setIntroDone(true)
  }, [])

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
