"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)


const projectsData = [
    {
        id: 1,
        year: 2025,
        title: "More Than Dining: Augmented Reality Experiment",
        category: [
            "Product Design", "UX"
        ],
        img: "/images/homepage/project/img1.png"
    },
    {
        id: 2,
        year: 2025,
        title: "More Than Dining: Augmented Reality Experiment",
        category: [
            "Product Design", "UX"
        ],
        img: "/images/homepage/project/img2.png"
    },
    {
        id: 3,
        year: 2025,
        title: "More Than Dining: Augmented Reality Experiment",
        category: [
            "Product Design", "UX"
        ],
        img: "/images/homepage/project/img3.png"
    },
]
const PlaygroundWork = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.utils.toArray(".proj_img").forEach((img) => {
                gsap.fromTo(
                    img,
                    { y: -200 },
                    {
                        y: 200,
                        ease: "none",
                        scrollTrigger: {
                            trigger: img.parentElement,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            });
        },
        { scope: container }
    );
    return (
        <>
            <div className="container py-24 space-y-16">
                <div className="w-full grid grid-cols-6 items-end">
                    <div className="col-span-4">
                        <h2 className='text-gray text-6xl leading-14 font-thin '>Creativity Crafted for <br />  <span className='text-choc playfair-italic'>Modern Brands</span></h2>
                    </div>
                    <div className="col-span-2 pb-3 font-semibold leading-tight text-gray">
                        <p>Creativity crafted for modern brands through thoughtful design, strategic thinking, and meaningful experiences that connect with people authentically.</p>
                    </div>
                </div>
                <div ref={container} className="grid grid-cols-3 gap-x-5">
                    {projectsData.map((item, i) => (
                        <div key={i} className=" proj_paren relative">
                            <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                                <div className="w-full absolute bottom-0 pointer-events-none h-[30%] bg-linear-to-b from-transparent to-black z-10 "></div>

                                <div className=" absolute bottom-0 p-5 text-white  z-10 w-full flex justify-between items-end">
                                    <div className="space-y-5">
                                        <div className=" flex gap-x-1">
                                            <div className="size-1.5 translate-y-1.5 bg-white"></div>
                                            {item.year}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-x-1">
                                        {item.category.map((item, i) => (
                                            <button key={i} className='border border-white text-sm  px-2 py-2 pb-1 rounded-md '>{item}</button>
                                        ))}
                                    </div>
                                </div>
                                <Image src={item.img} alt={item.title} fill className='proj_img scale-125 cover' />
                            </div>
                            <h4 className='text-choc text-2xl mt-6 leading-tight font-semibold'>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PlaygroundWork