import React from 'react'
import Image from 'next/image'

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Image
        src="/hw_logo.png"
        alt="HW Logo"
        width={size}
        height={size}
        className="opacity-60 hover:opacity-80 transition-opacity duration-300"
      />
    </div>
  )
}