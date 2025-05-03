'use client'
import { AnimatedText } from '@/components/AnimatedText'
import { TooltipCom } from '@/components/tooltip-com'

import Image from 'next/image'
import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { HeaderLabType } from '../../../../../types'
import { urlForImage } from '../../../../../sanity/lib/image'

type Props = {
  headerLab: HeaderLabType
}

export const HeaderLab = ({ headerLab }: Props) => {
  //console.log('data', headerLab)

  return (
    <div className=" flex flex-col md:flex-row items-center  justify-center md:justify-between  w-full h-fit md:h-full md:gap-10 gap-0 ">
      {' '}
      <TooltipCom message={headerLab?.title}>
        <div className="relative flex justify-center items-center  w-full md:w-10/12 h-[70vh] rounded-md   ">
          <Image
            src={
              headerLab?.mainImage
                ? urlForImage(headerLab?.mainImage?.asset as any)
                : ''
            }
            alt={headerLab?.mainImage?.alt}
            fill
            className="object-contain rounded-md "
          />
        </div>
      </TooltipCom>
      <div>
        <AnimatedText
          text={headerLab?.title || ''}
          className="mb-16 mx-auto text-center text-2xl md:text-3xl"
        />
        <ul className="w-10/12">
          {headerLab?.links.map((link, index) => (
            <li key={index}>
              <a
                href={link?.url}
                className="flex gap-2 items-center justify-start py-2"
                target="_blank"
              >
                <div>
                  <FaYoutube className="mr-4 " />
                </div>
                <span>{link?.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
