'use client'
import React, { useRef } from 'react'
import { LiIcon } from './li-icon'
import { motion } from 'framer-motion'

type Props = {
  type: string

  time: string
  place: string
  info: string
}

export const DetailsEducation = ({ type, place, info, time }: Props) => {
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
        <h3 className="capitalize font-bold  text-lg sm:text-xl lg:text-2xl">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} - {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  )
}
