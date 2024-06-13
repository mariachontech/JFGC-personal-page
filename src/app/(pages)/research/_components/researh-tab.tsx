'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { AnimatedText } from '@/components/AnimatedText'
import { FeaturedProject } from './featured-project'
import PaperPublicated from './paper-publicated'
import { ProjectByYear } from './project-by-year'
import { ResearchGroup } from './research-group'
import { FeaturedArticles } from './featured-articles'
import { useSearchParams } from 'next/navigation'

type Props = {
  researchData: {
    title: string
    summary: string
    img: string
    link: string
    github: string
    type: string
  }[]
  dataResearchGroup: {
    id: string
    tag: string
    group: string
    title: string
    description: string
    link: string
    link2: string
    linkedin: string
    github: string
    page: string
  }[]
  bibJSON: any[]
}

export const ResearhTab = ({
  researchData,
  dataResearchGroup,
  bibJSON,
}: Props) => {
  const [page, setPage] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    setPage(page || searchParams.get('q') || '')
  }, [searchParams, page, setPage])

  return (
    <Tabs value={page} className="w-full ">
      <Separator className="" />

      <TabsList className="w-[100%] md:w-full flex flex-wrap justify-start md:justify-evenly items-center mb-10 md:mb-0 bg-background ">
        <TabsTrigger value="interest" onClick={() => setPage('interest')}>
          Scientific interest
        </TabsTrigger>
        <TabsTrigger
          value="publications"
          onClick={() => setPage('publications')}
        >
          Publications
        </TabsTrigger>
        <TabsTrigger value="projects" onClick={() => setPage('projects')}>
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="research-group"
          onClick={() => setPage('research-group')}
        >
          Research group
        </TabsTrigger>
        <TabsTrigger
          value="industrial-partners"
          onClick={() => setPage('industrial-partners')}
        >
          Industrial partners
        </TabsTrigger>
      </TabsList>

      <TabsContent value="interest" className="w-fit">
        <AnimatedText
          text={'Scientific Interest'}
          className="sm:mb-16 text-4xl sm:text-5xl mb-8   "
        />
        <div className="grid grid-cols-12 gap-24 lg:gap-x-8 md:gap-y-24 gap-x-2   xl:gap-y-32 ">
          <div className="col-span-12 space-y-10">
            {researchData.map((research) => (
              <FeaturedProject
                key={research.title}
                title={research.title}
                summary={research.summary}
                img={research.img}
                link={research.link}
                github={research.github}
                type={research.type}
              />
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="publications">
        <AnimatedText
          text={'Publications'}
          className="sm:mb-16 text-4xl sm:text-5xl mb-8   "
        />
        <ul>
          {bibJSON.map((bib, ind) => (
            <PaperPublicated
              key={bib.id}
              index={ind}
              title={bib.title}
              author={bib.author || ''}
              publisher={bib.publisher}
              journal={bib.journal}
              pages={bib.pages}
              volume={bib.volume}
              number={bib.number}
              doi={bib.doi}
              raw={bib.raw}
            />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="projects">
        <AnimatedText
          text={'Projects'}
          className="sm:mb-16 text-4xl sm:text-5xl mb-8   "
        />
        <ProjectByYear />
      </TabsContent>
      <TabsContent value="research-group">
        <AnimatedText
          text={'Research group'}
          className="sm:mb-16 text-4xl sm:text-5xl mb-8   "
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 ">
          {dataResearchGroup.map((research) => (
            <ResearchGroup key={research.id} {...research} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="industrial-partners">
        <AnimatedText
          text={'Industrial partners'}
          className="sm:mb-16 text-4xl sm:text-5xl mb-8   "
        />
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-16">
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
        </ul>{' '}
      </TabsContent>
    </Tabs>
  )
}
