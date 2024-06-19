'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { CarouselPhotos } from './carousel-photos'
import { SeccionLabType } from '../../../../../types'

type Props = {
  seccionData: SeccionLabType
}

const ControlComponent = ({ seccionData }: Props) => {
  return (
    <section>
      <h2 className="text-2xl text-foreground font-bold">
        {seccionData?.title}
      </h2>
      <Separator className="my-5" />
      <p>{seccionData?.description}</p>
      <div className="mt-10">
        <CarouselPhotos images={seccionData.gallery} />
      </div>
      {/* <div className="image-container">
        {image.map((ima, index) => (
          <img key={index} src={ima.src} alt={ima.alt} />
        ))}
      </div> */}
    </section>
  )
}

export default ControlComponent
