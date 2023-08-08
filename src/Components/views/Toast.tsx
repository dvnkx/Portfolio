import React, { useState, useImperativeHandle, forwardRef } from "react";
import { IToast } from "../Contact";

interface IToastProps {
  color: string;
  message: string;
}

const Toast = ({ color, message }: IToastProps, ref: React.Ref<IToast>) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    showToast() {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2500);
    },
  }));
  return (
    <div
      className={`${color} h-[88px] ${
        !show ? "w-0" : "w-[300px]"
      } flex fixed top-5 left-[15%] z-50 rounded-md transition-all easy duration-300 max-md:left-[20%] max-xl:left-[25%] max-sm:top-[15%] max-sm:left-[10%]`}
    >
      <div
        className={`${
          !show ? "hidden" : "flex"
        } items-center justify-evenly w-full`}
      >
        {color === "bg-toast-100" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[40px] h-[40px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[40px] h-[40px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        )}
        <span className="h-full border-l-[1.5px] border-l-secondary-100" />
        <p className="text-lg font-light">{message}</p>
      </div>
    </div>
  );
};

export default forwardRef(Toast);
