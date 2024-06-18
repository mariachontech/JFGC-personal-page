import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'coursesPage',
  title: 'Courses Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption Text',
        },
      ],
    }),

    defineField({
      name: 'underGraduateCourses',
      title: 'UnderGraduate Courses',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'levelCourses' },
        }),
      ],
    }),
    defineField({
      name: 'graduateCourses',
      title: 'Graduate Courses',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'levelCourses' },
        }),
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
