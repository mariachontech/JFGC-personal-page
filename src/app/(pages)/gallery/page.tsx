import { GalleryPics } from '@/components/gallery-pics'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import React from 'react'

type Props = {}

const GalleryPage = (props: Props) => {
  return (
    <MaxWidthWrapper>
      <GalleryPics />
    </MaxWidthWrapper>
  )
}

export default GalleryPage
