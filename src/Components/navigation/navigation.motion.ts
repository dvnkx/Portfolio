import type { Variants } from "framer-motion";

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 1, delay: 1 },
  },
};

export const linkVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const dropDownIconVariants: Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    pathOffset: 0,

    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
