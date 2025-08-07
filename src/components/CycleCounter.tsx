import React from 'react'
import { cn } from '@/lib/utils'

interface CycleCounterProps {
  cycleCount: number
}

export function CycleCounter({ cycleCount }: CycleCounterProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50">
        <span className="text-sm font-medium text-gray-600">
          Bite {cycleCount + 1}
        </span>
      </div>
    </div>
  )
} 