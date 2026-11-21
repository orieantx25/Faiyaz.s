'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getProfile } from '@/lib/profiles'

function releaseScrollPins() {
  if (typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true))
}

const STORAGE_KEY = 'fs-portfolio-profile'
const ProfileContext = createContext(null)

export function ProfileProvider({ children }) {
  const [profileId, setProfileId] = useState(null)
  const [hydrated, setHydrated] = useState(false)
  const [gateOpen, setGateOpen] = useState(false)

  useEffect(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
    setHydrated(true)
  }, [])

  const selectProfile = useCallback((id) => {
    releaseScrollPins()
    setProfileId(id)
    setGateOpen(false)
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const openGate = useCallback(() => setGateOpen(true), [])
  const clearProfile = useCallback(() => {
    setProfileId(null)
    setGateOpen(false)
    try {
      sessionStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo(
    () => ({
      profileId,
      profile: profileId ? getProfile(profileId) : null,
      hydrated,
      gateOpen,
      selectProfile,
      openGate,
      clearProfile,
      hasProfile: Boolean(profileId),
    }),
    [profileId, hydrated, gateOpen, selectProfile, openGate, clearProfile]
  )

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfile must be used within ProfileProvider')
  return ctx
}
