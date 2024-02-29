import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'mx-auto w-full inline-block z-0   px-2.5 md:px-20 pt-0 xl:p-24 lg:p-16 md:p-12 sm:p-8',
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
