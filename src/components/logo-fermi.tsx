'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { roboto } from '@/lib/fonts'

type Props = {}

const MotionLink = motion(Link)

export const LogoFermiFull = (props: Props) => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href={'/'}
        className="relative w-[210px] h-[150px]  "
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={'logos/logo-dark.svg'}
          alt="Fermi's logo "
          fill
          className="object-contain "
        />
      </MotionLink>
    </div>
  )
}

export const LogoFermiMedium = (props: Props) => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href={'/'}
        className="relative w-[300px] h-[150px]"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={'logos/logo-medio.svg'}
          alt="Fermi's logo "
          fill
          className="object-contain "
        />
      </MotionLink>
    </div>
  )
}

export const LogoFermiIcon = (props: Props) => {
  return (
    <MotionLink
      href={'/'}
      className={cn(
        'relative flex items-center justify-center mt-2',
        roboto.className
      )}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-[300px] h-[150px] ">
        <Image
          src={'logos/logo-icono.svg'}
          alt="Fermi's logo "
          fill
          className="object-contain "
        />
      </div>
      <div
        className={
          'hidden md:flex absolute md:left-16  md:flex-col md:justify-end md:items-end md:w-full'
        }
      >
        <h5 className="font-light text-4xl text-primary">José Fermi</h5>
        <h6 className="font-thin ">Consultor</h6>
      </div>
    </MotionLink>
  )
}
