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
  electronicaAndMecatronica,
  masterElectronica,
  renoAndAuto,
  tutoAndMento,
} from '../../../../../dataPage'
import { TutosAndMento } from './tutos-mento'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {}

export const AccordeonTeach = (props: Props) => {
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
          <LicElecMec
            title="Lic. Electrónica e Ing. Mecatrónica"
            courses={electronicaAndMecatronica}
          />
          <LicElecMec
            title="Ing. en Energías Renovables e Ing. en Sistemas Automotrices"
            courses={renoAndAuto}
          />
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
          <LicElecMec
            title="Maestría en Ingeniería Electrónica, opción instrumentación"
            courses={masterElectronica}
          />

          <TutosAndMento
            title="Tutorías y Mentorías
"
            tutos={tutoAndMento}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
