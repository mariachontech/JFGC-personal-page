'use client'

import { Icons } from '@/components/icons'
import { toast } from '@/components/ui/use-toast'
import React from 'react'

type Props = {
  index: number
  title: string | undefined
  author: string | undefined
  assignee?: string | undefined
  address?: string | undefined
  nationality?: string | undefined
  howpublished?: string | undefined
  note?: string | undefined
  year?: string | undefined
  number?: string | number | undefined
  doi: string | undefined
  raw: string | undefined
  lengthArray: number
}

const PatentPublicated = ({
  index,
  title,
  author,
  assignee,
  address,
  nationality,
  howpublished,
  note,
  year,
  number,
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

  return (
    <li className="w-full flex flex-col   gap-2">
      <div className="flex justify-between  gap-2">
        [{lengthArray - index}]
        <p className="leadig-relaxed">
          {author}
          <span> &quot;{title}&quot;, </span>
          {howpublished && `${howpublished}, `}
          {!howpublished && nationality && `${nationality} `}
          {!howpublished && !number && !assignee && !address && !year && doi
            ? `Patent, `
            : !howpublished && number && `Patent No. ${number}, `}
          {assignee && `${assignee}, `}
          {address && `${address}, `}
          {year && `${year}, `}
          {doi && <span className="italic">{`https://doi.org/${doi}`}</span>}
          {note && ` ${note}`}
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

export default PatentPublicated
