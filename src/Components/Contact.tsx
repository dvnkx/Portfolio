import { useRef } from "react";
import { Input } from "./index";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement | any>("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2i5mop5",
        "template_iariqqm",
        form && form.current,
        "UzzsaGd8QGoKuGooq"
      )
      .then((result) => console.log(result)),
      (err: Error) => {
        console.log(err);
      };
  };

  return (
    <section id="contact" className="mt-20">
      <div className="flex items-center">
        <h4 className="text-primary text-1xl font-light tracking-wide">
          CONTACT
        </h4>
        <hr className="ml-4 w-full h-px border-0 bg-gradient-to-l from-indigo-500" />
      </div>
      <section className="flex mt-12 max-lg:block">
        <div className="w-1/2 max-lg:w-full max-lg:flex">
          <p className="text-words-100 text-lg font-light tracking-wide ml-15 max-lg:m-0 max-lg:mb-10">
            Do not hesitate to contact me through the form here or by direct
            email on
            <b className="bg-gradient-to-r from-neutral-500 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
              dvnkxxxx@gmail.com
            </b>
            regardless of the subject.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="ml-12 w-1/2 max-lg:w-full max-lg:ml-0"
        >
          <Input
            label="What's your name? *"
            placeholder="Bogdan Lisniak"
            name="user_name"
          />
          <Input
            type="email"
            name="user_email"
            label="Where can I reach you? *"
            placeholder="dvnkxxxx@gmail.com"
          />
          <div className="w-full mb-12">
            <label className="bg-gradient-to-r from-neutral-500 via-violet-600 to-indigo-500 bg-clip-text text-transparent  font-light tracking-wide text-3xl">
              What's your message? *
            </label>
            <br />
            <textarea
              name="message"
              className="mt-10 bg-transparent w-full outline-none text-words-100 border-b border-words-100 focus:border-primary text-lg"
              placeholder="Hi Bogdan, let`s work!"
            ></textarea>
          </div>
          <button
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
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
