'use client'
import { cn } from '@/lib/utils'
import { motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { MouseEvent, useEffect, useRef, useState } from 'react'

const FramerImage = motion(Image)

type Props = {
  title: string
  img: string
  link: string
}

export const MovingImage = ({ title, img, link }: Props) => {
  const [visible, setvisible] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouse = (event: any) => {
    setvisible(true)
    x.set(event.pageX * 1)
    y.set(-10 * 1)
    console.log('Entra:', event.pageX)
  }

  const handleMouseLeave = (event: MouseEvent) => {
    console.log(event.pageX)
    setvisible(false)
  }
  useEffect(() => {
    console.log('estado', visible)
  }, [visible])

  return (
    <Link href={link} target="_blank" className="z-20">
      <div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        className="relative md:absolute"
      >
        <h2 className="capitalize text-base md:text-xl font-semibold hover:underline ">
          {title}
        </h2>

        <FramerImage
          style={{ x: x, y: y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          src={img}
          alt={title}
          className={cn(
            ' hidden  ',
            visible === true && 'md:inline-block z-80 hidden '
          )}
          width={384}
          height={384}
          priority
          sizes="(max-width:760px) 100vw,
          (max-width:1200px) 50vw,
          50vW
          "
        />
      </div>
    </Link>
  )
}
