import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { ArrowUpRightFromSquare } from 'lucide-react'
import { AskMe } from '@/components/ask-me'

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <MaxWidthWrapper className="max-w-screen-xl h-screen">
        <div className="flex items-start justify-between w-full h-full gap-10 ">
          <div className="relative w-1/2 h-full z-10 -mt-20">
            <Image
              src={'/images/profile/fermiguerrero.png'}
              alt="Profile"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text={'Modeling and control of Cyber-Physical Systems'}
              className="text-6xl text-left"
            />
            <p className="my-4 text-base font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              odit autem mollitia accusamus doloremque quo voluptatem dolorem
              iure possimus, ipsa porro commodi nesciunt? Facilis sed unde
              adipisci id cumque consequuntur?
            </p>
            <div className="flex items-center self-start mt-2">
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
      <div className="absolute right-0 bottom-0 inline-block w-24 h-48 ">
        <Image
          src={'/images/svgs/light-bulb.svg'}
          alt="think about"
          fill
          className="object contain"
        />
      </div>
    </main>
  )
}
