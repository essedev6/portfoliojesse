import React, { useEffect, useRef, useState } from "react";

/**
 * ContactCTA.jsx
 * -------------------------------------------------
 * A simple full-width call-to-action strip that drives visitors
 * to a dedicated contact page.
 *
 * Layout: eyebrow + heading on the left, a button linking to your
 * contact page on the right (stacks on mobile).
 *
 * Animation: the text and button ease in (fade + slide-up, staggered)
 * the moment the strip scrolls into view, using IntersectionObserver —
 * not on page mount, since this section usually sits further down
 * the page and wouldn't be visible yet when the page first loads.
 *
 * Requirements: TailwindCSS. No extra libraries needed.
 * -------------------------------------------------
 */

export default function ContactCTA({
  eyebrow = "Let's Talk",
  heading = "Got a project in mind? Let's make it happen.",
  ctaLabel = "Contact Me",
  ctaHref = "/contact",
}) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate in once, don't replay on re-scroll
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#bd875e] py-10 sm:py-12">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 pb-9">
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-6">
          <div
            className={[
              "transition-all duration-700 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            <p className="text-white font-semibold text-sm tracking-wide uppercase mb-2">
              {eyebrow}
            </p>
            <h2 className="text-white font-bold text-lg sm:text-2xl leading-snug">
              {heading}
            </h2>
          </div>

          <a
            href={ctaHref}
            className={[
              "group w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center sm:justify-start gap-3 bg-orange-500 hover:bg-orange-700 hover:-translate-y-0.5 transition-all rounded-full pl-7 pr-2 py-2",
              "transition-all duration-700 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{ transitionDelay: "150ms" }}
          >
            <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">
              {ctaLabel}
            </span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-orange-600 transition-transform group-hover:translate-x-0.5">
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
      <div className="w-full h-px bg-white"></div>
    </section>
  );
}