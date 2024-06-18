import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'studentPage',
  title: 'Students Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'master',
      title: 'Master Students',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'masterSchema' },
        }),
      ],
    }),
    defineField({
      name: 'phd',
      title: 'PhD Students',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'phdSchema' },
        }),
      ],
    }),
    defineField({
      name: 'postdoc',
      title: 'Post Doc',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'postdocSchema' },
        }),
      ],
    }),
    defineField({
      name: 'pboard',
      title: 'PhD board',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'pboardSchema' },
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
