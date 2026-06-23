"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { Link } from 'next-view-transitions';
gsap.registerPlugin(ScrollTrigger)

const KeyProjects = ({ projects = [] }) => {

    const container = useRef(null);
    const projectsRef = useRef(null);

    useEffect(() => {
        const shouldScroll = sessionStorage.getItem("scrollToProjects");

        if (shouldScroll) {
            sessionStorage.removeItem("scrollToProjects");

            setTimeout(() => {
                const target = document.getElementById("keyProjects");

                if (target && window.lenis) {
                    window.lenis.scrollTo(target, {
                        duration: 1.2,
                    });
                }
            }, 300);
        }
    }, []);

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
            <div ref={projectsRef} id='keyProjects' className="container my-6 md:my-6 py-6 md:py-6 space-y-5 md:space-y-16">
                <div className="w-full max-sm:space-y-2 md:grid grid-cols-6 items-end">
                    <div className="col-span-4">
                        <h2 className='text-gray text-3xl   text-choc font-semibold  leading-none  '>Projects built <br /> with intention.</h2>
                    </div>
                    <div className="col-span-2 pb-3  leading-tight text-gray">
                        <p> A few projects where research, systems thinking, and careful craft came together to move a
                            real product forward — turning ambiguous problems into clear direction, built with care. </p>
                    </div>
                </div>
                <div ref={container} className="w-full flex flex-col gap-y-5">
                    {projects.map((item) => {
                        const imageUrl = item.coverImage?.asset?.url;
                        const categories = item.categories || [];

                        if (!imageUrl) return null;

                        return (
                            <Link
                                href={`/project/${item.slug}`}
                                key={item._id}
                            >
                                <div className="proj_paren w-full rounded-xl aspect-3/4 md:aspect-video text-white relative overflow-hidden">

                                    <div className="w-full absolute bottom-0 pointer-events-none h-[30%] bg-linear-to-b from-transparent to-black z-10 "></div>

                                    <Image fill src={imageUrl} className={` proj_img cover`} alt={item.title} />
                                    <div className=" absolute bottom-0 p-5 md:p-10  z-10 w-full flex justify-between max-sm:flex-col md:items-end">
                                        <div className=" md:w-1/2 space-y-2 md:space-y-5">
                                            <div className="font-semibold flex gap-x-1">
                                                <div className="size-1.5 translate-y-1.5 bg-white"></div>
                                                {item.projectCompletionYear}
                                            </div>
                                            <h4 className='md:text-3xl    leading-none font-semibold md:w-[70%]'>{item.title}</h4>
                                        </div>
                                        <div className="  max-sm:mt-2 flex flex-wrap gap-1">
                                            {categories.map((category) => (
                                                <button key={category} className='border   border-white text-sm font-semibold px-2 py-2 pb-1 rounded-md '>{category}</button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default KeyProjects
