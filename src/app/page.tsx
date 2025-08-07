'use client'

import React, { useEffect } from 'react'
import { useTimerStore } from '@/store/timer-store'
import { IntroScreen } from '@/components/IntroScreen'
import { TimerScreen } from '@/components/TimerScreen'

export default function Home() {
  const { showIntro, setShowIntro, clearCachedData } = useTimerStore()

  // Ensure intro screen always shows on fresh load
  useEffect(() => {
    // Clear any existing cached data that might interfere
    clearCachedData()
    // Force show intro screen
    setShowIntro(true)
  }, [clearCachedData, setShowIntro])

  const handleStart = () => {
    setShowIntro(false)
  }

  return (
    <main className="min-h-screen">
      {showIntro ? (
        <IntroScreen onStart={handleStart} />
      ) : (
        <TimerScreen />
      )}
    </main>
  )
} 