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
  headerLabData,
} from '../../../../dataPage'
import { ExperimentalProto } from './_components/experimental-proto'
import { LabFacilitiesComponent } from './_components/lab-facilities'
import { HeaderLab } from './_components/header-lab'

type Props = {}

const LabPage = (props: Props) => {
  return (
    <MaxWidthWrapper>
      <TransitionEffect />

      <HeaderLab {...headerLabData} />

      {labActivities.map((item, index) => (
        <ControlComponent key={index} {...item} />
      ))}

      <div className="my-24">
        <DevelopedProto {...developedProto} />
      </div>
      <div className="my-24">
        <ExperimentalProto {...experimentalProto} />
      </div>
      <div className="my-24">
        {labFacilitiesData.map((item, index) => (
          <LabFacilitiesComponent key={index} {...item} />
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default LabPage
