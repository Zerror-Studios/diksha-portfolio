"use client";

import { useRef } from "react";

export default function Page() {
  const audioRef = useRef(null);

  const pluckString = (path) => {
    let frame = 0;
    const totalFrames = 60;

    const animate = () => {
      const progress = frame / totalFrames;

      // Damping effect
      const amp =
        Math.sin(progress * Math.PI * 10) * (1 - progress) * 80;

      path.setAttribute(
        "d",
        `M 100 ${path.dataset.y}
         Q 600 ${Number(path.dataset.y) + amp}
         1100 ${path.dataset.y}`
      );

      frame++;

      if (frame <= totalFrames) {
        requestAnimationFrame(animate);
      } else {
        path.setAttribute(
          "d",
          `M 100 ${path.dataset.y}
           Q 600 ${path.dataset.y}
           1100 ${path.dataset.y}`
        );
      }
    };

    animate();

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const strings = [150, 250, 350, 450, 550];

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <audio ref={audioRef} src="/audio/5.mp3" preload="auto" />

      <svg
        viewBox="0 0 1200 700"
        className="w-full max-w-7xl h-[80vh]"
      >
      {strings.map((y, index) => (
  <g key={index}>
    {/* Invisible hover zone */}
    <rect
      x="100"
      y={y - 25} // 25px padding above
      width="1000"
      height="50" // total hover area
      fill="transparent"
      className="cursor-pointer"
      onMouseEnter={(e) => {
        const path = e.currentTarget.nextSibling;
        pluckString(path);
      }}
    />

    {/* Visible string */}
    <path
      data-y={y}
      d={`M 100 ${y} Q 600 ${y} 1100 ${y}`}
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