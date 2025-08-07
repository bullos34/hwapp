import { Phase } from '@/store/timer-store'

export const translations = {
  phases: {
    bite: 'Bite',
    chew: 'Chew',
    swallow: 'Swallow',
    pause: 'Pause'
  },
  motivationalTexts: {
    bite: [
      "Take a mindful bite.",
      "Prepare to savour this moment.",
      "Notice the food before you.",
      "Take a conscious bite.",
      "Begin with awareness."
    ],
    chew: [
      "Slow down and taste each bite.",
      "Savour the flavours and textures.",
      "Chew mindfully and be present.",
      "Notice the sensations in your mouth.",
      "Take your time with each mouthful."
    ],
    swallow: [
      "Swallow with intention.",
      "Feel the food nourishing you.",
      "Complete this bite mindfully.",
      "Notice the transition.",
      "Swallow with gratitude."
    ],
    pause: [
      "Take a breath and check in with your hunger.",
      "Notice how your body feels.",
      "Put down your fork and pause.",
      "Give your body time to register.",
      "Listen to your hunger cues."
    ]
  },
  intro: {
    title: "Welcome to 20:20:20",
    subtitle: "Mindful eating timer",
    features: {
      chew: {
        title: "Chew for 20 seconds",
        description: "Take small mouthfuls and chew each bite thoroughly"
      },
      pause: {
        title: "Pause for 20 seconds", 
        description: "Put down your fork and check in with your hunger"
      },
      listen: {
        title: "Listen to your body",
        description: "Let your body guide you to natural satiety"
      }
    },
    startButton: "Start Mindful Eating"
  },
  modal: {
    title: "Great job! 🎉",
    message: "You've completed 10 mindful bites. Would you like to continue or end your session?",
    continue: "Continue",
    end: "End Session"
  }
}

export function getPhaseText(phase: Phase): string {
  return translations.phases[phase]
}

export function getMotivationalText(phase: Phase, cycleCount: number): string {
  const texts = translations.motivationalTexts[phase]
  const index = cycleCount % texts.length
  return texts[index]
}

export function getIntroText(key: string): string {
  const keys = key.split('.')
  let value: any = translations.intro
  
  for (const k of keys) {
    value = value[k]
  }
  
  return value || key
}

export function getModalText(key: string): string {
  const keys = key.split('.')
  let value: any = translations.modal
  
  for (const k of keys) {
    value = value[k]
  }
  
  return value || key
}