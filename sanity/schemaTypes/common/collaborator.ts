import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'collaborator',
  fields: [
   defineField({
      title: 'Collaborator',
      name: 'collaboratorName',
      type: 'reference',
      to: [{type: 'user'}]
    }),
 
  ],
})
