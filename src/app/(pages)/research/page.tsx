import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import React from 'react'
import { FeaturedProject } from './_components/featured-project'
import { Project } from './_components/project'
import { TransitionEffect } from '@/components/transition-effect'

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Proyectos',
  description: 'Proyectos',
}

type Props = {}

const ResearchPage = (props: Props) => {
  return (
    <main className="w-full mb-16 flex  flex-col items-center justify-center">
      <TransitionEffect />

      <MaxWidthWrapper className="pt-16 ">
        <AnimatedText
          text={'Imagination Trumps Knowledge!'}
          className="sm:mb-16 text-4xl sm:text-6xl mb-8  lg:text-7xl "
        />
        <div className="grid grid-cols-12 gap-24 lg:gap-x-8 md:gap-y-24 gap-x-2   xl:gap-y-32 ">
          <div className="col-span-12 ">
            <FeaturedProject
              title={'Crypto Screener Application'}
              summary={
                'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
              }
              img={'/images/projects/crypto-screener-cover-image.jpg'}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title={'Crypto Screener Application'}
              img={'/images/projects/crypto-screener-cover-image.jpg'}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title={'Crypto Screener Application'}
              img={'/images/projects/crypto-screener-cover-image.jpg'}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-12 ">
            <FeaturedProject
              title={'Crypto Screener Application'}
              summary={
                'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
              }
              img={'/images/projects/crypto-screener-cover-image.jpg'}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title={'Crypto Screener Application'}
              img={'/images/projects/crypto-screener-cover-image.jpg'}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Project
              title={'Crypto Screener Application'}
              img={'/images/projects/crypto-screener-cover-image.jpg'}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}

export default ResearchPage
