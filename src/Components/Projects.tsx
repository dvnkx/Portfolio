import { Project } from ".";
import Chateo from "../assets/Chateo.svg";
import LaceStore from "../assets/Lace-store.svg";
import Portfolio from "../assets/Portfolio.svg";

const Projects = () => {
  return (
    <section id="projects" className="mt-20">
      <div className="flex items-center">
        <h4 className="text-primary text-1xl font-light tracking-wide">
          PROJECTS
        </h4>
        <hr className="ml-4 w-full h-px border-0 bg-gradient-to-l from-indigo-500" />
      </div>
      <p className="text-words-100 text-2xl font-light tracking-wide w-4/5 mt-12 ml-11 max-md:ml-0">
        Check out a few of the main projects I have worked on. They can
        introduce to you my current skills.
      </p>
      <a
        href="#proj"
        className="flex mt-12 ml-11 max-md:ml-0 items-center text-3xl text-words-100 tracking-wide font-light"
      >
        <h2 className="peer">All Projects</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[30px] h-[30px] ml-2 hover:scale-110 peer-hover:scale-110 transition-all duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </a>

      <div
        id="proj"
        className="flex flex-wrap mt-10 ml-11 pb-10 gap-10 max-md:ml-0 max-lessMd:items-center"
      >
        <Project
          img={Chateo}
          name="Chateo"
          description="Chat App"
          link="https://github.com/dvnkx/Chateo"
        />
        <Project
          img={Portfolio}
          name="Portfolio"
          description="Current Project"
          link="https://github.com/dvnkx/Portfolio"
        />
        <Project
          img={LaceStore}
          name="Lace Store"
          description="Sneakers Store"
          link="https://github.com/dvnkx/Lace-Store"
        />
      </div>
    </section>
  );
};

export default Projects;
