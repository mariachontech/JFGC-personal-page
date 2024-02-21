'use client'

import { buttonVariants } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

type Props = {
  title: string
  type: string
  img: string
  link: string
  github: string
}

const FramerImage = motion(Image)

export const Project = ({ title, type, img, link, github }: Props) => {
  return (
    <article className=" realtive w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full h-[280px] relative cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          fill
          className="object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.02 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className=" w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="w-full mt-2 flex items-center justify-between gap-8">
          <Link
            href={link}
            target="_blank"
            className={buttonVariants({
              variant: 'secondary',
              className: 'gap-1.5 text-dark dark:text-light underline',
            })}
          >
            Visit
          </Link>
          <Link href={github} target="_blank">
            <FaGithub size={34} />
          </Link>
        </div>
      </div>
    </article>
  )
}
