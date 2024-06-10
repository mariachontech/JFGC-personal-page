import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import React from 'react'
import { FeaturedArticles } from './_components/featured-articles'
import { Article } from './_components/article'
import { TransitionEffect } from '@/components/transition-effect'
import { MasterData } from './_components/master'
import PhdStudents from './_components/phd-students'

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Articulos',
  description: 'Articulos',
}

type Props = {}

const StudentsPage = (props: Props) => {
  return (
    <main
      className="w-full
     mb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      <TransitionEffect />

      <MaxWidthWrapper className="pt-16  ">
        <AnimatedText
          text="Real knowledge is to know the extent of one's ignorance. -- Confucius"
          className="mb-16 mx-auto text-center text-2xl md:text-5xl"
        />

        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
          Master
        </h2>

        <MasterData />

        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
          PhD
        </h2>
        <PhdStudents />
        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
          Posdocs
        </h2>
        <PhdStudents />

        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
          PhD Boards
        </h2>
        <ul className="lg:py-28">
          <Article
            title="Los números complejos desempeñan un papel muy importante en las matemáticas. "
            date="March 2, 2024"
            link="/"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Creating An Efficient Modal Component"
            date="March 2, 2024"
            link="/"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Creating An Efficient Modal Component "
            date="March 2, 2024"
            link="/"
            img="/images/articles/create modal component in react using react portals.png"
          />
          <Article
            title="Creating An Efficient Modal Component "
            date="March 2, 2024"
            link="/"
            img="/images/articles/create modal component in react using react portals.png"
          />
        </ul>
      </MaxWidthWrapper>
    </main>
  )
}

export default StudentsPage
