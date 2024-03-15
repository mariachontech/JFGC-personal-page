'use client'
import React, { useRef } from 'react'
import { Details } from './details'
import { motion, useScroll } from 'framer-motion'

const experienceData = [
  {
    position: 'Software Engineer',
    company: 'Google',
    companyLink: 'https://google.com',
    time: '2022-Present',
    address: 'Mountain View, CA',
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },

  {
    position: 'Intern',
    company: 'Facebook',
    companyLink: 'https://facebook.com',
    time: 'Summer 2021',
    address: 'Menlo Park, CA',
    work: 'Worked on a team responsible for developing a new mobile app feature that allowed users to create andshare short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.',
  },
  {
    position: 'Software Developer',
    company: 'Amazon',
    companyLink: 'https://amazon.com',
    time: '2020-2021',
    address: 'Seattle, WA',
    work: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.",
  },

  {
    position: 'Software Developer Intern',
    company: 'Microsoft',
    companyLink: 'https://microsoft.com',
    time: 'Summer 2020',
    address: 'Redmond, WA',
    work: "Worked on a team responsible for developing a new feature for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.",
  },

  {
    position: 'Teaching Assistant',
    company: 'MIT',
    companyLink: 'https://mit.com',
    time: 'Fall 2018',
    address: 'Cambridge, MA',
    work: 'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
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
