/* eslint-disable padded-blocks */
'use client'
import React from 'react'

import { CitationPub } from './citation-pub'

type Props = {}

const papersData = [
  // {
  //   type: 'article-journal',
  //   title: 'Correlation of the Base Strengths of Amines 1',
  //   author: [
  //     {
  //       given: 'H. K.',
  //       family: 'Hall',
  //     },
  //   ],
  //   issued: { 'date-parts': [[1957, 1, 1]] },
  //   'container-title': 'Journal of the American Chemical Society',
  //   volume: '79',
  //   issue: '20',
  //   page: '5441-5444',
  // },
  '10.1017/S0263574713000209',
  '10.1109/TAC.2012.2225493',
  '10.1155/2013/586480',
  '10.1016/j.conengprac.2011.04.004',
]

export const Publications = ({}: Props) => {
  return (
    <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
      {papersData.map((doi, ind) => (
        <CitationPub key={doi} doi={doi} ind={ind} />
      ))}
    </ol>
  )
}
