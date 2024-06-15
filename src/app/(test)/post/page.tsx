// ./app/(blog)/page.tsx

import { SanityDocument } from 'next-sanity'
import { sanityFetch } from '../../../../sanity/lib/fetch'
import { POSTS_QUERY } from '../../../../sanity/lib/queries'
import Posts from './_component/Post'

export default async function Page() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  })

  return <Posts posts={posts} />
}
