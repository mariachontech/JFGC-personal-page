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
import { SearchByDoi } from './search-by-doi'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ConferencePublicated from './conference-publicated'
import BookPublicated from './book-publicated'
import PatentPublicated from './patent-publicated'

export type BibEntry = {
  id?: string
  type?: string
  title?: string
  author?: string | string[]
  publisher?: string
  journal?: string
  booktitle?: string
  address?: string
  chapter?: string
  assignee?: string
  nationality?: string
  howpublished?: string
  note?: string
  year?: string
  pages?: string
  volume?: string
  number?: string | number
  doi?: string
  raw?: string
}

type Props = {
  researchData: ScientificInterest[]
  dataResearchGroup: GroupType[]
  bibJSON: BibEntry[]
  patents?: BibEntry[]
  projects: ProjectType[]
  industrialPart: IndustrialPartner[]
}

const VALID_TABS = [
  'interest',
  'publications',
  'projects',
  'research-group',
  'industrial-partners',
] as const

const formatAuthor = (author: BibEntry['author']): string =>
  Array.isArray(author) ? author.join(', ') : (author ?? '')

export const ResearhTab = ({
  researchData = [],
  dataResearchGroup = [],
  bibJSON = [],
  patents = [],
  projects = [],
  industrialPart = [],
}: Props) => {
  const searchParams = useSearchParams()
  const initialTab = searchParams.get('q')
  const [page, setPage] = useState<string>(
    initialTab && (VALID_TABS as readonly string[]).includes(initialTab)
      ? initialTab
      : 'interest',
  )

  useEffect(() => {
    const q = searchParams.get('q')
    if (q && (VALID_TABS as readonly string[]).includes(q)) {
      setPage(q)
    }
  }, [searchParams])

  const validTypes = [
    'article',
    'journal',
    'book',
    'inproceedings',
    'incollection',
    'inbook',
    'patent',
  ]

  const groupedReferences = (bibJSON ?? []).reduce<Record<string, BibEntry[]>>(
    (groups, reference) => {
      const type = reference.type?.toLowerCase() || 'other'

      // Solo crear grupos para los tipos válidos
      const groupType = validTypes.includes(type) ? type : 'other'

      if (!groups[groupType]) {
        groups[groupType] = []
      }

      groups[groupType].push(reference)

      return groups
    },
    {},
  )

  const conferencesArray = [
    ...(groupedReferences?.inproceedings === undefined
      ? []
      : groupedReferences?.inproceedings),
    ...(groupedReferences?.incollection === undefined
      ? []
      : groupedReferences?.incollection),
  ]

  const bookArray = [
    ...(groupedReferences?.book === undefined ? [] : groupedReferences?.book),
    ...(groupedReferences?.inbook === undefined
      ? []
      : groupedReferences?.inbook),
  ]

  const patentsArray = [
    ...(groupedReferences?.patent === undefined
      ? []
      : groupedReferences?.patent),
    ...patents,
  ]

  //console.log(groupedReferences)

  return (
    <Tabs value={page} onValueChange={setPage} className="w-full ">
      <Separator className="" />

      <TabsList className="w-[100%] md:w-full flex flex-wrap justify-start md:justify-evenly items-center mb-24 md:mb-0 bg-background ">
        <TabsTrigger value="interest">Scientific interest</TabsTrigger>
        <TabsTrigger value="publications">Publications</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="research-group">Research group</TabsTrigger>
        <TabsTrigger value="industrial-partners">
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
                {groupedReferences?.article?.length === 0 ? (
                  <div className="text-center">No publications found</div>
                ) : (
                  groupedReferences?.article?.map(
                    (bib: BibEntry, ind: number) => (
                      <PaperPublicated
                        key={bib.id}
                        index={ind}
                        title={bib.title}
                        author={formatAuthor(bib.author)}
                        publisher={bib.publisher}
                        journal={bib.journal}
                        pages={bib.pages}
                        volume={bib.volume}
                        number={bib.number}
                        doi={bib.doi}
                        raw={bib.raw}
                        lengthArray={groupedReferences.article.length}
                      />
                    ),
                  )
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Conferences</AccordionTrigger>
            <AccordionContent>
              <ul className="mt-4">
                {conferencesArray.length === 0 ? (
                  <div className="text-center">No publications found</div>
                ) : (
                  conferencesArray?.map((bib: BibEntry, ind: number) => (
                    <ConferencePublicated
                      key={bib.id}
                      index={ind}
                      title={bib.title}
                      author={formatAuthor(bib.author)}
                      booktitle={bib.booktitle}
                      year={bib.year}
                      pages={bib.pages}
                      volume={bib.volume}
                      number={bib.number}
                      doi={bib.doi}
                      raw={bib.raw}
                      lengthArray={conferencesArray.length}
                    />
                  ))
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
              <ul className="mt-4">
                {bookArray.length === 0 ? (
                  <div className="text-center">No publications found</div>
                ) : (
                  bookArray.map((bib: BibEntry, ind: number) => (
                    <BookPublicated
                      key={bib.id}
                      index={ind}
                      title={bib.title}
                      author={formatAuthor(bib.author)}
                      booktitle={bib.booktitle}
                      publisher={bib.publisher}
                      address={bib.address}
                      chapter={bib.chapter}
                      year={bib.year}
                      pages={bib.pages}
                      volume={bib.volume}
                      number={bib.number}
                      doi={bib.doi}
                      raw={bib.raw}
                      lengthArray={bookArray.length}
                    />
                  ))
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Patents</AccordionTrigger>
            <AccordionContent>
              <ul className="mt-4">
                {patentsArray.length === 0 ? (
                  <div className="text-center">No patents found</div>
                ) : (
                  patentsArray.map((bib: BibEntry, ind: number) => (
                    <PatentPublicated
                      key={bib.id}
                      index={ind}
                      title={bib.title}
                      author={formatAuthor(bib.author)}
                      assignee={bib.assignee}
                      address={bib.address}
                      nationality={bib.nationality}
                      howpublished={bib.howpublished}
                      note={bib.note}
                      year={bib.year}
                      number={bib.number}
                      doi={bib.doi}
                      raw={bib.raw}
                      lengthArray={patentsArray.length}
                    />
                  ))
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
