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
    {
        id: 4,
        year: 2025,
        title: "More Than Dining: Augmented Reality Experiment",
        category: [
            "Product Design", "UX"
        ],
        img: "/images/homepage/project/img4.png"
    },
]

const KeyProjects = () => {

    const container = useRef(null);

    useGSAP(() => {
        if (window.innerWidth < 750) return
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
            <div className="container py-12 md:py-24 space-y-5 md:space-y-16">
                <div className="w-full max-sm:space-y-2 md:grid grid-cols-6 items-end">
                    <div className="col-span-4">
                        <h2 className='text-gray text-2xl text-choc font-semibold  leading-none  '>Projects built <br /> with <span className=' playfair-italic'>intention.</span></h2>
                    </div>
                    <div className="col-span-2 pb-3  leading-tight text-gray">
                        <p>Projects built with intention, shaped through thoughtful strategy, human understanding, and a strong focus on creating meaningful real-world impact.</p>
                    </div>
                </div>
                <div ref={container} className="w-full space-y-5">
                    {projectsData.map((item, i) => (
                        <div key={i} className="proj_paren w-full rounded-xl aspect-3/4 md:aspect-video text-white relative overflow-hidden">

                            <div className="w-full absolute bottom-0 pointer-events-none h-[30%] bg-linear-to-b from-transparent to-black z-10 "></div>

                            <Image fill src={item.img} className={` proj_img cover`} alt="img" />
                            <div className=" absolute bottom-0 p-5 md:p-10  z-10 w-full flex justify-between max-sm:flex-col md:items-end">
                                <div className=" space-y-2 md:space-y-5">
                                    <div className="font-semibold flex gap-x-1">
                                        <div className="size-1.5 translate-y-1.5 bg-white"></div>
                                        {item.year}
                                    </div>
                                    <h4 className='md:text-2xl leading-none font-semibold md:w-[70%]'>{item.title}</h4>
                                </div>
                                <div className=" max-sm:mt-2 flex flex-wrap gap-x-1">
                                    {item.category.map((item, i) => (
                                        <button key={i} className='border border-white text-sm font-semibold px-2 py-2 pb-1 rounded-md '>{item}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default KeyProjects