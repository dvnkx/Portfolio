interface IProjProps {
  img: string;
  name: string;
  description: string;
  link: string;
}

const Project = ({ img, name, description, link }: IProjProps) => {
  return (
    <a
      className="flex flex-col cursor-pointer max-large:w-full max-large:h-[600px] max-large:mb-10"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="w-104 h-86 ease-out duration-200 hover:scale-105 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] max-large:w-[90%] max-large:h-full"
        src={img}
      />

      <h3 className="mt-4 text-secondary-300 dark:text-words-100">
        {description}
      </h3>
      <h1 className=" text-primary dark:text-words-200  text-3xl tracking-wide mt-1">
        {name}
      </h1>
    </a>
  );
};

export default Project;
