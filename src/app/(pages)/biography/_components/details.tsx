'use client'
import React, { useRef } from 'react'
import { LiIcon } from './li-icon'
import { motion } from 'framer-motion'

type Props = {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work?: string
}

export const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: Props) => {
  const ref = useRef<HTMLLIElement>(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h2 className="font-semibold  sm:text-lg">{work}</h2>
        <h3 className="capitalize font-bold text-lg sm:text-xl lg:text-2xl">
          {position}{' '}
          <a
            className="text-primary capitalize"
            href={companyLink}
            target="_blank"
          >
            @{company}{' '}
          </a>
        </h3>
        <span className="capitalize font-medium text-foreground/75 text-sm lg:text-base">
          {time} - {address}
        </span>
      </motion.div>
    </li>
  )
}
