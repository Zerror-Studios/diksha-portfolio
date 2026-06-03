import PlaygroundHero from '@/components/playground/PlaygroundHero';
import PlaygroundWork from '@/components/playground/PlaygroundWork';
import { createPageMetadata } from '@/lib/seo';
import React from 'react'

const page = () => {
  return (
    <>
        <PlaygroundHero/>
        <PlaygroundWork/>
        <div className="w-full text-center pb-32 text-choc font-semibold pt-12">
          <h3 className='text-3xl'>Messy in the best way, and still worth returning to.</h3>
        </div>
    </>
  )
}

export default page


export async function generateMetadata() {
  return createPageMetadata("/playground");
}
