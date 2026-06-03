"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const images = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    src: `https://picsum.photos/800/450?random=${i + 1}`,
}));

const innerIndexes = [5, 6, 9, 10];
const outerIndexes = [1, 2, 4, 7, 8, 11, 13, 14];
const outsideIndexes = [0, 3, 12, 15];

const topIndexes = [1, 2, 5, 6, 9, 10, 13, 14];

const getDirection = (index) => {
    return `${index < 8 ? "bottom" : "top"}-${index % 4 < 2 ? "right" : "left"
        }`;
};
const getOneDirection = (index) => {
    switch (index) {
        case 1:
        case 2:
            return "top";

        case 4:
        case 8:
            return "left";

        case 7:
        case 11:
            return "right";

        case 13:
        case 14:
            return "bottom";

        default:
            return "";
    }
};
const getTransformOrigin = (index) => {
    const dir = getDirection(index);

    return dir
        .replace("-", " ")
        .replace("top", "top")
        .replace("bottom", "bottom")
        .replace("left", "left")
        .replace("right", "right");
};
const getBottomZIndex = (index) => {
    if (innerIndexes.includes(index)) return 3;
    if (outerIndexes.includes(index)) return 2;
    return 1;
};
const getTopZIndex = (index) => {
    return topIndexes.includes(index)
        ? 4
        : 3;
};
export default function ReferenceImages() {
    const sectionRef = useRef(null);
    const bottomGridRef = useRef(null);
    const topGridRef = useRef(null);

    const bottomRefs = useRef([]);
    const topRefs = useRef([]);

    useLayoutEffect(() => {
        requestAnimationFrame(() => {
            bottomRefs.current.forEach((item, index) => {
                if (!item?.mask || !item?.image) return;

                gsap.set(item.mask, {
                    scale: 0,
                    transformOrigin: getTransformOrigin(index),
                });

                gsap.set(item.image, {
                    scale: 3,
                });
            });
        });
        requestAnimationFrame(() => {
            topRefs.current.forEach((item, index) => {
                if (!item?.root) return;

                const width = item.root.offsetWidth;

                const direction =
                    index % 4 < 2 ? "right" : "left";

                gsap.set(item.container, {
                    x:
                        direction === "right"
                            ? width + 1
                            : -(width + 1),
                });

                gsap.set(item.image, {
                    scale: 2,
                });

                gsap.set(
                    [
                        item.squareTL,
                        item.squareTR,
                        item.squareBL,
                        item.squareBR,
                    ],
                    {
                        scale: 0,
                    }
                );
            });
        });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: ({ progress }) => {
                    gsap.set(bottomGridRef.current, {
                        scale:
                            (window.innerWidth > 768 ? 0.55 : 0) +
                            progress * 0.7,

                        x:
                            window.innerWidth > 768
                                ? "0"
                                : "-150vw",
                    });

                    const innerProgress = gsap.utils.clamp(0, 1, progress * 3);
                    const outerProgress = gsap.utils.clamp(
                        0,
                        1,
                        progress * 2.5 - 0.5
                    );
                    const outsideProgress = gsap.utils.clamp(
                        0,
                        1,
                        progress * 2 - 0.9
                    );

                    bottomRefs.current.forEach((item, index) => {
                        if (!item) return;

                        let t = outsideProgress;

                        if (innerIndexes.includes(index)) {
                            t = innerProgress;
                        } else if (outerIndexes.includes(index)) {
                            t = outerProgress;
                        }

                        gsap.set(item.mask, {
                            scale: t,
                            transformOrigin: getTransformOrigin(index),
                            force3D: true,
                        });

                        gsap.set(item.image, {
                            scale: 3 - t * 2,
                            force3D: true,
                        });

                        const dir = getDirection(index);
                        const oneDir = getOneDirection(index);

                        if (outsideIndexes.includes(index)) {
                            gsap.set(item.mask, {
                                x:
                                    (dir.includes("left") ? -1 : 1) *
                                    (1 - t) *
                                    100,

                                y:
                                    (dir.includes("top") ? -1 : 1) *
                                    (1 - t) *
                                    ((100 * 263) / 467),
                            });
                        }

                        if (outerIndexes.includes(index)) {
                            if (
                                oneDir === "top" ||
                                oneDir === "bottom"
                            ) {
                                gsap.set(item.mask, {
                                    y:
                                        (oneDir === "bottom" ? -1 : 1) *
                                        (1 - t) *
                                        ((150 * 263) / 467),
                                });
                            }

                            if (
                                oneDir === "left" ||
                                oneDir === "right"
                            ) {
                                gsap.set(item.mask, {
                                    x:
                                        (oneDir === "right" ? -1 : 1) *
                                        (1 - t) *
                                        150,
                                });
                            }
                        }
                    });
                },
            });

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "20% top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: ({ progress }) => {
                    gsap.set(topGridRef.current, {
                        scaleX:
                            window.innerWidth > 768
                                ? 1.25
                                : 0.7,

                        scaleY:
                            window.innerWidth > 768
                                ? 1.25
                                : 0.7,

                        x:
                            window.innerWidth > 768
                                ? "0"
                                : "-150vw",
                    });

                    const inner = gsap.utils.clamp(
                        0,
                        1,
                        progress * 2
                    );

                    const outer = gsap.utils.clamp(
                        0,
                        1,
                        progress * 2 - 1
                    );
                    topRefs.current.forEach((item, index) => {
                        if (!item) return;

                        const width = item.root.offsetWidth;

                        const progressValue = topIndexes.includes(index)
                            ? inner
                            : outer;

                        const direction =
                            index % 4 < 2 ? "right" : "left";

                        gsap.set(item.container, {
                            x:
                                direction === "right"
                                    ? width + 1 - progressValue * (width + 1)
                                    : progressValue * (width + 1) -
                                    (width + 1),

                            force3D: true,
                        });

                        gsap.set(item.image, {
                            scale: 2 - progressValue,
                            force3D: true,
                        });
                    });

                    topRefs.current.forEach((item, index) => {
                        if (!item) return;

                        const t = topIndexes.includes(index)
                            ? inner
                            : outer;

                        const width = item.root.offsetWidth;

                        const direction =
                            index % 4 < 2 ? "right" : "left";

                        gsap.set(item.container, {
                            x:
                                direction === "right"
                                    ? width + 1 - t * (width + 1)
                                    : t * (width + 1) - (width + 1),

                            force3D: true,
                        });

                        gsap.set(item.image, {
                            scale: 2 - t,
                            force3D: true,
                        });

                        gsap.set(
                            [
                                item.squareTL,
                                item.squareTR,
                                item.squareBL,
                                item.squareBR,
                            ],
                            {
                                scale: Math.min(1, t * 10),
                                force3D: true,
                            }
                        );

                        if (direction === "right") {
                            gsap.set(
                                [item.squareTL, item.squareBL],
                                {
                                    x: width - t * width,
                                }
                            );
                        } else {
                            gsap.set(
                                [item.squareTR, item.squareBR],
                                {
                                    x: t * width - width,
                                }
                            );
                        }
                    });
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useGSAP(()=>{
        gsap.to(".grid_anim", {
            opacity:1,
            duration:1
        })
    })

    return (
        <section
            ref={sectionRef}
            className="relative h-[200vh] w-full"
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Heading */}
                <h1 className="absolute inset-0  -translate-x-1 flex items-center justify-center gap-4 text-2xl font-bold text-choc">
                    <span className="translate-y-0.75">A mixed bag of experiments, arranged less </span>
                    <span className="h-3 w-3 bg-choc" />
                    <span className="translate-y-0.75">like a portfolio and more like a studio table.</span>
                </h1>

                <div className=" grid_anim opacity-0 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
                    {/* Bottom Layer */}
                    <ul
                        ref={bottomGridRef}
                        className="absolute top-1/2 grid w-[400vw] -translate-y-1/2 grid-cols-4 md:w-full"
                    >
                        {images.map((image, index) => (
                            <li
                                key={image.id}
                                style={{
                                    zIndex: getBottomZIndex(index),
                                }}
                            >
                                <div
                                    className="relative"
                                    ref={(el) => {
                                        if (!el) return;

                                        bottomRefs.current[index] ??= {};

                                        bottomRefs.current[index].root = el;
                                    }}
                                >
                                    <div
                                        className="relative"
                                        style={{
                                            transformOrigin: getTransformOrigin(index),
                                        }}
                                        ref={(el) => {
                                            if (!el) return;

                                            bottomRefs.current[index] ??= {};

                                            bottomRefs.current[index].mask = el;
                                        }}
                                    >
                                        <div className="relative overflow-hidden">
                                            <div
                                                className="image-inner relative"
                                                ref={(el) => {
                                                    if (!el) return;

                                                    bottomRefs.current[index] ??= {};

                                                    bottomRefs.current[index].image = el;
                                                }}
                                            >
                                                <img
                                                    src={image.src}
                                                    alt=""
                                                    className="aspect-[467/263] w-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="absolute -top-1 -left-1 h-2 w-2 bg-white" />
                                        <div className="absolute -top-1 -right-1 h-2 w-2 bg-white" />
                                        <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-white" />
                                        <div className="absolute -right-1 -bottom-1 h-2 w-2 bg-white" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Top Layer */}
                    <ul
                        ref={topGridRef}
                        className="absolute top-1/2 z-20 grid w-[400vw] -translate-y-1/2 grid-cols-4 md:w-full"
                    >
                        {images.map((image, index) => (
                            <li
                                key={`top-${image.id}`}
                                style={{
                                    zIndex: getTopZIndex(index),
                                }}
                            >
                                <div
                                    className="relative"
                                    ref={(el) => {
                                        if (!el) return;

                                        topRefs.current[index] ??= {};
                                        topRefs.current[index].root = el;
                                    }}
                                >
                                    <div className="relative overflow-hidden">
                                        <div
                                            className="relative h-full w-full overflow-hidden"
                                            ref={(el) => {
                                                if (!el) return;

                                                topRefs.current[index] ??= {};
                                                topRefs.current[index].container = el;
                                            }}
                                        >
                                            <div
                                                className="relative overflow-hidden"
                                                ref={(el) => {
                                                    if (!el) return;

                                                    topRefs.current[index] ??= {};
                                                    topRefs.current[index].image = el;
                                                }}
                                            >
                                                <img
                                                    src={image.src}
                                                    alt=""
                                                    className="aspect-[467/263] w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        ref={(el) => {
                                            if (!el) return;
                                            topRefs.current[index] ??= {};
                                            topRefs.current[index].squareTL = el;
                                        }}
                                        className="absolute -top-1 -left-1 h-2 w-2 bg-white "
                                    />

                                    <div
                                        ref={(el) => {
                                            if (!el) return;
                                            topRefs.current[index] ??= {};
                                            topRefs.current[index].squareTR = el;
                                        }}
                                        className="absolute -top-1 -right-1 h-2 w-2 bg-white "
                                    />

                                    <div
                                        ref={(el) => {
                                            if (!el) return;
                                            topRefs.current[index] ??= {};
                                            topRefs.current[index].squareBL = el;
                                        }}
                                        className="absolute -bottom-1 -left-1 h-2 w-2 bg-white "
                                    />

                                    <div
                                        ref={(el) => {
                                            if (!el) return;
                                            topRefs.current[index] ??= {};
                                            topRefs.current[index].squareBR = el;
                                        }}
                                        className="absolute -right-1 -bottom-1 h-2 w-2 bg-white "
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}