'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

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
      <NavigationMenuList className="space-x-5">
        <NavigationMenuItem className="relative cursor-cell">
          <Link href={'/biography'}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Biography
            </NavigationMenuLink>
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-0.5  transition-[width] ease duration-300',
                pathname === '/biography' ? 'w-full' : 'w-0',
              )}
            >
              &nbsp;
            </span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={'/research?q=publications'} className="relative">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Research
            </NavigationMenuLink>
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-3  transition-[width] ease duration-300',
                pathname === '/research' ? 'w-full' : 'w-0',
              )}
            >
              &nbsp;
            </span>{' '}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={'/students'} className="relative">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Students
            </NavigationMenuLink>
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-3  transition-[width] ease duration-300',
                pathname === '/students' ? 'w-full' : 'w-0',
              )}
            >
              &nbsp;
            </span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={'/teaching'} className="relative">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Teaching
            </NavigationMenuLink>
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-3  transition-[width] ease duration-300',
                pathname === '/teaching' ? 'w-full' : 'w-0',
              )}
            >
              &nbsp;
            </span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={'/lab'} className="relative">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Lab
            </NavigationMenuLink>
            <span
              className={cn(
                'h-[2px] inline-block bg-primary dark:bg-primary absolute left-0 -bottom-3  transition-[width] ease duration-300',
                pathname === '/lab' ? 'w-full' : 'w-0',
              )}
            >
              &nbsp;
            </span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// const ListItem = React.forwardRef<
//   React.ElementRef<'a'>,
//   React.ComponentPropsWithoutRef<'a'>
// >(({ className, title, children, href = '/', ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link
//           href={href}
//           className={cn(
//             'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
//             className,
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = 'ListItem'
