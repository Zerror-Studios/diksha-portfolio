import PlaygroundHero from '@/components/playground/PlaygroundHero';
import PlaygroundWork from '@/components/playground/PlaygroundWork';
import { createPageMetadata } from '@/lib/seo';
import { client } from '@/sanity/lib/client';
import { PLAYGROUND_PROJECTS_QUERY } from '@/sanity/lib/queries';
import React from 'react'

export const revalidate = 60;

const page = async () => {
  const projects = await client.fetch(PLAYGROUND_PROJECTS_QUERY);

  return (
    <>
      <PlaygroundHero />
      <PlaygroundWork projects={projects} />
      <div className="w-full padding text-center pb-16 md:pb-32 text-choc font-semibold pt-8 padding md:pt-12">
        <h3 className='text-3xl capitalize'>Messy in the best way, and still worth returning to.</h3>
      </div>
    </>
  )
}

export default page


export async function generateMetadata() {
  return createPageMetadata("/playground");
}
