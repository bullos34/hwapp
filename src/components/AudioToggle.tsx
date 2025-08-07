import React from 'react'
import { Button } from '@/components/ui/button'
import { Volume2, VolumeX } from 'lucide-react'
import { useTimerStore } from '@/store/timer-store'

export function AudioToggle() {
  const { audioEnabled, setAudioEnabled } = useTimerStore()

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled)
  }

  return (
    <Button
      onClick={toggleAudio}
      variant="ghost"
      size="sm"
      className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50"
      aria-label={audioEnabled ? 'Mute audio' : 'Unmute audio'}
    >
      {audioEnabled ? (
        <Volume2 className="w-5 h-5 text-gray-600" />
      ) : (
        <VolumeX className="w-5 h-5 text-gray-400" />
      )}
    </Button>
  )
} 