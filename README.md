# 20:20:20 Timer - Mindful Eating App

A mobile-first web application designed to support mindful eating using the 20:20:20 rule. The app helps users slow down their eating pace by timing 20-second chewing phases followed by 20-second pause phases.

## 🎯 Purpose

The 20:20:20 method encourages mindful eating by:
- **Chewing each bite for 20 seconds** - allowing time to taste and savor food
- **Pausing for 20 seconds** - giving the body time to register satiety signals
- **Taking small mouthfuls** - promoting portion awareness
- **Putting down utensils between bites** - breaking automatic eating patterns

## 🚀 Features

- **Smooth Circular Timer** - Visual countdown with Apple Health-inspired design
- **Phase Transitions** - Automatic switching between chew and pause phases
- **Motivational Text** - Contextual guidance for each phase
- **Cycle Tracking** - Counts completed bites with continue prompts
- **Persistent Settings** - Remembers user preferences
- **Mobile Optimized** - Responsive design for all devices
- **Accessibility** - Screen reader friendly with proper ARIA labels

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Zustand** - Lightweight state management
- **Lucide React** - Beautiful icons
- **Apple Health Design** - Clean, minimal UI inspired by iOS

## 📱 Screens

### Intro Screen
- Welcome message and app explanation
- Feature overview with icons
- Start button to begin timer

### Timer Screen
- Large circular countdown timer
- Phase indicator (Chew/Pause)
- Motivational text that changes per phase
- Control buttons (Start/Pause/Reset)
- Cycle counter showing current bite number
- Continue modal after 10 cycles

## 🎨 Design System

### Colors
- **Chew Phase**: Apple Green (#34C759)
- **Pause Phase**: Apple Blue (#007AFF)
- **Background**: Light Gray (#F2F2F7)
- **Cards**: White with backdrop blur
- **Text**: Dark (#1D1D1F) and Secondary (#8E8E93)

### Typography
- **System Fonts**: -apple-system, BlinkMacSystemFont, Segoe UI
- **Smooth Animations**: 60fps transitions and micro-interactions

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── CircularTimer.tsx
│   ├── Controls.tsx
│   ├── CycleCounter.tsx
│   ├── IntroScreen.tsx
│   ├── MotivationalText.tsx
│   ├── TimerScreen.tsx
│   └── ContinueModal.tsx
├── lib/               # Utilities
│   └── utils.ts       # Helper functions
└── store/             # State management
    └── timer-store.ts # Zustand store
```

## 🧠 State Management

The app uses Zustand for state management with the following key states:

- `currentPhase`: 'chew' | 'pause'
- `timeLeft`: Remaining seconds in current phase
- `isRunning`: Timer active state
- `cycleCount`: Number of completed cycles
- `showIntro`: Intro screen visibility
- `showContinuePrompt`: Modal visibility
- `audioEnabled`: Sound preferences

## ⚡ Performance

- **requestAnimationFrame**: Smooth 60fps timer updates
- **Background Tab Handling**: Graceful timer pausing
- **Mobile Optimization**: Touch-friendly controls
- **Progressive Enhancement**: Works without JavaScript

## 🚀 Deployment

The app is optimized for deployment on Vercel:

1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Deploy with zero configuration

## 📱 Mobile Features

- **PWA Ready**: Can be installed as a home screen app
- **Touch Optimized**: Large touch targets and gestures
- **Orientation Support**: Works in portrait and landscape
- **Haptic Feedback**: Optional vibration on phase changes

## 🔮 Future Enhancements

- [ ] Audio cues for phase transitions
- [ ] Haptic feedback support
- [ ] Dark mode support
- [ ] Customizable timer durations
- [ ] Session history and statistics
- [ ] Social sharing features
- [ ] Offline support

## 📄 License

MIT License - feel free to use this project for your own mindful eating journey!

---

**Built with ❤️ for mindful eating and better health** 