import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'

import { Separator } from './ui/separator'
import { AddressData } from './address-data'
import Link from 'next/link'
import { Principal } from '../../types'

import { SocialIcon } from 'react-social-icons'

const researchMenu: { title: string; href: string; description: string }[] = [
  {
    title: 'Scientific Interests',
    href: '/research?q=interest',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'Publications',
    href: '/research?q=publications',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'Projects',
    href: '/research?q=projects',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'Research Group',
    href: '/research?q=research-group',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'Industrial Partners',

    href: '/research?q=industrial-partners',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
]

const studentsMenu: { title: string; href: string; description: string }[] = [
  {
    title: 'Mater',
    href: '/students/#master',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'PhD',
    href: '/students/#phd',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'Postdocs',
    href: '/students/#post-docs',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'PhD Boards',
    href: '/students/#phd-boards',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
]

const teachingMenu: { title: string; href: string; description: string }[] = [
  {
    title: 'Undergraduate Courses',
    href: '/teaching/#undergraduate-courses',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'Graduate Courses',
    href: '/teaching/#graduate-courses',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
]

const labMenu: { title: string; href: string; description: string }[] = [
  {
    title: 'Lab activities',
    href: '/lab/#lab-activities',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'Lab facilities',
    href: '/lab/#lab-facilities',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'Developed prototypes',
    href: '/lab/#developed-prototypes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
]

type Props = {
  personalData?: Principal
}

export const Footer = ({ personalData }: Props) => {
  const urlWhatsapp = `https://wa.me/52${personalData?.phone}/`
  return (
    <MaxWidthWrapper>
      <footer className="px-4 divide-y  bg-background ">
        <Separator />
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-4 lg:flex-row lg:space-y-0 gap-10">
          <div className="w-fit md:px-10">
            <AddressData principalData={personalData} />
          </div>

          <div className="grid grid-cols-2 text-sm gap-x-3  lg:w-1/2 s">
            <div className="space-y-3">
              <Link href={'/biography'}>
                <h3 className=" uppercase dark:text-gray-50">Biography</h3>
              </Link>
              {/* <ul className="space-y-1">
                {researchMenu.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="space-y-3">
              <Link href={'/research?q=publications'}>
                <h3 className=" uppercase dark:text-gray-50">Research</h3>
              </Link>
              {/* <ul className="space-y-1">
                {researchMenu.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="space-y-3">
              <Link href={'/students'}>
                <h3 className=" uppercase dark:text-gray-50">Students</h3>
              </Link>
              {/* <ul className="space-y-1">
                {studentsMenu.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="space-y-3">
              <Link href={'/teaching'}>
                <h3 className="uppercase ">Teaching</h3>
              </Link>
              {/* <ul className="space-y-1">
                {teachingMenu.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="space-y-3">
              <Link href={'/lab'}>
                <h3 className="uppercase ">Lab</h3>
              </Link>
              {/* <ul className="space-y-1">
                {labMenu.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
          <div className="space-y-3">
            {/* <div className="uppercase text-foreground">Social Media</div> */}
            <div className="flex  justify-end items-end">
              {personalData?.socialsNet?.map((social) => (
                <SocialIcon
                  className=" "
                  key={social?._id}
                  url={social?.urlSocial}
                  fgColor="gray"
                  bgColor="transparent"
                  style={{ height: 50, width: 50 }}
                  network=""
                  target="_blank"
                />
              ))}
              <SocialIcon
                url={urlWhatsapp || ''}
                bgColor="transparent"
                fgColor="gray"
                style={{ height: 50, width: 50 }}
                network="whatsapp"
                target="_blank"
              />
            </div>
          </div>
        </div>
        <div className="container m-auto flex flex-col md:flex-row justify-between items-center py-5 gap-5 md-gap-0 ">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
          <div>
            Build With
            <span className="text-primary text-2xl px-1">&#9825;</span>
            <Link
              href="https://mariachon.com.mx"
              target={'_blank'}
              className="underline underline-offset-2"
            >
              By Mariachon
            </Link>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
    // <footer className="w-full border-t-2 border-solid border-primary  font-medium text-sm md:text-lg">
    //   <MaxWidthWrapper
    //     className={
    //       'py-8 flex flex-col md:flex-row items-end md:items-center justify-between gap-5'
    //     }
    //   >
    //     <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
    //     <div>
    //       Build With <span className="text-primary text-2xl px-1">&#9825;</span>{' '}
    //       <Link
    //         href="https://mariachon.com.mx"
    //         target={'_blank'}
    //         className="underline underline-offset-2"
    //       >
    //         By Mariachon
    //       </Link>
    //     </div>
    //     <Link
    //       href="https:/mariachon.com"
    //       target={'_blank'}
    //       className="underline underline-offset-2"
    //     >
    //       Say Hello
    //     </Link>
    //   </MaxWidthWrapper>
    // </footer>
  )
}
