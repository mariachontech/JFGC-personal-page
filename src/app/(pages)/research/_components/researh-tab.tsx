'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { AnimatedText } from '@/components/AnimatedText'
import PaperPublicated from './paper-publicated'
import { ProjectByYear } from './project-by-year'
import { ResearchGroup } from './research-group'
import { FeaturedArticles } from './featured-articles'
import { useSearchParams } from 'next/navigation'
import {
  GroupType,
  IndustrialPartner,
  ProjectType,
  ScientificInterest,
} from '../../../../../types'
import { FeaturedProject } from './featured-project'
import { Server } from 'lucide-react'
import { SearchByDoi } from './search-by-doi'

type Props = {
  researchData: ScientificInterest[]
  dataResearchGroup: GroupType[]
  bibJSON: any[]
  projects: ProjectType[]
  industrialPart: IndustrialPartner[]
}

export const ResearhTab = ({
  researchData,
  dataResearchGroup,
  bibJSON,
  projects,
  industrialPart,
}: Props) => {
  const [page, setPage] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    setPage(page || searchParams.get('q') || '')
  }, [searchParams, page, setPage])

  return (
    <Tabs value={page} className="w-full ">
      <Separator className="" />

      <TabsList className="w-[100%] md:w-full flex flex-wrap justify-start md:justify-evenly items-center mb-24 md:mb-0 bg-background ">
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
          className="hidden md:block sm:mb-16 text-4xl sm:text-5xl mb-8   "
        />
        <div className="grid grid-cols-12 gap-24 lg:gap-x-8 md:gap-y-24 gap-x-2   xl:gap-y-32 ">
          <div className="col-span-12 space-y-10">
            {researchData.map((research) => (
              <FeaturedProject
                key={research._id}
                title={research.title}
                summary={research.description}
                img={research.image}
                link={''}
                github={''}
                type={research.categories}
              />
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="publications">
        <div className="w-[30vw] flex flex-row  justify-center items-start">
          <AnimatedText
            text={'Publications'}
            className="hidden md:block sm:mb-16 text-4xl sm:text-5xl mb-8   "
          />

          <SearchByDoi />
        </div>
        <ul className="mt-4">
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
              lengthArray={bibJSON.length}
            />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="projects">
        <AnimatedText
          text={'Projects'}
          className="hidden md:block sm:mb-16 text-4xl sm:text-5xl mb-8   "
        />
        <ProjectByYear projects={projects} />
      </TabsContent>
      <TabsContent value="research-group">
        <AnimatedText
          text={'Research group'}
          className="hidden md:block sm:mb-16 text-4xl sm:text-5xl mb-8   "
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 ">
          {dataResearchGroup.map((research) => (
            <ResearchGroup key={research._id} dataresearchGroup={research} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="industrial-partners">
        <AnimatedText
          text={'Industrial partners'}
          className="hidden md:block sm:mb-16 text-4xl sm:text-5xl mb-8   "
        />
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-16">
          {industrialPart.map((industrial) => (
            <FeaturedArticles key={industrial._id} indPartners={industrial} />
          ))}
        </ul>{' '}
      </TabsContent>
    </Tabs>
  )
}
