'use client'
import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import { DetailsEducation } from './details-education'
import { EditAction } from 'next-sanity'
import { EducationType } from '../../../../../types'

const educationData = [
  // {
  //   grade: 'Post-PhD ',
  //   title:
  //     'Modelado y control de sistemas distribuidos utilizando redes de comunicación.',
  //   adviser: ['Dra. Suzanne Lesecq'],

  //   time: 'January 2008-May 2008',
  //   place: 'INPG-ENSIEG-LAG, GIPSA-LAB (Grenoble, France).',
  // },
  {
    grade: 'Ph.D. in Automatic Control ',
    // title:
    //   'Estimación de la orientación y estabilización de la orientación con entrada acotada de un cuerpo rígido: aplicación a un mini-helicóptero con cuatro rotores.',
    adviser: ['Dra. Suzanne LESECQ', 'Dr. Nicolas MARCHAND'],
    commite: [
      'Sophie TARBOURIECH',
      'Tarek HAMEL',
      'Philipe BONNIFAIT',
      'Mazen ALAMIR',
    ],

    time: 'October 2004-January 2008',
    place: 'Université Grenoble Alpes (former Université Joseph Fourier)',
  },
  {
    grade: 'M.Sc. in Automatic Control ',
    // title: 'Automatic control',
    time: 'September 2003-June 2004',
    place: 'Grenoble Institute of Technology',
  },
  {
    grade: 'B.Sc. in Electronics',

    time: 'September 1997-July 2002',
    place: 'Benemérita Universidad Autónoma de Puebla',
  },
]

type Props = { educationData: EducationType[] }

export const Education = ({ educationData }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64 ">
      <h2 className="font-bold text-4xl lg:text-8xl mb-32 w-full text-center">
        Education
      </h2>
      <div className="w-fit md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-[54px]  top-0 w-[4px] h-full bg-primary origin-top"
        />
        <ul className="w-fit flex flex-col items-start justify-between ml-14 md:ml-4">
          {educationData.reverse().map((exp, index) => (
            <DetailsEducation key={index} educationData={exp} />
          ))}
        </ul>
      </div>
    </div>
  )
}
