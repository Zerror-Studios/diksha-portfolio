"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image';
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const DesignPath = () => {

    const containerRef = useRef(null);

    useGSAP(() => {

        gsap.fromTo(".pth_img_2", {
            y: 100
        }, {
            y: -100,
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
            <div ref={containerRef} className="container relative py-12 md:py-24  overflow-hidden bg-[#E6DEC9]">
                <h2 className='text-choc text-3xl capitalize leading-none  font-semibold '>Finding the Right <br />Design Path</h2>

                <div className="space-y-4 md:w-1/2 pt-8  md:pt-32 text-choc font-semibold">
                    <p className='md:text-lg  leading-tight'>My formal journey began in fashion design, where I spent four years exploring creativity, aesthetics, and visual thinking. But over time, I realized my curiosity extended beyond fashion itself.</p>
                    <p className='md:text-lg  leading-tight'>Everything changed when I discovered Design for Retail Experience at the National Institute of Design (NID).</p>
                    <p className='md:text-lg  leading-tight'>It connected directly with the world I had grown up around — products, retail environments, customer behavior, storytelling, and spatial experiences.</p>
                    <p className='md:text-lg  leading-tight'>At NID, I learned how to translate instinct into intentional design thinking. The experience shaped how I research, analyze systems, and create meaningful experiences that balance functionality with emotion.</p>

                </div>

                <div className=" rounded-2xl  w-full md:w-[30vw] aspect-4/3 relative overflow-hidden max-sm:mt-10 md:absolute md:top-24 md:right-[12rem]">
                    <Image fill className=' cover' src="/images/aboutpage/hover_per_img_5.jpeg" alt="img" />
                </div>
                <div className=" p-5 pth_img_2 relative rounded-2xl bg-[#E6DEC9] w-[80%] md:w-[30vw] aspect-4/3 overflow-hidden  max-sm:-translate-y-20 md:absolute md:top-1/2 md:right-[6rem]">
                    <div className="w-full h-full relative  rounded-xl overflow-hidden">
                        <Image fill className=' cover' src="/images/aboutpage/hover_per_img_3.jpeg" alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignPath