import { AnimatedText } from '@/components/AnimatedText'
import { TooltipCom } from '@/components/tooltip-com'
import { Tooltip } from '@/components/ui/tooltip'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaYoutube } from 'react-icons/fa'

type Props = {
  image: {
    src: string
    alt: string
    caption: string
  }
  title: string
  links: [
    {
      title: string
      url: string
    },
    {
      title: string
      url: string
    }
  ]
}

export const HeaderLab = ({ title, image, links }: Props) => {
  return (
    <div className=" flex flex-col md:flex-row items-center  justify-center md:justify-between  w-full h-fit md:h-full md:gap-10 gap-0 ">
      {' '}
      <TooltipCom message={image.caption}>
        <div className="relative flex justify-center items-center  w-full md:w-10/12 h-[70vh] rounded-md   ">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain rounded-md "
          />
        </div>
      </TooltipCom>
      <div>
        <AnimatedText
          text={title}
          className="mb-16 mx-auto text-center text-2xl md:text-3xl"
        />
        <ul className="w-10/12">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="flex gap-2 items-center justify-start py-2"
              >
                <FaYoutube className="mr-4" />
                <span>{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
