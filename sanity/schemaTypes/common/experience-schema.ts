import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'experienceScheme',
  title: 'Experience history',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'work',
      title: 'Work',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'companyLink',
      title: 'Company Url',
      type: 'url',
    }),
    defineField({
      name: 'startTime',
      title: 'Start time',
      type: 'datetime',
    }),
    defineField({
      name: 'endTime',
      title: 'End time',
      type: 'datetime',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'position',
    },
  },
})
