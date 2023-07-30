import { motion } from "framer-motion";
import { fadeOut } from "../utils/animations";

const Footer = () => {
  const links = [
    { href: "https://github.com/dvnkx", title: "GitHub" },
    {
      href: "https://www.linkedin.com/in/bohdan-lisniak-02288526a/",
      title: " LinkedIn",
    },
    { href: "https://djinni.co/q/413f1d5caf/", title: "Djinni" },
  ];

  return (
    <footer className="container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between text-words-100">
      <section className="flex w-1/2 gap-8 md:gap-12 text-xl [&>*]:cursor-pointer">
        {links.map((link) => {
          return (
            <motion.a
              variants={fadeOut}
              initial="initial"
              animate="animate"
              className="relative hover:text-primary dark:hover:text-words-200 before:content-[''] before:w-[0%] before:h-px before:bg-words-100 before:absolute before:transition-all before:top-[27px] hover:before:w-[100%] max-md:before:h-[2px] max-md:before:top-[39px]"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </motion.a>
          );
        })}
      </section>
      <motion.p
        variants={fadeOut}
        initial="initial"
        animate="animate"
        className="font-light text-primary"
      >
        {" "}
        &#169; Bogdan Lisniak
      </motion.p>
    </footer>
  );
};

export default Footer;
