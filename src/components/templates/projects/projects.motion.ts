import type { Variants } from "framer-motion";

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.25 },
  },
};
