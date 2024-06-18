import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'levelCourses',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'level',
      title: 'Level of courses',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Level of courses',
          type: 'reference',
          to: { type: 'coursesSchema' },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
