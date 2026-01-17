'use client'

import { useState } from 'react'

interface SafeImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  [key: string]: any
}

export function SafeImage({ src, alt, className, fallbackSrc, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  )
}

