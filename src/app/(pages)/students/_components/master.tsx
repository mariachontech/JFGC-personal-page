'use client'
import { Badge } from '@/components/ui/badge'
import { urlForImage } from '../../../../../sanity/lib/image'
import { MasterType } from '../../../../../types'

type Props = {
  masterData: MasterType
}
export const MasterData = ({ masterData }: Props) => (
  <li className="py-5 flex items-start justify-between">
    <div className="flex gap-3">
      <img
        src={urlForImage(masterData.student.image.asset as any)}
        className="flex-none w-12 h-12 rounded-full"
      />
      <div>
        <span className="block text-sm font-semibold">
          {masterData.student.name}
        </span>
        {/* <span className="block text-sm ">{item.email}</span> */}
        <span>{masterData?.tesis}</span>
      </div>
    </div>

    {masterData.status && (
      <Badge
        variant={masterData.status === 'current' ? 'destructive' : 'default'}
        className="text-foreground"
      >
        {masterData.status}
      </Badge>
    )}
  </li>
)
