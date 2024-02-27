import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import React from 'react'
import { FeaturedArticles } from './_components/featured-articles'
import { Article } from './_components/article'

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Articulos',
  description: 'Articulos',
}

type Props = {}

const ArticlesPage = (props: Props) => {
  return (
    <main
      className="w-full
     mb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      <MaxWidthWrapper className="pt-16  ">
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
          <FeaturedArticles
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/"
            img="/images/articles/What is higher order component in React.jpg"
          />
        </ul>
        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
          All Articles
        </h2>
        <ul className="py-28">
          <Article
            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
            date="March 2, 2024"
            link="/"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
            date="March 2, 2024"
            link="/"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
            date="March 2, 2024"
            link="/"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
            date="March 2, 2024"
            link="/"
            img="/images/articles/create modal component in react using react portals.png"
          />
        </ul>
      </MaxWidthWrapper>
    </main>
  )
}

export default ArticlesPage
