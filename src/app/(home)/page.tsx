import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { ArrowUpRightFromSquare, ImagePlusIcon } from 'lucide-react'
import { TransitionEffect } from '@/components/transition-effect'

import { Icons } from '@/components/icons'
import { TooltipCom } from '@/components/tooltip-com'
import { Separator } from '@/components/ui/separator'
import { Affiliate } from '@/components/afilliate'
import { AddressData } from '@/components/address-data'
import { CarouselPics } from '@/components/carousel-pics'

export default function Home() {
  return (
    <main className="flex flex-col   justify-between items-center">
      <TransitionEffect />

      <MaxWidthWrapper className=" h-fit md:h-[100vh]  pb-10 md:pb-0 pt-0 ">
        <div className=" flex flex-col md:flex-row items-center  justify-center md:justify-between  w-full h-fit md:h-full md:gap-10 gap-0 ">
          <div className="relative flex justify-center items-center  w-full md:w-1/2 h-[70vh] md:h-full  ">
            <Image
              src={'/images/profile/fermiguerrero.png'}
              alt="Profile"
              fill
              className="object-contain "
            />
          </div>
          <div className="md:w-1/2 h-auto flex flex-col items-start  justify-between self-center  lg:text-center md:gap-24 gap-1 px-2 md:px-0">
            <AnimatedText
              text={
                'Designing, modeling, and controlling future collaborative and environmentally responsible autonomous and robotic systems.'
              }
              className="text-xl text-left lg:text-center  md:text-3xl"
            />
            {/* <p className="my-4 text-sm lg:text-base  font-medium">
              Designing, modeling, and controlling future collaborative and
              environmentally responsible autonomous and robotic systems.
             </p> */}
            <div className="flex items-center self-center   gap-5 flex-col md:flex-row">
              <div className="">
                <AddressData />
              </div>
              <div className="flex flex-row md:flex-col  md:gap-5">
                <Link
                  href="/"
                  target={'_blank'}
                  className={buttonVariants({
                    variant: 'default',
                    className: 'gap-1.5 text-dark dark:text-light',
                  })}
                >
                  Resume <ArrowUpRightFromSquare />
                </Link>
                <Link
                  href="/contact"
                  className={buttonVariants({
                    variant: 'link',
                    className: 'gap-1.5 text-dark dark:text-light',
                  })}
                >
                  Contact
                </Link>
                <Link
                  href="/gallery"
                  className={buttonVariants({
                    variant: 'secondary',
                    className: 'gap-1.5 text-dark  dark:text-light md:hidden',
                  })}
                >
                  Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <Separator className="my-4" />

      <MaxWidthWrapper className="flex justify-start items-center">
        <div className="max-w-screen-xl  mx-auto py-10">
          <h3 className="font-bold py-5">News</h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500"
              style={{
                backgroundImage:
                  'url(https://source.unsplash.com/random/245x320)',
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  Control
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leadi tracki">
                    31
                  </span>
                  <span className="leadi uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100"
                >
                  Fuga ea ullam earum assumenda, beatae labore eligendi.
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/240x320")',
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  Robotics
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leadi tracki">
                    04
                  </span>
                  <span className="leadi uppercase">Aug</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-medium text-md group-hover:underline dark:text-gray-100"
                >
                  {' '}
                  Autem sunt tempora mollitia magnam non voluptates
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/241x320")',
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  Defense
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leadi tracki">
                    01
                  </span>
                  <span className="leadi uppercase">Aug</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-medium text-md group-hover:underline dark:text-gray-100"
                >
                  Inventore reiciendis aliquam excepturi
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/242x320")',
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  Navigation
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leadi tracki">
                    28
                  </span>
                  <span className="leadi uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-medium text-md group-hover:underline dark:text-gray-100"
                >
                  Officiis mollitia dignissimos commodi optio vero animi
                </a>
              </h2>
            </div>
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/243x320")',
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  CNCA 2024
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="text-3xl font-semibold leadi tracki">
                    19
                  </span>
                  <span className="leadi uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-medium text-md group-hover:underline dark:text-gray-100"
                >
                  Doloribus sit illo necessitatibus architecto exercitationem
                  enim
                </a>
              </h2>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <Separator className="my-4" />
        <div className="w-full mx-auto py-10 flex flex-col md:flex-row justify-center md:justify-around items-center gap-10">
          <CarouselPics />

          <h3 className="font-semibold py-10 md:py-5 w-full md:w-[40%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, odit
            in esse autem mollitia tenetur nihil commodi sed voluptatibus
            facilis?
          </h3>
        </div>
      </MaxWidthWrapper>
      {/* <AskMe /> */}
      <Affiliate />
      <div className="absolute right-0 bottom-0 md:inline-block w-24 h-48 hidden">
        <TooltipCom message="Gallery">
          <Link href={'/gallery'}>
            <Icons.droneIcon className="fill-foreground" />
          </Link>
        </TooltipCom>
      </div>
    </main>
  )
}
