import React from 'react'

const ContactHero = () => {
  return (
    <div className='w-full md:h-[70vh] max-sm:pt-52'>
        <div className="w-full container md:grid md:grid-cols-6 items-end">
            <div className="col-span-4 space-y-2 md:space-y-5">
                <h1 className=' hero_title  text-gray leading-none md:leading-12 text-4xl  md:text-7xl'>Have a Vision in Mind? <br /><span className='text-choc playfair-italic'>let’s create</span></h1>
                <div className="flex gap-x-2 items-center ">
                    <div className="size-2 -translate-y-1 bg-[#713F1E] "></div>
                    <p className='md:text-xl font-semibold text-gray'>We’re Here - Message or Call Us.</p>
                </div>
            </div>
            <div className=" max-sm:mt-12 col-span-2 text-gray leading-tight font-semibold">
                <p>Let’s discuss your goals, ideas, and challenges to create impactful digital experiences and long-term business value together through strategic collaboration and innovative solutions.</p>
            </div>
        </div>
    </div>
  )
}

export default ContactHero