"use client";
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { Link } from 'next-view-transitions';
import ScrambleTextPlugin from 'gsap/dist/ScrambleTextPlugin';
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)

const icons = [
    {
        icon: "/icons/adobe.svg",
        para: "Adobe",
    },
    {
        icon: "/icons/chatgpt.svg",
        para: "ChatGPT",
    },
    {
        icon: "/icons/claude.svg",
        para: "Claude",
    },
    {
        icon: "/icons/cursor.svg",
        para: "Cursor",
    },
    {
        icon: "/icons/figma.svg",
        para: "Figma",
    },
    {
        icon: "/icons/github.svg",
        para: "GitHub",
    },
];

const GuitarSection = () => {

    const [activeText, setActiveText] = useState("");
    const paraRef = useRef(null);

    useGSAP(() => {
        if (window.innerWidth < 750) return

        gsap.fromTo([".guitar_bg_img"], {
            y: -400
        }, {
            y: 400,
            ease: "none",
            scrollTrigger: {
                trigger: ".guitar_section",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        })
    })

    useGSAP(
        () => {
            if (!activeText || !paraRef.current) return;

            gsap.to(paraRef.current, {
                duration: 0.4,
                scrambleText: {
                    text: activeText,
                    chars: "•••••••••",
                    speed: 0.4,
                },
                ease: "none",
            });
        },
        { dependencies: [activeText] }
    );

    return (
        <>
            <div className=" guitar_section w-full h-[120vh]! md:h-[200vh]! relative text-choc overflow-hidden">

                <div className="w-full md:grid grid-cols-3 padding pt-10 md:p-20 absolute z-10">
                    <div className="col-span-2 max-sm:hidden"></div>
                    <div className="  font-semibold space-y-5">
                        <div className="">
                            <h6 className=' text-2xl'>Empathy</h6>
                            <p className=' leading-none'>I design with people at <br /> the heart.</p>
                        </div>
                        <div className="">
                            <h6 className=' text-2xl'>Courage</h6>
                            <p className=' leading-none'>I step out, challenge myself, <br /> and grow.</p>
                        </div>
                        <div className="">
                            <h6 className=' text-2xl'>Curiosity</h6>
                            <p className=' leading-none'>I stay curious to keep learning <br /> and evolving.</p>
                        </div>
                        <div className="">
                            <h6 className=' text-2xl'>Creativity</h6>
                            <p className=' leading-none'>Music inspires how I think, <br />feel, and create.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:grid grid-cols-3 bottom-0 p-5 pb-10 md:p-20 absolute z-10">
                    <div className="col-span-2 relative">
                        <div className=" w-full md:w-fit grid grid-cols-3 gap-2">

                            {icons.map((item, i) => (
                                <div onMouseEnter={() => setActiveText(item.para)} onMouseLeave={() => setActiveText("")} key={i} className=" size-16 md:size-18 hover:scale-90 hover:bg-[#713F1E] backdrop-blur-md transition-all duration-150 rounded-full bg-[#713F1E30] center">
                                    <img src={item.icon} alt="img" className='max-sm:w-8 w-10' />
                                </div>
                            ))}
                        </div>

                        <p
                            ref={paraRef}
                            className="absolute mt-5 font-semibold leading-tight"
                        >
                            hover
                        </p>

                    </div>
                    <div className=" max-sm:mt-10 font-semibold space-y-2 md:space-y-5">
                        <p className='  leading-tight md:w-[70%]'>I design with empathy understanding people, not just problems while blending systems thinking,</p>
                        <Link href={"/about"} className='bg-choc text-sm uppercase hover:bg-transparent! border border-transparent hover:text-[#713F1E] hover:border-[#713F1E] text-white px-6 py-3 pb-1.5 rounded-lg transition-all duration-300 w-fit block'>
                            <p>Read More</p>
                        </Link>
                    </div>
                </div>


                <Image fill src="/images/homepage/guitar.png" alt="guitar" className="cover max-sm:object-left brightness-80 guitar_bg_img" />
            </div>
        </>
    )
}

export default GuitarSection