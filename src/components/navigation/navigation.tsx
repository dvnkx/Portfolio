import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navigationLinks } from "../../../data/index";
import { linkVariants, navVariants } from "./index";
import { DropDownToggleButton, ThemeToggleButton } from "../views/index";
import logo_dark from "../../../public/assets/logo-dark.svg";
import logo_light from "../../../public/assets/logo-light.svg";

export const Navigation = () => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const [isOpen, toggleOpen] = useState(false);

  const navMenu = document.getElementById("dropDown");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
      sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top + 50 >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("before:w-[100%]");
            document
              .querySelector("header nav a[href*= " + id + "]")
              ?.classList.add("before:w-[100%]");
          });
        }
      });
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    navMenu?.classList.toggle("max-md:w-[70%]");
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    if (isOpen) {
      window.onscroll = () => {
        toggleOpen(!isOpen);
        navMenu?.classList.add("max-md:w-0");
      };
    }
  }, [isOpen]);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 bg-transparent z-40 w-full flex h-32 py-5 px-15 max-md:px-5 max-md:overflow-visible"
    >
      <a className="flex-none" href="/">
        <img
          alt="logo"
          className="h-full"
          src={theme === "dark" ? logo_light : logo_dark}
        />
      </a>
      <DropDownToggleButton isOpen={isOpen} toggleOpen={toggleOpen} />
      <nav
        id="dropDown"
        className="flex max-md:absolute max-md:top-0 max-md:right-0 max-md:h-[150vh] max-md:w-0 max-md:bg-secondary-500 max-md:dark:bg-secondary-200 duration-500 easy-out transition-all"
      >
        <ul className="flex justify-center items-center gap-x-16 text-words-100 text-lg max-md:flex-col max-md:m-10 max-md:justify-start max-md:mt-20  max-md:text-3xl max-md:gap-6 max-md:items-start max-md:transition-all ">
          {navigationLinks.map((link, i) => {
            return (
              <motion.li variants={linkVariants} key={i}>
                <Link
                  href={link.href}
                  className="relative cursor-pointer hover:text-secondary-200 dark:hover:text-words-200 before:content-[''] before:w-[0%] before:h-px before:bg-secondary-100 dark:before:bg-secondary-400 before:absolute before:transition-all before:top-[27px] hover:before:w-[100%] max-md:before:h-[2px] max-md:before:top-[39px]"
                  to={link.href}
                  smooth
                  offset={50}
                  duration={800}
                  spy={true}
                >
                  {link.title}
                </Link>
              </motion.li>
            );
          })}
          <motion.div variants={linkVariants}>
            <ThemeToggleButton
              currentTheme={theme ? theme : "dark"}
              setNewTheme={setTheme}
            />
          </motion.div>
        </ul>
      </nav>
    </motion.header>
  );
};
