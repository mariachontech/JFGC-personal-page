import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Metadata } from 'next'
import React from 'react'
import { TransitionEffect } from '@/components/transition-effect'

import { BibtexParser } from 'bibtex-js-parser'

import { ResearhTab } from './_components/researh-tab'
import { SanityDocument } from 'next-sanity'
import { sanityFetch } from '../../../../sanity/lib/fetch'
import { RESEARCH_QUERY } from '../../../../sanity/lib/queries'

// import Cite from 'citation-js'

// const papersData = [
//   '10.4995/riai.2021.14852',
//   '10.3390/en15145121',
//   '10.1109/TLA.2022.9853234',
//   '10.1002/cta.3314',
//   '10.1109/TIA.2021.3130017',
//   '10.3390/app11135960',
//   '10.1016/j.mechatronics.2021.102552',
//   '10.4995/riai.2021.14989',
//   '10.1109/LCSYS.2020.3005445',
//   '10.1002/adc2.49',
//   '10.3390/app10010364',
//   '10.1109/ACCESS.2020.3002845',
//   '10.1016/j.isatra.2019.07.005',
//   '10.3390/s19245498',
//   '10.4995/riai.2019.11113',
//   '10.1109/TII.2018.2865445',
//   '10.1016/j.energy.2018.10.024',
//   '10.1016/j.conengprac.2018.08.008',
//   '10.1007/s00034-018-0941-2',
//   `10.1007/s11633-018-1145-8`,
//   `@article{article,
//     author = {Durand, Sylvain and Boisseau, B. and Marchand, Nicolas and Guerrero-Castellanos, J.},
//     year = {2018},
//     month = {03},
//     pages = {},
//     title = {Event-Based PID Control: Application to a Mini Quadrotor Helicopter},
//     volume = {20},
//     journal = {Control Engineering and Applied Informatics}
//     }`,
//   '10.1109/TIA.2017.2683441',
//   `@article{article,
//     author = {Carrillo-Castillo, Amanda and Ambrosio, ROBERTO and Ojeda, Elvia and Mota, Ma and Lopez, Manuel and Moreno, Mario and Gonzalez-Diaz, Victor and Guerrero-Castellanos, J.},
//     year = {2016},
//     month = {05},
//     pages = {217},
//     title = {Characterization of amorphous CuS thin films obtained from fast time and low temperature of deposition},
//     volume = {13},
//     journal = {Chalcogenide Letters}
//     }`,
//   '10.3390/mi6080993',
//   `@article{article,
//     author = {Gonzalez-Diaz, Victor and Corona, Diego and Guerrero-Castellanos, J. and Ambrosio, ROBERTO and Gerardo, Mino-Aguilar},
//     year = {2015},
//     month = {11},
//     pages = {1053-1059},
//     title = {Improving GBW product on CMOS operational transconductance amplifiers by interleaved feedforward paths},
//     volume = {46},
//     journal = {Microelectronics Journal},
//     doi = {10.1016/j.mejo.2015.09.005}
//     }`,
//   '10.1016/j.isatra.2015.06.013',
//   `@article{article,
//     author = {Torres, Lizeth and Besançon, Gildas and Verde, C. and Guerrero-Castellanos, J.},
//     year = {2015},
//     month = {10},
//     pages = {1550149},
//     title = {Generalized Synchronization of a Class of Spatiotemporal Chaotic Systems Using Nonlinear Observers},
//     volume = {25},
//     journal = {International Journal of Bifurcation and Chaos},
//     doi = {10.1142/S0218127415501497}
//     }`,
//   '10.1016/j.ijepes.2014.10.008',
//   '10.1016/j.riai.2014.09.005',
//   '10.1007/s10846-013-9890-y',
//   `@dataset{dataset,
//     author = {Gerardo, Mino-Aguilar and Munoz-Hernandez, German and Guerrero-Castellanos, J. and Molina-Flores, E. and Diaz-sanchez, A. and Domínguez-Ramírez, Omar and Graciós, Carlos},
//     year = {2014},
//     month = {03},
//     pages = {},
//     title = {Alternative soft fault model of the cross-coupling effect correlated at hydroelectric power energy system},
//     volume = {58},
//     journal = {International Journal of Electrical Power & Energy Systems},
//     doi = {10.1016/j.ijepes.2014.01.030}
//     }`,
//   `@article{article,
//     author = {Guerrero-Castellanos, J. and Madrigal-Sastre, Heberto and Durand, Sylvain and Torres, Lizeth and Munoz-Hernandez, German},
//     year = {2013},
//     month = {11},
//     pages = {15138-58},
//     title = {A Robust Nonlinear Observer for Real-Time Attitude Estimation Using Low-Cost MEMS Inertial Sensors},
//     volume = {13},
//     journal = {Sensors (Basel, Switzerland)},
//     doi = {10.3390/s131115138}
//     }`,
//   `@article{article,
//     author = {Durand, Sylvain and Castellanos, Fermi and Marchand, Nicolas and Sánchez, W.},
//     year = {2013},
//     month = {09},
//     pages = {},
//     title = {Event-Based Control of the Inverted Pendulum: Swing up and Stabilization},
//     volume = {15},
//     journal = {Control Engineering and Applied Informatics}
//     }`,
//   `@unpublished{Pouthier2023,
//     author = {Pouthier, Florian and Durand, Sylvain and Marchand, Nicolas and Dumon, Jonathan and Susbielle, Pierre and Castillo-Zamora, Jose Jesus and Guerrero-Castellanos, Jose Fermi and Ndoye, Abdoullah and Negre, Amaury and Ruffier, Franck},
//     title = {Guaranteed Self-Triggered Control of Disturbed Systems: A Set Invariance Approach},
//     year = {2023}
//   }`,
//   '10.1017/S0263574713000209',
//   '10.1109/TAC.2012.2225493',
//   '10.1155/2013/586480',
//   '10.1016/j.conengprac.2011.04.004',
// ]

export const metadata: Metadata = {
  title: 'José Fermi Guerrero Castellanos | Proyectos',
  description: 'Proyectos',
}

// const dataResearchGroup = [
//   {
//     id: '1',
//     tag: 'courses and MOOCs',
//     group: 'Control',
//     title: 'Automatic Control',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
//     link: 'buap.org',
//     link2: 'fermi.com',
//     linkedin: '#',
//     github: '#',
//     page: '#',
//   },
//   {
//     id: '2',
//     tag: 'Course',
//     group: 'Robotics',
//     title: 'Bounded control',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
//     link: 'buap.org',
//     link2: 'fermi.com',
//     linkedin: '#',
//     github: '#',
//     page: '#',
//   },
//   {
//     id: '3',
//     tag: 'Course',
//     group: 'Robotics',
//     title: 'Bounded control',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
//     link: 'buap.org',
//     link2: 'fermi.com',
//     linkedin: '#',
//     github: '#',
//     page: '#',
//   },
//   {
//     id: '4',
//     tag: 'Course',
//     group: 'Robotics',
//     title: 'Bounded control',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
//     link: 'buap.org',
//     link2: 'fermi.com',
//     linkedin: '#',
//     github: '#',
//     page: '#',
//   },
//   {
//     id: '5',
//     tag: 'Course',
//     group: 'Robotics',
//     title: 'Bounded control',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.',
//     link: 'buap.org',
//     link2: 'fermi.com',
//     linkedin: '#',
//     github: '#',
//     page: '#',
//   },
// ]
type Props = {}

const ResearchPage = async (props: Props) => {
  const researchDatas = await sanityFetch<SanityDocument>({
    query: RESEARCH_QUERY,
  })

  const bibArrayJson = () => {
    let bibTextGetted: any[] = []
    researchDatas.publications.map((pub: { bibText: string }) => {
      const bibText = BibtexParser.parseToJSON(pub.bibText)
      //console.log('bibText', bibText[0])

      bibTextGetted.push(bibText[0])
    })

    return bibTextGetted
  }

  const bibJSON1 = bibArrayJson()
  const bibJSON = bibJSON1.reverse() //BibtexParser.parseToJSON(bibArrayJson())

  //const bibJSONOne = BibtexParser.parseToJS
  const project = researchDatas.projects

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <TransitionEffect />

      <MaxWidthWrapper className="pt-4 sm:pt-8 md:pt-16 px-4 sm:px-6 lg:px-8">
        <ResearhTab
          bibJSON={bibJSON}
          dataResearchGroup={researchDatas.groups}
          researchData={researchDatas.scientificInterest}
          projects={researchDatas.projects}
          industrialPart={researchDatas.industrialPartners}
        />
      </MaxWidthWrapper>
    </main>
  )
}

export default ResearchPage
