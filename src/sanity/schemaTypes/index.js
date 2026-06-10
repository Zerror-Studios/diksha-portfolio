import project from './project'
import contactSubmission from './contactSubmission'

export const schema = {
  types: [project, contactSubmission],
  templates: (prev) => [
    ...prev.filter((template) => template.schemaType !== 'project'),
    {
      id: 'project-home',
      title: 'Home project',
      schemaType: 'project',
      value: {
        projectPlacement: 'home',
      },
    },
    {
      id: 'project-playground',
      title: 'Playground project',
      schemaType: 'project',
      value: {
        projectPlacement: 'playground',
      },
    },
  ],
}
