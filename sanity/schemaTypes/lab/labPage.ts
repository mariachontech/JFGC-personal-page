import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'labPage',
  title: 'Lab Page',
  type: 'document',
  fields: [
    //Header
    defineField({
      title: 'Header Lab',
      name: 'header',
      type: 'object',
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
          title: 'Links',
          type: 'array',
          name: 'links',
          of: [
            {
              type: 'object',
              fields: [
                { type: 'string', name: 'title', title: 'Title' },
                { type: 'url', name: 'url', title: 'Url' },
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'seccionLab',
      title: 'Secciones',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'labBlockSchema' },
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
      title: 'header.title',
      author: 'author.name',
      media: 'header.mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
