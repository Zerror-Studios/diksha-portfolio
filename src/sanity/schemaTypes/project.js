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
      name: 'projectPlacement',
      title: 'Project location',
      type: 'string',
      hidden: true,
      initialValue: 'home',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display order',
      description: 'Lower numbers show first. Use this to rearrange projects inside the Home and Playground tabs.',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.integer(),
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
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'lockProject',
      title: 'Lock this project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'projectPassword',
      title: 'Project password',
      type: 'string',
      hidden: ({ parent }) => parent?.lockProject !== true,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.lockProject && !value) {
            return 'Password is required when this project is locked'
          }

          return true
        }),
    }),
    defineField({
      name: 'unlockedSlidesCount',
      title: 'No. of slides to show without password',
      type: 'number',
      initialValue: 0,
      hidden: ({ parent }) => parent?.lockProject !== true,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (!context.parent?.lockProject) return true
          if (value === undefined || value === null) return 'Add the number of slides to show before password'
          if (!Number.isInteger(value) || value < 0) return 'Use a whole number of 0 or more'

          return true
        }),
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
          fields: [
            defineField({
              name: 'liveLink',
              title: 'Live Link',
              type: 'url',
            }),
          ],
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
              name: 'aspectSize',
              title: 'Aspect size',
              type: 'string',
              options: {
                layout: 'radio',
                list: [
                  { title: 'Square', value: 'square' },
                  { title: 'Portrait', value: 'portrait' },
                  { title: 'Landscape', value: 'landscape' },
                ],
              },
              initialValue: 'square',
              validation: (Rule) => Rule.required(),
            }),
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
              aspectSize: 'aspectSize',
              images: 'images',
            },
            prepare({ aspectSize, images }) {
              const count = images?.length || 0
              const aspectLabel = aspectSize
                ? aspectSize.charAt(0).toUpperCase() + aspectSize.slice(1)
                : 'Square'

              return {
                title: `Carousel (${count} ${count === 1 ? 'image' : 'images'})`,
                subtitle: aspectLabel,
                media: images?.[0],
              }
            },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'displayOrderAsc',
      by: [
        { field: 'displayOrder', direction: 'asc' },
        { field: 'projectCompletionYear', direction: 'desc' },
        { field: '_createdAt', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'projectPlacement',
      media: 'coverImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle === 'playground' ? 'Playground' : 'Home',
        media,
      }
    },
  },
})
