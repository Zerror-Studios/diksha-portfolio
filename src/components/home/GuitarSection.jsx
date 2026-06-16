"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
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
    const sectionRef = useRef(null)
    const paraRef = useRef(null);
    const audioRefs = useRef([]);
    const bowRef = useRef(null);
    const bowWrapperRef = useRef(null);
    const [onSection, setOnSection] = useState(false)
    const [activeText, setActiveText] = useState("");
    const strings = [512, 562, 612, 660];

    const pluckString = (path, index) => {
        const x = Number(path.dataset.x);

        let frame = 0;
        const totalFrames = 60;

        const animate = () => {
            const progress = frame / totalFrames;

            const amp =
                Math.sin(progress * Math.PI * 10) *
                (1 - progress) *
                20;

            path.setAttribute(
                "d",
                `M ${x} -250 Q ${x + amp} 350 ${x} 740`
            );

            frame++;

            if (frame <= totalFrames) {
                requestAnimationFrame(animate);
            } else {
                path.setAttribute(
                    "d",
                    `M ${x} -250 Q ${x} 350 ${x} 740`
                );
            }
        };

        animate();

        const audio = audioRefs.current[index];

        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => { });
        }
        if (bowRef.current) {
            gsap.fromTo(
                bowRef.current,
                {
                    rotate: 0,
                },
                {
                    rotate: -10,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.out",
                    overwrite: false,
                }
            );
        }
    };

    useEffect(() => {
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const moveHandler = (e) => {
            const dx = e.clientX - pos.x;

            pos.x = e.clientX;
            pos.y = e.clientY;

            gsap.to(bowWrapperRef.current, {
                x: e.clientX - 100,
                y: e.clientY - 100,
                rotation: gsap.utils.clamp(-4, 4, dx * 0.08),
                duration: 0.45,
                ease: "power3.out",
                overwrite: true,
                force3D: true,
                transformOrigin: "50% 90%",
            });
        };

        window.addEventListener("mousemove", moveHandler);

        return () => {
            window.removeEventListener("mousemove", moveHandler);
        };
    }, []);

    // useGSAP(() => {
    //     if (window.innerWidth < 750) return

    //     gsap.fromTo([".guitar_bg_img"], {
    //         y: -400
    //     }, {
    //         y: 400,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".guitar_section",
    //             start: "top bottom",
    //             end: "bottom top",
    //             scrub: true,
    //         }
    //     })
    // })

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

    useEffect(() => {
        const checkInside = (e) => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();

            const x = e?.clientX ?? window.innerWidth / 2;
            const y = e?.clientY ?? window.innerHeight / 2;

            const inside =
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom;

            setOnSection(inside);
        };

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            checkInside(e);
        };

        const handleScroll = () => {
            checkInside({
                clientX: mouseX,
                clientY: mouseY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, true);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll, true);
        };
    }, []);

    return (
        <>
            <div
                ref={sectionRef}

                className=" guitar_section md:mt-12 w-full h-[120vh]! md:h-[100vw]! relative text-choc overflow-hidden cursor-none " >


                <div className=" max-sm:hidden flex gap-x-[.6vw] absolute left-[41%]  bottom-[16%] z-20">
                    <div className="size-[3.5vw] relative aspect-square ">
                        <Image fill className='h-full' src="/images/homepage/button.png" alt="img" />
                    </div>
                    <div className="size-[3.5vw] relative aspect-square ">
                        <Image fill className='h-full' src="/images/homepage/button.png" alt="img" />
                    </div>
                    <div className="size-[3.5vw] relative aspect-square ">
                        <Image fill className='h-full' src="/images/homepage/button.png" alt="img" />
                    </div>
                    <div className="size-[3.5vw] relative aspect-square ">
                        <Image fill className='h-full' src="/images/homepage/button.png" alt="img" />
                    </div>
                </div>

                <div
                    ref={bowWrapperRef}
                    className={`fixed max-sm:hidden top-0 left-0 pointer-events-none z-[9999]`}
                >
                    <div
                        className={` relative transition-opacity duration-150 ${onSection ? "opacity-100" : "opacity-0"}`}>
                        <Image
                            ref={bowRef}
                            src="/images/homepage/violen_stick.png"
                            alt="img"
                            height={200}
                            width={250}
                        />
                    </div>
                </div>

                <div className=" max-sm:hidden audios">


                    <audio
                        ref={(el) => (audioRefs.current[0] = el)}
                        src="/audio/1.mp3"
                        preload="auto"
                    />

                    <audio
                        ref={(el) => (audioRefs.current[1] = el)}
                        src="/audio/5.mp3"
                        preload="auto"
                    />

                    <audio
                        ref={(el) => (audioRefs.current[2] = el)}
                        src="/audio/6.mp3"
                        preload="auto"
                    />

                    <audio
                        ref={(el) => (audioRefs.current[3] = el)}
                        src="/audio/7.mp3"
                        preload="auto"
                    />
                </div>

                <div className=" strings max-sm:hidden w-full h-full absolute z-10 inset-0">
                    <svg
                        viewBox="0 0 1200 700"
                        className="w-full h-full"
                    >
                        {strings.map((x, index) => (
                            <g key={index}>
                                {/* Invisible hover zone */}
                                <rect
                                    x={x - 25}
                                    y="50"
                                    width="50"
                                    height="600"
                                    fill="transparent"
                                    onMouseEnter={(e) => {
                                        const path = e.currentTarget.nextSibling;
                                        pluckString(path, index);
                                    }}
                                />

                                {/* Vertical string */}
                                <path
                                    data-x={x}
                                    d={`M ${x} -250 Q ${x} 350 ${x} 740`}
                                    stroke="white"
                                    strokeWidth="2"
                                    fill="none"
                                    pointerEvents="none"
                                />
                            </g>
                        ))}
                    </svg>
                </div>

                <div className="w-full md:grid grid-cols-3 padding pt-10 pointer-events-none md:p-20 absolute z-10">
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
                            <p className=' leading-none'>Music, movement, travel, and quiet observation —  <br />they all shape how I think,
                                feel, and create.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:grid grid-cols-3 bottom-0 p-5 pb-10 md:p-20 absolute z-10">
                    <div className="col-span-2 relative">
                        <div className=" w-full md:w-fit grid grid-cols-3 gap-2">

                            {icons.map((item, i) => (
                                <div onMouseEnter={() => setActiveText(item.para)} onMouseLeave={() => setActiveText("")} key={i} className=" size-16 md:size-18 cursor-pointer hover:scale-90 hover:bg-[#713F1E] backdrop-blur-md transition-all duration-150 rounded-full bg-[#713F1E30] center">
                                    <img src={item.icon} alt="img" className='max-sm:w-8 w-10' />
                                </div>
                            ))}
                        </div>

                        <p
                            ref={paraRef}
                            className="absolute mt-5 font-semibold leading-tight"
                        >

                        </p>

                    </div>
                    <div className=" max-sm:mt-10 font-semibold space-y-2 md:space-y-5">
                        <p className='  leading-tight md:w-[70%]'> I design with empathy, understanding people, not just problems, by blending systems
                            thinking with careful craft. Like the violin, every tool here took time to learn</p>
                        <Link href={"/about"} className='bg-choc text-sm uppercase hover:bg-transparent! border border-transparent hover:text-[#713F1E] hover:border-[#713F1E] text-white px-6 py-3 pb-1.5 rounded-lg transition-all duration-300 w-fit block'>
                            <p>Read More</p>
                        </Link>
                    </div>
                </div>


                <Image fill src="/images/homepage/guitar.png" alt="guitar" className="cover max-sm:object-left md:object-center guitar_bg_img" />
            </div>
        </>
    )
}

export default GuitarSection