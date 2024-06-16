// ./sanity/lib/queries.ts

import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`

export const HOME_QUERY = groq`*[_type == "home"][0]{
  ...,
  principal->{
    ...,
   socialsNet[]->
  },   
  news[]->,
  galleries[]->{
     ...,
     gallery[]->,
     categories[]->
   },
     }
  `

export const HOME_QUERY_LIGHT = groq`*[_type == "home"][0]{

  principal->{
    ...,
   socialsNet[]->,
     
  },
    

}`

export const BIOGRAPHY_QUERY = groq`
*[_type == "biography"][0]{
  ...,
   "pdfURL": pdfFile.asset->url,
  experience[]->,
  education[]->{
    ...,
    commite[]->{
      _id,
      name
    },
     advisers[]->{
       _id,
      name
    }
  }
}

`

export const RESEARCH_QUERY = groq`*[_type == "researchPage"][0] {
  ...,
  publications[]->{
    bibText
  }
}
`
