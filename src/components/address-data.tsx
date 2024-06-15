'use client'
import { Mail, MapPin } from 'lucide-react'
import React from 'react'
import { TooltipCom } from './tooltip-com'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { Principal } from '../../types'

type Props = {
  principalData?: Principal
}

export const AddressData = ({ principalData }: Props) => {
  return (
    <div className="space-y-1 w-full text-start text-sm">
      <Link href={'/biography'} className="cursor-alias">
        <h4 className="text-sm font-semibold">Prof. {principalData?.name}</h4>
      </Link>
      <Separator />

      <div className="flex  justify-start  items-center gap-5">
        <MapPin />
        <div className="flex flex-col justify-start ">
          <TooltipCom message="Facultad de ciencias de la electrónica">
            <p className="font-semibold  ">{principalData?.university}</p>
          </TooltipCom>
          {/* <TooltipCom message="Benemerita universidad autonoma de Puebla">
            <p className="font-semibold">BUAP </p>
          </TooltipCom> */}

          <p>{principalData?.street}</p>
          <p>
            {principalData?.city} {principalData?.country}, C.P.{' '}
            {principalData?.cp}
          </p>
          <p>Oficina: {principalData?.office}</p>
        </div>
      </div>
      <p className="flex justify-startr items-center gap-5">
        <Mail />

        <span>{principalData?.email}</span>
      </p>
    </div>
  )
}
