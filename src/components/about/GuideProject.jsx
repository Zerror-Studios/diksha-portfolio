"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)


const valuesData = [
    {
        rotate: "rotate-[3deg]",
        bgColor: "bg-white",
        transform: "left-0",
        title: { label: "Empathy", class: "text-choc" },
        highlight: { label: "First", class: "text-choc" },
        description:
            "Designing with a deep understanding of real human experiences to create intuitive, meaningful, and impactful solutions that feel natural, thoughtful, and deeply connected.",
    },
    {
        rotate: "rotate-[-10deg]",
        bgColor: "bg-choc",
        transform: "left-[18%]",
        title: { label: "Curiosity &", class: "text-white" },
        highlight: { label: "Exploration", class: "text-white" },
        description:
            "Continuously learning through conversations, observation, travel, and experimentation to discover new perspectives and create better, more meaningful design experiences.",
    },
    {
        rotate: "rotate-[5deg]",
        bgColor: "bg-[#F9F4EC]",
        transform: " left-[35%]",
        title: { label: "Systems", class: "text-choc" },
        highlight: { label: "Thinking", class: "text-choc" },
        description:
            "Looking beyond individual screens to design connected experiences, seamless systems, and meaningful digital ecosystems that work together naturally and intuitively.",
    },
    {
        rotate: "rotate-[-10deg]",
        bgColor: "bg-[#E6DEC9]",
        transform: "right-[18%]",
        title: { label: "Consistency", class: "text-choc" },
        highlight: { label: "Over Intensity", class: "text-choc" },
        description:
            "Believing in long-term practice, patience, and steady growth through continuous learning, consistent effort, and the willingness to evolve with every experience and challenge.",
    },
    {
        rotate: "rotate-[10deg]",
        bgColor: "bg-white",
        transform: "right-0",
        title: { label: "Research", class: "text-choc" },
        highlight: { label: "Led Decisions", class: "text-choc" },
        description:
            "Balancing emotional understanding with insight-driven thinking and evidence to create thoughtful, human-centered solutions grounded in both empathy and clarity.",
    },
];

const GuideProject = () => {

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

        tl.from(".slid_crd", {
            xPercent: 400,
            // ease:"none",
            stagger: 0.1
        })

    })

    return (
        <div ref={containerRef} className=' md:h-[300vh] relative' >
            <div className=" container max-sm:px-0!  md:sticky! top-0  md:h-screen! py-12 md:py-24 md:flex flex-col justify-between  overflow-hidden">
                <div className=" max-sm:px-4 w-full  md:text-center">
                    <h2 className=' text-3xl capitalize capitalize text-choc leading-none  font-semibold '>Principles that  <br />Guide Every Project</h2>
                </div>

                <div className="w-full max-sm:flex max-sm:overflow-x-scroll  max-sm:mt-10 scroller_none gap-x-3 relative">
                    {
                        valuesData.map((item, index) => (
                            <div key={index} className={` max-sm:first:ml-4 max-sm:last:mr-4 slid_crd w-[85vw] shrink-0 md:w-[25vw] p-5 md:p-10 rounded-xl border border-black/20 md:absolute aspect-square bottom-0 flex flex-col  justify-between max-sm:transform-none!  max-sm:rotate-none! ${item.transform} ${item.bgColor} ${item.rotate}`}>

                                <div className="">
                                    <p className={` text-3xl capitalize  leading-none font-semibold ${item.title.class}`}>{item.title.label}</p>
                                    <p className={` text-3xl capitalize  leading-none font-semibold  ${item.highlight.class}`}>{item.highlight.label}</p>
                                </div>
                                <p className={`text-gray  leading-tight ${index === 1 && "text-white! opacity-80"} `}>{item.description}</p>

                            </div>
                        ))
                    }

                </div>


            </div>
        </div>
    )
}

export default GuideProject