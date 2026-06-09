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
    images[]{
      asset->
    }
  }
}`

export const PROJECTS_QUERY = groq`*[_type == "project"] | order(projectCompletionYear desc, _createdAt desc){
  _id,
  title,
  "slug": slug.current,
  projectCompletionYear,
  categories,
  description,
  coverImage{
    asset->
  },
  ${PROJECT_SLIDES_PROJECTION}
}`

export const PROJECT_BY_SLUG_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  projectCompletionYear,
  categories,
  description,
  coverImage{
    asset->
  },
  ${PROJECT_SLIDES_PROJECTION}
}`

export const PROJECT_SLUGS_QUERY = groq`*[_type == "project" && defined(slug.current)] | order(projectCompletionYear desc, _createdAt desc){
  "slug": slug.current
}`
