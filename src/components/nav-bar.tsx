'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { LogoFermiIcon } from './logo-fermi'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { ModeToggle } from './mode-toggle'
import { Button, buttonVariants } from './ui/button'
import { MenuBar } from './menu-bar'
import { MenuSheet } from './menu-sheet'

type Props = {}

const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string
  title: string
  className?: string
}) => {
  const pathName = usePathname()

  return (
    <Link href={href} className={`${className} relative group cursor-pointer`}>
      {title}
      <span
        className={cn(
          'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300',
          pathName === href ? 'w-full' : 'w-0'
        )}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMovileLink = ({
  href,
  title,
  className,
  toggle,
}: {
  href: string
  title: string
  className?: string
  toggle: () => void
}) => {
  const pathName = usePathname()

  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <Button
      onClick={handleClick}
      className={cn(
        buttonVariants({
          variant: 'link',
          className: 'bg-transparent text-foreground',
        }),
        className && ' relative group cursor-pointer my-2'
      )}
    >
      {title}
      <span
        className={cn(
          'h-[2px] inline-block bg-foreground absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300',
          pathName === href ? 'w-full' : 'w-0'
        )}
      >
        &nbsp;
      </span>
    </Button>
  )
}

export const Navbar = (props: Props) => {
  const pathName = usePathname()

  return (
    <header className="relative w-full  px-1 md:px-32 py-8 font-medium flex items-center md:justify-around justify-center m-auto">
      {/* <button
        className="  flex  lg:hidden flex-col justify-start items-center cursor-pointer z-40"
        onClick={handleClick}
      >
        <span
          className={cn(
            'bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ',
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          )}
        ></span>
        <span
          className={cn(
            'bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5',
            isOpen ? 'opacity-0' : 'opacity-100'
          )}
        ></span>
        <span
          className={cn(
            'bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ',
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          )}
        ></span>
      </button> */}
      <div className="absolute top-10 left-10 lg:hidden">
        <MenuSheet />
      </div>

      <div className=" lg:w-full inline-block lg:flex  lg:justify-between items-center  z-50 ">
        {/* <nav className="">
          <CustomLink href={'/'} title="Home" className="mr-4" />
          <CustomLink
            href={'/biography'}
            title={'Biography'}
            className="mx-4"
          />
          <CustomLink href={'/research'} title="Research" className="mx-4" />
          <CustomLink href={'/students'} title="Students" className="ml-4" />
          <CustomLink href={'/teaching'} title="Teaching" className="ml-4" />
          <CustomLink href={'/lab'} title="Lab" className="ml-4" />
        </nav> */}

        <MenuBar className="hidden lg:inline-block" />

        <div className="m-0 lg:mr-96 ">
          <LogoFermiIcon />
        </div>

        <nav className="hidden  lg:flex lg:flex-row lg:items-center lg:justify-center ">
          <motion.a
            href={'/'}
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <FaWhatsapp size={30} />
          </motion.a>
          <motion.a
            href={'https://twiter.com'}
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <FaLinkedinIn size={30} />
          </motion.a>
          <ModeToggle />
        </nav>
      </div>
      {/* 
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-primary/40 rounded-lg backdrop-blur-md py-32 "
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMovileLink
              href={'/'}
              title="Inicio"
              className=""
              toggle={handleClick}
            />
            <CustomMovileLink
              href={'/acerca-de-mi'}
              title={'Acerca de mí'}
              className=""
              toggle={handleClick}
            />
            <CustomMovileLink
              href={'/proyectos'}
              title="Proyectos"
              className=""
              toggle={handleClick}
            />
            <CustomMovileLink
              href={'/articulos'}
              title="Articulos"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href={'/'}
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 mx-1"
            >
              <FaWhatsapp size={30} />
            </motion.a>
            <motion.a
              href={'https://twiter.com'}
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 mx-1"
            >
              <FaLinkedinIn size={30} />
            </motion.a>
            <ModeToggle />
          </nav>
        </motion.div>
      )} */}
    </header>
  )
}
