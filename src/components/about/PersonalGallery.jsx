"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image';
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)


const PersonalGallery = () => {

    const containerRef = useRef(null);

    useGSAP(() => {

        if (window.innerWidth < 750) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        })

        tl.fromTo(".per_img_1", {
            top: "120%",
            rotate: 20
        }, {
            top: "-120%",
            ease: "none",
            rotate: -20
        })
        tl.fromTo(".per_img_3", {
            top: "120%",
            rotate: 10
        }, {
            top: "-120%",
            ease: "none",
            rotate: -10
        }, "<+=0.15")
        tl.fromTo(".per_img_2", {
            top: "120%",
            rotate: -20
        }, {
            top: "-120%",
            ease: "none",
            rotate: 20
        }, "<+=0.15")
        tl.fromTo(".per_img_4", {
            top: "120%",
            rotate: -10
        }, {
            top: "-20%",
            ease: "none",
            rotate: 10
        }, "<+=0.15")

    })

    return (
        <div className=' w-full relative bg-choc max-sm:pb-16'>
            <div className="w-full  absolute z-10">
                <img src="/images/aboutpage/abt_clip.svg" className='w-full ' alt="img" />
            </div>
            <div className="w-full padding pt-32 md:pt-52  md:text-center">
                <h2 className=' text-3xl     text-white leading-none font-semibold '>Personal side section  <br />beyond design</h2>
            </div>

            <div className=" mt-10 md:mt-24">
                <p className=' padding  font-semibold relative z-10 text-white md:text-center   leading-none  text-xl md:text-3xl  '>Outside of work, I enjoy experiences that encourage patience, discipline, and continuous learning. I play the violin, practice strength training, journal regularly, cook, walk often, and enjoy solo travel experiences that allow deeper observation and conversations with people from different backgrounds. These personal practices influence the way I approach design — with curiosity, openness, reflection, and a constant learner mindset.</p>

                <div className="w-full px-4 flex overflow-x-scroll md:grid md:grid-cols-4 max-sm:mt-10 md:px-24 md:py-24! scroller_none gap-x-3 relative">
                    <div className="w-[85vw] md:w-full rounded-xl overflow-hidden shrink-0 relative aspect-square">
                        <Image fill className='cover' src="/images/aboutpage/hover_per_img_1.png" alt="img" />
                    </div>
                    <div className="w-[85vw] md:translate-y-7 md:w-full rounded-xl overflow-hidden shrink-0 relative aspect-square">
                        <Image fill className='cover' src="/images/aboutpage/hover_per_img_2.png" alt="img" />
                    </div>
                    <div className="w-[85vw] md:w-full rounded-xl overflow-hidden shrink-0 relative aspect-square">
                        <Image fill className='cover' src="/images/aboutpage/hover_per_img_3.png" alt="img" />
                    </div>
                    <div className="w-[85vw] md:translate-y-7 md:w-full rounded-xl overflow-hidden shrink-0 relative aspect-square">
                        <Image fill className='cover' src="/images/aboutpage/hover_per_img_6.jpeg" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalGallery