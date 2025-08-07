import React, { useEffect, useRef } from 'react'
import { useTimerStore } from '@/store/timer-store'
import { CircularTimer } from './CircularTimer'
import { MotivationalText } from './MotivationalText'
import { CycleCounter } from './CycleCounter'
import { Controls } from './Controls'
import { ContinueModal } from './ContinueModal'
import { AudioCue } from './AudioCue'
import { AudioToggle } from './AudioToggle'
import { HapticFeedback } from './HapticFeedback'
import { Logo } from './Logo'
import { useWindowSize } from '@/hooks/useWindowSize'

// Phase durations in seconds
const PHASE_DURATIONS: Record<string, number> = {
  bite: 5,
  chew: 20,
  swallow: 5,
  pause: 20
}

export function TimerScreen() {
  const {
    currentPhase,
    timeLeft,
    isRunning,
    cycleCount,
    showContinuePrompt,
    startTimer,
    pauseTimer,
    resetTimer,
    nextPhase,
    setShowContinuePrompt,
    updateTimeLeft
  } = useTimerStore()

  const { width } = useWindowSize()
  const animationFrameRef = useRef<number>()
  const lastTimeRef = useRef<number>()

  // Get current phase duration
  const currentPhaseDuration = PHASE_DURATIONS[currentPhase]

  // Timer logic using requestAnimationFrame
  useEffect(() => {
    if (!isRunning) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      return
    }

    const tick = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime
      }

      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      // Update time left
      const newTimeLeft = Math.max(0, timeLeft - deltaTime / 1000)
      updateTimeLeft(newTimeLeft)

      // Check if phase is complete
      if (newTimeLeft <= 0) {
        nextPhase()
        lastTimeRef.current = undefined
      } else {
        animationFrameRef.current = requestAnimationFrame(tick)
      }
    }

    animationFrameRef.current = requestAnimationFrame(tick)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isRunning, timeLeft, nextPhase, updateTimeLeft])

  const handleContinue = () => {
    setShowContinuePrompt(false)
  }

  const handleEnd = () => {
    setShowContinuePrompt(false)
    resetTimer()
  }

  // Responsive timer size
  const timerSize = width < 640 ? 240 : 280

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* Audio Toggle */}
      <AudioToggle />
      
      {/* Audio Cue Component */}
      <AudioCue />
      
      {/* Haptic Feedback */}
      <HapticFeedback />

      <div className="apple-health-card rounded-3xl p-6 sm:p-8 max-w-lg w-full">
        {/* Logo */}
        <div className="mb-6">
          <Logo size={80} />
        </div>

        {/* Cycle Counter */}
        <div className="mb-6 sm:mb-8">
          <CycleCounter cycleCount={cycleCount} />
        </div>

        {/* Timer */}
        <div className="mb-6 sm:mb-8">
          <CircularTimer
            timeLeft={timeLeft}
            totalTime={currentPhaseDuration}
            phase={currentPhase}
            size={timerSize}
          />
        </div>

        {/* Motivational Text */}
        <div className="mb-6 sm:mb-8">
          <MotivationalText phase={currentPhase} cycleCount={cycleCount} />
        </div>

        {/* Controls */}
        <div>
          <Controls
            isRunning={isRunning}
            onStart={startTimer}
            onPause={pauseTimer}
            onReset={resetTimer}
          />
        </div>
      </div>

      {/* Continue Modal */}
      {showContinuePrompt && (
        <ContinueModal
          onContinue={handleContinue}
          onEnd={handleEnd}
        />
      )}
    </div>
  )
} 