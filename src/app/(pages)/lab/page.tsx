import MaxWidthWrapper from '@/components/max-width-wrapper'
import { TransitionEffect } from '@/components/transition-effect'
import React from 'react'
import ControlComponent from './_components/control-component'
import { Separator } from '@/components/ui/separator'
import DevelopedProto from './_components/developed-proto'

import {
  labActivities,
  developedProto,
  experimentalProto,
  labFacilitiesData,
} from '../../../../dataPage'
import { ExperimentalProto } from './_components/experimental-proto'
import { LabFacilitiesComponent } from './_components/lab-facilities'
import { HeaderLab } from './_components/header-lab'
import { LAB_QUERY } from '../../../../sanity/lib/queries'
import { sanityFetch } from '../../../../sanity/lib/fetch'
import { SanityDocument } from 'next-sanity'
import { SeccionLabType } from '../../../../types'

type Props = {}

const LabPage = async (props: Props) => {
  const labData = await sanityFetch<SanityDocument>({
    query: LAB_QUERY,
  })

  return (
    <MaxWidthWrapper>
      <TransitionEffect />

      <div id="lab-activities">
        <HeaderLab headerLab={labData?.header} />
      </div>

      <div className="my-24">
        {labData.seccionLab.map((seccion: SeccionLabType) => (
          <ControlComponent key={seccion._id} seccionData={seccion} />
        ))}
      </div>

      {/* <div className="my-24">
        {labActivities.map((item, index) => (
          <ControlComponent key={index} {...item} />
        ))}
      </div> */}

      {/* <div id="developed-prototypes" className="my-24">
        <DevelopedProto {...developedProto} />
      </div>
      <div className="my-24">
        <ExperimentalProto {...experimentalProto} />
      </div>
      <div id="lab-facilities" className="my-24">
        {labFacilitiesData.map((item, index) => (
          <LabFacilitiesComponent key={index} {...item} />
        ))}
      </div> */}
    </MaxWidthWrapper>
  )
}

export default LabPage
