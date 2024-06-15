import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'keyword',
    //   title: 'KeyWord',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'descriptiom',
    //   title: 'Desciption',
    //   type: 'string',
    // }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'imageGallery',
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
  ],
})
