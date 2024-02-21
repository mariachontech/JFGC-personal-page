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
    <li className="relative col-span-1  p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[105%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link href={link} target="_blank">
        <div className="relative w-full h-[360px]  cursor-pointer  rounded-lg inline-block overflow-hidden ">
          <FramerImage
            src={img}
            alt={title}
            className="object-contain "
            fill
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  )
}
