import { Project } from ".";
import Chateo from "../assets/Chateo.svg";
import LaceStore from "../assets/Lace-store.svg";
import Portfolio from "../assets/Porfolio.svg";

const Projects = () => {
  return (
    <section id="projects" className="mt-20">
      <div className="flex items-center">
        <h4 className="text-primary text-1xl font-light tracking-wide">
          PROJECTS
        </h4>
        <hr className="ml-4 w-full h-px border-0 bg-gradient-to-l from-indigo-500" />
      </div>
      <a href="#proj" className="flex mt-12 ml-11">
        <p className="text-words-100 text-3xl tracking-wide w-4/5">
          Check out a few of the main projects I have worked on. They can
          introduce to you my current skills.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#8f9297"
          className="w-9 h-9 ml-2 transition-all hover:w-10 hover:h-10 opacity-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </svg>
      </a>
      <div id="proj" className="flex mt-10 ml-11 m pb-10 gap-10">
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
