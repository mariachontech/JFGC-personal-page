export const ProjectByYear = () => {
  const projects = {
    '2019': [
      {
        title: 'TOBACCO: fault TOlerant event-BAsed Cooperative COntrol',
        desc: 'The TOBACCO project (2019-2023) aims to develop a fault tolerant event-based cooperative control strategy for micro UAVs carrying a load suspended by cables. It is a joint project between GIPSA-lab (Grenoble) and ICube (Strasbourg) in France, and BUAP (Puebla) in Mexico. The TOBACCO project is financed through CONACyT-ANUIES and the ECOS Nord program (project IDs: MX_296702, FR_M18M02).',
      },
    ], 
    '2017': [
      {
        title: 'TOBACCO: fault TOlerant event-BAsed Cooperative COntrol',
        id_key: 'GUCJ-ING17-I',
        type: 'Proyecto individual',
        finantial:
          'Vicerrectoría de Investigación y Estudios de Posgrado (VIEP) de la Benemérita Universidad Autónoma de Puebla',
      },
    ],
    '2016': [
      {
        title:
          'Control de formación de múltiples vehículos aéreos no tripulados mediante control cooperativo: aplicación al monitoreo ambiental (Parte II)',
        id_key: 'GUCJ-ING16-I',
        type: 'Proyecto individual',
        finantial:
          'Vicerrectoría de Investigación y Estudios de Posgrado (VIEP) de la Benemérita Universidad Autónoma de Puebla.',
      },
      {
        title:
          'Desarrollo tecnológico de un nuevo sistema de frenado electrohidráulico para vehículos automotores',
        id_key: 'CONACYT:231959',
        type: 'Responsable Técnico de software y simulación',
        finantial: 'CONACYT y RASSINI FRENOS S.A de C.V.',
      },
      {
        title:
          'Desarrollo de vehículo eléctrico de autobalanceo de bajo costo.',
        responsability: 'Responsable Técnico por parte de BUAP',
        finantial:
          'Red temática de colaboración académica entre cuerpos académicos y financiada por PRODEP-SEP',
        team: 'Universidad Tecnológica de la Mixteca (UTMIX-CA-24), CINVESTAV-IPN (Prof. H. Sira-Ramírez), Benemérita universidad AUtonoma de Puebla (BUAP-CA-248)',
      },
    ],
    '2015': [
      {
        title:
          'Control de formación de múltiples vehículos aéreos no tripulados mediante control cooperativo: aplicación al monitoreo ambiental',
        id_key: 'GUCJ-ING15-I',
        type: 'Proyecto individual',
        finantial:
          'Vicerrectoría de Investigación y Estudios de Posgrado (VIEP) de la Benemérita Universidad Autónoma de Puebla.',
      },
    ],
    '2014': [
      {
        title:
          'Estabilización de sistemas no lineales unidos mediante una red de comunicación usando control basado en eventos: aplicación a robótica aérea (continuación)',
        id_key: 'GUCJ-ING14-I',
        type: 'Proyecto individual',
        finantial:
          'Vicerrectoría de Investigación y Estudios de Posgrado (VIEP) de la Benemérita Universidad Autónoma de Puebla.',
      },
      {
        title:
          'Sistema Piloto para triturar retornos, optimizar la fusión de hornos de inducción en la manufactura de acutopartes y reducir las emisiones de Co2 equivalente',
        id_key: 'CONACYT:213399',
        type: 'Responsable Técnico',
        finantial: 'CONACYT y RASSINI FRENOS S.A de C.V.',
      },
    ],
    '2013': [
      {
        title:
          'Estabilización de sistemas no lineales unidos mediante una red de comunicación usando control basado en eventos: aplicación a robótica aérea',
        id_key: 'GUCJ-ING13-I',
        type: 'Proyecto individual',
        finantial:
          'Vicerrectoría de Investigación y Estudios de Posgrado (VIEP) de la Benemérita Universidad Autónoma de Puebla.',
      },
      {
        title:
          'Desarrollo en instalación de una planta piloto para el Acabado Automatizado de Piezas Fundidas de Hierro Nodular',
        id_key: 'CONACYT:188466',
        type: 'Responsable Técnico',
        finantial: 'CONACYT y RASSINI FRENOS S.A de C.V.',
      },
    ],
    '2012': [
      {
        title:
          'Diseño, Desarrollo e Instalación de una Planta Piloto para Estibado de Discos de Freno',
        id_key: 'GUCJ-ING13-I',
        type: 'Responsable Técnico',
        desc: 'Concurso del CONACYT de Innovación Tecnológica “InnovaTEC”, bajo la convocatoria: C0003-2012-01, con número de folio: 182002 y con resultados positivos según lo publicado en el archivo: 1ª_publicación_de_ganadores.pdf en el renglón #261',
      },
      {
        title: 'Estrategias de Control Asíncro',
        id_key: 'GUCJ-ING12-I',
        type: 'Proyecto individual',
        finantial:
          'Vicerrectoría de Investigación y Estudios de Posgrado (VIEP) de la Benemérita Universidad Autónoma de Puebla',
      },
    ],
    '2011': [
      {
        title:
          'Diseño e implementación de una mini nave aérea no tripulada de despegue y aterrizaje vertical (VTOL)',
        id_key: 'GPROMEP/103.5/10/7296 Proyecto PTC-226',
        type: 'Proyecto individual',
        finantial: 'PROMEP-SEP',
      },
      {
        title:
          'Diseño y construcción de un vehículo eléctrico con tecnología verde',
        id_key: 'GPROMEP/103.5/10/7296 Proyecto PTC-226',
        desc: 'Proyecto del cuerpo académico Sistemas de Potencia para Traccción Calidad y Generación de Energía.',
        finantial: 'PROMEP-SEP',
      },
      {
        title:
          'Diseño, construcción y control de una mini nave aérea no tripulada de despegue y aterrizaje vertical (VTOL)',
        id_key: 'GUCJ-ING11-I',
        type: 'Proyecto individual',
        finantial:
          ' Vicerrectoría de Investigación y Estudios de Posgrado (VIEP) de la Benemérita Universidad Autónoma de Puebla',
      },
    ],
    '2010': [
      {
        title:
          'Diseño e Implementación de un mini sistema de aeronavegación basado en sensores de tecnología MEMS y GPS',
        id_key: 'GUCJ-ING10-I',
        type: 'Proyecto individual',
        finantial:
          ' Vicerrectoría de Investigación y Estudios de Posgrado (VIEP) de la Benemérita Universidad Autónoma de Puebla',
      },
    ],
  } as any

  var years = []
  for (var key in projects) {
    years.push(key)
  }

  console.log('años', years)

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
