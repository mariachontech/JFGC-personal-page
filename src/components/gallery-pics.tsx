import React from 'react'
import PinterestStyle from './pinterest-style'
import { PicsType } from '../../types'

type Props = {}

const imagesData: PicsType[] = [
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

export const GalleryPics = (props: Props) => {
  return (
    <section className="">
      {imagesData.map((data) => (
        <div key={data.type} className="pb-10">
          <h1 className="font-bold text-xl uppercase w-full text-center py-4">
            {data.type}
          </h1>
          <PinterestStyle key={data.type} pics={data.data} />
        </div>
      ))}
    </section>
  )
}
