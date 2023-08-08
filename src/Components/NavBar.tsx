import logo_dark from "../../public/assets/logo-dark.svg";
import logo_light from "../../public/assets/logo-light.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeOut } from "../utils/animations";
import { Link } from "react-scroll";

export const NavBar = () => {
  const currentTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<string>(
    currentTheme ? currentTheme : "dark"
  );
  const [dropDown, setDropDown] = useState(false);

  const links = [
    {
      href: "intro",
      title: "Introducing",
    },
    {
      href: "projects",
      title: "Projects",
    },
    {
      href: "about",
      title: "About",
    },
    {
      href: "contact",
      title: "Contact",
    },
  ];

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    theme === "dark"
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
  };

  const navMenu = document.getElementById("dropDown");

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

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
    dropDown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    if (dropDown) {
      window.onscroll = () => {
        setDropDown(!dropDown);
        navMenu?.classList.add("max-md:w-0");
      };
    }
  }, [dropDown]);

  return (
    <motion.header
      variants={fadeOut}
      initial="initial"
      animate={{
        opacity: 1,
        transition: {
          delay: 2.3,
          duration: 0.8,
          easy: [0.9, 0.1, 0.3, 0.96],
        },
      }}
      className="fixed top-0 left-0 bg-transparent z-40 w-full flex h-32 justify-between py-5 px-15 max-md:px-5 max-lg:px-10 max-md:overflow-visible"
    >
      <div
        className="hidden max-md:block z-40 absolute top-5 right-5 cursor-pointer"
        onClick={toggleDropDown}
      >
        {dropDown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 dark:stroke-secondary-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            id="bar"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 dark:stroke-secondary-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </div>
      <a className="w-1/7 h-full flex-none" href="/">
        <img
          alt="logo"
          className="w-full h-full"
          src={theme === "dark" ? logo_light : logo_dark}
        />
      </a>
      <nav
        id="dropDown"
        className="flex max-md:absolute max-md:top-0 max-md:right-0 max-md:h-[100vh] max-md:w-0 max-md:bg-secondary-500 max-md:dark:bg-secondary-200 duration-500 easy-out transition-all"
      >
        <ul className="flex justify-center items-center gap-x-16 text-words-100 text-lg max-md:flex-col max-md:m-10 max-md:text-3xl max-md:gap-6 max-md:items-start max-md:transition-all ">
          {links.map((link, i) => {
            return (
              <li key={i}>
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
              </li>
            );
          })}
          <button onClick={handleThemeSwitch}>
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="sun w-6 h-6 hover:stroke-secondary-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:stroke-secondary-400 moon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </ul>
      </nav>
    </motion.header>
  );
};
