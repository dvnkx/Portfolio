import { Project } from "./views/index";
import chateo from "../../public/assets/chateo.svg";
import lace_store from "../../public/assets/lace-store.svg";
import portfolio from "../../public/assets/portfolio.svg";
import { motion } from "framer-motion";
import { fadeOutX, fadeOutY, widthScale } from "../utils/animations";
import { Link } from "react-scroll";

const projects = [
  {
    img: chateo,
    name: "Chateo",
    description: "Chat App",
    link: "https://github.com/dvnkx/Chateo",
    color: "#dcecfe",
  },
  {
    img: portfolio,
    name: "Portfolio",
    description: "Current Project",
    link: "https://github.com/dvnkx/Portfolio",
    color: "#484a4c",
  },
  {
    img: lace_store,
    name: "Lace Store",
    description: "Sneaker Store",
    link: "https://github.com/dvnkx/Lace-Store",
    color: "#262626",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="mt-20">
      <div className="flex items-center">
        <motion.h4
          variants={fadeOutX}
          initial="initial"
          whileInView="animate"
          custom={-70}
          viewport={{ once: true }}
          className="text-primary text-1xl font-light tracking-wide"
        >
          PROJECTS
        </motion.h4>
        <motion.hr
          variants={widthScale}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="ml-4 w-full h-px border-0 bg-gradient-to-l from-indigo-500"
        />
      </div>
      <motion.p
        variants={fadeOutY}
        initial="initial"
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.2,
            duration: 1.3,
            ease: [0.9, 0.1, 0.3, 0.96],
          },
        }}
        custom={200}
        viewport={{ once: true }}
        className="text-words-100 text-2xl font-light tracking-wide  w-full mt-12 ml-11 max-md:ml-0"
      >
        Check out a few of the main projects I have worked on. They can
        introduce to you my current skills.
      </motion.p>
      <motion.div
        variants={fadeOutY}
        custom={25}
        initial="initial"
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 2.6,
            duration: 0.8,
            ease: [0.9, 0.1, 0.3, 0.96],
          },
        }}
        viewport={{ once: true }}
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
        className="flex flex-wrap mt-10 ml-11 pb-10 gap-10 max-md:ml-0 max-lessMd:items-center"
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
    </section>
  );
};
