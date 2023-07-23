const Footer = () => {
  return (
    <footer className="container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between text-words-100">
      <section className="flex w-1/2 gap-8 md:gap-12 text-xl [&>*]:cursor-pointer">
        <a
          className="hover:text-primary dark:hover:text-words-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dvnkx"
        >
          GitHub
        </a>
        <a
          className="hover:text-primary dark:hover:text-words-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/bohdan-lisniak-02288526a/"
        >
          LinkedIn
        </a>
        <a
          className="hover:text-primary dark:hover:text-words-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://djinni.co/q/413f1d5caf/"
        >
          Djinni
        </a>
      </section>
      <p className="font-light text-primary"> &#169; Bogdan Lisniak</p>
    </footer>
  );
};

export default Footer;
