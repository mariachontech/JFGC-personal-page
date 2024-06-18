import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import React from 'react'
import { TransitionEffect } from '@/components/transition-effect'

import { sanityFetch } from '../../../../sanity/lib/fetch'
import { SanityDocument } from 'next-sanity'
import { STUDENTS_QUERY } from '../../../../sanity/lib/queries'
import { MasterData } from './_components/master'
import { MasterType, PboardType, PhdType } from '../../../../types'
import { PhdStudentsList } from './_components/phd-students-list'
import { PhdBoards } from './_components/phdBoard'

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Articulos',
  description: 'Articulos',
}

type Props = {}

const StudentsPage = async (props: Props) => {
  const studentsData = await sanityFetch<SanityDocument>({
    query: STUDENTS_QUERY,
  })

  return (
    <main
      className="w-full
     mb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      <TransitionEffect />

      <MaxWidthWrapper className="pt-16  ">
        <AnimatedText
          text={studentsData.title}
          className="mb-16 mx-auto text-center text-2xl md:text-5xl"
        />
        <h2
          id="master"
          className="font-bold text-4xl w-full text-center my-16 mt-32"
        >
          Master
        </h2>

        <div className="max-w-2xl mx-auto px-4">
          <ul className="mt-12 divide-y">
            {studentsData?.master?.map(
              (master: MasterType, index: React.Key | null | undefined) => (
                <MasterData key={index} masterData={master} />
              ),
            )}
          </ul>
        </div>

        <h2
          id="phd-students"
          className="font-bold text-4xl w-full text-center my-16 mt-32"
        >
          PhD
        </h2>

        <div className="max-w-2xl mx-auto px-4">
          <ul className="mt-12 divide-y">
            {studentsData?.phd?.map(
              (phd: PhdType, ind: React.Key | null | undefined) => (
                <PhdStudentsList key={ind} studentData={phd} />
              ),
            )}
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
            {studentsData.pboard?.map(
              (board: PboardType, ind: React.Key | null | undefined) => (
                <PhdBoards key={ind} phdBoards={board} />
              ),
            )}
          </ul>
        </div>

        {/* <StudentsComponent studentsData={studentsData.students} /> */}
      </MaxWidthWrapper>
    </main>
  )
}

export default StudentsPage
