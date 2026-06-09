import React from "react";

const ProjectDetail = ({ project,setOpenProj }) => {
  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto backdrop-blur-xs bg-black/10 py-5">
      <div className="max-w-7xl md:max-w-6xl mx-auto flex justify-end">
        <button onClick={()=>setOpenProj(false)} className="rounded-sm px-4 py-2 bg-choc text-[#F9F7EC] capitalize text-sm mb-2">close</button>
      </div>
      <div data-lenis-prevent className="max-w-7xl md:max-w-6xl h-[90%] overflow-y-scroll mx-auto bg-[#F9F7EC]">

        {/* Header */}
        <div className="p-10 grid md:grid-cols-2 gap-x-44">
          <div>
            <p className="text-sm text-choc font-semibold">
              {project.projectCompletionYear}
            </p>

            <h2 className="text-3xl capitalize text-choc font-semibold leading-none">
              {project.title}
            </h2>

            <p className="leading-tight text-gray mt-3">
              {project.description}
            </p>
          </div>

          <div>
            <div className="border-b border-[#713F1E50] mb-2">
              <h4 className="capitalize font-semibold text-choc">
                category
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.categories?.map((tag, i) => (
                <div
                  key={i}
                  className="rounded-sm px-4 py-2 bg-choc text-[#F9F7EC]"
                >
                  <p className="text-sm uppercase">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slides */}
        <div className="w-full">

          {project.slides?.map((slide) => {

            // IMAGE
            if (slide._type === "slideImage") {
              return (
                <div
                  key={slide._key}
                  className="w-full"
                >
                  <img
                    src={slide.asset?.url}
                    alt=""
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
                  className="w-full"
                >
                  <video
                    controls
                    preload="metadata"
                    className="w-full aspect-video object-cover"
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
              return (
                <div
                  key={slide._key}
                  className="w-full my-10 overflow-x-auto"
                >
                  <div className="flex gap-4  px-6 ">

                    {slide.images?.map((img, idx) => (
                      <div
                        key={idx}
                        className="
                         w-[40vw]
                          aspect-square
                          snap-center
                          shrink-0
                        "
                      >
                        <img
                          src={img.asset?.url}
                          alt=""
                          className="
                            cover
                          "
                        />
                      </div>
                    ))}

                  </div>
                </div>
              );
            }

            return null;
          })}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;