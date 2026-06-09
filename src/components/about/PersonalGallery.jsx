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
            <div className="w-full padding pt-32 md:pt-52 flex-col md:text-center">
                <h2 className=' text-3xl capitalize   text-white leading-none font-semibold '>Personal Side Section  <br />Beyond Design</h2>
            </div>

            <div className="md:hidden  max-sm:mt-10">
                <p className=' padding  font-semibold relative z-10 text-white  leading-none  text-xl md:text-3xl capitalize'>Outside of work, I enjoy experiences that encourage patience, discipline, and continuous learning. I play the violin, practice strength training, journal regularly, cook, walk often, and enjoy solo travel experiences that allow deeper observation and conversations with people from different backgrounds. These personal practices influence the way I approach design — with curiosity, openness, reflection, and a constant learner mindset.</p>

                <div className="w-full px-4 flex overflow-x-scroll  max-sm:mt-10 scroller_none gap-x-3 relative">
                    <div className="w-[85vw] rounded-xl overflow-hidden shrink-0 relative aspect-square">
                    <Image fill className='cover' src="/images/aboutpage/hover_per_img_1.png" alt="img" />
                    </div>
                    <div className="w-[85vw] rounded-xl overflow-hidden shrink-0 relative aspect-square">
                    <Image fill className='cover' src="/images/aboutpage/hover_per_img_2.png" alt="img" />
                    </div>
                    <div className="w-[85vw] rounded-xl overflow-hidden shrink-0 relative aspect-square">
                    <Image fill className='cover' src="/images/aboutpage/hover_per_img_3.jpeg" alt="img" />
                    </div>
                    <div className="w-[85vw] rounded-xl overflow-hidden shrink-0 relative aspect-square">
                    <Image fill className='cover' src="/images/aboutpage/hover_per_img_4.jpg" alt="img" />
                    </div>
                </div>
            </div>
            <div ref={containerRef} className=' max-sm:hidden h-[350vh] relative' >
                <div className=" container sticky! top-0  h-screen!  center  overflow-hidden">

                    <p className='font-semibold relative z-10 pointer-events-none text-white text-center leading-none w-[60%] text-3xl capitalize'>Outside of work, I enjoy experiences that encourage patience, discipline, and continuous learning. I play the violin, practice strength training, journal regularly, cook, walk often, and enjoy solo travel experiences that allow deeper observation and conversations with people from different backgrounds. These personal practices influence the way I approach design — with curiosity, openness, reflection, and a constant learner mindset.</p>

                    <div className="  absolute left-24 w-[20vw] aspect-square rounded-xl overflow-hidden per_img_1">
                        <Image fill className=' cover ' src="/images/aboutpage/hover_per_img_1.png" alt="img" />
                    </div>
                    <div className="  absolute w-[20vw] aspect-square rounded-xl overflow-hidden left-44 per_img_2">
                        <Image fill className=' cover ' src="/images/aboutpage/hover_per_img_2.png" alt="img" />

                    </div>
                    <div className="  absolute w-[20vw] aspect-square rounded-xl overflow-hidden right-44 per_img_3">
                        <Image fill className=' cover ' src="/images/aboutpage/hover_per_img_3.jpeg" alt="img" />

                    </div>
                    <div className="per_img_4   absolute w-[20vw] aspect-square rounded-xl overflow-hidden right-24">
                        <Image fill className=' cover ' src="/images/aboutpage/hover_per_img_4.jpg" alt="img" />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PersonalGallery