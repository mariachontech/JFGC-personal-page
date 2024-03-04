import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { ArrowUpRightFromSquare } from 'lucide-react'
import { AskMe } from '@/components/ask-me'
import { TransitionEffect } from '@/components/transition-effect'

export default function Home() {
  return (
    <main className="flex  justify-center items-center">
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              odit autem mollitia accusamus doloremque quo voluptatem dolorem
              iure possimus, ipsa porro commodi nesciunt? Facilis sed unde
              adipisci id cumque consequuntur?
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
                href="mailto:fermi@gmail.com"
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
      <AskMe />
      <div className="absolute right-0 bottom-0 md:inline-block w-24 h-48 hidden">
        <Image
          src={'/images/svgs/light-bulb.svg'}
          alt="think about"
          fill
          className="object contain"
          priority
          sizes="(max-width:760px) 100vw,
          (max-width:1200px) 50vw,
          50vW
          "
        />
      </div>
    </main>
  )
}
