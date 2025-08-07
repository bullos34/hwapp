import React from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface ControlsProps {
  isRunning: boolean
  onStart: () => void
  onPause: () => void
  onReset: () => void
}

export function Controls({ isRunning, onStart, onPause, onReset }: ControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      {isRunning ? (
        <Button
          onClick={onPause}
          variant="secondary"
          size="lg"
          className="flex items-center gap-2"
        >
          <Pause className="w-5 h-5" />
          Pause
        </Button>
      ) : (
        <Button
          onClick={onStart}
          size="lg"
          className="flex items-center gap-2"
        >
          <Play className="w-5 h-5" />
          Start
        </Button>
      )}
      
      <Button
        onClick={onReset}
        variant="outline"
        size="lg"
        className="flex items-center gap-2"
      >
        <RotateCcw className="w-5 h-5" />
        Reset
      </Button>
    </div>
  )
} 