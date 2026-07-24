import React, { useEffect, useRef, useState } from "react";



const skills = [
  { number: "#01", label: "UI/UX Design" },
  { number: "#02", label: "Web Development" },
  { number: "#03", label: "Mobile Development" },
  { number: "#04", label: "Branding & logo" },
];

const brands = ["IEBC", "NHIF", "Oracle", "Google"];

export default function Hero() {
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [scrollT, setScrollT] = useState(0); // 0 -> 1 scroll progress through the hero

  // Trigger entrance animation on mount
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // Track scroll progress to drive the blur/fade-out effect
  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const height = rect.height || 1;
          // progress goes 0 -> 1 as the section scrolls out of view upward and the blur delay comes abit late
          const raw = (-rect.top - 200) / height;
          const clamped = Math.min(Math.max(raw, 0), 1);
          setScrollT(clamped);
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Derived scroll-driven styles
  const blurPx = scrollT * 14; // up to 14px blur
  const dim = scrollT * 0.55; // up to 55% darker overlay
  const scale = 1 - scrollT * 0.06; // subtle zoom-out
  const translate = scrollT * 40; // px, drifts content up slightly

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col"
      style={{
        transform: `scale(${scale})`,
        filter: `blur(${blurPx}px)`,
        opacity: 1 - scrollT * 0.35,
        transition: "filter 0.05s linear, transform 0.05s linear, opacity 0.05s linear",
        willChange: "filter, transform, opacity",
      }}
    >
      {/* ---------- Section 1: portrait image ---------- */}
      {/* Its own independent rounded container — rounded on all corners */}
      <div className="relative z-20 w-full min-h-[70vh] md:min-h-[50vh] lg:min-h-[122vh] overflow-hidden rounded-b-[3rem] md:rounded-b-[3rem] lg:rounded-b-[6rem] flex flex-col">
        {/* Background portrait image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bgport.png')" }}
          aria-hidden="true"
        />

        {/* Gradient wash for legibility + scroll-driven dim overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: dim, transition: "opacity 0.05s linear" }}
          aria-hidden="true"
        />

        {/* Content wrapper (drifts up slightly on scroll) */}
        <div
          className="relative z-10 flex-1 flex flex-col justify-between px-6 sm:px-10 lg:px-20 pt-40 sm:pt-48 lg:pt-60 pb-10"
          style={{ transform: `translateY(-${translate}px)`, transition: "transform 0.05s linear" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-6 sm:gap-10 md:gap-20 lg:gap-28 items-start">
            {/* Left column: eyebrow + headline */}
            <div className="lg:col-span-7">
              <p
                className={[
                  "text-white/80 text-xl sm:text-base tracking-wide mb-6",
                  "transition-all duration-700 ease-out",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                ].join(" ")}
                style={{ transitionDelay: "80ms" }}
              >
                Hi, there
              </p>

              <h1
                className={[
                  "text-white font-extrabold leading-[1.05]",
                  "text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[5.6rem]",
                  "transition-all duration-700 ease-out",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                ].join(" ")}
                style={{ transitionDelay: "180ms" }}
              >
                Developer &amp;
                <br />
                Designer
              </h1>
            </div>

            {/* Right column: tagline + supporting copy */}
            <div className="lg:col-span-5 lg:pt-20 md:pt-16 ">
              <p
                className={[
                  "text-white text-sm md:text-xs lg:text-2xl xl:text-xl font-medium leading-snug",
                  "transition-all duration-700 ease-out",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                ].join(" ")}
                style={{ transitionDelay: "280ms" }}
              >
                Good design solves problems.
                <br />
                Great design feels natural.
              </p>
              <p
                className={[
                  "text-white/60 text-sm sm:text-base mt-4 max-w-sm",
                  "transition-all duration-700 ease-out",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                ].join(" ")}
                style={{ transitionDelay: "360ms" }}
              >
                I care about the little things because people notice them.
              </p>
            </div>
          </div>

          {/* Skills row */}
          <div className="grid grid-cols-4 sm:grid-cols-4 py-4 gap-4 sm:gap-6 mb-2 md:mb-6 lg:mb-8 backdrop-blur-[10px] backdrop-filter:blur-[10px] backdrop-filter:grayscale-[10px]">
            {skills.map((skill, i) => (
              <div
                key={skill.number}
                className={[
                  "transition-all duration-700 ease-out",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${440 + i * 90}ms` }}
              >
                <span className="block text-amber-400 text-[10px] sm:text-sm font-semibold mb-2">
                  {skill.number}
                </span>
                <span className="block text-white/85 text-[8px] sm:text-[15px] font-thin">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <div
        className={[
          "relative z-10 min-h-[18vh] md:min-h-[18vh] lg:min-h-[44vh] w-full  bg-[#130d11] rounded-b-[3rem] -mt-22 md:rounded-b-[3rem] lg:rounded-b-[6rem] -mt-20",
          "px-6 sm:px-10 lg:px-20 pt-12 lg:pt-24 sm:pt-12 pb-1 sm:pb-6",
          "flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 md:gap-20 lg:gap-36",
          "transition-all duration-700 ease-out",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
        style={{ transitionDelay: "820ms" }}
      >
        <span className="text-white/90 text-xs sm:text-sm leading-snug whitespace-nowrap">
          Trusted by brands I
          <br className="sm:hidden" /> have worked with
        </span>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-12 lg:gap-x-24">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-white/50 text-xl sm:text-base lg:text-[30px] font-semibold tracking-wide"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}