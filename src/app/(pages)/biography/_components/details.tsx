'use client'
import React, { useRef } from 'react'
import { LiIcon } from './li-icon'
import { motion } from 'framer-motion'
import { ExperienceType } from '../../../../../types'
import { month } from '@/lib/utils'

type Props = {
  experienceData: ExperienceType
}

export const Details = ({ experienceData }: Props) => {
  const ref = useRef<HTMLLIElement>(null)
  const startTime = new Date(experienceData?.startTime)
  const endTime = new Date(experienceData?.endTime as any)
  const endMonth = endTime ? month[endTime.getMonth() as any] : ''

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
        <h2 className="font-semibold  sm:text-lg">{experienceData?.work}</h2>
        <h3 className="capitalize font-bold text-lg sm:text-xl lg:text-2xl">
          {experienceData?.position}{' '}
          <a
            className="text-primary capitalize"
            href={experienceData?.companyLink}
            target="_blank"
          >
            @{experienceData?.company}{' '}
          </a>
        </h3>
        <span className="capitalize font-medium text-foreground/75 text-sm lg:text-base">
          {month[startTime.getMonth()]} {startTime.getFullYear()} -{' '}
          {endMonth !== undefined
            ? `${endMonth} ${endTime.getFullYear()}`
            : '... '}
          , {experienceData?.location}
        </span>
      </motion.div>
    </li>
  )
}
