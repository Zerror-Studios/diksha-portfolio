"use client"
import React from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, SplitText)

const ContactHero = () => {

        useGSAP(() => {
        const heading_split = SplitText.create(".heading_split", {
            type: "lines",
            linesClass: "split-line"
        });
        const paragraph_split = SplitText.create(".paragraph_split", {
            type: "lines",
            linesClass: "split-line"
        });

        [...heading_split.lines, ...paragraph_split.lines].forEach((line) => {
            const wrapper = document.createElement("div");

            wrapper.classList.add("line-wrapper");

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.set([heading_split.lines, paragraph_split.lines], { yPercent: 120 });

        const tl = gsap.timeline({
            delay: 0.5
        })
        tl.to(".content_box", {
            opacity: 1,
            duration: 0.01
        })
        tl.to(heading_split.lines, {
            yPercent: 20,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.05,
        }, "<");
        tl.to(paragraph_split.lines, {
            yPercent: 0,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.05,
        }, "<+0.2")
        .to(".ctct_form",{
            opacity:1
     }, "<+0.4")

    });

  return (
    <div className=' content_box opacity-0 w-full md:h-[70vh] max-sm:pt-52'>
        <div className="w-full container md:grid md:grid-cols-6 items-end">
            <div className="col-span-4 space-y-2 md:space-y-5">
                <h1 className=' heading_split hero_title  text-choc font-semibold leading-none  text-4xl  md:text-7xl'>Still Curious? </h1>
                <div className="flex gap-x-2 items-center ">
                    <div className="size-2 -translate-y-1 bg-[#713F1E] "></div>
                    <p className='md:text-xl text-gray paragraph_split'> Let's start a conversation.</p>
                </div>
            </div>
            <div className=" max-sm:mt-12 col-span-2 text-gray paragraph_split leading-tight ">
                <p>The best work usually starts with a conversation. Whether you're hiring, building 
something, or just curious how I think - write to me. A role, a collaboration, or a question 
about the work, I read every message and I'd love to hear from you. Design, research, or 
what I'm learning on the violin this week - all of it's welcome.</p>
            </div>
        </div>
    </div>
  )
}

export default ContactHero