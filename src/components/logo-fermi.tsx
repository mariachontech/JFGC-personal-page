'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

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
          src={'logos/logo-completo.svg'}
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

export const LogoFermiIcono = (props: Props) => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href={'/'}
        className="relative w-[300px] h-[150px] rounded-full"
      >
        <Image
          src={'logos/logo-icono.svg'}
          alt="Fermi's logo "
          fill
          className="object-contain "
        />
      </MotionLink>
    </div>
  )
}
