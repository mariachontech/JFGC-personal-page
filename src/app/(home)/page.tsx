import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { ArrowUpRightFromSquare } from 'lucide-react'
import { AskMe } from '@/components/ask-me'
import { TransitionEffect } from '@/components/transition-effect'
import { CarouselPics } from '@/components/carousel-pics'
import { GalleryPics } from '@/components/gallery-pics'
import { Icons } from '@/components/icons'
import { TooltipCom } from '@/components/tooltip-com'

export default function Home() {
  return (
    <main className="flex flex-col  justify-center items-center">
      <TransitionEffect />

      <MaxWidthWrapper className="max-w-screen-xl h-fit md:h-screen pb-10 md:pb-0 pt-0 md:pt-16 sm:pt-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between  w-full h-fit md:h-full gap-10 ">
          <div className="relative flex justify-center items-center  w-[100%] md:w-1/2 h-[70vh] md:h-full z-10 -mt-5 -mb-5 md:-mt-20  md:inline-block ">
            <Image
              src={'/images/profile/fermiguerrero.png'}
              alt="Profile"
              fill
              className="object-contain "
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text={'Modeling and control of Cyber-Physical Systems'}
              className="text-3xl text-left xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl"
            />
            <p className="my-4 text-sm lg:text-base  font-medium">
              Designing, modeling, and controlling future collaborative and
              environmentally responsible autonomous and robotic systems.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
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
                target={'_blank'}
                className={buttonVariants({
                  variant: 'link',
                  className: 'gap-1.5 text-dark dark:text-light',
                })}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="max-w-screen-xl p-5 mx-auto ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
            <div
              className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500"
              // style="background-image: url(https://source.unsplash.com/random/245x320);"
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  Art
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
              // style='background-image: url("https://source.unsplash.com/random/240x320");'
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  Politics
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
              // style='background-image: url("https://source.unsplash.com/random/241x320");'
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  Health
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
              // style='background-image: url("https://source.unsplash.com/random/242x320");'
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  Science
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

              // styled='background-image: url("https://source.unsplash.com/random/243x320");'
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                >
                  Sports
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
      <AskMe />
      <div className="absolute right-0 bottom-0 md:inline-block w-24 h-48 hidden">
        {/* <Image
          src={'/images/svgs/light-bulb.svg'}
          alt="think about"
          fill
          className="object contain"
          priority
          sizes="(max-width:760px) 100vw,
          (max-width:1200px) 50vw,
          50vW
          "
        /> */}
        <TooltipCom message="Gallery">
          <Link href={'/gallery'}>
            <Icons.droneIcon className="fill-foreground" />
          </Link>
        </TooltipCom>
      </div>
    </main>
  )
}
