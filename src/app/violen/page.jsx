"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Page() {
  const audioRefs = useRef([]);
  const bowRef = useRef(null);
  const bowWrapperRef = useRef(null);
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
        `M ${x} 0
       Q ${x + amp} 350
       ${x} 700`
      );

      frame++;

      if (frame <= totalFrames) {
        requestAnimationFrame(animate);
      } else {
        path.setAttribute(
          "d",
          `M ${x} 0
         Q ${x} 350
         ${x} 700`
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
        x: e.clientX - 50,
        y: e.clientY - 50,
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

  const strings = [480, 560, 640, 720];
  return (
    <div className="w-full h-screen  flex items-center justify-center ">

      <div
        ref={bowWrapperRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        <img
          ref={bowRef}
          src="/images/homepage/violen_stick.png"
          className="w-32"
          alt=""
        />
      </div>
      <img src="/images/homepage/guitar.png" className="absolute inset-0 z-[-1]" alt="" />

      <audio
        ref={(el) => (audioRefs.current[0] = el)}
        src="/audio/5.mp3"
        preload="auto"
      />

      <audio
        ref={(el) => (audioRefs.current[1] = el)}
        src="/audio/6.mp3"
        preload="auto"
      />

      <audio
        ref={(el) => (audioRefs.current[2] = el)}
        src="/audio/7.mp3"
        preload="auto"
      />

      <audio
        ref={(el) => (audioRefs.current[3] = el)}
        src="/audio/6.mp3"
        preload="auto"
      />

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
              d={`M ${x} 0 Q ${x} 350 ${x} 700`}
              stroke="white"
              strokeWidth="2"
              fill="none"
              pointerEvents="none"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}