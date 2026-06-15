"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image';
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const CreativeExploration = () => {

    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".child_img", {
            y: 100,
            opacity: 0,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".child_img",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        })
        gsap.fromTo(".crd", {
            y: 200
        }, {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        })
    })

    return (
        <>
            <div ref={containerRef} className="  container py-12 md:py-24 w-full ">
                <h2 className='text-choc text-3xl   leading-none font-semibold '>A journey of passion, <br /> purpose, and  creative <br /> exploration</h2>
                <div className="relative h-[50vh]  mt-20 w-full center">
                    <div className=" w-full relative rounded-full aspect-15/9 overflow-hidden md:w-1/2">
                        <Image fill src="/images/aboutpage/oval_img.png" className='cover ' alt="img" />
                    </div>
                    <img src="/images/aboutpage/diksha_child.png" className=' child_img absolute z-[-1] md:translate-x-50 -top-20 md:-top-[60%] w-1/2 md:w-[25vw]' alt="img" />
                    <img src="/images/aboutpage/creative_card.png" className=' crd absolute z-[10] left-0 md:left-32 bottom-32 md:-bottom-24 w-1/2 md:w-[25vw]' alt="img" />
                </div>

                <div className="w-full bg-choc md:items-stretch md:flex gap-x-20 text-white md:mt-44 p-8 md:p-10 rounded-xl">
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