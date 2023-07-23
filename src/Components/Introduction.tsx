import { WDev } from ".";

const Introduction = () => {
  return (
    <section id="intro" className="flex pt-60 mb-80">
      <div className="w-2/3">
        <h1 className="text-secondary-100 font-medium text-7xl tracking-wide dark:text-words-200">
          I invent and develop applications.
        </h1>
        <p className="text-words-100 font-light text-lg mt-10">
          I'm a frontend developer with a passion for great design and user
          experiences.
        </p>
        <a href="#projects" className="flex items-center cursor-pointer mt-23">
          <h2 className="text-words-100 tracking-wide font-light text-3xl">
            Explore my Projects
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#8f9297"
            className="ml-3 transition-all w-8 h-8 hover:w-9 hover:h-9 opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </a>
      </div>
      <WDev />
    </section>
  );
};

export default Introduction;
