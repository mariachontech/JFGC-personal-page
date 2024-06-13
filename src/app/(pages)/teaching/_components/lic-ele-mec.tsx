'use client'

import Image from 'next/image'

import { BookOpenCheck, LucideDownload, MapPin, Notebook } from 'lucide-react'

type Props = {
  title?: string
  description?: string
  courses: {
    title: string
    link?: string
    image: string
    extras?: string
    plan?: string
  }[]
}

export const LicElecMec = ({ title, description, courses }: Props) => (
  <section className="py-24 w-[80%]">
    <div className="max-w-screen-lg mx-auto px-4 md:px-8">
      <div className="">
        <h1 className=" text-2xl font-extrabold sm:text-3xl">{title}</h1>
        <p className=" mt-2">{description}</p>
      </div>
      <ul className="mt-12 divide-y space-y-3">
        {courses.map((item, idx) => (
          <li
            key={idx}
            className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-foreground/70 hover:text-primary cursor-none"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-x-3">
                <div className="relative bg-white w-14 h-14 border rounded-full lg:flex items-center justify-center  hidden">
                  <Image
                    src={item.image}
                    alt={''}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <span className="block  text-sm font-bold italic">
                    {item.title}
                  </span>
                  {/* <h3 className="text-base text-gray-800 font-semibold mt-1">
                    {item.job_title}
                  </h3> */}
                </div>
              </div>
              {/* <p className="text-gray-600 sm:text-sm">{item.job_description}</p> */}
              <div className="text-sm  flex  flex-col md:flex-row  items-start  mditems-center gap-6">
                {item.link && (
                  <a href={item.link} className="cursor-cell">
                    <span className="flex  items-center gap-2">
                      <LucideDownload />
                      Sources
                    </span>
                  </a>
                )}
                {item.plan && (
                  <a href={item.plan} className="cursor-cell">
                    <span className="flex items-center gap-2 cursor-cell">
                      <Notebook />
                      Plan
                    </span>
                  </a>
                )}
                {item?.extras && (
                  <a href={item.extras} className="cursor-cell">
                    <span className="flex items-center gap-2  cursor-cell">
                      <BookOpenCheck />
                      Exam or report
                    </span>
                  </a>
                )}
                <span className="flex items-center gap-2 cursor-cell">
                  <MapPin />
                  In Place
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
