import { Variants, motion } from "framer-motion";
import { fadeOut, fadeOutOriginX, fadeOutY } from "../../utils/animations";

const aVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.25 },
  },
};

interface IProjProps {
  img: string;
  name: string;
  description: string;
  link: string;
  index: number;
  color: string;
}

export const Project = ({
  img,
  name,
  description,
  link,
  index,
  color,
}: IProjProps) => {
  return (
    <motion.a
      variants={aVariants}
      initial="hidden"
      viewport={{ once: true }}
      whileInView={"visible"}
      className="flex flex-col cursor-pointer"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative ">
        <motion.img
          variants={fadeOut}
          initial="initial"
          whileInView={{
            opacity: 1,
            transition: {
              delay: 2 + index * 0.8,
              duration: 1,
              ease: [0.9, 0.1, 0.3, 0.96],
            },
          }}
          viewport={{ once: true }}
          className="z-10  ease-out duration-200 hover:scale-105"
          src={img}
        />
        <motion.div
          variants={fadeOutOriginX}
          initial="initial"
          whileInView={{
            scaleX: 1,
            originX: [0, 0, 0, 0, 0, 0, 0.5],
            opacity: 1,
            transition: {
              delay: 1 + index * 0.8,
              duration: 1.6,
              ease: [0.9, 0.1, 0.3, 0.96],
            },
          }}
          viewport={{ once: true }}
          style={{ backgroundColor: color }}
          className="absolute"
        />
      </div>
      <motion.h3
        variants={fadeOutY}
        initial="initial"
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.2 + index * 0.9,
            duration: 1,
            ease: [0.9, 0.1, 0.3, 0.96],
          },
        }}
        custom={100}
        viewport={{ once: true }}
        className="mt-4 text-secondary-300 font-light text-sm dark:text-secondary-200"
      >
        {description}
      </motion.h3>
      <motion.h1
        variants={fadeOutY}
        initial="initial"
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.3 + index * 0.9 + 0.2,
            duration: 1,
            ease: [0.9, 0.1, 0.3, 0.96],
          },
        }}
        custom={100}
        viewport={{ once: true }}
        className=" text-primary dark:text-words-100 text-3xl tracking-wide mt-1"
      >
        {name}
      </motion.h1>
    </motion.a>
  );
};
