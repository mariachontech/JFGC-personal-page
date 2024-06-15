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
