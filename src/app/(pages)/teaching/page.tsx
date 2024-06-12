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

type Props = {}

const LabPage = (props: Props) => {
  return (
    <MaxWidthWrapper className="px-10">
      <TransitionEffect />
      <AnimatedText
        text="Real knowledge is to know the extent of one's ignorance. -- Confucius"
        className="mb-16 mx-auto text-center text-2xl md:text-3xl"
      />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-primary font-semibold text-xl">
            Lic. Electrónica e Ing. Mecatrónica
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-primary font-semibold text-xl">
            Ing. en Energías Renovables e Ing. en Sistemas Automotrices
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-primary font-semibold text-xl">
            Maestría en Ingeniería Electrónica, opción instrumentación
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-primary font-semibold text-xl">
            Tutorías y Mentorías
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </MaxWidthWrapper>
  )
}

export default LabPage
