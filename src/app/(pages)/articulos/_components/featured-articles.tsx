'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
  img: string
  title: string
  time: string
  summary: string
  link: string
}

const FramerImage = motion(Image)

export const FeaturedArticles = ({
  img,
  title,
  time,
  summary,
  link,
}: Props) => {
  return (
    <li
      className="col-span-1  relative h-[80vh]  bg-background border border-solid border-primary rounded-2xl shadow-2xl p-4 mb-10 rounded-br-2xl
    flex flex-col justify-start gap-5 "
    >
      <div className="absolute top-0 -right-4 -z-10  w-[103%] h-[82vh] rounded-[2rem] bg-primary rounded-br-3xl " />
      <Link href={link} target="_blank">
        <div className="relative w-full h-[40vh] cursor-pointer  rounded-lg inline-block overflow-hidden ">
          <FramerImage
            src={img}
            alt={title}
            className="object-cover "
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  )
}
