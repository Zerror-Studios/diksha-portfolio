import React from 'react'
import Marquee from 'react-fast-marquee'

const marquee = [
    "/images/homepage/clients/diabesties1.svg",
    "/images/homepage/clients/idc.svg",
    "/images/homepage/clients/intuit_credit_karma_logo.svg",
    "/images/homepage/clients/intuit_logo.svg",
    "/images/homepage/clients/intuit_quickbooks_logo.svg",
    "/images/homepage/clients/nid.svg",
    "/images/homepage/clients/tata_1mg_logo.svg",
    "/images/homepage/clients/tt-logo-50-50.svg",
]

const Clients = () => {
    return (
        <div className=' py-12 md:py-24 container'>
            <div className=" w-full max-sm:space-y-2  md:grid grid-cols-8">
                <div className="col-span-6">
                    <h4 className='text-choc font-semibold text-3xl     leading-none'>Built across <br /> industries</h4>
                </div>
                <div className="col-span-2">
                    <p className='text-gray   leading-tight'>Designing at scale across fintech, healthcare, and AI. From document intelligence and AP
                        automation to one of India's first insulin pumps, I bring research-led product thinking to
                        high-stakes, complex problems. </p>
                </div>
            </div>

            <div className=" mt-10 md:mt-16 h-36 md:h-52 flex items-center relative border border-[#713F1E10]">
                <div className="size-3 absolute -top-1.5 -left-1.5 z-99 bg-choc"></div>
                <div className="size-3 absolute -bottom-1.5 -left-1.5 z-99 bg-choc"></div>
                <div className="size-3 absolute -top-1.5 -right-1.5 z-99 bg-choc"></div>
                <div className="size-3 absolute -bottom-1.5 -right-1.5 z-99 bg-choc"></div>
                <Marquee gradient gradientColor='#FFFFFF' gradientWidth={100} className='h-full'>
                    {marquee.map((item, index) => (
                        <img key={index} src={item} className=' mr-10 max-sm:w-32 md:mr-20' alt="img" />
                    ))}
                </Marquee>
            </div>

        </div>
    )
}

export default Clients