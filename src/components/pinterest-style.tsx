'use client'
import Image from 'next/image'
import React from 'react'
import { Category, Gallery2 } from '../../types'
import { urlForImage } from '../../sanity/lib/image'
import { Badge } from './ui/badge'

type Props = {
  pics: Gallery2[] | []
  categories: Category[] | []
}

const PinterestStyle = ({ pics, categories }: Props) => {
  return (
    <div className="columns-1  gap-4 space-y-4 px-4 sm:columns-2 md:columns-3 lg:columns-4">
      {pics?.map((pic, index) => (
        <div
          key={index}
          className="  relative  group  cursor-pointer overflow-hidden rounded-md"
        >
          <Image
            src={urlForImage(pic?.imageGallery as any)}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={300}
            // style={{ width: 'auto', height: 'auto' }}
          />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              {/* <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button> */}
              <div className="flex  justify-start items-center gap-1">
                {categories.map((cat) => (
                  <Badge key={cat._id} variant={'destructive'}>
                    {cat.title}
                  </Badge>
                ))}
              </div>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                {pic?.title}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PinterestStyle
