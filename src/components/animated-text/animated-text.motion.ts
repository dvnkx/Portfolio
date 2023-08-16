import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  visible: (delay) => ({
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      staggerChildren: 0.02,
      delayChildren: delay,
    },
  }),
};

export const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
    },
  },
};
