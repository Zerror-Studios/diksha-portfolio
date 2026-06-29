"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image';
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const images = [
    "/images/aboutpage/creative_images/img1.webp",
    "/images/aboutpage/creative_images/img2.webp",
    "/images/aboutpage/creative_images/img3.webp",
    "/images/aboutpage/creative_images/img4.webp",
    "/images/aboutpage/creative_images/img5.webp",
    "/images/aboutpage/creative_images/img6.webp",
    "/images/aboutpage/creative_images/img7.webp",
]

const CreativeExploration = () => {

    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        const slider = sliderRef.current;

        const totalWidth = slider.scrollWidth;
        const visibleWidth = container.offsetWidth;

        const moveX = totalWidth - visibleWidth;

        gsap.to(slider, {
            x: -moveX,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `bottom bottom`,
                scrub: true,
                invalidateOnRefresh: true,
            },
        });
    }, { scope: containerRef });

    return (
        <>
            <div ref={containerRef} className=" h-[400vh]!  w-full ">
                <div className=" py-12 md:py-24 w-full sticky flex flex-col justify-between top-0 h-screen">
                    <h2 className=' padding text-choc text-3xl   leading-none font-semibold '>A journey of passion, <br /> purpose, and  creative <br /> exploration</h2>
                    <div ref={sliderRef} className="  flex  gap-x-5">
                        {images.map((item, i) => (
                            <div key={i} className="  first:pl-4 lg:first:pl-8 xl:first:pl-24 last:pr-4 lg:last:pr-8 xl:last:pr-24">
                                <div className="relative aspect-square shrink-0 rounded-xl overflow-hidden h-[60vh]">
                                    <Image fill src={item} className='cover' alt="creative Exploration img" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="padding pb-12 md:pb-24">
                <div className="w-full bg-choc md:items-stretch md:flex gap-x-20 text-white  p-8 md:p-10 rounded-xl">
                    <div className=" w-full md:w-[30%]">
                        <p className='text-3xl  '>Where it all started</p>
                        <p className=' text-xl mt-4 leading-tight'>I come from a lineage of builders, sellers, and problem-solvers.</p>
                    </div>
                    <div className=" max-sm:my-8 w-full max-sm:h-px md:w-px  bg-white/50"></div>
                    <div className=" w-full md:w-[70%] space-y-5 text-lg opacity-80">
                        <p>My grandfather migrated to India during the Partition and slowly built a stationery business from scratch. Over the years, the small shop became more than a business — it became a place where I unknowingly began studying people.</p>
                        <p>As a child, I spent hours watching customers interact with products. I observed how people compared choices, what attracted their attention, how trust was built, and how even the smallest product could carry emotional value. Long before I formally studied design, I was already learning how products fit into everyday life. Those experiences became the foundation of how I think today: thoughtful design begins with observation, empathy, and understanding real human behavior.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreativeExploration