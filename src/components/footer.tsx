import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Link from 'next/link'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className="w-full border-t-2 border-solid border-primary  font-medium text-lg">
      <MaxWidthWrapper className={'py-8 flex items-center justify-between'}>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>{' '}
          <Link
            href="https://mariachon.com.mx"
            target={'_blank'}
            className="underline underline-offset-2"
          >
            By Mariachon
          </Link>
        </div>
        <Link
          href="https:/mariachon.com"
          target={'_blank'}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </MaxWidthWrapper>
    </footer>
  )
}
