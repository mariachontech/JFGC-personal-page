'use client'
import React from 'react'
import { News } from '../../../../types'
import { urlForImage } from '../../../../sanity/lib/image'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

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
 // console.log('message', news)

  return (
    <div className="w-[90%] md:max-w-screen-xl  mx-auto py-10">
      <h3 className="font-bold py-5">News</h3>

      {news.map((newData, ind) => {
        const dateData = new Date(newData.eventDate)

        return (
          <Link
            href={newData.link}
            key={ind}
            className="flex flex-col gap-2 mt-5"
            target="_blank"
          >
            <h3 className="flex items-center space-x-2 dark:text-foreground">
              <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-primary"></span>
              <span className="text-xs font-bold tracking-wider uppercase ">
                {newData.area} - {dateData.getDate()}{' '}
                {month[dateData.getMonth()]}
              </span>
            </h3>
            <p className="font-serif hover:underline">{newData.title}</p>

            <p className="font-serif text-sm">{newData.description}</p>
            <p className="font-serif text-xs flex justify-start md:justify-end gap-2 items-center">
              <MapPin size={12} />
              {newData.location}
            </p>

            <div className="text-xs dark:text-gray-600 flex justify-start md:justify-end gap-1">
              <p>by </p>
              <span className="mr-2 hover:underline dark:text-primary ">
                {newData.organizer}
              </span>
            </div>
          </Link>
        )
      })}

      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
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
                  href={newData?.link}
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
      </div> */}
    </div>
  )
}
