import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'researchPage',
  title: 'Research Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    // Field with accept option set to PDF
    // defineField({
    //   title: 'Bib Text',
    //   name: 'bibText',
    //   type: 'text',
    // }),

    defineField({
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'publicationScheme' },
        }),
      ],
    }),
    defineField({
      name: 'patents',
      title: 'Patents',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'patentScheme' },
        }),
      ],
    }),
    defineField({
      name: 'scientificInterest',
      title: 'Scientific interest',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'scientificInterest' },
        }),
      ],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'projectScheme' },
        }),
      ],
    }),
    defineField({
      name: 'groups',
      title: 'Research Groups',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'researchGroup' },
        }),
      ],
    }),
    defineField({
      name: 'industrialPartners',
      title: 'Industrial Partners',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'industrialPartners' },
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
