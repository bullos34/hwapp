"use client"

import React from 'react'
import { useTimerStore } from '@/store/timer-store'

export function LanguageToggle() {
  const { language, setLanguage } = useTimerStore()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all duration-200"
      aria-label={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
    >
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          {language === 'en' ? 'EN' : 'हि'}
        </span>
        <svg 
          className="w-4 h-4 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" 
          />
        </svg>
      </div>
    </button>
  )
}