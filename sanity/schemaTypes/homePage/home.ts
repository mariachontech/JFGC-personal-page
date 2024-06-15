import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'cta',
      title: 'Call to action',
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
      ],
    }),
    defineField({
      name: 'principal',
      title: 'Principal Data',
      type: 'reference',
      to: { type: 'user' },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'user' },
    }),
    defineField({
      name: 'news',
      title: 'Lastest news',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'News',
          type: 'reference',
          to: { type: 'news' },
        }),
      ],
    }),
    defineField({
      name: 'galleryCite',
      title: 'Gallery Phrase',
      type: 'object',
      fields: [
        { name: 'cite', type: 'string', title: 'cite' },
        { name: 'author', type: 'string', title: 'Author' },
      ],
    }),
    defineField({
      name: 'galleries',
      title: 'Galleries',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'galleryKind' },
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
