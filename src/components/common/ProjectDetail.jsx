"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const ProjectDetail = ({ project }) => {

  const carouselAspectClasses = {
    square: "aspect-square w-[85vw]! md:w-[40vw]!",
    portrait: "aspect-[3/4] w-[85vw]! md:w-[30vw]!",
    landscape: "aspect-video w-[85vw]! md:w-[70vw]!",
  };

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [slides, setSlides] = useState(project.slides || []);
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(!project.hasMoreLockedSlides);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const swiperRef = useRef(null);

  const handleUnlockProject = async (event) => {
    event.preventDefault();

    if (!password.trim()) return;

    setIsUnlocking(true);

    try {
      const response = await fetch("/api/project-unlock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: project.slug,
          password: password.trim(),
        }),
      });

      if (!response.ok) {
        toast.error("wrong password")
        return;
      }

      const data = await response.json();
      setSlides((currentSlides) => [...currentSlides, ...(data.slides || [])]);
      setIsUnlocked(true);
      setPassword("");
    } catch (error) {
      toast.error("wrong password")
    } finally {
      setIsUnlocking(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className={`w-full`}>
        <div className="padding py-12 pt-32  md:py-24 md:pt-44 grid md:grid-cols-2 gap-y-12 gap-x-44">
          <div>
            <p className="text-sm text-choc font-semibold">
              {project.projectCompletionYear}
            </p>

            <h2 className="text-3xl mt-1   text-choc font-semibold leading-none">
              {project.title}
            </h2>

            <p className="leading-tight text-gray mt-3">
              {project.description}
            </p>

            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-6 w-fit items-center justify-center rounded-md bg-choc px-5 py-3 pb-2 text-sm font-semibold uppercase leading-none text-[#FFFFFF] border border-choc transition-all duration-200 hover:bg-transparent hover:text-choc!"
              >
                View Live
              </a>
            )}
          </div>

          <div className="">
            <div>
              <div className="border-b border-[#713F1E50] mb-2">
                <h4 className="  font-semibold text-choc">
                  Category
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.categories?.map((tag, i) => (
                  <div
                    key={i}
                    className="rounded-sm px-4 py-2 leading-none pb-1.25 bg-choc text-[#FFFFFF]"
                  >
                    <p className="text-sm uppercase">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-screen">

          {slides.map((slide) => {

            // IMAGE
            if (slide._type === "slideImage") {
              return (
                <div
                  key={slide._key}
                  className="w-full"
                >
                  <img
                    src={slide.asset?.url}
                    alt={slide.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              );
            }

            // VIDEO
            if (slide._type === "slideVideo") {
              return (
                <div
                  key={slide._key}
                  className="w-full aspect-video overflow-hidden relative"
                >
                  <video
                    controls
                    preload="metadata"
                    className="cover"
                  >
                    <source
                      src={slide.asset?.url}
                      type={slide.asset?.mimeType}
                    />
                  </video>
                </div>
              );
            }

            // CAROUSEL
            if (slide._type === "slideCarousel") {
              const aspectClass = carouselAspectClasses[slide.aspectSize] || carouselAspectClasses.square;

              return (
                <div
                  key={slide._key}
                  className="w-full py-6 md:py-12 space-y-2 md:space-y-5"
                >

                  <div className=" padding   w-full max-sm:px-4 grid grid-cols-6 items-end">
                    <div className="col-span-5">
                      {/* <h2 className=' text-3xl   leading-none text-choc font-semibold '>Built in Motion.</h2> */}
                    </div>
                    <div className="col-span-1  shrink-0 pb-3 flex justify-end gap-x-1 md:gap-x-2 ">
                      <button
                        aria-label="Previous slide"
                        disabled={isBeginning}
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`prev_button shrink-0 size-8 md:size-10 border-[#713F1E30] text-choc center rounded-full border transition-all duration-300
                                            ${isBeginning
                            ? "opacity-40 cursor-not-allowed!"
                            : "group hover:bg-[#713F1E] hover:text-white! hover:border-[#713F1E]"
                          }`}
                      >
                        <RiArrowLeftLine size={18} />
                      </button>

                      <button
                        aria-label="Next slide"
                        disabled={isEnd}
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`next_button shrink-0 size-8 md:size-10 border-[#713F1E30] text-choc center rounded-full border transition-all duration-300
                                                ${isEnd
                            ? "opacity-40 cursor-not-allowed!"
                            : "group hover:bg-[#713F1E] hover:text-white! hover:border-[#713F1E]"
                          }`}
                      >
                        <RiArrowRightLine size={18} />
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
                      {slide.images?.map((img, idx) => (
                        <SwiperSlide
                          key={idx}
                          className={` first:ml-4 last:mr-4 md:first:ml-24 md:last:mr-24 rounded-lg md:rounded-2xl relative  overflow-hidden  ${aspectClass} shrink-0`}
                        >
                          <img
                            src={img.asset?.url}
                            alt="loading"
                            className="cover "
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              );
            }

            return null;
          })}

          {project.hasMoreLockedSlides && !isUnlocked && (
            <div className="w-full h-screen center relative">
              <div className="absolute inset-0 z-[-1] blur-sm">
                <Image fill src="/images/projects/unlockBg.jpg" className="cover" alt="bg_img" />
              </div>
              <div className=" px-5 md:px-20 py-10  mx-auto my-24 bg-choc text-[#FFFFFF] rounded-xl w-fit text-center flex justify-center ">
                <form
                  onSubmit={handleUnlockProject}
                  className="w-full max-w-md space-y-20"
                >
                  <div className=" space-y-2">
                    <h3 className="text-3xl   leading-none  font-semibold">
                      This Project is under NDA
                    </h3>
                    <p>Please Enter password to view all slides</p>
                  </div>

                  <div className="flex max-sm:flex-col gap-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter Password"
                      className="w-full border-b border-[#FFFFFF]   outline-none focus:border-white"
                    />
                    <button
                      type="submit"
                      disabled={isUnlocking}
                      className="shrink-0 text-sm uppercase rounded-md bg-[#FFFFFF] hover:bg-transparent hover:text-[#FFFFFF]!  border border-transparent hover:border-[#FFFFFF] transition-all duration-150 px-4 py-2 pb-1.25 font-semibold text-choc disabled:opacity-60"
                    >
                      {isUnlocking ? "Checking" : "Unlock"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </div>

      </div>
    </>
  );
};

export default ProjectDetail;
