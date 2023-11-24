import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  // Tech,
  Projects,
  Particles,
} from './components';
import Sponsors from './components/Sponsors';
import InstaHandle from './components/InstaHandle';
// import Projects_new from './components/Projects_new';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Particles/>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>
        <Projects />
        <Sponsors/>
{/*         
        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div> */}
        <div>
          <InstaHandle/>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
