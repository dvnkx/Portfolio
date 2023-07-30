import { WDev } from ".";
import { motion } from "framer-motion";
import { fadeOut, fadeOutX, fadeOutY } from "../utils/animations";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <section
      id="intro"
      className="relative flex pt-60 mb-80 max-biggerLg:pt-60 max-biggerLg:h-screen max-biggerLg:mb-0 max-md:pt-40"
    >
      <div className="w-2/3 max-biggerLg:w-full">
        <motion.h1
          variants={fadeOutX}
          custom={-200}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-secondary-100 font-medium text-7xl tracking-wide dark:text-words-200 max-biggerLg:text-5xl"
        >
          I invent and develop applications.
        </motion.h1>
        <motion.p
          variants={fadeOutY}
          initial="initial"
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1.2,
              ease: [0.9, 0.1, 0.3, 0.96],
            },
          }}
          custom={375}
          viewport={{ once: true }}
          className="text-words-100 font-light tracking-wide text-lg mt-10"
        >
          I&apos;m a frontend developer with a passion for great design and user
          experiences.
        </motion.p>
        <motion.div
          variants={fadeOutX}
          custom={100 + "%"}
          initial="initial"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 2.7,
              duration: 1.2,
              ease: [0.9, 0.1, 0.3, 0.96],
            },
          }}
          viewport={{ once: true }}
          className="flex items-center cursor-pointer mt-23 max-biggerLg:mt-15 w-full max-md:mt-10"
        >
          <Link
            to="projects"
            smooth
            duration={550}
            className="text-words-100 tracking-wide font-light text-3xl peer"
          >
            Explore my Projects
          </Link>
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
        </motion.div>
      </div>
      <motion.div
        variants={fadeOut}
        initial="initial"
        whileInView={{
          opacity: 1,
          transition: {
            delay: 1.7,
            duration: 0.7,
            ease: [0.9, 0.1, 0.3, 0.96],
          },
        }}
        viewport={{ once: true }}
        className="max-biggerLg:absolute max-biggerLg:bottom-0 max-biggerLg:left-30 max-biggerLg:w-3/4 max-md:left-5 max-md:bottom-0 max-md:w-full"
      >
        <WDev />
      </motion.div>
    </section>
  );
};

export default Introduction;
