"use client";
import { RiArrowLeftLine, RiArrowRightLine, RiDoubleQuotesR } from '@remixicon/react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useRef, useState } from 'react'

export const testimonials = [
    {
        id: "01/08",
        text:
            "Diksha has been an outstanding partner to the IDX Document Management team, especially on critical, long-running initiatives such as the top-priority QB AP Automation project. She brings a rare combination of strong UX judgment, thoughtful execution, and deep engineering partnership.",
        name: "Shaibal Mandal",
        role: "Manager 3 Development",
        image: "/images/testimonial/img1.png",
    },

    {
        id: "02/08",
        text:
            "Diksha has done a great job driving the IDX experience in the bills context. Her Figmas are always super organized and easy to navigate. Every flow feels well thought through and she truly cares about getting the details right.",
        name: "Austin Sanchez",
        role: "Staff Solutions Designer",
        image: "/images/testimonial/img1.png",
    },

    {
        id: "03/08",
        text:
            "Every design concept that Diksha works on includes thoughtful consideration and deep understanding of the challenge. Her research-first approach and focus on usability make collaboration enjoyable and impactful.",
        name: "Ainatte Inbal",
        role: "Staff Design Researcher",
        image: "/images/testimonial/img1.png",
    },

    {
        id: "04/08",
        text:
            "Diksha consistently demonstrates ownership and exceptional diligence. She proactively aligns stakeholders, drives customer empathy sessions, and maintains strong communication across teams.",
        name: "Apoorva Gopal Jha",
        role: "Senior Staff Product Manager",
        image: "/images/testimonial/img1.png",
    },

    {
        id: "05/08",
        text:
            "Working with Diksha has been an amazing experience. She simplified complex flows, identified gaps quickly, and delivered highly detailed and impactful case studies.",
        name: "Sourodeep Chatterjee",
        role: "Senior Software Engineer",
        image: "/images/testimonial/img1.png",
    },

    {
        id: "06/08",
        text:
            "Diksha does a great job conducting user research and ideating design. Her passion shows in her work and she communicates progress and ideas clearly.",
        name: "Minji Kang",
        role: "Senior Product Designer",
        image: "/images/testimonial/img1.png",
    },

    {
        id: "07/08",
        text:
            "Diksha consistently prioritizes user needs in her work. Her dedication to research uncovers insights that lead to intuitive solutions and stronger collaboration.",
        name: "Juhi",
        role: "Senior Software Engineer - Backend",
        image: "/images/testimonial/img1.png",
    },

    {
        id: "08/08",
        text:
            "Diksha takes ownership and is highly resourceful in overcoming blockers. Her research and insight gathering helped the team prioritize meaningful product challenges.",
        name: "Gautham Muthukumar",
        role: "Principal Product Manager",
        image: "/images/testimonial/img1.png",
    },
];
const Testimonials = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);

    return (
        <div>
            <div className="container py-12 md:py-24 space-y-5 md:space-y-16">
                <div className="w-full grid grid-cols-6 items-end">
                    <div className="col-span-4">
                        <h2 className='text-gray text-3xl md:text-6xl  leading-none md:leading-14 font-thin '>Experiences Shared<br />  <span className='text-choc playfair-italic'>By Brands.</span></h2>
                    </div>
                    <div className="col-span-2 pb-3 flex justify-end gap-x-1 md:gap-x-4 ">
                        <button
                            aria-label="Previous slide"
                            disabled={isBeginning}
                            onClick={() => swiperRef.current?.slidePrev()}
                            className={`prev_button size-10 md:size-12 border-[#713F1E30] text-choc center rounded-full border transition-all duration-300
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
                            className={`next_button size-10 md:size-12 border-[#713F1E30] text-choc center rounded-full border transition-all duration-300
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
                            640: { spaceBetween: 30 },
                        }}
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                className=" bg-[#E6DEC9]  rounded-2xl  p-8 w-[90vw] md:w-[40vw]! h-96! shrink-0 text-choc font-semibold  flex!   flex-col  justify-between   "
                            >
                                {/* Top */}
                                <div className=" md:grid grid-cols-4">
                                    <div className=" w-full flex items-center justify-between col-span-1">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="     w-14     h-14     rounded-full     object-cover     shrink-0   "
                                        />
                                          <p className=" md:hidden text-xl font-semibold  ">
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

                                            <h5 className="text-xl leading-none mb-2 uppercase playfair " >
                                                {item.name}
                                            </h5>

                                            <p className=" ">
                                                {item.role}
                                            </p>
                                        </div>
                                        <img src="/icons/oi_double-quote-sans-left.svg" className='w-8' alt="" />
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials