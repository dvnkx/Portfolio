import LDev from "../../lottie/LDev";
import { introText } from "../../../../data/index";
import { AnimatedWords, AnimatedLetters } from "../../animated-text/index";
import { LinkButton } from "../../views/index";

export const Introduction = () => {
  return (
    <section id="intro" className="relative flex pt-72 mb-80">
      <article className="w-3/5 max-xl:w-full">
        <AnimatedLetters
          className="text-secondary-400 text-7xl mb-10 max-md:text-6xl max-sm:5xl"
          text={introText.largeText}
        />
        <AnimatedWords
          className="text-secondary-300 text-lg font-light"
          text={introText.text}
          delay={0.7}
        />
        <LinkButton
          text="Explore my Projects"
          to="projects"
          path="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          className="mt-20"
          delay={1.1}
        />
        <LDev />
      </article>
    </section>
  );
};
