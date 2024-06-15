import { defineField, defineType } from "sanity"

export default defineType({
	name: "socialsSchema",
	title: "Social Media",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Nombre de la red social",
			type: "string",
		}),
		defineField({
			name: "urlSocial",
			title: "Enlace",
			type: "url",
		}),
	],
	preview: {
		select: {
			title: "name",
		},
	},
})
