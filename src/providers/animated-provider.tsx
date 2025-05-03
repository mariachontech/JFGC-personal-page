'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const AnimatedProvider = ({ children }: Props) => {
  const pathName = usePathname()

  //('path:', pathName)

  return (
    <AnimatePresence mode={'wait'}>
      <div key={pathName}>{children}</div>
    </AnimatePresence>
  )
}
