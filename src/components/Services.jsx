import React, { useEffect, useState } from "react";





const DEFAULT_SERVICES = [
  {
    
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful interfaces.",
  },
  {
    icon: "code",
    title: "Web Development",
    description:
      "Building responsive, fast, and secure websites.",
  },
  {
    icon: "mobile",
    title: "Mobile App Design",
    description:
      "Designing mobile experiences that are both functional and delightful.",
  },
  {
    icon: "seo",
    title: "SEO Optimization",
    description: "Improving your site's visibility and ranking on search engines.",
  },
  {
    icon: "marketing",
    title: "Digital Marketing",
    description:
      "Strategies to grow your online presence and drive traffic.",
  },
  {
    icon: "brand",
    title: "Brand Identity",
    description: "Crafting memorable brand identities that tell your unique story.",
  },
];

export default function ServiceList({
  eyebrow = "My Services",
  headingLight = "Your Partner For",
  headingBold = "Thoughtful, Reliable Design",
  intro = "",
  mainImage = "/me1.png",
  insetImage = "/me2.png",
  experienceYears = "3+",
  experienceLabel = "Years Of Experience",
  reviewRating = "4.9",
  reviewCount = "(320 Reviews)",
  services = DEFAULT_SERVICES,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section className="relative w-full bg-[#161015] py-0 sm:py-24 lg:py-0 lg:pb-8 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
          <p
              className={[
                "inline-flex items-center gap-2 text-[#f4cf9b] font-semibold text-2xl md:text-3xl lg:text-3xl tracking-wide uppercase mb-4",
                "transition-all duration-700 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "80ms" }}
            >
              
              {eyebrow}
            </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* ---------- Left: image cluster ---------- */}
          <div
            className={[
              "relative mx-auto w-full max-w-md aspect-square",
              "transition-all duration-700 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
          >
            {/* Main circular photo */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <img
                src={mainImage}
                alt="Our team at work"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Small circular inset photo, top-right, overlapping the blob */}
            <div className="absolute -top-4 right-6 sm:right-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={insetImage}
                alt="Studio detail"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Google review badge, top-left, overlapping the blob */}
            

            {/* Dark circular badge, bottom-left, overlapping the blob */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-neutral-900 border border-white/10 text-white flex flex-col items-center justify-center text-center shadow-xl">
              <span className="text-2xl sm:text-3xl font-extrabold leading-none">
                {experienceYears}
              </span>
              <span className="text-xs sm:text-sm text-white/80 mt-1 leading-tight px-4">
                {experienceLabel}
              </span>
            </div>
          </div>

          {/* ---------- Right: eyebrow + heading + your 6 services ---------- */}
          <div>
           

            <h2
              className={[
                "font-extrabold leading-[1.15] text-3xl sm:text-4xl lg:text-[2.6rem]",
                "transition-all duration-700 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              ].join(" ")}
              style={{ transitionDelay: "160ms" }}
            >
              <span className="text-white/50">{headingLight}</span>{" "}
              <span className="text-white">{headingBold}</span>
            </h2>

            {intro && (
              <p
                className={[
                  "text-white/50 text-sm sm:text-base leading-relaxed mt-5 max-w-xl",
                  "transition-all duration-700 ease-out",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                ].join(" ")}
                style={{ transitionDelay: "240ms" }}
              >
                {intro}
              </p>
            )}

            {/* Your 6 services, replacing the reference's stats row + CTA */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-6 mt-8">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={[
                    "flex items-start gap-4 pb-6 border-b border-white/10",
                    "transition-all duration-700 ease-out",
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                  ].join(" ")}
                  style={{ transitionDelay: `${320 + i * 90}ms` }}
                >
                  
                  <div>
                    <h3 className="text-white font-semibold text-base leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}