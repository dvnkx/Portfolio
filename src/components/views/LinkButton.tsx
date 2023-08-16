import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const LinkButton = ({
  text,
  to,
  path,
  className,
  delay,
}: ILinkButton) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          ease: [0.455, 0.03, 0.515, 0.955],
          duration: 0.5,
          delay: delay,
        },
      }}
      viewport={{ once: true }}
      className={`flex cursor-pointer ${className}`}
    >
      <Link
        to={to}
        smooth
        duration={550}
        className="text-words-100 tracking-wide font-light text-3xl peer"
      >
        {text}
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="ml-3 w-[30px] h-[30px] stroke-words-100 peer-hover:scale-110 hover:scale-110 transition-all duration-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </motion.div>
  );
};

interface ILinkButton {
  text: string;
  to: string;
  path: string;
  className: string;
  delay: number;
}
