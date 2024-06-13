'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LogoFermiIconText, LogoFermiMedium } from './logo-fermi'
import { usePathname } from 'next/navigation'

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
    href: '/students/#phd-students',
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
    href: '/teaching?q=undergraduate-courses',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure!',
  },
  {
    title: 'Graduate Courses',
    href: '/teaching?q=graduate-courses',
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

export function MenuBar({ className }: { className?: string }) {
  const pathname = usePathname()
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {/* <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        <NavigationMenuItem className="relative cursor-cell">
          <NavigationMenuTrigger>
            Biography
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-0.5  transition-[width] ease duration-300',
                pathname === '/biography' ? 'w-full' : 'w-0'
              )}
            >
              &nbsp;
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end items-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-pointer"
                    href="/biography"
                  >
                    <div className="mb-2 mt-0 text-lg font-medium flex justify-center items-center ">
                      <Avatar>
                        <AvatarImage
                          src="/images/profile/fermiguerrero.png"
                          alt="@shadcn"
                          className="h-10 w-10 -z-0"
                        />
                        <AvatarFallback>FG</AvatarFallback>
                      </Avatar>
                      {/* <LogoFermiMedium className="w-[150px] h-[150px]" /> */}
                      <LogoFermiIconText className="ml-5" />
                      {/* 
                      <p>Dr. José Fermi Guerrero Castellanos</p> */}
                    </div>
                    {/* <p className="text-sm leading-tight text-muted-foreground">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod, molestias.
                    </p> */}
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/biography/#quote" title="Quote"></ListItem>
              <ListItem
                href="/biography/#carrer-path"
                title="Carrer path"
              ></ListItem>
              <ListItem href="/biography/#cv" title="CV"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={'relative  cursor-cell'}>
            Research
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-0.5  transition-[width] ease duration-300 ',
                pathname === '/research' ? 'w-full' : 'w-0'
              )}
            >
              &nbsp;
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {researchMenu.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={'relative cursor-cell'}>
            Students{' '}
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-0.5  transition-[width] ease duration-300',
                pathname === '/students' ? 'w-full' : 'w-0'
              )}
            >
              &nbsp;
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {studentsMenu.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={'relative cursor-cell'}>
            Teaching
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-0.5  transition-[width] ease duration-300',
                pathname === '/teaching' ? 'w-full' : 'w-0'
              )}
            >
              &nbsp;
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {teachingMenu.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="relative cursor-cell">
            Lab
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-0.5  transition-[width] ease duration-300',
                pathname === '/lab' ? 'w-full' : 'w-0'
              )}
            >
              &nbsp;
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {labMenu.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href = '/', ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
