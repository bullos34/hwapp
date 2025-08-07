import React from 'react'
import { cn, formatTime, getPhaseRingColor, getPhaseColor } from '@/lib/utils'
import { Phase } from '@/store/timer-store'
import { getPhaseText } from '@/lib/translations'

interface CircularTimerProps {
  timeLeft: number
  totalTime: number
  phase: Phase
  size?: number
  strokeWidth?: number
}

export function CircularTimer({ 
  timeLeft, 
  totalTime, 
  phase, 
  size = 280, 
  strokeWidth = 12 
}: CircularTimerProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const progress = (totalTime - timeLeft) / totalTime
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress * circumference)

  const phaseColor = getPhaseRingColor(phase)
  const textColor = getPhaseColor(phase)
  const phaseText = getPhaseText(phase)

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Phase indicator glow - behind everything */}
        <div
          className={cn(
            "absolute inset-0 rounded-full pointer-events-none z-0",
            phase === 'chew' ? 'pulse-glow' : 
            phase === 'pause' ? 'pulse-glow-blue' :
            phase === 'bite' ? 'pulse-glow-blue' :
            'pulse-glow-green'
          )}
          style={{ width: size, height: size }}
        />
        {/* Circular Progress */}
        <div className="relative z-10" style={{ width: size, height: size }}>
          <svg
            className="transform -rotate-90"
            width={size}
            height={size}
          >
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="rgba(142, 142, 147, 0.2)"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="transparent"
              className={cn(
                "transition-all duration-1000 ease-out",
                phaseColor
              )}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center">
              <div className={cn(
                "text-4xl font-bold mb-2 transition-colors duration-300",
                textColor
              )}>
                {formatTime(timeLeft)}
              </div>
              <div className={cn(
                "text-lg font-medium transition-colors duration-300",
                textColor
              )}>
                {phaseText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 