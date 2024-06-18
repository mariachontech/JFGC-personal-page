'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IndustrialPartner } from '../../../../../types'
import { urlForImage } from '../../../../../sanity/lib/image'

type Props = {
  indPartners: IndustrialPartner
}

const FramerImage = motion(Image)

export const FeaturedArticles = ({ indPartners }: Props) => {
  return (
    <li
      className="col-span-1  relative h-[80vh]  bg-background border border-solid border-primary rounded-2xl shadow-2xl p-4 md:mb-10 rounded-br-2xl
    flex flex-col justify-start gap-1 md:gap-5 "
    >
      <div className="absolute top-0 -right-4 -z-10  w-[103%] h-[82vh] rounded-[2rem] bg-primary rounded-br-3xl " />
      <Link href={indPartners?.link || ''} target="_blank">
        <div className="relative w-full h-[40vh] cursor-pointer  rounded-lg inline-block overflow-hidden ">
          <FramerImage
            src={urlForImage(indPartners.image.asset as any)}
            alt={indPartners.image.alt}
            className="object-contain md:object-cover "
            fill
            priority
            sizes="(max-width:760px) 100vw,
            (max-width:1200px) 50vw,
            50vW
            "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </Link>
      <Link href={indPartners?.link || ''} target="_blank">
        <h2 className="capitalize text-xl md:text-2xl font-bold md:my-2 md:mt-4 hover:underline">
          {indPartners?.title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{indPartners.description}</p>
    </li>
  )
}
