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
import { PicsType } from '../../types'

export const imagesData: PicsType[] = [
  {
    type: 'control',
    data: [
      {
        img: 'https://source.unsplash.com/random/301x301',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/200x200',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/200x200',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
    ],
  },
  {
    type: 'Quadcopter',
    data: [
      {
        img: 'https://source.unsplash.com/random/301x301',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/200x200',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/200x200',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/100x100',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/400x400',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
      {
        img: 'https://source.unsplash.com/random/150x150',
        alt: 'control',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consectetur.',
      },
    ],
  },
]

export function CarouselPics() {
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
      console.log('current')
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs ">
        <CarouselContent>
          {imagesData[0].data.map((dat, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square   items-center justify-center p-6 relative">
                  <Image
                    src={dat.img}
                    alt={dat.alt}
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
