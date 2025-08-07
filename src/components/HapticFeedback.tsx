import React, { useEffect } from 'react'
import { useTimerStore } from '@/store/timer-store'

export function HapticFeedback() {
  const { currentPhase, audioEnabled } = useTimerStore()

  useEffect(() => {
    // Only trigger haptic feedback if audio is enabled and device supports it
    if (audioEnabled && 'vibrate' in navigator) {
      // Light vibration for phase transitions
      navigator.vibrate(100)
    }
  }, [currentPhase, audioEnabled])

  return null // This component doesn't render anything
} 