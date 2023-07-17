import { Introduction, NavBar, Projects } from "./Components/index";
function App() {
  return (
    <div className="w-full bg-secondary-400 dark:bg-secondary-100 scroll-smooth">
      <NavBar />
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;
