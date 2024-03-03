import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { AnimatedNumbers } from './_components/animated-numbers'
import { Skills } from './_components/skills'
import { Experience } from './_components/experience'
import { Education } from './_components/education'

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Acerca de mi',
  description:
    'Información referente a la trayectoría del Dr J. Fermi Guerrero Castellanos',
}

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <main className="flex w-screen  flex-col items-center justify-center">
      <MaxWidthWrapper className="pt-16 px-4 h-full ">
        <AnimatedText
          text={
            'La humanidad por naturaleza teme y no quisiera escuchar la palabra error'
          }
          className="mb-8 sm:mb-16 text-3xl  sm:text-6xl lg:text-7xl "
        />
        <div className="grid w-full h-[60%] grid-cols-8 gap-8 sm:gap-16 px-2 md:px-0">
          <div className="col-span-8 md:col-span-3 xl:col-span-4 flex flex-col items-start justify-start order-2 md:order-1">
            <h2 className="mb-4 text-lg font-bold uppercase text-primary/75">
              Biography
            </h2>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              maxime et sit libero incidunt voluptates ad doloribus, nesciunt
              vitae nemo.
            </p>
            <p className="my-4 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              necessitatibus ipsam praesentium officia nesciunt dolorem?
            </p>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              maxime et sit libero incidunt voluptates ad doloribus, nesciunt
              vitae nemo.
            </p>
          </div>
          <div className=" relative  w-[90%] h-[70vh]  md:h-[75vh]   rounded-[2rem] border-2 border-solid border-primary bg-primary m-auto md:p-8 xl:col-span-4 order-1 md:order-2 col-span-8 md:col-span-3 px-2 md:px-0 ">
            <div className="absolute -top-1 right-3  z-10 w-[103%]  h-[98%] rounded-[2rem] bg-light border-primary border p-4 ">
              <div className="relative w-full h-full ">
                <Image
                  className="object-cover rounded-[2rem] "
                  src={'/images/profile/fermi-lac.jpg'}
                  alt="Fermi Gerrero"
                  fill
                  priority
                  sizes="(max-width:760px) 100vw,
                  (max-width:1200px) 50vw,
                  50vW
                  "
                />
              </div>
            </div>
          </div>

          <div className="col-span-8 w-screen flex md:flex-col items-center   md:items-end justify-around md:gap-5 xl:col-span-8 xl:flex-row xl:items-center order-3 px-2 md:px-0">
            <div className="flex flex-col items-center justify-center  md:items-end md:justify-between ">
              <span className="inline-block text-4xl md:text-7xl    font-bold">
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className="w-full text-center  text-base md:text-xl font-medium capitalize text-primary/75">
                Satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center  md:items-end md:justify-between ">
              <span className="inline-block text-4xl md:text-7xl     font-bold">
                <AnimatedNumbers value={40} />+
              </span>
              <h2 className="w-full text-center  text-base md:text-xl  font-medium capitalize text-primary/75">
                Satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center  md:items-end md:justify-between ">
              <span className="inline-block text-4xl md:text-7xl     font-bold">
                <AnimatedNumbers value={15} />+
              </span>
              <h2 className="w-full text-center  text-base md:text-xl  font-medium capitalize text-primary/75">
                Satisfied clients
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </MaxWidthWrapper>
    </main>
  )
}

export default AboutPage
