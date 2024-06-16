'use client'
import React, { useRef } from 'react'
import { LiIcon } from './li-icon'
import { motion } from 'framer-motion'
import { EducationType } from '../../../../../types'
import { month } from '@/lib/utils'

type Props = {
  educationData: EducationType
}

export const DetailsEducation = ({ educationData }: Props) => {
  const ref = useRef<HTMLLIElement>(null)

  const startTime = new Date(educationData?.startTime as any)
  const endTime = new Date(educationData?.endTime as any)
  const endMonth = endTime ? month[endTime.getMonth() as any] : ''

  const adviserSplit = educationData?.advisers?.map((adv, index) => (
    <span key={index}>
      {adv.name}
      {index !== (educationData?.advisers?.length as any) - 1 ? ', ' : '.'}
    </span>
  ))

  const commiteSplit = educationData?.commite?.map((adv, index) => (
    <span key={index}>
      {adv.name}
      {index !== (educationData?.commite?.length as any) - 1 ? ', ' : '.'}
    </span>
  ))

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
        <h3 className="capitalize font-bold  text-lg sm:text-xl lg:text-2xl">
          {educationData?.grade}
        </h3>
        <p className="text-foreground/70">
          {month[startTime.getMonth()]} {startTime.getFullYear()} -{' '}
          {endMonth !== undefined
            ? `${endMonth} ${endTime.getFullYear()}`
            : '... '}
        </p>
        {/* <p className="font-medium w-full">{title}</p> */}
        {educationData?.commite?.length !== 0 && (
          <h4>
            <span className="font-semibold ">Advisors: </span>
            {adviserSplit}
          </h4>
        )}
        {educationData?.commite?.length !== 0 && (
          <h4>
            <span className="font-semibold ">Ph.D. Thesis Committee: </span>
            {commiteSplit}
          </h4>
        )}
        <p className="capitalize font-medium ">{educationData?.place}</p>
      </motion.div>
    </li>
  )
}
