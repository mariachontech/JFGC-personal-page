import { ProjectType } from '../../../../../types'

type Props = {
  projects: ProjectType[]
}

export const ProjectByYear = ({ projects }: Props) => {
  const reagroupProjects = Object.groupBy(
    projects,
    ({ year }: { year: string }) => year,
  )

  var years = []
  for (var key in reagroupProjects) {
    years.unshift(key)
  }

  return (
    <section className="bg-background/50">
      <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
        <h2 className="text-2xl font-bold md:text-4xl">Timeline</h2>
        <div className="space-y-8">
          {years.map((year) => (
            <div key={year}>
              <h3 className="mb-3 text-lg font-bold md:text-xl">{year}</h3>
              <ul className="space-y-4">
                {reagroupProjects[year]?.map((project: any, index: any) => (
                  <li key={index} className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current dark:text-violet-400"
                      >
                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                      </svg>
                      <h4 className="font-medium">{project.title}</h4>
                    </div>
                    {project.description && (
                      <p className="ml-7 dark:text-gray-400">
                        {project.description}
                      </p>
                    )}
                    {project.id_key && (
                      <p className="ml-7 dark:text-gray-400">
                        {project.id_key}
                      </p>
                    )}
                    {project.type && (
                      <p className="ml-7 dark:text-gray-400">{project.type}</p>
                    )}
                    {project.finantial && (
                      <p className="ml-7 dark:text-gray-400">
                        {project.finantial}
                      </p>
                    )}
                  </li>
                ))}
                {/* <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current dark:text-violet-400"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">
                      Quis velit quae similique maxime optio temporibus
                    </h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">
                    Illum hic placeat unde porro, cupiditate nesciunt? Numquam
                    debitis eligendi aspernatur mum.
                  </p>
                </li> */}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
