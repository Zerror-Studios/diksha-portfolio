import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectCompletionYear',
      title: 'Project completion year',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .integer()
          .min(1900)
          .max(new Date().getFullYear() + 5),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          name: 'slideImage',
          title: 'Add image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'slideVideo',
          title: 'Add video',
          type: 'file',
          options: {
            accept: 'video/*',
          },
        },
        {
          name: 'slideCarousel',
          title: 'Add carousel',
          type: 'object',
          fields: [
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image', options: { hotspot: true } }],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              images: 'images',
            },
            prepare({ images }) {
              const count = images?.length || 0

              return {
                title: `Carousel (${count} ${count === 1 ? 'image' : 'images'})`,
                media: images?.[0],
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'projectCompletionYear',
      media: 'coverImage',
    },
  },
})
