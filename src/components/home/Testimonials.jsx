"use client";
import { RiArrowLeftLine, RiArrowRightLine, RiDoubleQuotesR } from '@remixicon/react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useRef, useState } from 'react'
import Image from 'next/image';

export const testimonials = [
    {
        id: "01/08",
        text:
            "Diksha has been an outstanding partner to the IDX Document Management team, especially on critical, long-running initiatives such as the top-priority QB AP Automation project. She brings a rare combination of strong UX judgment, thoughtful execution, and deep engineering partnership.",
        name: "Shaibal Mandal",
        role: "Manager 3 Development",
        image: "/images/testimonial/Shaibal/1691483822968.jpeg",
    },

    {
        id: "02/08",
        text:
            "Diksha has done a great job driving the IDX experience in the bills context. Her Figmas are always super organized and easy to navigate. Every flow feels well thought through and she truly cares about getting the details right.",
        name: "Austin Sanchez",
        role: "Staff Solutions Designer",
        image: "/images/testimonial/Austin/1776805933513.png",
    },

    {
        id: "03/08",
        text:
            "Every design concept that Diksha works on includes thoughtful consideration and deep understanding of the challenge. Her research-first approach and focus on usability make collaboration enjoyable and impactful.",
        name: "Ainatte Inbal",
        role: "Staff Design Researcher",
        image: "/images/testimonial/Ainatte/1701257306523.jpeg",
    },

    {
        id: "04/08",
        text:
            "Diksha consistently demonstrates ownership and exceptional diligence. She proactively aligns stakeholders, drives customer empathy sessions, and maintains strong communication across teams.",
        name: "Apoorva Gopal Jha",
        role: "Senior Staff Product Manager",
        image: "/images/testimonial/Apoorva/1643013763164.jpeg",
    },

    {
        id: "05/08",
        text:
            "Working with Diksha has been an amazing experience. She simplified complex flows, identified gaps quickly, and delivered highly detailed and impactful case studies.",
        name: "Sourodeep Chatterjee",
        role: "Senior Software Engineer",
        image: "/images/testimonial/Sourodeep/1708777835646.jpeg",
    },

    {
        id: "06/08",
        text:
            "Diksha does a great job conducting user research and ideating design. Her passion shows in her work and she communicates progress and ideas clearly.",
        name: "Minji Kang",
        role: "Senior Product Designer",
        image: "/images/testimonial/Christine/1652386647078.jpeg",
    },

    {
        id: "07/08",
        text:
            "Diksha consistently prioritizes user needs in her work. Her dedication to research uncovers insights that lead to intuitive solutions and stronger collaboration.",
        name: "Juhi",
        role: "Senior Software Engineer - Backend",
        image: "/images/testimonial/Juhi/1762945470305.jpeg",
    },

    {
        id: "08/08",
        text:
            "Diksha takes ownership and is highly resourceful in overcoming blockers. Her research and insight gathering helped the team prioritize meaningful product challenges.",
        name: "Gautham Muthukumar",
        role: "Principal Product Manager",
        image: "/images/testimonial/Gautham/1744540626789.jpeg",
    },
];

const Testimonials = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);

    return (
        <>
            <div className="container max-sm:px-0! py-12 md:py-24 space-y-5 md:space-y-16">
                <div className="w-full max-sm:px-4 grid grid-cols-6 items-end">
                    <div className="col-span-5">
                        <h2 className=' text-3xl capitalize leading-none text-choc font-semibold '>Experiences Shared<br /> By Brands.</h2>
                    </div>
                    <div className="col-span-1  shrink-0 pb-3 flex justify-end gap-x-1 md:gap-x-4 ">
                        <button
                            aria-label="Previous slide"
                            disabled={isBeginning}
                            onClick={() => swiperRef.current?.slidePrev()}
                            className={`prev_button shrink-0 size-10 md:size-12 border-[#713F1E30] text-choc center rounded-full border transition-all duration-300
                            ${isBeginning
                                    ? "opacity-40 cursor-not-allowed!"
                                    : "group hover:bg-[#713F1E] hover:text-white! hover:border-[#713F1E]"
                                }`}
                        >
                            <RiArrowLeftLine size={20} />
                        </button>

                        <button
                            aria-label="Next slide"
                            disabled={isEnd}
                            onClick={() => swiperRef.current?.slideNext()}
                            className={`next_button shrink-0 size-10 md:size-12 border-[#713F1E30] text-choc center rounded-full border transition-all duration-300
                                ${isEnd
                                    ? "opacity-40 cursor-not-allowed!"
                                    : "group hover:bg-[#713F1E] hover:text-white! hover:border-[#713F1E]"
                                }`}
                        >
                            <RiArrowRightLine size={20} />
                        </button>
                    </div>
                </div>

                <div className="">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        spaceBetween={30}
                        slidesPerView={"auto"}
                        grabCursor
                        className="cursor-grab active:cursor-grabbing"
                        breakpoints={{
                            0: { spaceBetween: 10 },
                            640: { spaceBetween: 20 },
                        }}
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                className=" max-sm:first:ml-4 max-sm:last:mr-4 bg-[#E6DEC9]  rounded-2xl  p-8 w-[85vw]! md:w-[40vw]! h-96! shrink-0 text-choc font-semibold  flex!   flex-col  justify-between   "
                            >
                                {/* Top */}
                                <div className=" md:grid grid-cols-4">
                                    <div className=" w-full flex  justify-between col-span-1">
                                        <div className=" size-14 md:size-16  overflow-hidden   rounded-full shrink-0  relative">
                                            <Image fill
                                                src={item.image}
                                                alt={item.name}
                                                className="cover"
                                            />
                                        </div>
                                        <p className=" md:hidden text-xl leading-none font-semibold  ">
                                            {item.id}
                                        </p>
                                    </div>
                                    <div className=" max-sm:mt-5 col-span-3">
                                        <p className="md:text-xl leading-tight ">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom */}
                                <div className=" max-sm:mt-5 md:grid grid-cols-4 ">
                                    <div className="max-sm:hidden col-span-1">
                                        <p className=" text-xl font-semibold  ">
                                            {item.id}
                                        </p>
                                    </div>

                                    <div className=" w-full col-span-3 flex items-start justify-between">
                                        <div className="">

                                            <h5 className="text-xl leading-none uppercase  " >
                                                {item.name}
                                            </h5>

                                            <p className=" ">
                                                {item.role}
                                            </p>
                                        </div>
                                        <img src="/icons/oi_double-quote-sans-left.svg" className='w-8' alt="img" />
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Testimonials