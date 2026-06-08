"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
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
                <h2 className='text-gray text-3xl md:text-6xl leading-none md:leading-12 font-semibold '>Finding the Right <br /><span className=' playfair-italic font-thin'>Design Path</span></h2>

                <div className="space-y-4 md:w-1/2 pt-8  md:pt-32 text-choc font-semibold">
                    <p className='md:text-xl  leading-tight'>My formal journey began in fashion design, where I spent four years exploring creativity, aesthetics, and visual thinking. But over time, I realized my curiosity extended beyond fashion itself.</p>
                    <p className='md:text-xl  leading-tight'>Everything changed when I discovered Design for Retail Experience at the National Institute of Design (NID).</p>
                    <p className='md:text-xl  leading-tight'>It connected directly with the world I had grown up around — products, retail environments, customer behavior, storytelling, and spatial experiences.</p>
                    <p className='md:text-xl  leading-tight'>At NID, I learned how to translate instinct into intentional design thinking. The experience shaped how I research, analyze systems, and create meaningful experiences that balance functionality with emotion.</p>

                </div>

                <img className=' max-sm:mt-10 md:absolute top-24 right-[12rem]' src="/images/aboutpage/path_img_1.png" alt="img" />
                <img className=' pth_img_2 max-sm:w-[70%] max-sm:-translate-y-20 md:absolute top-1/2 right-[6rem]' src="/images/aboutpage/path_img_2.png" alt="img" />
            </div>
        </>
    )
}

export default DesignPath