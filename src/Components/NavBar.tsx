import FaviconDark from "../assets/favicon-dark.png";

function NavBar() {
  return (
    <header className="flex h-32 justify-between mx-10 py-5">
      <a className="w-1/7 h-full flex-none" href="/">
        <img alt="logo" className="w-full h-full" src={FaviconDark} />
      </a>
      <nav className="flex">
        <ul className="flex justify-center items-center gap-x-16 text-words-100 text-lg">
          <li>
            <a href="/#intro">Introducing</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#contacts">Contact</a>
          </li>
          <svg
            cursor={"pointer"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            height={24}
            width={24}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
