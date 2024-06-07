import { AnimatedText } from '@/components/AnimatedText'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import React from 'react'
import { FeaturedProject } from './_components/featured-project'
import { TransitionEffect } from '@/components/transition-effect'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Publications } from './_components/publications'
import { ProjectByYear } from './_components/project-by-year'
import { ResearchGroup } from './_components/research-group'
import { IndustrialPartners } from './_components/industrial-partners'

// import Cite from 'citation-js'

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Proyectos',
  description: 'Proyectos',
}

const researchData = [
  {
    title: 'Inertial Navigation Systems (INS)',
    summary:
      'Special interest is put into attitude estimation, MEMS sensors, GNSS and compass navigation, sensor fusion and state estimation, nonlinear observer theory, and Kalman filtering.',
    img: '/images/projects/prototipo_navegacion.jpg',
    link: '',
    github: '',
    type: 'Scientific interest',
  },
  {
    title:
      'Control and stabilization of individual and multiple Unmaned Vehicles (UAV, USV, UGV)',
    summary:
      'Where the feedback is carry out by the development of nonlinear and “asynchronous” (Event-Triggered) control strategies. Furthermore, new active disturbance rejection control techniques are continuously proposed and exploited.',
    img: '/images/projects/vuelovolcan1.png',
    link: '',
    github: '',
    type: 'Scientific interest',
  },
  {
    title: 'Modeling and control of Cyber-Physical Systems (CPS)',
    summary:
      'Special interest is put into Ankle-Foot-Orthosis control and renewable energy systems.',
    img: '/images/projects/Application_Lab.png',
    link: '',
    github: '',
    type: 'Scientific interest',
  },
]

const dataResearchGroup = [
  {
    id: '1',
    tag: 'courses and MOOCs',
    group: 'Control',
    title: 'Automatic Control',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
    link: 'buap.org',
    link2: 'fermi.com',
    linkedin: '#',
    github: '#',
    page: '#',
  },
  {
    id: '2',
    tag: 'Course',
    group: 'Robotics',
    title: 'Bounded control',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
    link: 'buap.org',
    link2: 'fermi.com',
    linkedin: '#',
    github: '#',
    page: '#',
  },
  {
    id: '3',
    tag: 'Course',
    group: 'Robotics',
    title: 'Bounded control',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
    link: 'buap.org',
    link2: 'fermi.com',
    linkedin: '#',
    github: '#',
    page: '#',
  },
  {
    id: '4',
    tag: 'Course',
    group: 'Robotics',
    title: 'Bounded control',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
    link: 'buap.org',
    link2: 'fermi.com',
    linkedin: '#',
    github: '#',
    page: '#',
  },
  {
    id: '5',
    tag: 'Course',
    group: 'Robotics',
    title: 'Bounded control',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
    link: 'buap.org',
    link2: 'fermi.com',
    linkedin: '#',
    github: '#',
    page: '#',
  },
]
type Props = {}

const ResearchPage = async (props: Props) => {
  // const data = new Cite(
  //   ['10.1109/TAC.2012.2225493', '10.1109/LSENS.2023.3300823'],
  //   {
  //     output: {
  //       style: 'bibtex',
  //     },
  //   }
  // )

  // // await data.format('bibliography', {
  // //   format: 'html',
  // //   template: 'apa',
  // //   lang: 'en-US',
  // // })
  //  data.options({
  //   type: 'string',
  //   style: 'bibtex',
  // })

  // console.log('Data: ', data.get())

  return (
    <main className="w-full mb-16 flex  flex-col items-center justify-center">
      <TransitionEffect />

      <MaxWidthWrapper className="pt-16 ">
        <Tabs defaultValue="account" className="w-full ">
          <Separator className="" />

          <TabsList className="w-[100%] md:w-full flex flex-wrap justify-start md:justify-evenly items-center mb-10 md:mb-0 bg-background ">
            <TabsTrigger value="research">Research interest</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="research_group">Research group</TabsTrigger>
            <TabsTrigger value="indutrial_partners">
              Industrial partners
            </TabsTrigger>
          </TabsList>
          <TabsContent value="research" className="w-fit">
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
            <Publications />
          </TabsContent>
          <TabsContent value="projects">
            <AnimatedText
              text={'Projects'}
              className="sm:mb-16 text-4xl sm:text-5xl mb-8   "
            />
            <ProjectByYear />
          </TabsContent>
          <TabsContent value="research_group">
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

          <TabsContent value="indutrial_partners">
            <AnimatedText
              text={'Industrial partners'}
              className="sm:mb-16 text-4xl sm:text-5xl mb-8   "
            />
            <IndustrialPartners />
          </TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </main>
  )
}

export default ResearchPage
