import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'publicationScheme',
  title: 'Publications',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'bibText',
      title: 'Bib Text',
      type: 'text',
    }),
    //   type: 'number',
    // }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
