import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'masterSchema',
  title: 'Master Students',
  type: 'document',
  fields: [
    defineField({
      name: 'tesis',
      title: 'Tesis or project',
      type: 'string',
    }),

    defineField({
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: { type: 'user' },
    }),
    defineField({
      name: 'university',
      title: 'University',
      type: 'string',
    }),
    defineField({
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Current', value: 'CURRENT' },
          { title: 'Former', value: 'FORMER' },
        ], // <-- predefined values
      },
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'student.name',
      media: 'student.image',
    },
    prepare(selection) {
      return { ...selection, subtitle: 'Master' }
    },
  },
})
