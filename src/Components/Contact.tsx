import { Input, WMes } from "./index";

const Contact = () => {
  return (
    <section id="contact" className="mt-20">
      <div className="flex items-center">
        <h4 className="text-primary text-1xl font-light tracking-wide">
          CONTACT
        </h4>
        <hr className="ml-4 w-full h-px border-0 bg-gradient-to-l from-indigo-500" />
      </div>
      <section className="flex mt-12">
        <div className="w-1/2">
          <p className="text-words-100 text-lg font-light tracking-wide ml-15">
            Do not hesitate to contact me through the form here or by direct
            email on <b className="underline">dvnkxxxx@gmail.com</b> regardless
            of the subject.
          </p>
          <div className="ml-15 mt-10 w-3/4 h-3/4">
            <WMes />
          </div>
        </div>
        <div className=" ml-12 w-1/2">
          <Input label="What's your name? *" placeholder="Bogdan Lisniak" />
          <Input
            label="Where can I reach you? *"
            placeholder="dvnkxxxx@gmail.com"
          />

          <div className="w-full mb-12">
            <label className="bg-gradient-to-r from-neutral-500 via-violet-600 to-indigo-500 bg-clip-text text-transparent  font-light tracking-wide text-3xl">
              What's your message? *
            </label>
            <br />
            <textarea
              className="mt-10 bg-transparent w-full outline-none text-words-100 border-b border-words-100 focus:border-primary text-lg"
              placeholder="Hi Bogdan, let`s work!"
            ></textarea>
          </div>
          <button className="flex items-center text-words-100 pb-10">
            <h1 className="text-4xl">Sent it</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 ml-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Contact;
