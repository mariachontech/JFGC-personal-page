export const ProjectByYear = () => {
  const projects = {
    '2020': [
      {
        title: 'CAB: Control of autonomous buoys',
        desc: 'his project (2020-2022) is ongoing in collaboration with Dr. Lizeth Torres at the II-UNAM, Mexico. The aim is to develop new sensor fusion algorithms and nonlinear control techniques for autonomous navigation of individuals and collective mini buoys. The project is financed by means of PAPIIT-TA100421',
      },
    ],

    '2019': [
      {
        title: 'TOBACCO: fault TOlerant event-BAsed Cooperative Control',
        desc: 'The TOBACCO project (2019-2024) aims to develop a fault tolerant event-based cooperative control strategy for micro UAVs carrying a load suspended by cables. It is a joint project between GIPSA-lab (Grenoble) and ICube (Strasbourg) in France, and BUAP (Puebla) in Mexico. The TOBACCO project is financed through CONACyT-ANUIES and the ECOS Nord program (project IDs: MX_296702, FR_M18M02).',
      },
    ],
    // '2017': [
    //   {
    //     title: 'TOBACCO: fault TOlerant event-BAsed Cooperative COntrol',
    //     id_key: 'GUCJ-ING17-I',
    //     type: 'Proyecto individual',
    //     finantial:
    //       'Vicerrectoría de Investigación y Estudios de Posgrado (VIEP) de la Benemérita Universidad Autónoma de Puebla',
    //   },
    // ],
    '2016': [
      {
        title: 'TIWEV: Two-In-Wheeled Self-Balancing Low-cost Electric-Vehicle',
        desc: 'The project was issued from the cooperation between three Mexican institutions; BUAP, UTM, and CINVESTAV. The project (2016-2018) aimed to develop new control and data fusion algorithms for the stabilization, autonomous navigation, and power electronics of such a vehicle. Financed by PRODEP/RED COLABORACION ACDEMICA/BUAP-CA-248/UTMIX-CA-24',
      },
      // {
      //   title:
      //     'Desarrollo tecnológico de un nuevo sistema de frenado electrohidráulico para vehículos automotores',
      //   id_key: 'CONACYT:231959',
      //   type: 'Responsable Técnico de software y simulación',
      //   finantial: 'CONACYT y RASSINI FRENOS S.A de C.V.',
      // },
      // {
      //   title:
      //     'Desarrollo de vehículo eléctrico de autobalanceo de bajo costo.',
      //   responsability: 'Responsable Técnico por parte de BUAP',
      //   finantial:
      //     'Red temática de colaboración académica entre cuerpos académicos y financiada por PRODEP-SEP',
      //   team: 'Universidad Tecnológica de la Mixteca (UTMIX-CA-24), CINVESTAV-IPN (Prof. H. Sira-Ramírez), Benemérita universidad AUtonoma de Puebla (BUAP-CA-248)',
      // },
    ],
    '2015': [
      {
        title:
          'FOMA: Formation Control of Multi MAVs via event-based communication: application to environmental monitoring',
        desc: 'The project (2015-2018) aimed to design and implement an event-triggered control approach applied to the leader-following consensus and formation of a group of autonomous micro-aircraft with vertical take-off and landing capabilities and equipped with environmental sensors such as CO2 and temperature. The project was financed trough VIEP/BUAP/JFGC15-18',
      },
    ],
    '2013': [
      {
        title:
          'VEUREE: Automotive platform for an energy efficient urban electric vehicle',
        desc: 'The project (2013-2015) aimed to develop new control algorithms and power electronics configurations for load and torque sharing in new electric vehicles using in-wheels motors. The project was issued from the bilateral cooperation between Mexico and Spain and financed through CONACYT – CDTI – 191148',
      },
    ],
  } as any

  var years = []
  for (var key in projects) {
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
                {projects[year].map((project: any, index: any) => (
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
                    {project.desc && (
                      <p className="ml-7 dark:text-gray-400">{project.desc}</p>
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
