import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import React from 'react'
import { FeaturedArticles } from './_components/featured-articles'

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Articulos',
  description: 'Articulos',
}

type Props = {}

const ArticlesPage = (props: Props) => {
  return (
    <main className="w-screen mb-16 flex flex-col items-center justify-center overflow-hidden">
      <MaxWidthWrapper className="pt-16 ">
        <AnimatedText
          text="Words Can Change The World"
          className="mb-16 mx-auto text-center"
        />
        <ul className="grid grid-cols-2 gap-16">
          <FeaturedArticles
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/"
            img="/images/articles/form_validation_in_reactjs_using_custom_react_hook.png"
          />
          <FeaturedArticles
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/"
            img="/images/articles/What is higher order component in React.jpg"
          />
        </ul>
      </MaxWidthWrapper>
    </main>
  )
}

export default ArticlesPage
