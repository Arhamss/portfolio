import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Software,
  Projects,
  Projects2,
  GithubGraph,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>
        <div className="bg-soft bg-cover bg-center bg-no-repeat pb-10">
          <Software />
        </div>
        <div className="bg-cover bg-center bg-no-repeat">
          <GithubGraph />
        </div>
        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <br></br>
          <br></br>
          <br></br>
          <Projects2 />
        </div>
        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
