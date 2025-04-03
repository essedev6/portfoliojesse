import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillProgress = ({ percentage, color }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset: 440 - (440 * percentage) / 100,
        transition: { duration: 1.5, ease: 'easeOut' },
      });
    }
  }, [controls, inView, percentage]);

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Animated progress circle */}
        <motion.circle
          ref={ref}
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={`url(#${color.replace(/\s+/g, '-')})`}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="440"
          strokeDashoffset="440"
          initial={{ strokeDashoffset: 440 }}
          animate={controls}
          transform="rotate(-90 50 50)"
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient
            id={color.replace(/\s+/g, '-')}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={color.split(' ')[1]} />
            <stop offset="100%" stopColor={color.split(' ')[3]} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default SkillProgress;