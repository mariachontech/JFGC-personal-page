'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { CarouselPhotos } from './carousel-photos'

type Props = {
  title: string
  description: string
  image: {
    src: string
    alt: string
    caption: string
  }[]
}

const ControlComponent = ({ title, description, image }: Props) => {
  return (
    <section>
      <h2 className="text-2xl text-foreground font-bold">{title}</h2>
      <Separator className="my-5" />
      <p>{description}</p>
      <CarouselPhotos images={image} />
      {/* <div className="image-container">
        {image.map((ima, index) => (
          <img key={index} src={ima.src} alt={ima.alt} />
        ))}
      </div> */}
    </section>
  )
}

export default ControlComponent
