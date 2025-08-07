import React from 'react'
import { cn, getPhaseColor } from '@/lib/utils'
import { Phase } from '@/store/timer-store'
import { getMotivationalText } from '@/lib/translations'

interface MotivationalTextProps {
  phase: Phase
  cycleCount: number
}

export function MotivationalText({ phase, cycleCount }: MotivationalTextProps) {
  const currentText = getMotivationalText(phase, cycleCount)

  return (
    <div className="text-center max-w-md mx-auto">
      <p className={cn(
        "text-lg font-medium transition-all duration-500 ease-in-out",
        getPhaseColor(phase)
      )}>
        {currentText}
      </p>
    </div>
  )
} 