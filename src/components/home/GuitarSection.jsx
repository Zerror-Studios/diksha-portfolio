"use client";
import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)

const icons = [
    "/icons/adobe.svg",
    "/icons/chatgpt.svg",
    "/icons/claude.svg",
    "/icons/cursor.svg",
    "/icons/figma.svg",
    "/icons/github.svg",
]

const GuitarSection = () => {

    useGSAP(() => {
        gsap.fromTo([".guitar_bg_img"], {
            y: -400
        }, {
            y: 400,
            ease: "none",
            scrollTrigger: {
                trigger: ".guitar_section",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        })
    })

    return (
        <>
            <div className=" guitar_section w-full h-[200vh] relative text-choc overflow-hidden">

                <div className="w-full grid grid-cols-3 p-20 absolute z-10">
                    <div className="col-span-2"></div>
                    <div className="font-semibold space-y-5">
                        <div className="">
                            <h6 className='playfair text-xl mb-1'>Empathy</h6>
                            <p className=' leading-none'>I design with people at <br /> the heart.</p>
                        </div>
                        <div className="">
                            <h6 className='playfair text-xl mb-1'>Courage</h6>
                            <p className=' leading-none'>I step out, challenge myself, <br /> and grow.</p>
                        </div>
                        <div className="">
                            <h6 className='playfair text-xl mb-1'>Curiosity</h6>
                            <p className=' leading-none'>I stay curious to keep learning <br /> and evolving.</p>
                        </div>
                        <div className="">
                            <h6 className='playfair text-xl mb-1'>Creativity</h6>
                            <p className=' leading-none'>Music inspires how I think, <br />feel, and create.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-3 bottom-0 p-20 absolute z-10">
                    <div className="col-span-2">
                        <div className=" w-fit grid grid-cols-4 gap-2">

                            {icons.map((item, i) => (
                                <div key={i} className="size-20 hover:bg-[#713F1E] backdrop-blur-md transition-all duration-150 rounded-full bg-[#713F1E30] center">
                                    <img src={item} alt="" />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="font-semibold space-y-5">
                        <p className='text-lg'>I design with empathy understanding people, not just problems while blending systems thinking,</p>
                        <button className='bg-choc text-white px-6 py-3 pb-1.5 rounded-lg'>
                            <p>Read More</p>
                        </button>
                    </div>
                </div>


                <Image fill src="/images/homepage/guitar.png" alt="guitar" className="cover brightness-80 guitar_bg_img" />
            </div>
        </>
    )
}

export default GuitarSection