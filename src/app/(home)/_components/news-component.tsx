'use client'
import React from 'react'
import { News } from '../../../../types'
import { urlForImage } from '../../../../sanity/lib/image'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type Props = {
  news: News[]
}

const month = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]

export const NewsComponent = ({ news }: Props) => {
  console.log('message', news)

  return (
    <div className="w-[90%] md:max-w-screen-xl  mx-auto py-10">
      <h3 className="font-bold py-5">News</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
        {news.map((newData, ind) => {
          const dateData = new Date(newData.eventDate)
          return (
            <div
              key={ind}
              className={cn(
                'relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96',
                ind === 0
                  ? 'md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500/20'
                  : 'group dark:bg-gray-500/20',
              )}
              // style={{
              //   backgroundImage: `url(${urlForImage(newData.imageOfEvent.asset as any)})`,
              // }}
            >
              <Image
                src={urlForImage(newData.imageOfEvent.asset as any)}
                alt={newData.imageOfEvent.alt}
                fill
                className="object-contain"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  {newData.area}
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leadi tracki">
                    {dateData.getDate()}
                  </span>
                  <span className="leadi uppercase">
                    {month[dateData.getMonth()]}
                  </span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100"
                >
                  {newData.title}
                </a>
              </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
