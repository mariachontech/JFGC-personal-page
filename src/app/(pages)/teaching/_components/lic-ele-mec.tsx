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
import { CourseType, LevelType } from '../../../../../types'
import { urlForImage } from '../../../../../sanity/lib/image'
import { useState } from 'react'

type Props = {
  courseData: CourseType
}

export const LicElecMec = ({ courseData }: Props) => {
  return (
    <section className="py-24 w-[screen]">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        <div className=" w-full">
          <h1 className=" text-2xl font-extrabold sm:text-3xl">
            {courseData?.title}
          </h1>
          {/* <p className=" mt-2">{courseData.}</p> */}
        </div>
        <ul className="mt-12 divide-y space-y-3">
          {courseData?.title !== 'Tutorías y Mentorías'
            ? courseData?.level.map((item: LevelType) => (
                <li
                  key={item._id}
                  className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-foreground/70 hover:text-primary cursor-none"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-x-3">
                      <div className="relative bg-white w-14 h-14 border rounded-full lg:flex items-center justify-center  hidden">
                        <Image
                          src="/images/bloq.jpeg"
                          alt={''}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <span className="block  text-sm font-bold italic">
                          {item.name}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm  flex  flex-col md:flex-row  items-start  mditems-center gap-6">
                      {item?.link && (
                        <a href={item?.link} className="cursor-cell">
                          <span className="flex  items-center gap-2">
                            <LucideDownload />
                            Sources
                          </span>
                        </a>
                      )}
                      {item?.plan && (
                        <a href={item?.plan} className="cursor-cell">
                          <span className="flex items-center gap-2 cursor-cell">
                            <Notebook />
                            Plan
                          </span>
                        </a>
                      )}
                      {item?.extras && (
                        <a href={item?.extras} className="cursor-cell">
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
              ))
            : courseData?.level?.map((tuto, index) => (
                <li key={index}>
                  <h3 className="text-lg font-semibold">{tuto.name}</h3>
                  <div className="flex flex-col gap-2">
                    <a href={tuto?.link} className="cursor-pointer flex">
                      <ArrowRight className="mr-2" />
                      Seguimiento académico Otoño 2019
                    </a>
                    <a href={tuto?.extras} className="cursor-pointer flex">
                      <ArrowRightFromLine className="mr-2" />
                      Registro al CNCA 2019
                    </a>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </section>
  )
}
