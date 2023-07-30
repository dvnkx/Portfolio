import { motion } from "framer-motion";
import { fadeOut, fadeOutOriginX, fadeOutY } from "../utils/animations";

interface IProjProps {
  img: string;
  name: string;
  description: string;
  link: string;
  index: number;
  color: string;
}

const Project = ({
  img,
  name,
  description,
  link,
  index,
  color,
}: IProjProps) => {
  return (
    <a
      className="flex flex-col cursor-pointer max-large:w-full max-large:h-[450px] max-large:mb-10"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative w-[416px] h-[312px] ease-out duration-200 hover:scale-105 max-large:w-50% max-large:h-[318px]">
        <motion.img
          variants={fadeOut}
          initial="initial"
          whileInView={{
            opacity: 1,
            transition: {
              delay: 4 + index * 0.8,
              duration: 1,
              ease: [0.9, 0.1, 0.3, 0.96],
            },
          }}
          viewport={{ once: true }}
          className="absolute w-full h-full z-10"
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
              delay: 3 + index * 0.8,
              duration: 1.6,
              ease: [0.9, 0.1, 0.3, 0.96],
            },
          }}
          viewport={{ once: true }}
          style={{ backgroundColor: color }}
          className="absolute left-1 top-1 w-[98%] h-[98%] "
        />
      </div>
      <motion.h3
        variants={fadeOutY}
        initial="initial"
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 3.2 + index * 0.9,
            duration: 1,
            ease: [0.9, 0.1, 0.3, 0.96],
          },
        }}
        custom={100}
        viewport={{ once: true }}
        className="mt-4 text-secondary-300 dark:text-words-100"
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
            delay: 3.5 + index * 0.9 + 0.2,
            duration: 1,
            ease: [0.9, 0.1, 0.3, 0.96],
          },
        }}
        custom={100}
        viewport={{ once: true }}
        className=" text-primary dark:text-words-200  text-3xl tracking-wide mt-1"
      >
        {name}
      </motion.h1>
    </a>
  );
};

export default Project;
