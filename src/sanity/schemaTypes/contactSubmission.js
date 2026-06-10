import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactSubmission',
  title: 'Contact submissions',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Contact number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'new',
      options: {
        layout: 'radio',
        list: [
          { title: 'New', value: 'new' },
          { title: 'Read', value: 'read' },
          { title: 'Replied', value: 'replied' },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      email: 'email',
      submittedAt: 'submittedAt',
    },
    prepare({ title, email, submittedAt }) {
      const date = submittedAt ? new Date(submittedAt).toLocaleString() : 'No date'

      return {
        title: title || 'Contact submission',
        subtitle: `${email || 'No email'} - ${date}`,
      }
    },
  },
})
