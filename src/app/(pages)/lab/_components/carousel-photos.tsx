'use client'

import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { TooltipCom } from '@/components/tooltip-com'
import { cn } from '@/lib/utils'
import { GalleryType } from '../../../../../types'
import { urlForImage } from '../../../../../sanity/lib/image'

type Props = {
  className?: string
  images: GalleryType[]
}

export function CarouselPhotos({ images, className }: Props) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Carousel setApi={setApi} className="w-[80%] md:w-[55%] ">
        <CarouselContent>
          {images?.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent
                  className={cn(
                    'relative flex aspect-square bg-foreground/50 items-center justify-center p-6',
                    className,
                  )}
                >
                  <TooltipCom message={image?.imageGallery?.caption || ''}>
                    <Image
                      src={
                        image?.imageGallery
                          ? urlForImage(image?.imageGallery?.asset as any)
                          : ''
                      }
                      alt={image?.imageGallery?.alt}
                      className="object-contain"
                      fill
                    />
                  </TooltipCom>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-lg font-semibold text-muted-foreground">
        {images[current - 1]?.title}
      </div>
    </div>
  )
}
