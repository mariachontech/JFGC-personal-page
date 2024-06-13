import React from 'react'

import { TransitionEffect } from '@/components/transition-effect'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { AnimatedText } from '@/components/AnimatedText'
import Image from 'next/image'

// import {
//   electronicaAndMecatronica,
//   renoAndAuto,
//   masterElectronica,
//   tutoAndMento,
// } from '../../../../dataPage'
import { AccordeonTeach } from './_components/accordeon-teach'

type Props = {}

const TeachingPage = (props: Props) => {
  return (
    <MaxWidthWrapper className="px-2 md:px-16">
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

      <AccordeonTeach />

      {/* <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="undergraduate-courses"
      >
        <AccordionItem value="undergraduate-courses">
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
        <AccordionItem value="graduate-courses">
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
      </Accordion> */}
    </MaxWidthWrapper>
  )
}

export default TeachingPage
