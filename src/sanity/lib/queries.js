import { groq } from 'next-sanity'

const PROJECT_SLIDES_PROJECTION = groq`slides[]{
  _type,
  _key,
  _type == "slideImage" => {
    asset->
  },
  _type == "slideVideo" => {
    asset->
  },
  _type == "slideCarousel" => {
    aspectSize,
    images[]{
      asset->
    }
  }
}`

const PROJECT_CARD_PROJECTION = groq`{
  _id,
  title,
  "slug": slug.current,
  projectPlacement,
  displayOrder,
  projectCompletionYear,
  categories,
  description,
  coverImage{
    asset->
  },
  ${PROJECT_SLIDES_PROJECTION}
}`

export const PROJECTS_QUERY = groq`*[_type == "project"] | order(coalesce(displayOrder, 9999) asc, projectCompletionYear desc, _createdAt desc)${PROJECT_CARD_PROJECTION}`

export const HOME_PROJECTS_QUERY = groq`*[_type == "project" && (!defined(projectPlacement) || projectPlacement == "home")] | order(coalesce(displayOrder, 9999) asc, projectCompletionYear desc, _createdAt desc)${PROJECT_CARD_PROJECTION}`

export const PLAYGROUND_PROJECTS_QUERY = groq`*[_type == "project" && projectPlacement == "playground"] | order(coalesce(displayOrder, 9999) asc, projectCompletionYear desc, _createdAt desc)${PROJECT_CARD_PROJECTION}`

export const PROJECT_BY_SLUG_QUERY = groq`*[_type == "project" && slug.current == $slug][0]${PROJECT_CARD_PROJECTION}`

export const PROJECT_SLUGS_QUERY = groq`*[_type == "project" && defined(slug.current)] | order(projectCompletionYear desc, _createdAt desc){
  "slug": slug.current
}`
