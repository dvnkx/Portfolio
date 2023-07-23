import { WDev } from ".";

const Introduction = () => {
  return (
    <section
      id="intro"
      className="relative flex pt-60 mb-80 max-biggerLg:pt-60 max-biggerLg:h-screen max-biggerLg:mb-0 max-md:pt-40"
    >
      <div className="w-2/3 max-biggerLg:w-full">
        <h1 className="text-secondary-100 font-medium text-7xl tracking-wide dark:text-words-200 max-biggerLg:text-5xl">
          I invent and develop applications.
        </h1>
        <p className="text-words-100 font-light tracking-wide text-lg mt-10">
          I'm a frontend developer with a passion for great design and user
          experiences.
        </p>
        <a
          href="#projects"
          className="flex items-center cursor-pointer mt-23 max-biggerLg:mt-15 w-full max-md:mt-10"
        >
          <a className="text-words-100 tracking-wide font-light text-3xl peer">
            Explore my Projects
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="ml-3 w-[30px] h-[30px] stroke-words-100 peer-hover:scale-110 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </a>
      </div>
      <div className="max-biggerLg:absolute max-biggerLg:bottom-0 max-biggerLg:left-30 max-biggerLg:w-3/4 max-md:left-5 max-md:bottom-0 max-md:w-full">
        <WDev />
      </div>
    </section>
  );
};

export default Introduction;
