import { Routes, Route, HashRouter } from "react-router-dom";
import { Introduction, NavBar } from "./Components/index";

function App() {
  return (
    <HashRouter>
      <div className="w-full bg-secondary-400 dark:bg-secondary-100">
        <NavBar />
        <Routes>
          <Route path={"/intro"} element={<Introduction />} />
          <Route path="*" element={<h1 className="">Not found</h1>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
