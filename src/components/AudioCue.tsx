import React, { useEffect, useRef } from 'react'
import { useTimerStore } from '@/store/timer-store'

export function AudioCue() {
  const { audioEnabled, currentPhase } = useTimerStore()
  const audioContextRef = useRef<AudioContext | null>(null)

  // Initialize audio context
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
  }, [])

  // Play sound when phase changes
  useEffect(() => {
    if (!audioEnabled || !audioContextRef.current) return

    const playBeep = (frequency: number, duration: number) => {
      try {
        const oscillator = audioContextRef.current!.createOscillator()
        const gainNode = audioContextRef.current!.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContextRef.current!.destination)
        
        oscillator.frequency.value = frequency
        oscillator.type = 'sine'
        
        gainNode.gain.setValueAtTime(0.1, audioContextRef.current!.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current!.currentTime + duration)
        
        oscillator.start(audioContextRef.current!.currentTime)
        oscillator.stop(audioContextRef.current!.currentTime + duration)
      } catch (error) {
        console.log('Audio not supported or user interaction required')
      }
    }

    // Play different sounds for different phases
    switch (currentPhase) {
      case 'bite':
        playBeep(400, 0.2) // Low pitch, short duration for bite
        break
      case 'chew':
        playBeep(800, 0.3) // Higher pitch for chew
        break
      case 'swallow':
        playBeep(600, 0.25) // Medium pitch for swallow
        break
      case 'pause':
        playBeep(500, 0.4) // Lower pitch, longer duration for pause
        break
    }
  }, [currentPhase, audioEnabled])

  return null // This component doesn't render anything
} 