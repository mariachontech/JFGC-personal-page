import { defineArrayMember, defineField, defineType } from 'sanity'

// ./schema/plan/planType.ts

// We need will extend and import these in the custom input component later
// export const COURSELEVEL = [
//   {
//     title: 'Lic. Electrónica e Ing. Mecatrónica',
//     value: 'Lic. Electrónica e Ing. Mecatrónica',
//   },
//   {
//     title: 'iIng. en Energías Renovables e Ing. en Sistemas Automotrices',
//     value: 'Ing. en Energías Renovables e Ing. en Sistemas Automotrices',
//   },
//   {
//     title: 'Maestría en Ingeniería Electrónica, opción instrumentación',
//     value: 'Maestría en Ingeniería Electrónica, opción instrumentación',
//   },
//   { title: 'Tutorías y Mentorías', value: 'Tutorías y Mentorías' },
// ]

// export const levelType = defineType({
//   name: 'levelCourse',
//   title: 'Level',
//   type: 'string',
//   options: {
//     list: COURSELEVEL.map(({ title, value }) => ({ title, value })),
//     layout: 'radio',
//   },
// })

export const COURSELEVEL = [
  {
    title: 'Lic. Electrónica e Ing. Mecatrónica',
    value: 'Lic. Electrónica e Ing. Mecatrónica',
  },
  {
    title: 'iIng. en Energías Renovables e Ing. en Sistemas Automotrices',
    value: 'Ing. en Energías Renovables e Ing. en Sistemas Automotrices',
  },
  {
    title: 'Maestría en Ingeniería Electrónica, opción instrumentación',
    value: 'Maestría en Ingeniería Electrónica, opción instrumentación',
  },
  { title: 'Tutorías y Mentorías', value: 'Tutorías y Mentorías' },
]

export default defineType({
  name: 'coursesSchema',
  title: 'Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of course',
      type: 'string',
    }),
    defineField({
      name: 'levelCourse',
      title: 'Level',
      type: 'string',
      options: {
        list: COURSELEVEL,
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'plan',
      title: 'Plan',
      type: 'url',
    }),
    defineField({
      name: 'extras',
      title: 'Extras',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      level: 'levelCourse',
    },
    prepare(selection) {
      const { level } = selection
      return { ...selection, subtitle: level }
    },
  },
})
