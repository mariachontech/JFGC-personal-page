import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education history',
  type: 'document',
  fields: [
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'string',
    }),
    defineField({
      name: 'advisers',
      title: 'Advisers',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'user' },
        }),
      ],
    }),
    defineField({
      name: 'commite',
      title: 'Commite',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'user' },
        }),
      ],
    }),
    defineField({
      name: 'startTime',
      title: 'Start time',
      type: 'datetime',
    }),
    defineField({
      name: 'endTime',
      title: 'End time',
      type: 'datetime',
    }),

    defineField({
      name: 'place',
      title: 'Location',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'grade',
    },
  },
})
