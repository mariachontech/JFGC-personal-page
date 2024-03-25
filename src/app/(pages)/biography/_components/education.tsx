'use client'
import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import { DetailsEducation } from './details-education'

const educationData = [
  {
    grade: 'Post-PhD ',
    title:
      'Modelado y control de sistemas distribuidos utilizando redes de comunicación.',
    adviser: ['Dra. Suzanne Lesecq'],

    time: 'January 2008-May 2008',
    place: 'INPG-ENSIEG-LAG, GIPSA-LAB (Grenoble, France).',
  },
  {
    grade: 'PhD ',
    title:
      'Estimación de la orientación y estabilización de la orientación con entrada acotada de un cuerpo rígido: aplicación a un mini-helicóptero con cuatro rotores.',
    adviser: ['Dra. Suzanne Lesecq', 'Dr. Nicolas Marchand'],

    time: 'October 2004-January 2008',
    place: 'INPG-ENSIEG-LAG, GIPSA-LAB (Grenoble, France).',
  },
  {
    grade: 'Master ',
    title: 'Automatic control',
    time: 'September 1997-June 2002',
    place: 'INPG-ENSIEG-LAG, GIPSA-LAB (Grenoble, France).',
  },
  {
    grade: 'Bachelor of Science in Electronics',
    title: 'Robotics and control',
    time: 'September 2003-July 2004',
    place: 'FCE-BUAP, Facultad de Ciencias de la Electrónica (Puebla, México).',
  },
]

type Props = {}

export const Education = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="font-bold text-4xl lg:text-8xl mb-32 w-full text-center">
        Education
      </h2>
      <div className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-[54px]  top-0 w-[4px] h-full bg-primary origin-top"
        />
        <ul className="w-fit flex flex-col items-start justify-between ml-14 md:ml-4">
          {educationData.reverse().map((exp, index) => (
            <DetailsEducation key={index} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  )
}
