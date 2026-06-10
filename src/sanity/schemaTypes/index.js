import project from './project'

export const schema = {
  types: [project],
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
