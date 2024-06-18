import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectScheme',
  title: 'Projects',
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
      name: 'year',
      title: 'Starting Year',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'user' },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      year: 'year',
      // media: 'image',
    },
    prepare(selection) {
      const { author, year } = selection
      return { ...selection, subtitle: author && `by ${author} (${year})` }
    },
  },
})
