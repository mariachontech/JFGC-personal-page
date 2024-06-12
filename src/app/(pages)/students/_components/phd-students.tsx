'use client'
import { CalendarCheck2, CalendarDays, Handshake } from 'lucide-react'
import React from 'react'

type Props = {
  name: string
  tesis: string
  year: string
  now?: string | undefined
  collaborator?: string | undefined
  image: string
}

const PhdStudents = ({
  name,
  tesis,
  year,
  now,
  collaborator,
  image,
}: Props) => {
  return (
    <ul>
      <li>
        <div className="w-full   max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img src={image} alt="avatar" />

          <div className="flex items-center px-6 py-3 bg-gray-900">
            <svg
              aria-label="headphones icon"
              className="w-6 h-6 text-white fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
              />
            </svg>

            <h1 className="mx-3 text-lg font-semibold text-white">Control</h1>
          </div>

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              {name}
            </h1>

            <p className="py-2 text-gray-700 dark:text-gray-400">{tesis}</p>

            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <CalendarDays />

              <h1 className="px-2 text-sm">{year}</h1>
            </div>

            {now && (
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <CalendarCheck2 />

                <h1 className="px-2 text-sm">{now}</h1>
              </div>
            )}

            {collaborator && (
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <Handshake />

                <h1 className="px-2 text-sm">{collaborator}</h1>
              </div>
            )}
          </div>
        </div>
      </li>
    </ul>
  )
}

export default PhdStudents
