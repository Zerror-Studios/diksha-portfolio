"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Experiences = () => {

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
        tl.to(".clip_div_1", {
            bottom: 0,
        })
        tl.to(".clip_div_2", {
            bottom: 0,
        })


        if (window.innerWidth < 750) return

        gsap.from([".exp_pr_img"], {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })
    })

    return (
        <div ref={containerRef} className=' h-[200vh] relative' >
            <div className=" container sticky! top-0  h-screen! py-12 md:py-24 flex flex-col justify-between  overflow-hidden">
                <img className=' absolute z-[-1] w-full h-full exp_pr_img cover inset-0' src="/images/aboutpage/experiences_bg.png" alt="" />
                <div className="">
                    <h2 className=' text-3xl md:text-6xl  text-white leading-none md:leading-12 font-semibold '>Building Through <br /><span className=' playfair-italic font-thin'>Experiences</span></h2>
                    <p className='md:text-xl text-white md:w-[40%] mt-5  leading-tight'>A playful childhood moment captured with joy, innocence, and timeless memories that continue to inspire warmth, happiness, and beautiful storytelling.</p>
                </div>

                <div className="w-full bg-[#FFFEF7] items-stretch md:flex gap-x-20  p-6  md:p-10 rounded-xl">
                    <div className="md:w-[30%]">
                        <p className=' text-choc  text-3xl md:text-4xl'>01</p>
                        <p className=' text-3xl md:text-4xl mt-5 leading-none text-gray'>Design Patent & <br /><span className=' text-choc playfair-italic'>product thinking</span></p>
                    </div>
                    <div className=" w-full max-sm:h-px max-sm:my-5 md:w-px  bg-[#713F1E30]"></div>
                    <div className="  leading-tight md:w-[70%] space-y-5 opacity-80">
                        <p>One of the defining milestones during my time at NID was securing a design patent for a sustainable cradle concept developed as part of a furniture design project. The project focused on creating an environmentally conscious solution that combined functionality, comfort, and thoughtful craftsmanship. From early research and concept sketches to prototyping and final execution, the experience taught me how to transform an idea into a practical design solution with real-world relevance.</p>
                        <p>The project strengthened my understanding of sustainable design, material exploration, and user-centered thinking while teaching me how to balance creativity, usability, and real-world impact.</p>
                    </div>
                </div>

                <div
                    style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)" }} className=" max-sm:pt-24 clip_div_1 absolute z-200 bg-choc -bottom-full left-0 w-full">
                    <div className=" container w-full  text-white items-stretch md:flex gap-x-20 py-12 md:py-24 rounded-xl">
                        <div className="md:w-[30%]">
                            <p className='   text-3xl md:text-4xl'>02</p>
                            <p className=' text-3xl md:text-4xl mt-5 leading-none'>Designing for <br /><span className='  playfair-italic'>healthcare impact</span></p>
                        </div>
                        <div className="w-full max-sm:h-px max-sm:my-5 md:w-px  bg-white/50"></div>
                        <div className=" max-sm:mt-5 leading-tight md:w-[70%] space-y-5 opacity-80">
                            <p>My journey later expanded into healthcare innovation at IISc, where I worked with CPDM as a Design and Patient Advisor on one of India’s first insulin pumps for people living with Type 1 Diabetes.</p>
                            <p>Living with Type 1 Diabetes myself helped me design from both perspectives — user and designer — strengthening my belief that meaningful design is built through empathy and real-life experience.</p>
                        </div>
                    </div>
                </div>

                <div
                    style={{ clipPath: "polygon(0 0%, 100% 25%, 100% 100%, 0% 100%)" }} className="  max-sm:pt-24 clip_div_2 -bottom-full absolute z-500 bg-[#FFFEF7]  left-0 w-full">
                    <div className=" container w-full  items-stretch md:flex gap-x-20 py-12 md:py-24 rounded-xl">
                        <div className="md:w-[30%] text-choc">
                            <p className='   text-3xl md:text-4xl'>03</p>
                            <p className=' text-3xl md:text-4xl mt-5 leading-none text-gray'>Designing for <br /><span className=' text-choc playfair-italic'>healthcare impact</span></p>
                        </div>
                        <div className="w-full max-sm:h-px max-sm:my-5 md:w-px  bg-[#713F1E30]"></div>
                        <div className=" max-sm:mt-5 leading-tight md:w-[70%] space-y-5 opacity-80">
                            <p>My journey later expanded into healthcare innovation at IISc, where I worked with CPDM as a Design and Patient Advisor on one of India’s first insulin pumps for people living with Type 1 Diabetes.</p>
                            <p>Living with Type 1 Diabetes myself helped me design from both perspectives — user and designer — strengthening my belief that meaningful design is built through empathy and real-life experience.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experiences