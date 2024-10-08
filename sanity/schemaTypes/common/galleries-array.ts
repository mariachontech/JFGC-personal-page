import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'galleryArray',
  title: 'Galleries Array',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
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
  ],
})
