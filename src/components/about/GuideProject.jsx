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
        transform:"left-0",
        title: { label: "Empathy", class: "text-gray" },
        highlight: { label: "First", class: "text-choc" },
        description:
            "Designing with a deep understanding of real human experiences to create intuitive, meaningful, and impactful solutions that feel natural, thoughtful, and deeply connected.",
    },
    {
        rotate: "rotate-[-10deg]",
        bgColor: "bg-choc",
        transform:"left-[18%]",
        title: { label: "Curiosity &", class: "text-white" },
        highlight: { label: "Exploration", class: "text-white" },
        description:
            "Continuously learning through conversations, observation, travel, and experimentation to discover new perspectives and create better, more meaningful design experiences.",
    },
    {
        rotate: "rotate-[5deg]",
        bgColor: "bg-[#F9F4EC]",
        transform:" left-[35%]",
        title: { label: "Systems", class: "text-gray" },
        highlight: { label: "Thinking", class: "text-choc" },
        description:
            "Looking beyond individual screens to design connected experiences, seamless systems, and meaningful digital ecosystems that work together naturally and intuitively.",
    },
    {
        rotate: "rotate-[-10deg]",
        bgColor: "bg-[#E6DEC9]",
        transform:"right-[18%]",
        title: { label: "Consistency", class: "text-gray" },
        highlight: { label: "Over Intensity", class: "text-choc" },
        description:
            "Believing in long-term practice, patience, and steady growth through continuous learning, consistent effort, and the willingness to evolve with every experience and challenge.",
    },
    {
        rotate: "rotate-[10deg]",
        bgColor: "bg-white",
        transform:"right-0",
        title: { label: "Research", class: "text-gray" },
        highlight: { label: "Led Decisions", class: "text-choc" },
        description:
            "Balancing emotional understanding with insight-driven thinking and evidence to create thoughtful, human-centered solutions grounded in both empathy and clarity.",
    },
];

const GuideProject = () => {

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

        tl.from(".slid_crd", {
            xPercent:400,
            // ease:"none",
            stagger:0.1
        })
   
    })

    return (
        <div ref={containerRef} className=' h-[300vh] relative' >
            <div className=" container sticky! top-0  h-screen  py-24 flex flex-col justify-between  overflow-hidden">
                <div className="w-full center flex-col text-center">
                    <h2 className=' text-6xl text-gray leading-12 font-semibold '>Principles that  <br /><span className=' text-choc playfair-italic font-thin'>Guide Every Project</span></h2>
                </div>

                <div className="w-full relative">
                    {
                        valuesData.map((item, index) => (
                        <div key={index} className={` slid_crd w-[25vw] p-10 rounded-xl border border-black/20 absolute aspect-square bottom-0 flex flex-col  justify-between ${item.transform} ${item.bgColor} ${item.rotate}`}>

                                <div className="">
                                    <p className={`text-4xl leading-none font-semibold ${item.title.class}`}>{item.title.label}</p>
                                    <p className={`text-4xl leading-none font-semibold playfair-italic ${item.highlight.class}`}>{item.highlight.label}</p>
                                </div>
                                <p className={`text-gray font-semibold leading-tight ${index === 1 && "text-white! opacity-80"} `}>{item.description}</p>

                            </div>
                        ))
                    }

                </div>


            </div>
        </div>
    )
}

export default GuideProject