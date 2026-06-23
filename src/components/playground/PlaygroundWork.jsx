"use client";
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { Link } from 'next-view-transitions';
gsap.registerPlugin(ScrollTrigger)

const PlaygroundWork = ({ projects = [] }) => {

    return (
        <>
            <div className="container py-12 md:py-24 space-y-5 md:space-y-16">
                <div className="w-full md:grid grid-cols-6 items-end">
                    <div className="col-span-4">
                        <h2 className='text-choc text-3xl    font-semibold leading-none '>Where curiosity <br /> wanders</h2>
                    </div>
                    <div className="max-sm:mt-2 col-span-2 pb-3  leading-tight text-gray">
                        <p>A running trail of experiments across the years — early sketches, spatial and 
product work from NID, a sustainable cradle, healthcare explorations, and the AI tools 
I'm playing with now. Not everything here is resolved. The unresolved ones are usually 
where the next idea comes from. </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-5">
                    {projects.map((item) => {
                        const imageUrl = item.coverImage?.asset?.url;
                        const categories = item.categories || [];

                        if (!imageUrl) return null;

                        return (
                            <Link
                                href={`/project/${item.slug}`}
                                key={item._id} className=" proj_paren relative">
                                <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                                    <div className="w-full absolute bottom-0 pointer-events-none h-[30%] bg-linear-to-b from-transparent to-black z-10 "></div>

                                    <div className=" absolute bottom-0 p-5 text-white  z-10 w-full flex justify-between items-end">
                                        <div className="space-y-5">
                                            <div className=" flex gap-x-1">
                                                <div className="size-1.5 translate-y-1.5 bg-white"></div>
                                                {item.projectCompletionYear}
                                            </div>
                                        </div>
                                         <div className=" w-[80%]  justify-end items-end flex flex-wrap gap-1">
                                            {categories.map((category) => (
                                                <button key={category} className='border  block h-fit  border-white text-sm  px-2 py-2 pb-1 rounded-md '>{category}</button>
                                            ))}
                                        </div>
                                    </div>
                                    <Image src={imageUrl} alt={item.title} fill className='proj_img cover' />
                                </div>
                                <h4 className='text-choc text-xl  mt-3  leading-none font-semibold'>{item.title}</h4>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PlaygroundWork
