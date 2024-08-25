'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

import { LogoFermiIconText } from './logo-fermi'

import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { ModeToggle } from './mode-toggle'

export function MenuSheet() {
  const router = useRouter()
  const { theme } = useTheme()
  const pathname = usePathname()

  const handlePushUrl = (url: string) => {
    setTimeout(() => {
      router.push(url)
      console.log('entro', url)
    }, 100)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <button className="  flex  lg:hidden flex-col justify-start items-center cursor-pointer z-40">
          <span
            className={cn(
              'bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ',
              false ? 'rotate-45 translate-y-1' : '-translate-y-0.5',
            )}
          ></span>
          <span
            className={cn(
              'bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5',
              false ? 'opacity-0' : 'opacity-100',
            )}
          ></span>
          <span
            className={cn(
              'bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ',
              false ? '-rotate-45 -translate-y-1' : 'translate-y-0.5',
            )}
          ></span>
        </button>
      </SheetTrigger>
      <SheetContent side={'left'} className="space-y-10">
        <SheetHeader className="flex flex-col gap-5 items-start justify-start px-10">
          <SheetClose>
            <div
              className=" w-[200px] h-[100px] mt-7 relative z-50 text-primary-foreground"
              onClick={() => handlePushUrl('/')}
            >
              <LogoFermiIconText />
            </div>
          </SheetClose>
          <SheetClose>
            <button
              className={`${
                pathname === '/biography'
                  ? 'border-b-2 border-foreground pb-2'
                  : 'border-0'
              }`}
              onClick={() => handlePushUrl('/biography')}
            >
              Biography
            </button>
          </SheetClose>
          <SheetClose>
            <button
              className={`${
                pathname === '/research' ? 'border-b-2 border-white pb-2' : ''
              }`}
              onClick={() => handlePushUrl('/research?q=publications')}
            >
              Research
            </button>
          </SheetClose>
          <SheetClose>
            <button
              className={`${
                pathname === '/students'
                  ? 'border-b-2 border-foreground pb-2'
                  : ''
              }`}
              onClick={() => handlePushUrl('/students')}
            >
              Strudents
            </button>
          </SheetClose>
          <SheetClose>
            <button
              className={`${
                pathname === '/teaching'
                  ? 'border-b-2 border-foreground pb-2'
                  : ''
              }`}
              onClick={() => handlePushUrl('/teaching')}
            >
              Teaching
            </button>
          </SheetClose>
          <SheetClose>
            <button
              className={`${
                pathname === '/lab' ? 'border-b-2 border-foreground  pb-2' : ''
              }`}
              onClick={() => handlePushUrl('/lab')}
            >
              Lab
            </button>
          </SheetClose>
        </SheetHeader>
        <SheetFooter className="w-full flex flex-row  gap-5 items-center justify-end ">
          <SheetClose></SheetClose>
          {/* <SheetClose>
            <a href={'/'} target={'_blank'}>
              <FaLinkedinIn size={30} />
            </a>
          </SheetClose> */}
          {/* <SheetClose>
            <a href={'/'} target={'_blank'}>
              <FaWhatsapp size={30} />
            </a>
          </SheetClose> */}

          <ModeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
