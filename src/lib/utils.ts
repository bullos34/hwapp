import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Phase } from "@/store/timer-store"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60) // Only show whole seconds
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export function getPhaseColor(phase: Phase): string {
  switch (phase) {
    case 'bite':
      return 'text-blue-500'
    case 'chew':
      return 'text-health-chew'
    case 'swallow':
      return 'text-green-500'
    case 'pause':
      return 'text-health-pause'
    default:
      return 'text-gray-500'
  }
}

export function getPhaseBgColor(phase: Phase): string {
  switch (phase) {
    case 'bite':
      return 'bg-blue-500'
    case 'chew':
      return 'bg-health-chew'
    case 'swallow':
      return 'bg-green-500'
    case 'pause':
      return 'bg-health-pause'
    default:
      return 'bg-gray-500'
  }
}

export function getPhaseRingColor(phase: Phase): string {
  switch (phase) {
    case 'bite':
      return 'stroke-blue-500'
    case 'chew':
      return 'stroke-health-chew'
    case 'swallow':
      return 'stroke-green-500'
    case 'pause':
      return 'stroke-health-pause'
    default:
      return 'stroke-gray-500'
  }
} 