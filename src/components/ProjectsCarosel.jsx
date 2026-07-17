'use client';

import ProjectsCarousel, { PROJECTS } from './ProjectsCarousel';

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function ProjectsSection({
  eyebrow = 'My Projects',
  heading = "Explore some of my projects",
  subtext = 'Explore more brand identities, packaging, and digital design work in my extended portfolio.',
  ctaLabel = 'See more Projects',
  ctaHref = '/projects',
  projects = PROJECTS,
}) {
  return (
    <section className="w-full bg-[#161015] py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
       

        <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          {heading}
        </h2>

     

        <a
          href={ctaHref}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
        >
          {ctaLabel}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <ArrowIcon />
          </span>
        </a>
      </div>

      <div className="mt-16">
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
}