"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const CreativeExploration = () => {

    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".crd", {
            y: 200
        }, {
            y: -200,
            ease:"none",
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
            <div ref={containerRef} className="  container py-24 w-full ">
                <h2 className='text-gray text-6xl leading-12 font-semibold '>A Journey of Passion, <br /> Purpose, and  <span className='text-choc playfair-italic font-thin'>Creative <br /> Exploration</span></h2>
                <div className="relative h-[50vh]  w-full center">
                    <img src="/images/aboutpage/oval_img.png" className='w-1/2 z-10' alt="" />
                    <img src="/images/aboutpage/diksha_child.png" className='absolute z-[-1] translate-x-64 -top-1/2 w-[25vw]' alt="" />
                    <img src="/images/aboutpage/creative_card.png" className=' crd absolute z-[10] left-32 -bottom-24 w-[25vw]' alt="" />
                </div>

                <div className="w-full bg-choc items-stretch flex gap-x-20 text-white mt-44 p-10 rounded-xl">
                    <div className="w-[30%]">
                        <p className='text-4xl'>Where It All  <span className='playfair-italic'>Started</span></p>
                        <p className='text-xl mt-4 leading-tight'>I come from a lineage of builders, sellers, and problem-solvers.</p>
                    </div>
                    <div className="w-px  bg-white/50"></div>
                    <div className="w-[70%] space-y-5 opacity-80">
                        <p>My grandfather migrated to India during the Partition and slowly built a stationery business from scratch. Over the years, the small shop became more than a business — it became a place where I unknowingly began studying people.</p>
                        <p>As a child, I spent hours watching customers interact with products. I observed how people compared choices, what attracted their attention, how trust was built, and how even the smallest product could carry emotional value. Long before I formally studied design, I was already learning how products fit into everyday life. Those experiences became the foundation of how I think today: thoughtful design begins with observation, empathy, and understanding real human behavior.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreativeExploration