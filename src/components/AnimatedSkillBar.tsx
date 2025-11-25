import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface AnimatedSkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const AnimatedSkillBar = ({ name, level, delay = 0 }: AnimatedSkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = level;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm text-foreground">{name}</span>
        <motion.span 
          className="text-sm text-primary font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {count}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full relative overflow-hidden"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay, duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedSkillBar;
