import "./App.css";
import LandingPage from "./pages/LandingPage";
import Explore from "./pages/Explore";
import { BrowserRouter, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import Project from "./components/Project";
import { data } from "./assests/data";
import Contact from "./pages/Contact";

export const names = [];

function App() {
  data.forEach((each) => {
    names.push("/" + each.name);
  });

  console.log("Names ", names);

  return (
    <BrowserRouter>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/explore" exact>
        <Explore />
      </Route>
      <Route path="/project" exact>
        <ProjectsPage />
      </Route>
      <Route path={names} exact>
        <Project />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
    </BrowserRouter>
  );
}

export default App;
