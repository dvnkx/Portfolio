import React from "react";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: IInputProps) => {
  return (
    <div className="relative h-12 w-full mb-12">
      <input
        className="text-words-100 flex peer h-full w-full border-b border-primary dark:border-secondary-gray-200 bg-transparent pt-10 pb-1.5  text-lg outline-0 transition-all dark:placeholder-shown:border-words-200 placeholder-shown:border-secondary-200 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        {...props}
      ></input>
      <label className="bg-gradient-to-r from-neutral-500 via-violet-600 to-indigo-500 bg-clip-text text-transparent tracking-wide after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-3xl leading-tight transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown peer-focus:text-lg peer-focus:leading-tight peer-focus:text-primary peer-focus:after:scale-x-100 peer-focus:after:border-secondary-200 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown font-light">
        {label}
      </label>
    </div>
  );
};

export default Input;
