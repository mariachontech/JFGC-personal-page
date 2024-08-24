import { Badge } from '@/components/ui/badge'
import { PboardType } from '../../../../../types'
import { urlForImage } from '../../../../../sanity/lib/image'
import { month } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

// const members = [
//   {
//     avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
//     name: 'John lorin',
//     email: 'john@example.com',
//     status: 'current',
//     tesis:
//       'Automatización y optimización de un sistema de aire acondicionado por medio de control distribuido',
//   },
//   {
//     avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
//     name: 'Chris bondi',
//     email: 'chridbondi@example.com',
//     status: 'former',
//     tesis:
//       'Automatización y optimización de un sistema de aire acondicionado por medio de control distribuido',
//   },
//   {
//     avatar:
//       'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
//     name: 'yasmine',
//     email: 'yasmine@example.com',
//     status: 'current',
//     tesis:
//       'Implementación de un sistema de navegación para naves aéreas tripuladas de reducidas dimensiones (avionetas) utilizando sensores inerciales MEMS y GPS',
//   },
//   {
//     avatar:
//       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f',
//     name: 'Joseph',
//     email: 'joseph@example.com',
//     status: 'former',
//     tesis:
//       'Diseño e implementación de una central de orientación AHRS (Attitude and Heading Reference System). ',
//   },
// ]

type Props = {
  phdBoards: PboardType
}

export const PhdBoards = ({ phdBoards }: Props) => {
  const endTime = new Date(phdBoards?.date as any)

  return (
    <li className="py-5 flex items-start justify-between">
      <div className="flex gap-3">
        {phdBoards?.student?.image ? (
          <img
            src={
              phdBoards?.student?.image?.asset
                ? urlForImage(phdBoards?.student?.image?.asset as any)
                : ''
            }
            className="flex-none w-12 h-12 rounded-full"
          />
        ) : (
          <Avatar>
            <AvatarFallback>FG</AvatarFallback>
          </Avatar>
        )}

        <div className="flex flex-col">
          <span className="block text-sm font-semibold">
            {phdBoards?.student.name}
          </span>
          <span>{phdBoards?.university}</span>
          <span className="italic">
            {' '}
            {month[endTime.getMonth()]} {endTime.getFullYear()}
          </span>
        </div>
      </div>

      {phdBoards?.role && (
        <Badge
          variant={phdBoards?.role === 'Examiner' ? 'destructive' : 'default'}
          className="text-foreground"
        >
          {phdBoards?.role}
        </Badge>
      )}
    </li>
  )
}
