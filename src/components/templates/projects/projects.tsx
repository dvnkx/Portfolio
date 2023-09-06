import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Project } from "../..";
import { fadeOutX, widthScale, fadeOutY } from "../../../utils/animations";
import { projects, projectsText } from "../../../../data/index";
import { AnimatedWords } from "../../animated-text";
import { sectionVariants } from "./index";

export const Projects = () => {
  return (
    <motion.section variants={sectionVariants} id="projects" className="mt-20">
      <div className="flex items-center">
        <motion.h4
          variants={fadeOutX}
          initial="initial"
          animate="animate"
          custom={-70}
          viewport={{ once: true }}
          className="text-primary text-1xl font-light tracking-wide"
        >
          PROJECTS
        </motion.h4>
        <motion.hr
          variants={widthScale}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          className="ml-4 w-full h-px border-0 bg-gradient-to-l from-indigo-500"
        />
      </div>
      <AnimatedWords
        text={projectsText}
        className="text-words-100 text-2xl font-light tracking-wide  w-full mt-12 ml-11 max-md:ml-0"
      />
      <motion.div
        variants={fadeOutY}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={25}
        className="flex mt-12 ml-11 max-md:ml-0 items-center text-3xl text-words-100 tracking-wide font-light"
      >
        <Link
          to="proj"
          smooth
          duration={550}
          offset={-150}
          className="peer cursor-pointer"
        >
          All Projects
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[30px] h-[30px] ml-2 hover:scale-110 peer-hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </motion.div>
      <div
        id="proj"
        className="flex flex-wrap mt-10 ml-11 pb-10 gap-10 max-md:ml-0"
      >
        {projects.map((project, i) => {
          return (
            <Project
              key={i}
              index={i}
              img={project.img}
              name={project.name}
              description={project.description}
              link={project.link}
              color={project.color}
            />
          );
        })}
      </div>
    </motion.section>
  );
};
