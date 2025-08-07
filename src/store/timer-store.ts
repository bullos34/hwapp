import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Phase = 'bite' | 'chew' | 'swallow' | 'pause'

interface TimerState {
  // Timer state
  currentPhase: Phase
  timeLeft: number
  isRunning: boolean
  cycleCount: number
  
  // UI state
  showIntro: boolean
  showContinuePrompt: boolean
  audioEnabled: boolean
  
  // Actions
  startTimer: () => void
  pauseTimer: () => void
  resetTimer: () => void
  nextPhase: () => void
  incrementCycle: () => void
  setShowIntro: (show: boolean) => void
  setShowContinuePrompt: (show: boolean) => void
  setAudioEnabled: (enabled: boolean) => void
  updateTimeLeft: (time: number) => void
  clearCachedData: () => void
}

// Phase durations in seconds
const PHASE_DURATIONS: Record<Phase, number> = {
  bite: 5,
  chew: 20,
  swallow: 5,
  pause: 20
}

export const useTimerStore = create<TimerState>()(
  persist(
    (set, get) => ({
      // Initial state - showIntro is ALWAYS true on fresh load
      currentPhase: 'bite',
      timeLeft: PHASE_DURATIONS.bite,
      isRunning: false,
      cycleCount: 0,
      showIntro: true, // Always start with intro screen
      showContinuePrompt: false,
      audioEnabled: true,

      // Actions
      startTimer: () => set({ isRunning: true }),
      
      pauseTimer: () => set({ isRunning: false }),
      
      resetTimer: () => set({
        currentPhase: 'bite',
        timeLeft: PHASE_DURATIONS.bite,
        isRunning: false,
        cycleCount: 0,
        showContinuePrompt: false,
        showIntro: true // Always reset to intro screen
      }),
      
      nextPhase: () => {
        const { currentPhase, cycleCount } = get()
        
        // Define phase order
        const phaseOrder: Phase[] = ['bite', 'chew', 'swallow', 'pause']
        const currentIndex = phaseOrder.indexOf(currentPhase)
        const nextIndex = (currentIndex + 1) % phaseOrder.length
        const nextPhase = phaseOrder[nextIndex]
        
        // Check if we're completing a full cycle (after pause phase)
        const isCycleComplete = nextPhase === 'bite'
        
        set({
          currentPhase: nextPhase,
          timeLeft: PHASE_DURATIONS[nextPhase],
          cycleCount: isCycleComplete ? cycleCount + 1 : cycleCount
        })
        
        // Show continue prompt after 10 cycles
        if (isCycleComplete && cycleCount + 1 >= 10) {
          set({ showContinuePrompt: true })
        }
      },
      
      incrementCycle: () => {
        const { cycleCount } = get()
        set({ cycleCount: cycleCount + 1 })
        
        if (cycleCount + 1 >= 10) {
          set({ showContinuePrompt: true })
        }
      },
      
      setShowIntro: (show: boolean) => set({ showIntro: show }),
      
      setShowContinuePrompt: (show: boolean) => set({ showContinuePrompt: show }),
      
      setAudioEnabled: (enabled: boolean) => set({ audioEnabled: enabled }),
      
      updateTimeLeft: (time: number) => set({ timeLeft: time }),
      
      clearCachedData: () => {
        // Clear any existing localStorage data
        if (typeof window !== 'undefined') {
          localStorage.removeItem('timer-storage')
        }
        // Reset to initial state
        set({
          currentPhase: 'bite',
          timeLeft: PHASE_DURATIONS.bite,
          isRunning: false,
          cycleCount: 0,
          showIntro: true,
          showContinuePrompt: false,
          audioEnabled: true
        })
      }
    }),
    {
      name: 'timer-storage',
      partialize: (state) => ({
        audioEnabled: state.audioEnabled
        // showIntro is NEVER persisted - always starts true
      })
    }
  )
) 