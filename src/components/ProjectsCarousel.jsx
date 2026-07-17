'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ---------------------------------------------------------------------------
// Constants — EXACTLY as in your working version
// ---------------------------------------------------------------------------

const AUTO_ROTATE_MS = 3500;
const TRANSITION_DURATION = 0.85;
const APPLE_EASE = [0.22, 1, 0.36, 1];

const CARD_SIZE = { width: 360, height: 280 };
const CARD_SIZE_MOBILE = { width: 230, height: 180 };
const CARD_RADIUS = 24;

const CYLINDER_RADIUS = 600;
const ANGLE_STEP = 34;
const MAX_VISIBLE_ANGLE = 96;

const getCylinderScale = (angleDeg) => {
  const t = Math.abs(angleDeg) / MAX_VISIBLE_ANGLE;
  return 0.78 + t * 0.22;
};

const getCylinderOpacity = (angleDeg) => {
  const t = Math.abs(angleDeg) / MAX_VISIBLE_ANGLE;
  return 0.8 + t * 0.2;
};

const MOBILE_BREAKPOINT = 768;
const MOBILE_RADIUS_SCALE = 0.6;

// ---------------------------------------------------------------------------
// YOUR REAL PROJECTS
// ---------------------------------------------------------------------------

export const PROJECTS = [
  {
    id: 'p1',
    title: 'Client-Captive Portal',
    description: 'A High Speed Captive portal, customizable for any billing system for efficiency and Security in online transactions, involving STK Prompt on users device.',
    image: '/assets/adkims2.png',
    tags: ['Next.js', 'Daraja API', 'MongoDB'],
    github: 'https://github.com/essedev6/wahala2',
    live: 'https://adkims-captive-portal.vercel.app/',
    status: 'live'
  },
  {
    id: 'p2',
    title: 'Movie Streaming Platform',
    description: 'A modern Movie streaming experience with seamless navigation and no Ads.',
    image: '/assets/WahalaPic.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/essedev6/wahala2',
    live: 'https://wahala2.vercel.app/',
    status: 'live'
  },
  {
    id: 'p3',
    title: 'Survey Website',
    description: 'A sleek Maternal Survey site for hospitals and researchers.',
    image: '/assets/nutrition.png',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/essedev6/Maternal-survey',
    live: 'https://maternal-survey.vercel.app/',
    status: 'live'
  },
  {
    id: 'p4',
    title: 'Graphic Design Portfolio',
    description: 'My Graphic Design Portfolio site.',
    image: '/assets/portfolio.png',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/essedev6/',
    live: 'https://essejacques.netlify.app/',
    status: 'live'
  },
  {
    id: 'p5',
    title: 'Enclame',
    description: 'A Kenyan-based Therapy Web Platform site for patients and therapists to connect and schedule appointments.',
    image: '/assets/therapy.png',
    tags: ['Next.js', 'Tailwind CSS'],
    github: 'https://github.com/essedev6/',
    live: 'https://encalme.netlify.app/',
    status: 'live'
  },
  {
    id: 'p6',
    title: 'Data Analyst Portfolio',
    description: 'Data Analyst Portfolio site I developed for a client in the Data Analytics field.',
    image: '/assets/portfolio2.png',
    tags: ['Next.js', 'Tailwind CSS'],
    github: 'https://github.com/essedev6/',
    live: 'https://morganmwirotsi.netlify.app/',
    status: 'live'
  },
  {
    id: 'p7',
    title: 'NCK Exam Simulator',
    description: 'A Kenyan-based NCK Exam Simulator site for nursing students to practice and prepare for the NCK exam.',
    image: '/assets/nck.png',
    tags: ['Next.js', 'Tailwind CSS'],
    github: 'https://github.com/essedev6/',
    live: 'https://ncksimulator.netlify.app/',
    status: 'live'
  },
  {
    id: 'p8',
    title: 'GOSTRA',
    description: 'A Secure Messaging App for users to communicate securely and privately, with every conversation encrypted, and disappearing messages.',
    image: '/assets/gostra.png',
    tags: ['React-Native', 'Firebase', 'Material UI'],
    github: 'https://github.com/essedev6/',
    live: 'https://gostra.netlify.app/',
    status: 'live'
  },
  {
    id: 'p9',
    title: 'Parsoona',
    description: 'A TikTok-style reading experience for poetry and short stories — where mood drives discovery, and every thought can become art.',
    image: '/assets/parsoona.png',
    tags: ['React-Native', 'Firebase', 'Material UI'],
    github: 'https://github.com/essedev6/',
    live: 'https://parsoona.netlify.app/',
    status: 'live'
  },
  {
    id: 'p10',
    title: 'ADKIMS Billing System',
    description: 'Hotspot Billing System admin dashboard for managing users connected at open public or private wifi networks.',
    image: '/assets/admin3.png',
    tags: ['Next.js', 'Daraja API', 'MongoDB'],
    github: '#',
    live: '#',
    status: 'soon'
  },
  {
    id: 'p11',
    title: 'Smart Mobility Commerce',
    description: 'E-commerce platform that combines ride-hailing and car booking into a single, seamless web experience.',
    image: '/assets/fiika.png',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    github: '#',
    live: '#',
    status: 'soon'
  },
  {
    id: 'p12',
    title: 'Data Management System',
    description: 'A smart hotspot tool that quietly keeps laptops from wasting data by stopping heavy background internet usage.',
    image: '/assets/hg.png',
    tags: ['React', 'Firebase', 'Material UI'],
    github: '#',
    live: '#',
    status: 'soon'
  },
];

// ---------------------------------------------------------------------------
// Helpers — EXACTLY as your working version
// ---------------------------------------------------------------------------

function getOffset(index, activeIndex, length) {
  let diff = (index - activeIndex) % length;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

function getInwardTunnelTransform(offset, radiusScale) {
  const angle = offset * ANGLE_STEP;
  const rad = (angle * Math.PI) / 180;
  const r = CYLINDER_RADIUS * radiusScale;
  const x = r * Math.sin(rad);
  const z = -r * Math.cos(rad);
  const rotateY = -angle;
  const scale = getCylinderScale(angle);
  const opacity = getCylinderOpacity(angle);
  const zIndex = 5 + Math.abs(offset);
  return { x, z, rotateY, scale, opacity, zIndex };
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

function useIsMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

// ---------------------------------------------------------------------------
// Card — EXACTLY as your working version
// ---------------------------------------------------------------------------

function ProjectCard({ project, offset, radiusScale, cardSize, isActive, onSelect }) {
  const transform = getInwardTunnelTransform(offset, radiusScale);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(offset)}
      aria-label={`${project.title}${isActive ? ' (active)' : ''}`}
      aria-current={isActive || undefined}
      tabIndex={Math.abs(offset) <= 1 ? 0 : -1}
      className="absolute left-1/2 top-1/2 block cursor-pointer overflow-hidden border-0 bg-neutral-900 p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
      style={{
        width: cardSize.width,
        height: cardSize.height,
        marginLeft: -cardSize.width / 2,
        marginTop: -cardSize.height / 2,
        borderRadius: CARD_RADIUS,
        zIndex: transform.zIndex,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
      initial={false}
      animate={{
        x: transform.x,
        z: transform.z,
        scale: transform.scale,
        opacity: transform.opacity,
        rotateY: transform.rotateY,
      }}
      whileHover={{
        scale: transform.scale * 1.04,
        z: transform.z + 40,
      }}
      transition={{ duration: TRANSITION_DURATION, ease: APPLE_EASE }}
    >
      <img
        src={project.image}
        alt={project.title}
        draggable={false}
        loading="eager"
        className="h-full w-full select-none object-cover"
      />
    </motion.button>
  );
}

// ---------------------------------------------------------------------------
// NEW: Dynamic Background — shows active project image with backdrop
// ---------------------------------------------------------------------------

function DynamicBackground({ image }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: APPLE_EASE }}
        className="absolute inset-0 z-0"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Backdrop / overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
        {/* Optional: subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </motion.div>
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// Active Project Info — Shows below center card
// ---------------------------------------------------------------------------

function ActiveProjectInfo({ project }) {
  if (!project) return null;
  const isComingSoon = project.status === 'soon';

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: APPLE_EASE }}
      className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center px-4"
    >
      <h2 className="text-center text-lg font-bold text-white md:text-xl">
        {project.title}
      </h2>
      <p className="mt-1 max-w-md text-center text-xs text-white/60 md:text-sm">
        {project.description}
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/70 md:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        {isComingSoon ? (
          <span className="rounded-full bg-white/10 px-5 py-2 text-xs font-semibold text-white/50">
            Coming Soon
          </span>
        ) : (
          <>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-transform hover:scale-105 active:scale-95"
            >
              View Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-transparent px-5 py-2 text-xs font-semibold text-white transition-transform hover:scale-105 hover:bg-white/10 active:scale-95"
            >
              GitHub
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Carousel — EXACTLY as your working version, plus background + info panel
// ---------------------------------------------------------------------------

export default function ProjectsCarousel({
  projects = PROJECTS,
  autoRotateInterval = AUTO_ROTATE_MS,
  onProjectSelect,
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const length = projects.length;
  const radiusScale = isMobile ? MOBILE_RADIUS_SCALE : 1;
  const cardSize = isMobile ? CARD_SIZE_MOBILE : CARD_SIZE;
  const maxOffset = isMobile ? 2 : 3;
  const activeProject = projects[activeIndex];

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length);
  }, [length]);

  const goByOffset = useCallback(
    (offset) => {
      setActiveIndex((prev) => ((prev + offset) % length + length) % length);
    },
    [length]
  );

  useEffect(() => {
    if (reducedMotion || isPaused || length <= 1) return undefined;
    intervalRef.current = setInterval(goToNext, autoRotateInterval);
    return () => clearInterval(intervalRef.current);
  }, [goToNext, isPaused, autoRotateInterval, reducedMotion, length]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goByOffset(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goByOffset(1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected projects"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className={`relative w-full overflow-hidden outline-none ${className}`}
      style={{
        perspective: 900,
        perspectiveOrigin: '50% 35%',
        height: isMobile ? '420px' : '560px',
      }}
    >
      {/* NEW: Dynamic background */}
      <DynamicBackground image={activeProject?.image} />

      {/* Cards */}
      <ul
        
        className="relative m-0 h-full w-full list-none p-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {projects.map((project, index) => {
          const offset = getOffset(index, activeIndex, length);
          if (Math.abs(offset) > maxOffset) return null;
          return (
            <li key={project.id} className="contents">
              <ProjectCard
                project={project}
                offset={offset}
                radiusScale={radiusScale}
                cardSize={cardSize}
                isActive={offset === 0}
                onSelect={(o) => {
                  goByOffset(o);
                  onProjectSelect?.(project, index);
                }}
              />
            </li>
          );
        })}
      </ul>

      {/* Info panel below center card */}
      <AnimatePresence mode="wait">
        <ActiveProjectInfo project={activeProject} />
      </AnimatePresence>
    </div>
  );
}