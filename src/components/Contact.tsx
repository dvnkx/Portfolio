import { useRef, useState } from "react";
import { Input, Toast } from "./views/index";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeOutX, fadeOutY, widthScale } from "../utils/animations";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | any>("");
  const toastRef = useRef<IToast>(null);
  const [toastType, setToastType] = useState<string>("");

  const handleShowToast = () => {
    toastRef.current && toastRef.current.showToast();
  };

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const [user_name, user_email, message] = formRef.current;

    if (user_name.value === "" || user_email.value === "" || message === "")
      return setToastType("yellow"), handleShowToast();

    emailjs.sendForm(
      "service_2i5mop5",
      "template_iariqqm",
      formRef.current,
      "UzzsaGd8QGoKuGooq"
    ),
      (err: string) => {
        throw Error(err);
      };

    (user_name.value = ""), (user_email.value = ""), (message.value = "");
    setToastType("green");
    handleShowToast();
  };

  return (
    <section id="contact" className="relative my-20 ">
      {toastType === "green" ? (
        <Toast
          message="Message has been sended!"
          color="bg-toast-100"
          ref={toastRef}
        />
      ) : (
        <Toast
          message="You need to fill all fields!"
          color="bg-toast-200"
          ref={toastRef}
        />
      )}
      <div className="flex items-center">
        <motion.h4
          variants={fadeOutX}
          initial="initial"
          whileInView="animate"
          custom={-70}
          viewport={{ once: true }}
          className="text-primary text-1xl font-light tracking-wide"
        >
          CONTACT
        </motion.h4>
        <motion.hr
          variants={widthScale}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="ml-4 w-full h-px border-0 bg-gradient-to-l from-indigo-500"
        />
      </div>
      <section className="flex mt-12 max-lg:block">
        <div className="w-1/2 max-lg:w-full max-lg:flex">
          <motion.p
            variants={fadeOutY}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.2,
                duration: 1.3,
                ease: [0.9, 0.1, 0.3, 0.96],
              },
            }}
            viewport={{ once: true }}
            custom={100}
            className="text-words-100 text-lg font-light tracking-wide ml-15 max-lg:m-0 max-lg:mb-10"
          >
            Do not hesitate to contact me through the form here or by direct
            email on
            <b className="bg-gradient-to-r from-neutral-500 via-violet-600 to-indigo-500 bg-clip-text text-transparent px-1">
              dvnkxxxx@gmail.com
            </b>
            regardless of the subject.
          </motion.p>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="ml-12 w-1/2 max-lg:w-full max-lg:ml-0 autofill:bg-transparent"
        >
          <Input
            index={1}
            label="What's your name? *"
            placeholder="Bogdan Lisniak"
            name="user_name"
          />
          <Input
            index={2}
            type="email"
            name="user_email"
            label="Where can I reach you? *"
            placeholder="dvnkxxxx@gmail.com"
          />
          <div className="w-full mb-12">
            <motion.label
              variants={fadeOutY}
              initial="initial"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.8,
                  duration: 1.3,
                  ease: [0.9, 0.1, 0.3, 0.96],
                },
              }}
              viewport={{ once: true }}
              custom={70}
              className="bg-gradient-to-r from-neutral-500 via-violet-600 to-indigo-500 bg-clip-text text-transparent font-light tracking-wide text-3xl after:content[' '] transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary after:transition-transform after:duration-300"
            >
              What&apos;s your message? *
            </motion.label>
            <motion.textarea
              variants={fadeOutY}
              initial="initial"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 3.2,
                  duration: 1.3,
                  ease: [0.9, 0.1, 0.3, 0.96],
                },
              }}
              viewport={{ once: true }}
              custom={70}
              name="message"
              className="peer mt-10 bg-transparent w-full outline-none text-words-100 border-b border-words-100 focus:border-primary text-lg"
              placeholder="Hi Bogdan, let's work!"
            ></motion.textarea>
          </div>
          <motion.button
            variants={fadeOutY}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 3.5,
                duration: 1.3,
                ease: [0.9, 0.1, 0.3, 0.96],
              },
            }}
            viewport={{ once: true }}
            custom={100}
            type="submit"
            className="flex items-center text-words-100 pb-10 dark:hover:text-words-200 hover:text-secondary-200 active:scale-105 active:ease active:duration-300 peer"
          >
            <h1 className="text-3xl peer">Sent it</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[30px] h-[30px] ml-2 stroke-words-100 peer-hover:dark:stroke-white hover:stroke-white peer-hover:hover:stroke-secondary-200 transition-all duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </motion.button>
        </form>
      </section>
    </section>
  );
};

export interface IToast {
  showToast: () => void;
}
