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
import Link from 'next/link'
import Image from 'next/image'
import { Gallery, ImageGallery } from '../../types'
import { urlForImage } from '../../sanity/lib/image'

type Props = {
  galleries: Gallery[]
}

export function CarouselPics({ galleries }: Props) {
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
    <div>
      <Carousel setApi={setApi} className="w-[30vw] max-w-xs ">
        <CarouselContent>
          {galleries &&
            galleries[0]?.gallery?.map((dat, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="relative flex aspect-square   items-center justify-center p-6 ">
                    <Image
                      src={urlForImage(dat?.imageGallery as any)}
                      alt={dat.imageGallery.alt}
                      fill
                      className="object-contain "
                    />
                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
        <div className="py-2 text-center text-sm text-muted-foreground">
          {current} of {count} -{' '}
          <Link href={'/gallery'} className="hover:text-primary">
            View all
          </Link>
        </div>
      </Carousel>
    </div>
  )
}
