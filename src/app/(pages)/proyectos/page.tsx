import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import React from 'react'
import { FeaturedProject } from './_components/featured-project'
import { Project } from './_components/project'

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Proyectos',
  description: 'Proyectos',
}

type Props = {}

const ProyectsPage = (props: Props) => {
  return (
    <main className="w-full mb-16 flex  flex-col items-center justify-center">
      <MaxWidthWrapper className="pt-16 ">
        <AnimatedText
          text={'Imagination Trumps Knowledge!'}
          className="mb-16"
        />
        <div className="grid grid-flow-col-12 gap-24">
          <div className="col-span-12">
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
          <div className="col-span-6">
            {' '}
            <Project
              title={'Crypto Screener Application'}
              img={'/images/projects/crypto-screener-cover-image.jpg'}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            {' '}
            <Project
              title={'Crypto Screener Application'}
              img={'/images/projects/crypto-screener-cover-image.jpg'}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-12">
            {' '}
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
          <div className="col-span-6">
            {' '}
            <Project
              title={'Crypto Screener Application'}
              img={'/images/projects/crypto-screener-cover-image.jpg'}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            {' '}
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

export default ProyectsPage
