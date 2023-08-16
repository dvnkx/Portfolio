import { About, Contact, Footer, Projects } from "./components/index";
import { Navigation } from "./components/navigation/index";
import { Introduction } from "./components/templates/index";

function App() {
  return (
    <div className=" bg-secondary-400 dark:bg-secondary-100 scroll-smooth px-15 max-md:px-10">
      <Navigation />
      <Introduction />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
