import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { AnimatedNumbers } from './_components/animated-numbers'
import { Skills } from './_components/skills'
import { Experience } from './_components/experience'
import { Education } from './_components/education'
import { TransitionEffect } from '@/components/transition-effect'
import { Button, buttonVariants } from '@/components/ui/button'

import { LucideDownloadCloud } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { sanityFetch } from '../../../../sanity/lib/fetch'
import { SanityDocument } from 'next-sanity'
import { BIOGRAPHY_QUERY } from '../../../../sanity/lib/queries'
import { urlForImage } from '../../../../sanity/lib/image'

const experienceData = []
export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Acerca de mi',
  description:
    'Información referente a la trayectoría del Dr J. Fermi Guerrero Castellanos',
}

type Props = {}

const BiographyPage = async (props: Props) => {
  const biographyData = await sanityFetch<SanityDocument>({
    query: BIOGRAPHY_QUERY,
  })

  const {
    title,
 
    pdfURL,
    mainImage,
    secondImage,
    citeAuthor,
  } = await biographyData


  return (
    <main className="flex w-full  flex-col items-center justify-center">
      <TransitionEffect />

      <MaxWidthWrapper className="pt-16 px-4 h-full ">
        <AnimatedText
          text={title}
          className="w-fit mb-8 sm:mb-16 text-xl  sm:text-2xl lg:text-3xl "
        />
        <div className="grid w-full h-[60%] grid-cols-8 gap-8 sm:gap-16 px-2 md:px-0">
          <div className="col-span-8 md:col-span-3 xl:col-span-4 flex flex-col items-start justify-center order-2 md:order-1 gap-5">
            <p
              id="quote"
              className="w-full font-medium text-lg text-pretty text-justify "
            >
              &quot;{citeAuthor.cite} &quot;
            </p>

            <div className="w-full flex flex-col justify-center items-end text-end font-semibold">
              <h5>{citeAuthor.author}</h5>
              <Link
                href={pdfURL}
                target={'_blank'}
                className={buttonVariants({
                  variant: 'link',
                  className: 'text-foreground',
                })}
              >
                Get CV <LucideDownloadCloud className="ml-2" />
              </Link>
            </div>
            <Image
              src={urlForImage(secondImage.asset)}
              alt={secondImage.alt}
              width={350}
              height={2500}
              className="object-cover rounded-xl"
            />
            {/* <p className="my-4 font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              necessitatibus ipsam praesentium officia nesciunt dolorem?
            </p>
            <p className="font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              maxime et sit libero incidunt voluptates ad doloribus, nesciunt
              vitae nemo.
            </p> */}
          </div>
          <div className=" relative  w-[90%] h-[70vh]  md:h-[75vh]   rounded-[2rem] border-2 border-solid border-primary bg-primary m-auto md:p-8 xl:col-span-4 order-1 md:order-2 col-span-8 md:col-span-3 px-2 md:px-0 ">
            <div className="absolute -top-1 right-3  z-10 w-[103%]  h-[98%] rounded-[2rem] bg-light border-primary border p-4 ">
              <div className="relative w-full h-full ">
                <Image
                  className="object-cover rounded-[2rem] "
                  src={urlForImage(mainImage.asset)}
                  alt={mainImage?.alt}
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

          {/* <div className="col-span-8 w-full flex md:flex-col items-center   md:items-end justify-around md:gap-5 xl:col-span-8 xl:flex-row xl:items-center order-3 px-2 md:px-0">
            <div className="flex flex-col items-center justify-center  md:items-end md:justify-between ">
              <span className="inline-block text-4xl md:text-7xl    font-bold">
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className="w-full text-center  text-base md:text-xl font-medium capitalize text-primary/75">
                Undergraduate thesis
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center  md:items-end md:justify-between ">
              <span className="inline-block text-4xl md:text-7xl     font-bold">
                <AnimatedNumbers value={40} />+
              </span>
              <h2 className="w-full text-center  text-base md:text-xl  font-medium capitalize text-primary/75">
                PhD thesis
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center  md:items-end md:justify-between ">
              <span className="inline-block text-4xl md:text-7xl     font-bold">
                <AnimatedNumbers value={15} />+
              </span>
              <h2 className="w-full text-center  text-base md:text-xl  font-medium capitalize text-primary/75">
                Master thesis
              </h2>
            </div>
          </div> */}
        </div>
        {/* <Skills /> */}
        <div id="carrer-path">
          <Experience experience={biographyData.experience} />
          <Education educationData={biographyData.education} />
        </div>
      </MaxWidthWrapper>
    </main>
  )
}

export default BiographyPage
