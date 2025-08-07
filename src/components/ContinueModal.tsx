import React from 'react'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import { getModalText } from '@/lib/translations'

interface ContinueModalProps {
  onContinue: () => void
  onEnd: () => void
}

export function ContinueModal({ onContinue, onEnd }: ContinueModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="apple-health-card rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {getModalText('title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {getModalText('message')}
          </p>
          
          <div className="flex gap-4">
            <Button
              onClick={onContinue}
              size="lg"
              className="flex-1 flex items-center gap-2"
            >
              <Check className="w-5 h-5" />
              {getModalText('continue')}
            </Button>
            <Button
              onClick={onEnd}
              variant="outline"
              size="lg"
              className="flex-1 flex items-center gap-2"
            >
              <X className="w-5 h-5" />
              {getModalText('end')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 