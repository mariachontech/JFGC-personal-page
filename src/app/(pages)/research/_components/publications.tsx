/* eslint-disable padded-blocks */
'use client'
import React from 'react'

import { CitationPub } from './citation-pub'

type Props = {}

const papersData = ['10.1109/TAC.2012.2225493', '10.1109/LSENS.2023.3300823']

export const Publications = ({}: Props) => {
  return (
    <ul>
      {papersData.map((doi) => (
        <CitationPub key={doi} doi={doi} />
      ))}
    </ul>
  )
}
