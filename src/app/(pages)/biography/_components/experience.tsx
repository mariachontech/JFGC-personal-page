'use client'
import React, { useRef } from 'react'
import { Details } from './details'
import { motion, useScroll } from 'framer-motion'

const experienceData = [
  {
    position:
      'Investigador, Departamento de control automático. Grenoble, Francia',
    company: 'Gipsa-Lab',
    companyLink: 'https://www.gipsa-lab.grenoble-inp.fr/',
    time: 'October 2004-May 2008',
    address: 'Grenoble, France',
    work: 'Aplicaciones de sensores inerciales y magnéticos (Tecnología MEMS). Concepción e implementación de algoritmos de control para la estabilización en orientación de un mini-helicóptero con cuatro rotores (Implementación en tiempo real). Concepción de algoritmos de control y fusión de datos en el desarrollo de nuevs productos electrodomésticos “CALOR” sección Villefranche, Francia (Proyecto confidencial). Diseño de sistemas de control utilizando redes (Networked Control Systems).',
  },
  {
    position: 'Profesor Investigado',
    company: 'Universidad Politécnica de Puebla',
    companyLink: 'https://www.uppuebla.edu.mx/',
    time: 'June 2008-April 2009',
    address: 'Puebla, Pue',
    work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit?',
  },
  {
    position: 'Profesor Investigado',
    company: 'BUAP',
    companyLink: 'http://www.fguerrero.ece.buap.mx/',
    time: 'May 2009 - ',
    address: 'Puebla, Pue',
    work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit?',
  },
]

type Props = {}

export const Experience = (props: Props) => {
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
        <ul className="w-fit flex flex-col items-start justify-between ml-14 md:ml-4">
          {experienceData.map((exp, index) => (
            <Details key={index} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  )
}
