'use client'

import React, { useEffect, useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { LicElecMec } from './lic-ele-mec'
import {
  masterElectronica,
  renoAndAuto,
  tutoAndMento,
} from '../../../../../dataPage'
import { TutosAndMento } from './tutos-mento'
import { useSearchParams } from 'next/navigation'
import { CourseType } from '../../../../../types'

type Props = {
  underGraduate: CourseType[]
  graduate: CourseType[]
}

export const AccordeonTeach = ({ underGraduate, graduate }: Props) => {
  const [page, setPage] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    setPage(page || searchParams.get('q') || '')
  }, [searchParams, page, setPage])

  return (
    <Accordion type="single" collapsible className="w-full" value={page}>
      <AccordionItem
        value="undergraduate-courses"
        onClick={() => setPage('undergraduate-courses')}
      >
        <AccordionTrigger className="text-primary font-semibold text-xl">
          Undergraduate Courses
        </AccordionTrigger>
        <AccordionContent>
          {underGraduate?.map((course: CourseType) => (
            <LicElecMec key={course._id} courseData={course} />
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="graduate-courses"
        onClick={() => setPage('graduate-courses')}
      >
        <AccordionTrigger className="text-primary font-semibold text-xl">
          Graduate Courses
        </AccordionTrigger>
        <AccordionContent>
          {graduate.map((course: CourseType) => (
            <LicElecMec key={course._id} courseData={course} />
          ))}

          {/* <TutosAndMento
            title="Tutorías y Mentorías
"
            tutos={tutoAndMento}
          /> */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
