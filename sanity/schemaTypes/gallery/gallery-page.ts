import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Galleries',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'galleries',
      title: 'Galleries',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'galleryArray' },
        }),
      ],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'user' },
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
