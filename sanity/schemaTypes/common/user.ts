import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
      title: 'Email',
      name: 'email',
      type: 'string',
    }),
    defineField({
      title: 'Phone number',
      name: 'phone',
      type: 'string',
    }),

    defineField({
      title: 'University',
      name: 'university',
      type: 'string',
    }),
    defineField({
      title: 'Street',
      name: 'street',
      type: 'string',
    }),
    defineField({
      title: 'City',
      name: 'city',
      type: 'string',
    }),
    defineField({
      title: 'Country',
      name: 'country',
      type: 'string',
    }),
    defineField({
      title: 'CP',
      name: 'cp',
      type: 'string',
    }),
    defineField({
      title: 'Office',
      name: 'office',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'socialsNet',
      title: 'Social Media',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'socials',
          type: 'reference',
          to: { type: 'socialsSchema' },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
