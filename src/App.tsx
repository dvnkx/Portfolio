import {
  About,
  Contact,
  Footer,
  Introduction,
  NavBar,
  Projects,
} from "./Components/index";

function App() {
  return (
    <div className=" bg-secondary-400 dark:bg-secondary-100 scroll-smooth px-15">
      <NavBar />
      <Introduction />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
