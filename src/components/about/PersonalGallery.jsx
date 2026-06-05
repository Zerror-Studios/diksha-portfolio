"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)


const PersonalGallery = () => {

    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        })

        tl.fromTo(".per_img_1", {
            top:"120%",
            rotate:20
        },{
            top:"-120%",
            ease:"none",
            rotate:-20
        })
        tl.fromTo(".per_img_3", {
            top:"120%",
            rotate:10
        },{
            top:"-120%",
            ease:"none",
            rotate:-10
        },"<+=0.15")
        tl.fromTo(".per_img_2", {
            top:"120%",
            rotate:-20
        },{
            top:"-120%",
            ease:"none",
            rotate:20
            },"<+=0.15")
        tl.fromTo(".per_img_4", {
            top:"120%",
            rotate:-10
        },{
            top:"-20%",
            ease:"none",
            rotate:10
           },"<+=0.15")

    })

    return (
        <div className=' w-full relative bg-choc'>
            <div className="w-full  absolute z-10">
                <img src="/images/aboutpage/abt_clip.svg" className='w-full ' alt="" />
            </div>
            <div className="w-full center pt-52 flex-col text-center">
                <h2 className=' text-6xl text-white leading-12 font-semibold '>Personal Side Section  <br /><span className='  playfair-italic font-thin'>Beyond Design</span></h2>
            </div>
            <div ref={containerRef} className=' h-[350vh] relative' >
                <div className=" container sticky! top-0  h-screen  center  overflow-hidden">

                    <p className='font-semibold relative z-10 text-white text-center leading-none w-[60%] text-3xl'>Outside of work, I enjoy experiences that encourage patience, discipline, and continuous learning. I play the violin, practice strength training, journal regularly, cook, walk often, and enjoy solo travel experiences that allow deeper observation and conversations with people from different backgrounds. These personal practices influence the way I approach design — with curiosity, openness, reflection, and a constant learner mindset.</p>

                    <img className='absolute left-10 w-[30vw] per_img_1' src="/images/aboutpage/per_img_1.png" alt="" />
                    <img className='absolute left-44 w-[30vw] per_img_2' src="/images/aboutpage/per_img_2.png" alt="" />
                    <img className='absolute right-44 w-[30vw] per_img_3' src="/images/aboutpage/per_img_3.png" alt="" />
                    <img className='absolute right-10 w-[30vw] per_img_4' src="/images/aboutpage/per_img_4.png" alt="" />

                </div>
            </div>
        </div>
    )
}

export default PersonalGallery