'use client'

import Link from 'next/link'
import React from 'react'
import { LogoFermiFull } from './logo-fermi'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

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
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={cn(
          'h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300',
          pathName === href ? 'w-full' : 'w-0'
        )}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export const Navbar = (props: Props) => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href={'/'} title="Inicio" className="mr-4" />
        <CustomLink href={'/cv'} title={'CV'} className="mx-4" />
        <CustomLink href={'/proyectos'} title="Proyectos" className="mx-4" />
        <CustomLink href={'/articulos'} title="Articulos" className="ml-4" />
      </nav>
      <div className="absolute left-[50%] translate-x-[-50%] ">
        <LogoFermiFull />
      </div>
      <nav className="flex items-center justify-center flex-wrap">
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
      </nav>
    </header>
  )
}
