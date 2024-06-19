import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'labBlockSchema',
  title: 'Lab Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'photo' },
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
      media: 'gallery[0]',
    },
  },
})
