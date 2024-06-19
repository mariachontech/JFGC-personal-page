'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { CarouselPhotos } from './carousel-photos'

type Props = {
  title: string
  description?: string
  images: {
    src: string
    alt: string
    caption: string
  }[]
}

export const ExperimentalProto = ({ title, description, images }: Props) => {
  return (
    <section>
      <h2 className="text-2xl text-foreground font-bold">{title}</h2>
      <Separator className="my-5" />
      <p>{description}</p>
      {/* <CarouselPhotos images={images} className="bg-transparent" /> */}
    </section>
  )
}
