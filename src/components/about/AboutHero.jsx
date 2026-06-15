"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText';
import Image from 'next/image'
import React from 'react'
gsap.registerPlugin(ScrollTrigger, SplitText)

const AboutHero = () => {

    useGSAP(() => {

        gsap.to(".diksha_img", {
            opacity: 0,
            duration: 0.1,
            scrollTrigger: {
                trigger: ".abt_desc_sec",
                start: "bottom top",
                toggleActions: "play none none reverse"
            }
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about_hero",
                start: "2% top",
                end: "bottom bottom",
                scrub: true
            }
        })
        tl.to(".abt_hero_bg", {
            backgroundColor: "#F9F7EC",
        })
        tl.to(".abt_hero_bg_title", {
            color: "#713F1E",
        }, "<")

        if (window.innerWidth < 750) return
        gsap.fromTo([".clip_inn_img"], {
            y: -200,
        }, {
            y: 200,
            ease: "none",
            scrollTrigger: {
                trigger: ".clip_paren",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        })
    })

    useGSAP(() => {
        const heading_split = SplitText.create(".heading_split", {
            type: "lines",
            linesClass: "split-line"
        });

        heading_split.lines.forEach((line) => {
            const wrapper = document.createElement("div");

            wrapper.classList.add("line-wrapper");

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.set([heading_split.lines], { yPercent: 120 });

        const tl = gsap.timeline({
            delay: 0.5
        })
        tl.to(".content_box", {
            opacity: 1,
            duration: 0.01
        })
        tl.to(heading_split.lines, {
            yPercent: 15,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.05,
        }, "<");

    });
    return (
        <>
            <div className=" content_box about_hero w-full relative">
                <div className=" diksha_img w-full h-[100svh]! fixed inset-0 z-[-1]">
                    <Image src="/images/aboutpage/diksha_pic.png" alt="img" fill className='object-cover' />
                </div>
                <div className=" abt_hero_bg w-full h-[100svh]! flex items-center text-center container justify-center bg-[#F9F7EC00]">
                    <h1 className=' abt_hero_bg_title heading_split font-semibold   z-10 text-white leading-none  text-4xl  md:text-7xl' >Hello, I am <br /> Diksha Ghanshani</h1>
                </div>
                <div className=" padding abt_hero_bg abt_desc_sec  w-full h-[50vh] center text-center bg-[#F9F7EC00] ">
                    <p className='font-semibold text-choc leading-none md:w-[65%] text-3xl  '>From observing customer behavior in a family-run stationery shop to designing healthcare solutions and large-scale product experiences, the journey has always been driven by one belief —  <span className='highlight'>meaningful design begins with understanding people.</span></p>
                </div>
            </div>
            <div className=" clip_paren w-full h-screen! relative overflow-hidden bg-[#F9F7EC]">
                <div className="w-full  absolute z-10">
                    <img src="/images/aboutpage/abt_clip.svg" className='w-full ' alt="img" />
                </div>

                <Image src="/images/aboutpage/abt_img.png" alt='loading' fill className=' clip_inn_img cover ' />

                <div className="container text-white w-full flex flex-col justify-between pt-52 pb-14 absolute! inset-0 z-10 text-center">
                    <h2 className='text-white text-3xl   leading-none font-semibold '>Design beyond<br />screens.</h2>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 text-left gap-y-10 gap-x-24">
                        <div className="flex gap-x-4 leading-tight md:text-lg ">
                            <div className="size-2 shrink-0 translate-y-1 bg-white"></div>
                            <p>Design, for me, has never been limited to visuals or interfaces. It has always been about people — how they think, behave, choose, struggle, connect, and experience the world around them. I believe truly meaningful design begins with empathy and grows through understanding human needs, emotions, and everyday experiences.</p>
                        </div>
                        <div className="flex gap-x-4 leading-tight md:text-lg ">
                            <div className="size-2 shrink-0 translate-y-1 bg-white"></div>
                            <p>Growing up in a family business shaped the way I observe products, environments, and customer interactions. Those early experiences eventually evolved into a deeper practice of research-driven, empathy-led design focused on building impactful experiences across products, healthcare, communities, and digital ecosystems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero