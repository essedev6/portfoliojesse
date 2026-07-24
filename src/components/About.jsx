import React, { useEffect, useState } from "react";





export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/back2.jpg')" }}
        aria-hidden="true"
      />
      {/* Soft warm wash for legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 sm:px-10 lg:px-20 pt-20 sm:pt-28 pb-16 sm:pb-24">
        {/* Top: headline + copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left column: eyebrow + headline */}
          <div className="lg:col-span-6">
            <p
              className={[
                "text-white font-semibold text-sm sm:text-base tracking-wide mb-4",
                "transition-all duration-700 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "80ms" }}
            >
              Behind the Design
            </p>

            <h2
              className={[
                "text-white font-extrabold leading-[1.1]",
                "text-3xl sm:text-4xl lg:text-5xl xl:text-[3.1rem]",
                "transition-all duration-700 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              ].join(" ")}
              style={{ transitionDelay: "180ms" }}
            >
              Crafting effortless moments that bring ease to your day.
            </h2>
          </div>

          {/* Right column: paragraph + label + CTA */}
          <div className="lg:col-span-6 lg:pt-2">
            <p
              className={[
                "text-neutral-900 text-base sm:text-lg leading-relaxed max-w-xl",
                "transition-all duration-700 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "280ms" }}
            >
              I'm a passionate designer and developer with over 3 years of
              experience creating digital experiences that matter. My
              approach combines technical expertise with creative vision to
              deliver solutions that are both beautiful and functional.
            </p>

            <div
              className={[
                "mt-8 sm:mt-10 flex items-center justify-between gap-6 max-w-xl",
                "transition-all duration-700 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "380ms" }}
            >
              <span className="font-serif italic text-neutral-800 text-base sm:text-lg leading-snug">
                Designing for
                <br />
                daily ease
              </span>

              <a
                href="/about"
                className="group inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 transition-colors rounded-full pl-6 pr-2 py-2"
              >
                <span className="text-neutral-900 font-semibold text-sm sm:text-base">
                  About Me
                </span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900 text-white transition-transform group-hover:translate-x-0.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}