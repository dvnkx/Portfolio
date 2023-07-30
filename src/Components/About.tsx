import mads from "../assets/mads.jpg";
import { motion } from "framer-motion";
import {
  fadeOutOriginX,
  fadeOut,
  oddEvenTranslate,
  widthScale,
  fadeOutX,
  fadeOutY,
} from "../utils/animations";
import { techGallery } from "../assets/techs/index";

const About = () => {
  return (
    <section id="about" className="mt-20">
      <div className="flex items-center">
        <motion.h4
          variants={fadeOutX}
          initial="initial"
          whileInView="animate"
          custom={-70}
          viewport={{ once: true }}
          className="text-primary text-1xl font-light tracking-wide"
        >
          ABOUT
        </motion.h4>
        <motion.hr
          variants={widthScale}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="ml-4 w-full h-px border-0 bg-gradient-to-l from-indigo-500"
        />
      </div>
      <section className="flex mt-12 ml-11 max-biggerLg:flex-wrap max-lg:gap-10 max-md:ml-0">
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
          viewport={{ once: true }}
          custom={50}
          className="text-words-100 text-lg font-light tracking-wide w-4/6 mr-15 max-md:m-0 max-biggerLg:w-full"
        >
          Get a brief look at who I am and what I do. If you would like to know
          more about me and my interests, you can.
        </motion.p>
        <motion.a
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
          custom={50}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dvnkx"
          className="flex items-center ml-10 max-biggerLg:ml-0 max-biggerLg:mt-10 max-biggerLg:w-full"
        >
          <h2 className="text-words-100 tracking-wide text-3xl font-light peer">
            More about me
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-[30px] h-[30px] ml-2 stroke-words-100 peer-hover:scale-110 hover:scale-110 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </motion.a>
        <div className="relative w-[300px] h-[300px] lg:hidden">
          <motion.div
            variants={fadeOutOriginX}
            initial="initial"
            whileInView={{
              scaleX: 1,
              originX: [0, 0, 0, 0, 0, 0, 0.5],
              opacity: 1,
              transition: {
                delay: 1.9,
                duration: 1.6,
                ease: [0.9, 0.1, 0.3, 0.96],
              },
            }}
            viewport={{ once: true }}
            custom={1}
            className="w-full h-full absolute bg-white lg:hidden max-md:top-10"
          />
          <motion.img
            variants={fadeOut}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 2.9,
                duration: 1,
                ease: [0.9, 0.1, 0.3, 0.96],
              },
            }}
            viewport={{ once: true }}
            className="absolute hidden max-lg:block max-md:mt-10 mr-auto w-full h-full z-10"
            src={mads}
          />
        </div>
      </section>
      <section className="relative flex mt-12 ml-11 justify-between max-md:ml-0">
        <div className="w-3/6 max-lg:w-full">
          <motion.h4
            variants={fadeOutX}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.7,
                duration: 1.3,
                ease: [0.9, 0.1, 0.3, 0.96],
              },
            }}
            custom={-400}
            viewport={{ once: true }}
            className="text-primary text-1xl font-light tracking-wide"
          >
            WHO AM I
          </motion.h4>
          <motion.p
            variants={fadeOutY}
            custom={100}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 2.1,
                duration: 1.3,
                ease: [0.9, 0.1, 0.3, 0.96],
              },
            }}
            viewport={{ once: true }}
            className="text-words-100 tracking-wide font-light text-lg mt-10 leading-relax"
          >
            My name is Bogdan Lisniak. I am 21 years old, I live in Kyiv,
            Ukraine, and I&apos;m a self-taught Frontend Developer.
          </motion.p>
          <motion.p
            variants={fadeOutY}
            custom={100}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 2.4,
                duration: 1.3,
                ease: [0.9, 0.1, 0.3, 0.96],
              },
            }}
            viewport={{ once: true }}
            className="text-words-100 tracking-wide font-light text-lg mt-10 leading-relax"
          >
            I've always been interested in how a virtual environment works under
            the hood. Out of awareness I was also interested in creating a
            beautiful UI with awesome user experiences.
          </motion.p>
          <motion.p
            variants={fadeOutY}
            custom={100}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 2.7,
                duration: 1.3,
                ease: [0.9, 0.1, 0.3, 0.96],
              },
            }}
            viewport={{ once: true }}
            className="text-words-100 tracking-wide font-light text-lg mt-10 leading-relax"
          >
            I enjoy the constant change in the technologies used in the area and
            love diving into new frameworks and technologies.
          </motion.p>
          <motion.p
            variants={fadeOutY}
            custom={100}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 3,
                duration: 1.3,
                ease: [0.9, 0.1, 0.3, 0.96],
              },
            }}
            viewport={{ once: true }}
            className="text-words-100 tracking-wide font-light text-lg mt-10 leading-relax"
          >
            Spending time customizing, improving and tinkering with my work
            environment and tools is something I enjoy a lot, as it is something
            I use for many hours daily. It allows me to have it exactly as I
            desire.
          </motion.p>
        </div>
        <motion.div
          variants={fadeOutOriginX}
          initial="initial"
          whileInView={{
            scaleX: 1,
            originX: [0, 0, 0, 0, 0, 0, 0.5],
            opacity: 1,
            transition: {
              delay: 1.9,
              duration: 1.6,
              ease: [0.9, 0.1, 0.3, 0.96],
            },
          }}
          viewport={{ once: true }}
          custom={1}
          className="w-[300px] h-[300px] absolute bg-white right-0 max-lg:hidden"
        />
        <motion.img
          variants={fadeOut}
          custom={1.6}
          initial="initial"
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 2.9,
              duration: 1,
              ease: [0.9, 0.1, 0.3, 0.96],
            },
          }}
          viewport={{ once: true }}
          className="w-[300px] h-[300px] max-lg:hidden z-10"
          src={mads}
        />
      </section>
      <section className="mt-12 ml-11 max-md:ml-0 ">
        <motion.h4
          variants={fadeOutX}
          initial="initial"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 3.1,
              duration: 1.3,
              ease: [0.9, 0.1, 0.3, 0.96],
            },
          }}
          custom={-400}
          className="text-primary text-1xl font-light tracking-wide"
        >
          TECH I ENJOY
        </motion.h4>
        <div className="flex mt-10 gap-4 max-md:flex-wrap">
          {techGallery.map((icon, i) => (
            <motion.img
              src={icon}
              variants={oddEvenTranslate}
              key={i}
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="w-[40px] h-[40px]  fill-secondary-300 "
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
