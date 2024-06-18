import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'researchGroup',
  title: 'Research Group',
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
      name: 'tag',
      title: 'Categories or Groups',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative Text',
    //     },
    //     {
    //       name: 'caption',
    //       type: 'string',
    //       title: 'Caption Text',
    //     },
    //   ],
    // }),
    defineField({
      name: 'link',
      title: 'Link 1',
      type: 'url',
    }),
    defineField({
      name: 'link2',
      title: 'Link 2',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'url',
    }),
    defineField({
      name: 'page',
      title: 'Page Url',
      type: 'url',
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
      media: 'image',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
