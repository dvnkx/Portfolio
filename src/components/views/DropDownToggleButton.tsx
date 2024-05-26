import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface IDropDownToggleButton {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const DropDownToggleButton = ({
  isOpen,
  toggleOpen,
}: IDropDownToggleButton) => {
  const toggleIcon = () => {
    toggleOpen(!isOpen);
  };

  return (
    <button
      className="hidden max-md:inline-block z-40 cursor-pointer max-md:visible h-10 w-10"
      onClick={toggleIcon}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 dark:stroke-secondary-400 hover:stroke-secondary-300 dark:hover:stroke-secondary-300 transition-all"
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.path
              key="close"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              exit={{ pathOffset: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              strokeLinecap="square"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <motion.path
              key="open"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              exit={{ pathOffset: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              strokeLinecap="square"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </AnimatePresence>
      </svg>
    </button>
  );
};
