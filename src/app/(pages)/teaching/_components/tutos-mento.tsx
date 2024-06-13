'use client'

import Image from 'next/image'

import {
  ArrowRight,
  ArrowRightFromLine,
  BookOpenCheck,
  LucideDownload,
  MapPin,
  Notebook,
} from 'lucide-react'

type Props = {
  title?: string
  description?: string
  tutos: {
    title: string
    follow: {
      title: string
      link: string
    }
    register: {
      title: string
      link: string
    }
  }[]
}

export const TutosAndMento = ({ title, description, tutos }: Props) => (
  <section className="py-24 w-screen">
    <div className="max-w-screen-lg mx-auto  md:px-8">
      <div className="w-[80vw]">
        <h1 className=" text-2xl font-extrabold sm:text-3xl">{title}</h1>
        <p className=" mt-2">{description}</p>
      </div>
      <ul className="mt-12 divide-y space-y-3">
        {tutos.map((tuto, index) => (
          <li key={index}>
            <h3 className="text-lg font-semibold">{tuto.title}</h3>
            <div className="flex flex-col gap-2">
              <a href={tuto.follow.link} className="cursor-pointer flex">
                <ArrowRight className="mr-2" />
                {tuto.follow.title}
              </a>
              <a href={tuto.register.link} className="cursor-pointer flex">
                <ArrowRightFromLine className="mr-2" />
                {tuto.register.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
