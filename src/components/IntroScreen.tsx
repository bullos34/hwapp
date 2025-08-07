import React from 'react'
import { Button } from '@/components/ui/button'
import { Heart, Clock, Utensils } from 'lucide-react'
import { Logo } from './Logo'
import { getIntroText } from '@/lib/translations'

interface IntroScreenProps {
  onStart: () => void
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="apple-health-card rounded-3xl p-8 max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-6">
          <Logo size={150} />
        </div>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-health-chew rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {getIntroText('title')}
          </h1>
          <p className="text-gray-600">
            {getIntroText('subtitle')}
          </p>
        </div>
        {/* Features */}
        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-health-chew/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Utensils className="w-5 h-5 text-health-chew" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-1">
                {getIntroText('features.chew.title')}
              </h3>
              <p className="text-sm text-gray-600">
                {getIntroText('features.chew.description')}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-health-pause/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Clock className="w-5 h-5 text-health-pause" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-1">
                {getIntroText('features.pause.title')}
              </h3>
              <p className="text-sm text-gray-600">
                {getIntroText('features.pause.description')}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Heart className="w-5 h-5 text-gray-600" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-1">
                {getIntroText('features.listen.title')}
              </h3>
              <p className="text-sm text-gray-600">
                {getIntroText('features.listen.description')}
              </p>
            </div>
          </div>
        </div>
        {/* Start Button */}
        <Button
          onClick={onStart}
          size="lg"
          className="w-full text-lg py-4"
        >
          {getIntroText('startButton')}
        </Button>
      </div>
    </div>
  )
} 