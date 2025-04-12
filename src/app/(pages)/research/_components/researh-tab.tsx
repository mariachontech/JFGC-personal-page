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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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

  const validTypes = ['article', 'journal', 'book', 'inproceedings']

  const groupedReferences = bibJSON.reduce((groups, reference) => {
    const type = reference.type?.toLowerCase() || 'other'

    // Solo crear grupos para los tipos válidos
    const groupType = validTypes.includes(type) ? type : 'other'

    if (!groups[groupType]) {
      groups[groupType] = []
    }

    groups[groupType].push(reference)

    return groups
  }, {})

  //console.log("grupos: ", groupedReferences);

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

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Journals</AccordionTrigger>
            <AccordionContent>
              <ul className="mt-4">
                {groupedReferences?.article?.map(
                  (
                    bib: {
                      id: React.Key | null | undefined
                      title: string | undefined
                      author: any
                      publisher: string | undefined
                      journal: string | undefined
                      pages: string | undefined
                      volume: string | undefined
                      number: string | number | undefined
                      doi: string | undefined
                      raw: string | undefined
                    },
                    ind: number,
                  ) => (
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
                  ),
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Conferences</AccordionTrigger>
            <AccordionContent>
              <ul className="mt-4">
                {groupedReferences?.inproceedings?.map(
                  (
                    bib: {
                      id: React.Key | null | undefined
                      title: string | undefined
                      author: any
                      publisher: string | undefined
                      journal: string | undefined
                      pages: string | undefined
                      volume: string | undefined
                      number: string | number | undefined
                      doi: string | undefined
                      raw: string | undefined
                    },
                    ind: number,
                  ) => (
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
                  ),
                )}
              </ul>
              {/* <Accordion type="single" collapsible className="px-10">
                <AccordionItem value="item-1">
                  <AccordionTrigger>International</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>National</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>

              </Accordion> */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Book chapters</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* <ul className="mt-4">
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
        </ul> */}
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
