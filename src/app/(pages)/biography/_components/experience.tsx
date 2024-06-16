'use client'
import React, { useRef } from 'react'
import { Details } from './details'
import { motion, useScroll } from 'framer-motion'
import { ExperienceType } from '../../../../../types'

// const experienceData = [
//   {
//     position: 'Full Professor',
//     work: 'Benemérita Universidad Autónoma de Puebla, Faculty of electronics, Mexico',
//     company: 'BUAP',
//     companyLink: 'http://www.fguerrero.ece.buap.mx/',
//     time: 'June 2009 - ',
//     address: 'Puebla, Pue',
//   },
//   {
//     position: 'Assistant Professor',
//     work: 'Universidad Politécnica de Puebla, Mexico',
//     company: 'Universidad Politécnica de Puebla, Mexico',
//     companyLink: 'https://www.uppuebla.edu.mx/',
//     time: 'June 2008-May 2009',
//     address: 'Puebla, Pue',
//   },
//   {
//     position: 'Post-doctoral research position',
//     work: 'Automatic control department, GIPSA-Lab, Grenoble, France',

//     company: 'Gipsa-Lab',
//     companyLink: 'https://www.gipsa-lab.grenoble-inp.fr/',
//     time: 'October 2004-May 2008',
//     address: 'Grenoble, France',
//   },
// ]

type Props = {
  experience?: ExperienceType[]
}

export const Experience = ({ experience: experienceData }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })
  return (
    <div className="my-64">
      <h2 className="font-bold text-4xl lg:text-8xl mb-16 lg:mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-[54px]  top-0 w-[4px] h-full bg-primary origin-top"
        />
        <ul className=" flex flex-col items-start justify-between ml-14 md:ml-4">
          {experienceData?.map((exp, index) => (
            <Details key={index} experienceData={exp} />
          ))}
        </ul>
      </div>
    </div>
  )
}
