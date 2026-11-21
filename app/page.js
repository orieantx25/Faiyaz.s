'use client'

import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ProfileProvider, useProfile } from '@/lib/ProfileContext'
import { profileShows } from '@/lib/profiles'
import CinematicIntro from '@/components/cinematic/CinematicIntro'
import ProfileGate from '@/components/cinematic/ProfileGate'
import SmoothScroll from '@/components/cinematic/SmoothScroll'
import ScrollProgress from '@/components/cinematic/ScrollProgress'
import CinematicNav from '@/components/cinematic/CinematicNav'
import CinematicHero from '@/components/cinematic/CinematicHero'
import StoryStrip from '@/components/cinematic/StoryStrip'
import ProjectRails from '@/components/cinematic/ProjectRail'
import AnalyticsLab from '@/components/cinematic/AnalyticsLab'
import CareerTimeline from '@/components/cinematic/CareerTimeline'
import ClosingCredits from '@/components/cinematic/ClosingCredits'
import ServicesStrip from '@/components/cinematic/ServicesStrip'
import ChapterDock from '@/components/cinematic/ChapterDock'
import PersonalWorld from '@/components/cinematic/PersonalWorld'
import Milestones from '@/components/cinematic/Milestones'
import RecruiterBrief from '@/components/cinematic/RecruiterBrief'
import Achievements from '@/components/cinematic/Achievements'
import ClientProcess from '@/components/cinematic/ClientProcess'
import GuestAtlas from '@/components/cinematic/GuestAtlas'
import GuestEpisodes from '@/components/cinematic/GuestEpisodes'
import BuildsRail from '@/components/cinematic/BuildsRail'
import ScrollCinema from '@/components/cinematic/ScrollCinema'

function ProfileTheme({ children }) {
  const { profile } = useProfile()

  useEffect(() => {
    const root = document.documentElement
    if (!profile) {
      root.style.removeProperty('--profile-accent')
      root.style.removeProperty('--profile-accent-soft')
      root.removeAttribute('data-mood')
      return
    }
    root.style.setProperty('--profile-accent', profile.accent)
    root.style.setProperty('--profile-accent-soft', profile.accentSoft)
    root.setAttribute('data-mood', profile.mood)
  }, [profile])

  return children
}

function PortfolioExperience() {
  const { profileId, profile, hasProfile, gateOpen, hydrated } = useProfile()
  const show = (section) => hasProfile && profileShows(profileId, section)

  return (
    <ProfileTheme>
      <AnimatePresence>{hydrated && (!hasProfile || gateOpen) && <ProfileGate />}</AnimatePresence>

      {hasProfile && (
        <>
          <SmoothScroll enabled mood={profile?.mood} />
          <ScrollCinema />
          <ScrollProgress />
          <CinematicNav />
          <ChapterDock />
          <main className="relative bg-[#090909] min-h-screen profile-shell">
            {show('hero') && <CinematicHero />}
            {show('personal') && <PersonalWorld />}
            {show('brief') && <RecruiterBrief />}
            {show('atlas') && <GuestAtlas />}
            {show('episodes') && <GuestEpisodes />}
            {show('story') && <StoryStrip />}
            {show('milestones') && <Milestones />}
            {show('services') && <ServicesStrip />}
            {show('process') && <ClientProcess />}
            {show('achievements') && <Achievements />}
            {show('projects') && <ProjectRails />}
            {show('lab') && <AnalyticsLab />}
            {show('builds') && <BuildsRail />}
            {(show('timeline') || show('skills')) && (
              <CareerTimeline showSkills={show('skills') || show('timeline')} />
            )}
            {show('credits') && <ClosingCredits />}
          </main>
        </>
      )}
    </ProfileTheme>
  )
}

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    const ready = window.setTimeout(() => {
      document.documentElement.classList.add('smooth-ready')
    }, 40)
    return () => {
      window.clearTimeout(ready)
      document.documentElement.classList.remove('smooth-ready')
    }
  }, [])

  const onIntroComplete = useCallback(() => {
    window.scrollTo(0, 0)
    setIntroDone(true)
  }, [])

  return (
    <ProfileProvider>
      <PortfolioExperience />
      <AnimatePresence>
        {!introDone && <CinematicIntro onComplete={onIntroComplete} />}
      </AnimatePresence>
    </ProfileProvider>
  )
}
