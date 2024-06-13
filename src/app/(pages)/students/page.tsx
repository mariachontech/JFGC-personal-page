import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import React from 'react'
import { TransitionEffect } from '@/components/transition-effect'
import { MasterData } from './_components/master'

import { phdStudents } from '../../../../dataPage'
import { phdBoards } from '../../../../dataPage'
import { PhdBoards } from './_components/phdBoard'
import { PhdStudentsList } from './_components/phd-students-list'

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Articulos',
  description: 'Articulos',
}

type Props = {}

const StudentsPage = (props: Props) => {
  return (
    <main
      className="w-full
     mb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      <TransitionEffect />

      <MaxWidthWrapper className="pt-16  ">
        <AnimatedText
          text="Real knowledge is to know the extent of one's ignorance. -- Confucius"
          className="mb-16 mx-auto text-center text-2xl md:text-5xl"
        />

        <h2
          id="master"
          className="font-bold text-4xl w-full text-center my-16 mt-32"
        >
          Master
        </h2>

        <MasterData />

        <h2
          id="phd-students"
          className="font-bold text-4xl w-full text-center my-16 mt-32"
        >
          PhD
        </h2>

        <div className="max-w-2xl mx-auto px-4">
          <ul className="mt-12 divide-y">
            {phdStudents.map((phd, ind) => (
              <PhdStudentsList key={ind} {...phd} />
            ))}
          </ul>
        </div>

        <h2
          id="post-docs"
          className="font-bold text-4xl w-full text-center my-16 mt-32"
        >
          Posdocs
        </h2>
        {/* <PhdStudents /> */}

        <h2
          id="phd-boards"
          className="font-bold text-4xl w-full text-center my-16 mt-32"
        >
          PhD Boards
        </h2>

        <div className="max-w-2xl mx-auto px-4">
          <ul className="mt-12 divide-y">
            {phdBoards.map((board, ind) => (
              <PhdBoards key={ind} {...board} />
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}

export default StudentsPage
