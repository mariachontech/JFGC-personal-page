import { Badge } from '@/components/ui/badge'
import { urlForImage } from '../../../../../sanity/lib/image'
import { month } from '@/lib/utils'
import { PhdType } from '../../../../../types'
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
  studentData: PhdType
}

export const PhdStudentsList = ({ studentData }: Props) => {
  const startTime = new Date(studentData?.startTime as any)
  const endTime = new Date(studentData?.endTime as any)

  const collaboratorsSplit = studentData?.collaborators?.map((adv, index) => (
    <span key={index}>
      {adv.name}
      {index !== (studentData?.collaborators?.length as any) - 1 ? ', ' : '.'}
    </span>
  ))

  return (
    <li className="py-5 flex items-start justify-between">
      <div className="flex gap-3">
        {studentData.student.image.asset ? (
          <img
            src={urlForImage(studentData.student.image.asset as any)}
            className="flex-none w-12 h-12 rounded-full"
          />
        ) : (
          <Avatar>
            <AvatarFallback>FG</AvatarFallback>
          </Avatar>
        )}
        <div className="flex flex-col">
          <p className="block text-sm font-semibold">
            {studentData?.student?.name}
          </p>
          <p>{studentData.tesis}</p>
          {studentData.now && (
            <p>
              {' '}
              <span className="italic font-light">Now:</span> {studentData.now}
            </p>
          )}
          {studentData.collaborators && (
            <p>
              <span className="italic font-light">
                collaborators: {collaboratorsSplit}
              </span>
            </p>
          )}
          <p className="italic">
            {month[startTime.getMonth()]} {startTime.getFullYear()} -{' '}
            {month[endTime.getMonth()]} {endTime.getFullYear()}
          </p>
        </div>
      </div>
    </li>
  )
}
