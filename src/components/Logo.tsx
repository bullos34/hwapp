import React, { useState } from 'react'
import Image from 'next/image'

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 40, className = '' }: LogoProps) {
  const [useFallback, setUseFallback] = useState(false)
  const [imageError, setImageError] = useState(false)

  if (useFallback || imageError) {
    return (
      <div className={`flex justify-center ${className}`}>
        <img
          src="/hw_logo.png"
          alt="HW Logo"
          width={size}
          height={size}
          className="opacity-60 hover:opacity-80 transition-opacity duration-300"
          style={{ width: size, height: size }}
          onError={() => {
            console.error('Image completely failed to load, showing text fallback')
            setImageError(true)
          }}
        />
      </div>
    )
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <Image
        src="/hw_logo.png"
        alt="HW Logo"
        width={size}
        height={size}
        className="opacity-60 hover:opacity-80 transition-opacity duration-300"
        onError={() => {
          console.error('Failed to load HW logo with Next.js Image, falling back to regular img tag')
          setUseFallback(true)
        }}
        onLoad={() => {
          console.log('HW logo loaded successfully')
        }}
        priority
      />
    </div>
  )
}