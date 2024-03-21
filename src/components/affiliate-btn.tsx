import { roboto } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  className?: string
}

export const AffiliateBtn = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'fixed top-0 right-0 lg:right-auto lg:top-auto lg:left-4 lg:bottom-4 flex items-center justify-center overflow-hidden',
        className
      )}
    >
      <div className="w-28 lg:w-40 h-auto flex items-center justify-center relative ">
        <svg
          className="animate-spin-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-transparent"
            id="circlePath"
            d="
            M 20, 50
            a 30,30 0 1,1 60,0
            a 30,30 0 1,1 -60,0
            "
          />
          <text>
            <textPath
              className={cn(
                'text-[10px] font-thin fill-dark dark:fill-light ',
                roboto.className
              )}
              href="#circlePath"
            >
              Designing, modeling, and controlling
            </textPath>
          </text>
        </svg>
        <button
          className={cn(
            'flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-light dark:text-primary shadow-md border border-solid border-foreground  w-16 h-16 rounded-full text-sm font-semibold',
            roboto.className
          )}
        >
          Affiliate
        </button>
      </div>
    </div>
  )
}
