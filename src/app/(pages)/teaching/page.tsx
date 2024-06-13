import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { TransitionEffect } from '@/components/transition-effect'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { AnimatedText } from '@/components/AnimatedText'
import Image from 'next/image'
import { LicElecMec } from './_components/lic-ele-mec'

import {
  electronicaAndMecatronica,
  renoAndAuto,
  masterElectronica,
  tutoAndMento,
} from '../../../../dataPage'
import { TutosAndMento } from './_components/tutos-mento'

type Props = {}

const TeachingPage = (props: Props) => {
  return (
    <MaxWidthWrapper className="px-16">
      <TransitionEffect />

      <div className=" flex flex-col md:flex-row items-center  justify-center md:justify-between  w-full h-fit md:h-full md:gap-10 gap-0 ">
        {' '}
        <div className="relative flex justify-center items-center  w-full md:w-1/2 h-[70vh]   ">
          <Image
            src={'/images/profile/fermiguerrero.png'}
            alt="Profile"
            fill
            className="object-contain "
          />
        </div>
        <AnimatedText
          text="Real knowledge is to know the extent of one's ignorance. -- Confucius"
          className="mb-16 mx-auto text-center text-2xl md:text-3xl"
        />
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
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
        <AccordionItem value="item-2">
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
    </MaxWidthWrapper>
  )
}

export default TeachingPage
