import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'pboardSchema',
  title: 'PhD Boards',
  type: 'document',
  fields: [
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
      title: 'Role',
      name: 'role',
      type: 'string',
      options: {
        list: [
          { title: 'Reviewer', value: 'Reviewer' },
          { title: 'Rapporteur', value: 'Rapporteur' },
        ], // <-- predefined values
      },
    }),

    defineField({
      name: 'date',
      title: 'Date ',
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
      return { ...selection, subtitle: 'PhD Board' }
    },
  },
})
