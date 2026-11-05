import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'patentScheme',
  title: 'Patents',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short title, e.g. "Traction System for Electric Vehicles"',
    }),
    defineField({
      name: 'bibText',
      title: 'Bib Text',
      type: 'text',
      description: `BibTeX entry, e.g.\n@misc{inventorTraction2025patent,\n  author = {JUAN MANUEL JIMÉNEZ RODRÍGUEZ, ...},\n  title = {DISEÑO DE UN SISTEMA DE TRACCIÓN ...},\n  howpublished = {MX. Patent No. MX/a/2023/014730},\n  year = {2025},\n  note = {Filed Dec. 08, 2023, and issued Nov 27, 2025}\n}`,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
