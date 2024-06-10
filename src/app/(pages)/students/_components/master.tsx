import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const members = [
  {
    avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    name: 'John lorin',
    email: 'john@example.com',
    status: 'current',
    tesis:
      'Automatización y optimización de un sistema de aire acondicionado por medio de control distribuido',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    name: 'Chris bondi',
    email: 'chridbondi@example.com',
    status: 'former',
    tesis:
      'Automatización y optimización de un sistema de aire acondicionado por medio de control distribuido',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'yasmine',
    email: 'yasmine@example.com',
    status: 'current',
    tesis:
      'Implementación de un sistema de navegación para naves aéreas tripuladas de reducidas dimensiones (avionetas) utilizando sensores inerciales MEMS y GPS',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f',
    name: 'Joseph',
    email: 'joseph@example.com',
    status: 'former',
    tesis:
      'Diseño e implementación de una central de orientación AHRS (Attitude and Heading Reference System). ',
  },
]

export const MasterData = () => (
  <div className="max-w-2xl mx-auto px-4">
    {/* 
    <div className="items-start justify-between sm:flex">
       <div>
        <h4 className="text-gray-800 text-xl font-semibold">Team members</h4>
        <p className="mt-2 text-gray-600 text-base sm:text-sm">
          Give your team members access to manage the system.
        </p>
      </div> 
      <a
        href="javascript:void(0)"
        className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        New member
      </a>
    </div> 
    */}
    <ul className="mt-12 divide-y">
      {members.map((item, idx) => (
        <li key={idx} className="py-5 flex items-start justify-between">
          <div className="flex gap-3">
            <img
              src={item.avatar}
              className="flex-none w-12 h-12 rounded-full"
            />
            <div>
              <span className="block text-sm font-semibold">{item.name}</span>
              <span className="block text-sm ">{item.email}</span>
              <span>{item?.tesis}</span>
            </div>
          </div>

          <Badge
            variant={item.status === 'current' ? 'destructive' : 'default'}
            className="text-foreground"
          >
            {item.status}
          </Badge>
        </li>
      ))}
    </ul>
  </div>
)
