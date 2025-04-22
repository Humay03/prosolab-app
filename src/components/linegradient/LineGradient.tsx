'use client'

import React, { JSX } from 'react'

type LineGradientProps = {
  children: React.ReactNode
  variant?: 'text' | 'background'
  fromColor?: string
  middleColor?: string
  toColor?: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}


const LineGradient: React.FC<LineGradientProps> = ({
  children,
  variant = 'text',
  fromColor = '#2e90fa', 
  middleColor = '#848ff6', 
  toColor = '#ffffff', 
  className = '',
  as = variant === 'text' ? 'span' : 'div', 
}) => {
  const gradientStyle =
    variant === 'text'
      ? {
          background: `linear-gradient(to right, ${fromColor} 0%, ${middleColor} 90%, ${toColor} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'inline',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 0',
        }
      : {
          background: `linear-gradient(to right, ${fromColor} 0%, ${middleColor} 50%, ${toColor} 100%)`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 0',
        }

  const ComponentTag = as

  return (
    <ComponentTag style={gradientStyle} className={className}>
      {children}
    </ComponentTag>
  )
}

export default LineGradient
