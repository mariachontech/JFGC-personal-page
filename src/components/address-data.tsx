'use client'
import { Mail, MapPin } from 'lucide-react'
import React from 'react'
import { TooltipCom } from './tooltip-com'
import { Separator } from './ui/separator'
import Link from 'next/link'

type Props = {}

export const AddressData = (props: Props) => {
  return (
    <div className="space-y-1 w-full text-start text-sm">
      <Link href={'/biography'} className="cursor-alias">
        <h4 className="text-sm font-semibold">
          Prof. José Fermi Guerrero Castellanos
        </h4>
      </Link>
      <Separator />

      <div className="flex  justify-start  items-center gap-5">
        <MapPin />
        <div className="flex flex-col justify-start ">
          <TooltipCom message="Facultad de ciencias de la electrónica">
            <p className="font-semibold  ">FCE</p>
          </TooltipCom>
          <TooltipCom message="Benemerita universidad autonoma de Puebla">
            <p className="font-semibold">BUAP </p>
          </TooltipCom>

          <p>Av. San Claudio y 18 Sur Col. San Manuel</p>
          <p>Puebla México, C.P. 72450</p>
          <p>Oficina: FCE-307</p>
        </div>
      </div>
      <p className="flex justify-startr items-center gap-5">
        <Mail />

        <span>fermi.guerrero@correo.buap.mx</span>
      </p>
    </div>
  )
}
