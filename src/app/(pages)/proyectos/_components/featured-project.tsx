'use client'
import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

type Props = {
  type: string
  title: string
  summary: string
  img: string
  link: string
  github: string
}

const FramerImage = motion(Image)

export const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: Props) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl border border-solid border-primary bg-background shadow-2xl p-12 rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-primary rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 h-[360px] relative cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          fill
          className="object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-foreground">{summary}</p>
        <div className="mt-2 flex items-center gap-8">
          <Link href={github} target="_blank">
            <FaGithub size={34} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className={buttonVariants({
              variant: 'default',
              className: 'gap-1.5 text-dark dark:text-light',
            })}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}