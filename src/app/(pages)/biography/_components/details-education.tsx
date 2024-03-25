'use client'
import React, { useRef } from 'react'
import { LiIcon } from './li-icon'
import { motion } from 'framer-motion'

type Props = {
  grade: string
  adviser?: string[] | []
  time: string
  place: string
  title: string
}

export const DetailsEducation = ({
  grade,
  place,
  adviser = [],
  time,
  title,
}: Props) => {
  const ref = useRef<HTMLLIElement>(null)
  
  const adviserSplit = adviser.map((adv, index) => (
    <span key={index}>
      {adv}
      {index !== adviser.length - 1 ? ', ' : '.'}
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
          {grade}
        </h3>
        <p className="text-foreground/70">{time}</p>
        <p className="font-medium w-full">{title}</p>
        <h4>{adviserSplit}</h4>
        <p className="capitalize font-medium ">{place}</p>
      </motion.div>
    </li>
  )
}
