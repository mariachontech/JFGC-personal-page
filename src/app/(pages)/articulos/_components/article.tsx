'use client'
import React from 'react'
import { MovingImage } from './moving-image'
import { motion } from 'framer-motion'

type Props = {
  img: string
  title: string
  date: string
  link: string
}

export const Article = ({ img, title, date, link }: Props) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      key={link}
      rel="noopener noreferrer"
    >
      <div className="relative w-full h-fit p-4 py-6 my-4 rounded-xl flex flex-col lg:flex-row items-center justify-between bg-background text-foreground first:mt-0 border border-solid border-primary border-r-4 border-b-4">
        <MovingImage img={img} title={title} link={link} />

        <span className="text-primary font-semibold pl-0 md:pl-4 self-start lg:self-auto">
          {date}
        </span>
      </div>
    </motion.li>
  )
}
