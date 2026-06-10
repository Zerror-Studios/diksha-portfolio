// https://www.sanity.io/docs/structure-builder-cheat-sheet
const projectOrdering = [
  { field: 'displayOrder', direction: 'asc' },
  { field: 'projectCompletionYear', direction: 'desc' },
  { field: '_createdAt', direction: 'desc' },
]

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .schemaType('project')
        .child(
          S.documentTypeList('project')
            .title('Home')
            .filter('_type == "project" && (!defined(projectPlacement) || projectPlacement == "home")')
            .defaultOrdering(projectOrdering)
            .initialValueTemplates([
              S.initialValueTemplateItem('project-home'),
            ])
        ),
      S.listItem()
        .title('Playground')
        .schemaType('project')
        .child(
          S.documentTypeList('project')
            .title('Playground')
            .filter('_type == "project" && projectPlacement == "playground"')
            .defaultOrdering(projectOrdering)
            .initialValueTemplates([
              S.initialValueTemplateItem('project-playground'),
            ])
        ),
    ])
