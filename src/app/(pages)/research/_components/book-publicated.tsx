'use client'

import { Icons } from '@/components/icons'
import { toast } from '@/components/ui/use-toast'
import React from 'react'

type Props = {
  index: number
  title: string | undefined
  author: string | undefined
  booktitle: string | undefined
  publisher?: string | undefined
  address?: string | undefined
  year?: string | undefined
  pages?: string | undefined
  volume?: string | undefined
  number?: string | number | undefined
  chapter?: string | undefined
  doi: string | undefined
  raw: string | undefined
  lengthArray: number
}

const BookPublicated = ({
  index,
  title,
  author,
  booktitle,
  publisher,
  address,
  year,
  pages,
  volume,
  chapter,
  doi,
  raw,
  lengthArray,
}: Props) => {
  const onCopy = () => {
    navigator.clipboard.writeText(raw || '')

    toast({
      title: 'bibTex was been copied',
      description: (
        <p>
          <code>{raw}</code>
        </p>
      ),
    })
  }

  // const journalOrPublisher = () => {
  //   if (booktitle === undefined) {
  //     return null
  //   } else if (booktitle) {
  //     return booktitle
  //   } else {
  //     return booktitle + ','
  //   }
  // }
  return (
    <li className="w-full flex flex-col   gap-2">
      <div className="flex justify-between  gap-2">
        [{lengthArray - index}]
        <p className="leadig-relaxed">
          {author}
          <span> &quot;{title}&quot;</span>,{' '}
          <span className="italic">{booktitle}, </span>
          {volume && `${volume}, `},{year && `${year}, `}
          {publisher && `${publisher}, `}
          {address && `${address}, `}
          {chapter && `Chap. ${chapter}, `} {pages && `pp. ${pages}, `}
          {doi && <span className="italic">{`https://doi.org/${doi}`}</span>}
        </p>
      </div>
      <div className=" w-full flex justify-end items-center">
        <div className=" w-24 h-10 cursor-pointer " onClick={() => onCopy()}>
          <Icons.bibTexIcon className="fill-foreground hover:fill-foreground/50 font-bold border-foreground   " />
        </div>
      </div>
    </li>
  )
}

export default BookPublicated
