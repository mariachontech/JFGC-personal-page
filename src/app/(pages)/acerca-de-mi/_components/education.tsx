'use client'
import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import { DetailsEducation } from './details-education'

const educationData = [
  {
    type: 'Bachelor Of Science In Computer Science',
    time: '2016-2020',
    place: 'Massachusetts Institute Of Technology (MIT)',
    info: 'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.',
  },

  {
    type: 'Master Of Computer Science',
    time: '2020-2022',
    place: 'Stanford University',
    info: 'Relevant courses included Machine Learning, Deep Learning, and Computer Vision.',
  },
  {
    type: 'Online Coursework',
    time: '2016-2020',
    place: 'Coursera And EdX',
    info: 'Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.',
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-[54px] top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {educationData.map((exp, index) => (
            <DetailsEducation key={index} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  )
}
