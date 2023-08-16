import React from "react";
import { motion } from "framer-motion";
import { containerVariants, textVariants } from "./index";

export const AnimatedLetters: React.FC<IAnimatedTextProps> = ({
  text,
  className,
  delay,
}) => {
  const letters = Array.from(text);

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay ? delay : 0}
    >
      {letters.map((letter, i) => (
        <motion.span variants={textVariants} viewport={{ once: true }} key={i}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const AnimatedWords: React.FC<IAnimatedTextProps> = ({
  text,
  className,
  delay,
}) => {
  const words = text.split(" ").map((word) => word + " ");

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay ? delay : 0}
    >
      {words.map((word, i) => (
        <motion.span variants={textVariants} viewport={{ once: true }} key={i}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface IAnimatedTextProps {
  text: string;
  className: string;
  delay?: number;
}
