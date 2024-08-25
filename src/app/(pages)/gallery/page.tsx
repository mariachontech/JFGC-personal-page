import { GalleryPics } from '@/components/gallery-pics'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import React from 'react'
import { sanityFetch } from '../../../../sanity/lib/fetch'
import { GALLERY_QUERY } from '../../../../sanity/lib/queries'
import { SanityDocument } from 'next-sanity'

type Props = {}

const GalleryPage = async (props: Props) => {
  const GalleryData = await sanityFetch<SanityDocument>({
    query: GALLERY_QUERY,
  })


  return (
    <MaxWidthWrapper>
      <GalleryPics galleryData={GalleryData.galleries} />
    </MaxWidthWrapper>
  )
}

export default GalleryPage
