import { WDev } from ".";
import { motion } from "framer-motion";
import { introAnimation } from "../utils/animations";

const Introduction = () => {
  return (
    <section
      id="intro"
      className="relative flex pt-60 mb-80 max-biggerLg:pt-60 max-biggerLg:h-screen max-biggerLg:mb-0 max-md:pt-40"
    >
      <div className="w-2/3 max-biggerLg:w-full">
        <motion.h1
          variants={introAnimation.title}
          initial="initial"
          animate="animate"
          className="text-secondary-100 font-medium text-7xl tracking-wide dark:text-words-200 max-biggerLg:text-5xl"
        >
          I invent and develop applications.
        </motion.h1>
        <motion.p
          variants={introAnimation.subtitle}
          initial="initial"
          animate="animate"
          className="text-words-100 font-light tracking-wide text-lg mt-10"
        >
          I&apos;m a frontend developer with a passion for great design and user
          experiences.
        </motion.p>
        <motion.a
          variants={introAnimation.toProjects}
          initial="initial"
          animate="animate"
          href="#projects"
          className="flex items-center cursor-pointer mt-23 max-biggerLg:mt-15 w-full max-md:mt-10"
        >
          <h2 className="text-words-100 tracking-wide font-light text-3xl peer">
            Explore my Projects
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="ml-3 w-[30px] h-[30px] stroke-words-100 peer-hover:scale-110 hover:scale-110 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </motion.a>
      </div>
      <motion.div
        variants={introAnimation.workplace}
        initial="initial"
        animate="animate"
        className="max-biggerLg:absolute max-biggerLg:bottom-0 max-biggerLg:left-30 max-biggerLg:w-3/4 max-md:left-5 max-md:bottom-0 max-md:w-full"
      >
        <WDev />
      </motion.div>
    </section>
  );
};

export default Introduction;
