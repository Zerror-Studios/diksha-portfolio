"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiArrowLeftLine, RiArrowRightLine, RiArrowUpLine } from "@remixicon/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const ProjectDetail = ({ project }) => {

  const carouselAspectClasses = {
    square: "aspect-square w-[85vw]! md:w-[40vw]!",
    portrait: "aspect-[3/4] w-[85vw]! md:w-[30vw]!",
    landscape: "aspect-auto h-[35vh]! w-auto!  md:h-screen!",
  };

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [slides, setSlides] = useState(project.slides || []);
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(!project.hasMoreLockedSlides);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const swiperRefs = useRef({});
  const [swiperState, setSwiperState] = useState({});
  const [showTopBtn, setShowTopBtn] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY >= window.innerHeight * 2);
    };

    handleScroll(); // initial check

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <button onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })}
        className={` fixed z-100 right-5 bottom-5 shrink-0 size-8 md:size-10 border-[#713F1E] text-choc center backdrop-blur-xs rounded-full border transition-all duration-300 group hover:bg-[#713F1E] hover:text-white! hover:border-[#713F1E]"    `}  >
        <RiArrowUpLine size={18} />
      </button>



      <div className={`w-full bg-white`}>
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

              <div className="flex flex-wrap gap-1">
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

        <div className="w-full">

          {slides.map((slide) => {

            // IMAGE
            if (slide._type === "slideImage") {
              const imageElement = (
                <img
                  src={slide.asset?.url}
                  alt={slide.alt || ""}
                  className={`w-full h-auto object-cover ${slide.liveLink
                      ? "transition-transform duration-300 ease-in-out hover:scale-95 origin-center cursor-pointer"
                      : ""
                    }`}
                />
              );

              return (
                <div
                  key={slide._key}
                  className="w-full overflow-hidden"
                >
                  {slide.liveLink ? (
                    <a href={slide.liveLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                      {imageElement}
                    </a>
                  ) : (
                    imageElement
                  )}
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
              const aspectClass =
                carouselAspectClasses[slide.aspectSize] ||
                carouselAspectClasses.square;

              const state = swiperState[slide._key] || {
                isBeginning: true,
                isEnd: false,
              };

              return (
                <div key={slide._key} className="w-full py-2 md:py-5 relative">

                  <div className="px-5 absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">

                    <button
                      aria-label="Previous slide"
                      disabled={state.isBeginning}
                      onClick={() => swiperRefs.current[slide._key]?.slidePrev()}
                      className={`pointer-events-auto prev_button shrink-0 size-8 md:size-10 border-[#713F1E] text-choc center backdrop-blur-xs rounded-full border transition-all duration-300
            ${state.isBeginning
                          ? "opacity-40 cursor-not-allowed!"
                          : "group hover:bg-[#713F1E] hover:text-white! hover:border-[#713F1E]"
                        }`}
                    >
                      <RiArrowLeftLine size={18} />
                    </button>

                    <button
                      aria-label="Next slide"
                      disabled={state.isEnd}
                      onClick={() => swiperRefs.current[slide._key]?.slideNext()}
                      className={`pointer-events-auto next_button shrink-0 size-8 md:size-10 border-[#713F1E] text-choc center backdrop-blur-xs rounded-full border transition-all duration-300
            ${state.isEnd
                          ? "opacity-40 cursor-not-allowed!"
                          : "group hover:bg-[#713F1E] hover:text-white! hover:border-[#713F1E]"
                        }`}
                    >
                      <RiArrowRightLine size={18} />
                    </button>
                  </div>

                  <Swiper
                    slidesPerView="auto"
                    spaceBetween={30}
                    grabCursor
                    className="cursor-grab active:cursor-grabbing"
                    breakpoints={{
                      0: { spaceBetween: 8 },
                      640: { spaceBetween: 20 },
                    }}
                    onSwiper={(swiper) => {
                      swiperRefs.current[slide._key] = swiper;

                      setSwiperState((prev) => ({
                        ...prev,
                        [slide._key]: {
                          isBeginning: swiper.isBeginning,
                          isEnd: swiper.isEnd,
                        },
                      }));
                    }}
                    onSlideChange={(swiper) => {
                      setSwiperState((prev) => ({
                        ...prev,
                        [slide._key]: {
                          isBeginning: swiper.isBeginning,
                          isEnd: swiper.isEnd,
                        },
                      }));
                    }}
                  >
                    {slide.images?.map((img, idx) => (
                      <SwiperSlide
                        key={idx}
                        className={` first:ml-2 last:mr-2 md:first:ml-5 md:last:mr-5 shrink-0 relative overflow-hidden ${aspectClass}`}
                      >
                        <img
                          src={img.asset?.url}
                          alt=""
                          className="h-full"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
