import { HTMLMotionProps, motion } from "framer-motion";
import { fadeOutY } from "../../utils/animations";

interface IInputProps extends HTMLMotionProps<"input"> {
  label: string;
  index: number;
}

export const Input = ({ label, index, ...props }: IInputProps) => {
  return (
    <div className="relative h-12 w-full mb-12">
      <motion.input
        variants={fadeOutY}
        initial="initial"
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: index / 10,
            duration: 1,
            ease: [0.9, 0.1, 0.3, 0.96],
          },
        }}
        viewport={{ once: true }}
        custom={70}
        className="autofill: text-words-100 flex peer h-full w-full border-b border-primary dark:border-secondary-gray-200 bg-transparent pt-10 pb-1.5  text-lg outline-0 transition-all dark:placeholder-shown:border-words-200 placeholder-shown:border-secondary-200 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        {...props}
      ></motion.input>
      <motion.label
        variants={fadeOutY}
        initial="initial"
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: index / 10 + 0.1,
            duration: 1,
            ease: [0.9, 0.1, 0.3, 0.96],
          },
        }}
        viewport={{ once: true }}
        custom={70}
        className="bg-gradient-to-r from-neutral-500 via-violet-600 to-indigo-500 bg-clip-text text-transparent tracking-wide after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-3xl leading-tight transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown peer-focus:text-lg peer-focus:leading-tight peer-focus:text-primary peer-focus:after:scale-x-100 peer-focus:after:border-secondary-200 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown font-light"
      >
        {label}
      </motion.label>
    </div>
  );
};
