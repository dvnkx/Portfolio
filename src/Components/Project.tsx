import { motion } from "framer-motion";
import { projectsAnimation } from "../utils/animations";

interface IProjProps {
  img: string;
  name: string;
  description: string;
  link: string;
  index: number;
}

const Project = ({ img, name, description, link, index }: IProjProps) => {
  return (
    <motion.a
      className="flex flex-col cursor-pointer max-large:w-full max-large:h-[600px] max-large:mb-10"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={projectsAnimation.project}
      initial="initial"
      animate="animate"
      custom={index}
    >
      <img
        className="w-104 h-86 ease-out duration-200 hover:scale-105 max-large:w-full max-large:h-full"
        src={img}
      />
      <motion.h3
        variants={projectsAnimation.projText}
        custom={index}
        initial="initial"
        animate="animate"
        className="mt-4 text-secondary-300 dark:text-words-100"
      >
        {description}
      </motion.h3>
      <motion.h1
        variants={projectsAnimation.projText}
        initial="initial"
        animate="animate"
        custom={index + 0.5}
        className=" text-primary dark:text-words-200  text-3xl tracking-wide mt-1"
      >
        {name}
      </motion.h1>
    </motion.a>
  );
};

export default Project;
