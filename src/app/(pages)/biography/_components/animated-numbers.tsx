'use client'

import { useInView, useMotionValue, useSpring } from 'framer-motion'
import React, { RefObject, useEffect, useRef } from 'react'

type Props = {
  value: number
}

export const AnimatedNumbers = ({ value }: Props) => {
  const ref = useRef<HTMLSpanElement>(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 4000 })
  const isInview = useInView(ref, { once: true })

  useEffect(() => {
    if (isInview) {
      motionValue.set(value)
    }
  }, [isInview, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}
