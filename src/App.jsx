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
import Research from './components/Research';
import Team_History from './components/Team_History';

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
        <Team_History />
        <Projects />
        <Research />
        <Sponsors/>
        
        {/* <div
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
